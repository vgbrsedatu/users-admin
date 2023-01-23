/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages Firebase service.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
import * as auth from '../auth';
import * as firestore from '../firestore';
import * as storage from '../storage';
import * as mobile from '../utils/phone';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// https://storage.googleapis.com/download/storage/v1/b/fir-testing-vgbr.appspot.com/o/users%2Fdefault%2Favatar.png?generation=1674434149215949&alt=media
const base = 'https://storage.googleapis.com/download/storage/v1/b/fir-testing-vgbr.appspot.com/o/';
const image = 'users%2Fdefault%2Favatar.png?generation=1674434149215949&alt=media';
const avatar = `${base}${image}`;

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Creates a new user.
 *
 * @param {properties} user - The properties to set on the new user record to be created.
 * @returns {Promise.<string|Error>} A promise fulfilled with the user data corresponding to the newly created user.
 */
const createUser = user =>
  new Promise((resolve, reject) => {
    const standar = mobile.standarize(user.phone);
    const normal = mobile.normalize(user.phone);
    const disabled = JSON.parse(user.disabled);
    const verified = JSON.parse(user.verified);
    if (user.photo === null) {
      auth
        .createUser({
          email: user.email,
          phoneNumber: standar,
          password: user.password,
          displayName: user.name,
          emailVerified: verified,
          disabled,
          photoURL: avatar,
        })
        .then(created => {
          firestore
            .createUser(created.uid, {
              email: user.email,
              name: user.name,
              photo: avatar,
              phone: normal,
              role: user.role,
              verified,
              disabled,
              company: user.company,
              address: user.address,
            })
            .catch(err => {
              reject(err.message);
            });
          return created.uid;
        })
        .then(uid => {
          resolve(uid);
        })
        .catch(err => {
          reject(err.message);
        });
    } else {
      auth
        .createUser({
          email: user.email,
          phoneNumber: standar,
          password: user.password,
          displayName: user.name,
          emailVerified: verified,
          disabled,
        })
        .then(created => {
          storage
            .uploadFromBlob({ mime: user.photo.mime, raw: user.photo.raw, name: created.uid })
            .then(imageUrl => {
              firestore
                .createUser(created.uid, {
                  email: user.email,
                  name: user.name,
                  photo: imageUrl,
                  phone: normal,
                  role: user.role,
                  verified,
                  disabled,
                  company: user.company,
                  address: user.address,
                })
                .catch(err => {
                  reject(err.message);
                });
              auth
                .updateUser(created.uid, {
                  photoURL: imageUrl,
                })
                .catch(err => {
                  reject(err.message);
                });
            })
            .catch(err => {
              reject(err.message);
            });
          return created.uid;
        })
        .then(uid => uid)
        .then(uid => {
          resolve(uid);
        })
        .catch(err => {
          reject(err.message);
        });
    }
  });

/**
 * Updates information for an existing user.
 *
 * @param {object} update - The uid corresponding to the user to update.
 * @param {properties} properties - The properties to set on the new user record to be created.
 * @returns {Promise.<string|Error>} A promise fulfilled with the updated user data.
 */
const updateUser = update =>
  new Promise((resolve, reject) => {
    const standar = mobile.standarize(update.phone);
    const normal = mobile.normalize(update.phone);
    const disabled = JSON.parse(update.disabled);
    const verified = JSON.parse(update.verified);
    auth
      .updateUser(update.id, {
        email: update.email,
        emailVerified: verified,
        phoneNumber: standar,
        displayName: update.name,
        disabled,
        photoURL: update.photo,
      })
      .then(uid => {
        firestore
          .updateUser(update.id, {
            id: update.id,
            email: update.email,
            name: update.name,
            photo: update.photo,
            mobile: normal,
            role: update.role,
            verified,
            disabled,
            company: update.company,
            address: update.address,
          })
          .catch(err => {
            reject(err.message);
          });
        return uid;
      })
      .then(uid => {
        resolve(uid);
      })
      .catch(err => {
        reject(err.message);
      });
  });

/**
 * Updates a password for an existing user.
 *
 * @param {object} credential - The credential corresponding to the user to update.
 * @param {string} credential.id - The uid corresponding to the user to update.
 * @param {string} credential.password - The user's new password.
 * @returns {Promise.<string|Error>} A promise fulfilled with the updated user data.
 */
const updatePassword = credential =>
  new Promise((resolve, reject) => {
    auth
      .updateUser(credential.id, {
        password: credential.password,
      })
      .then(() => credential.id)
      .then(id => {
        resolve(id);
      })
      .catch(err => {
        reject(err.message);
      });
  });

/**
 * Deletes an existing user.
 *
 * @param {string} id - The id corresponding to the user to update.
 * @returns {Promise.<string|Error>} - An empty promise fulfilled once the user has been deleted.
 */
const deleteUser = id =>
  new Promise((resolve, reject) => {
    auth
      .deleteUser(id)
      .then(uid => {
        firestore.deleteUser(uid).catch(err => {
          reject(err.message);
        });
        return uid;
      })
      .then(uid => {
        storage.deleteFiles(uid).catch(err => {
          reject(err.message);
        });
        return uid;
      })
      .then(uid => {
        resolve(uid);
      })
      .catch(err => {
        reject(err.message);
      });
  });
// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { deleteUser };
export { updateUser };
export { createUser };
export { updatePassword };
