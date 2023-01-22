/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages Auth service bound to the provided App.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
import { auth } from '../app';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Window` argument allows the dialog to attach itself to a parent
 * window, making it modal.
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
 * @typedef   {object}  properties
 * @property  {string}  email         - The user's primary email.
 * @property  {string}  password      - The user's raw, unhashed password.
 * @property  {string}  displayName   - The users' display name.
 * @property  {string}  phoneNumber   - The user's primary phone number.
 * @property  {string}  photoURL      - The user's photo URL.
 * @property  {boolean} emailVerified - Whether or not the user's primary email is verified.
 * @property  {boolean} disabled      - Whether or not the user is disabled.
 */

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Creates a new user.
 *
 * @param {properties} properties - The properties to set on the new user record to be created.
 * @returns {Promise.<string|Error>} A promise fulfilled with the user data corresponding to the newly created user.
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
 * @param {string} uid - The uid corresponding to the user to update.
 * @param {properties} properties - The properties to set on the new user record to be created.
 * @returns {Promise.<string|Error>} A promise fulfilled with the updated user data.
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
 * @param {string} uid - The uid corresponding to the user to update.
 * @returns {Promise.<string|Error>} - An empty promise fulfilled once the user has been deleted.
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
