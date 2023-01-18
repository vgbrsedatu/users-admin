/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages Auth service bound to the provided App.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
import { auth } from '../app';

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Creates a new user.
 *
 * NOTES:
 *
 * - The `email` property, must be a valid email address.
 * - The `password` property, must be at least six characters long.
 * - The `phoneNumber` property, must be a valid E.164 spec compliant phone number.
 * - The `emailVerified` property, if not provided, the default is `false`.
 * - The `disabled` property, true for disabled; false for enabled. If not provided,
 *   the default is false.
 *
 * @param {object} properties The properties to set on the new user record to be created.
 * @param {string} properties.email The user's primary email.
 * @param {string} properties.password The user's raw, unhashed password.
 * @param {string} properties.displayName The users' display name.
 * @param {string} properties.phoneNumber The user's primary phone number.
 * @param {string} properties.photoURL The user's photo URL.
 * @param {boolean} properties.emailVerified Whether or not the user's primary email is verified.
 * @param {boolean} properties.disabled Whether or not the user is disabled.
 * @returns {Promise} A promise fulfilled with the user data corresponding to the newly created user.
 */
const createUser = properties =>
  new Promise((resolve, reject) => {
    auth
      .createUser(properties)
      .then(UserRecord => {
        resolve(UserRecord);
      })
      .catch(error => {
        reject(error);
      });
  });

/**
 * Updates an existing user.
 *
 * NOTES:
 *
 * - The `email` property, must be a valid email address.
 * - The `password` property, must be at least six characters long.
 * - The `phoneNumber` property, must be a valid E.164 spec compliant phone number.
 * - The `emailVerified` property, if not provided, the default is `false`.
 * - The `disabled` property, true for disabled; false for enabled. If not provided,
 *   the default is false.
 *
 * @param {string} uid The uid corresponding to the user to update.
 * @param {object} properties The properties to set on the new user record to be created.
 * @param {string} properties.email The user's primary email.
 * @param {string} properties.password The user's raw, unhashed password.
 * @param {string} properties.displayName The users' display name.
 * @param {string} properties.phoneNumber The user's primary phone number.
 * @param {string} properties.photoURL The user's photo URL.
 * @param {boolean} properties.emailVerified Whether or not the user's primary email is verified.
 * @param {boolean} properties.disabled Whether or not the user is disabled.
 * @returns {Promise} A promise fulfilled with the updated user data.
 */
const updateUser = (uid, properties) =>
  new Promise((resolve, reject) => {
    auth
      .updateUser(uid, properties)
      .then(UpdateRequest => {
        resolve(UpdateRequest);
      })
      .catch(error => {
        reject(error);
      });
  });

/**
 * Deletes an existing user.
 *
 * @param {string} uid The uid corresponding to the user to update.
 * @returns {Promise.<void>} An empty promise fulfilled once the user has been deleted.
 */
const deleteUser = uid =>
  new Promise((resolve, reject) => {
    auth
      .deleteUser(uid)
      .then(() => {
        resolve(uid);
      })
      .catch(error => {
        reject(error);
      });
  });

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { createUser };
export { updateUser };
export { deleteUser };
