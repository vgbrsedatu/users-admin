/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages Firebase service.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
import * as auth from '../auth';
import * as firestore from '../firestore';
import * as storage from '../storage';

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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

const updateUser = update =>
  new Promise((resolve, reject) => {
    auth
      .updateUser(update.id, {
        email: update.email,
        emailVerified: update.verified,
        phoneNumber: update.phone,
        displayName: update.name,
        disabled: update.disabled,
      })
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
