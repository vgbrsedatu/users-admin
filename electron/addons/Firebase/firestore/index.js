/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages `firestore` to the provided App.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
import { firestore } from '../app';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * An object with user properties
 *
 * NOTES:
 *
 * - The `email` property, must be a valid email address.
 * - The `mobile` property, must be a valid E.164 spec compliant phone number.
 * - The `verified` property, if not provided, the default is `false`.
 * - The `disabled` property, true for disabled; false for enabled. If not provided,
 *   the default is false.
 *
 * @typedef   {object}  properties
 * @property  {object}  properties                      - The properties to set on the new user record to be created.
 * @property  {string}  properties.email                - The user's primary email.
 * @property  {string}  properties.name                 - The users's name.
 * @property  {string}  properties.mobile               - The user's primary phone number.
 * @property  {string}  properties.photo                - The user's photo URL.
 * @property  {boolean} properties.verified             - Whether or not the user's primary email is verified.
 * @property  {boolean} properties.disabled             - Whether or not the user is disabled.
 * @property  {object}  properties.company              - The user's company information.
 * @property  {string}  properties.company.name         - The user's name company.
 * @property  {string}  properties.company.department   - The user's name department.
 * @property  {string}  properties.company.title        - The user's job.
 * @property  {string}  properties.company.location     - The user's location job.
 * @property  {object}  properties.address              - The user's address information.
 * @property  {string}  properties.address.street       - The street address.
 * @property  {string}  properties.address.number       - The number address.
 * @property  {string}  properties.address.settlement   - The settlement address.
 * @property  {string}  properties.address.postal       - The postal address.
 * @property  {string}  properties.address.municipality - The municipality address.
 * @property  {string}  properties.address.locality     - The locality address.
 * @property  {string}  properties.address.state        - The state address.
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * A collection reference instance that refers to the `users` collection.
 *
 * @constant {FirebaseFirestore.Firestore.CollectionReference}
 */
const users = firestore.collection('users');

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Creates a new user.
 *
 * @param {properties} properties - The properties to set on the new user record to be created.
 * @returns {Promise.<string|Error>} A promise fulfilled with the user data corresponding to the newly created user.
 */
const createUser = (uid, properties) =>
  new Promise((resolve, reject) => {
    users
      .doc(uid)
      .set(properties)
      .then(WriteResult => {
        resolve(WriteResult);
      })
      .catch(error => reject(error.message));
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
    users
      .doc(uid)
      .update(properties)
      .then(WriteResult => {
        resolve(WriteResult);
      })
      .catch(error => reject(error.message));
  });

/**
 * Gets an existing user.
 *
 * @param {string} uid - The uid corresponding to the user to update.
 * @returns {Promise.<string|Error>} - An empty promise fulfilled once the user has been deleted.
 */
const getUser = uid =>
  new Promise((resolve, reject) => {
    users
      .collection('users')
      .doc(uid)
      .get()
      .then(DocumentSnapshot => {
        resolve(DocumentSnapshot);
      })
      .catch(error => reject(error.message));
  });

/**
 * Deletes an existing user.
 *
 * @param {string} uid - The uid corresponding to the user to update.
 * @returns {Promise.<string|Error>} - An empty promise fulfilled once the user has been deleted.
 */
const deleteUser = uid =>
  new Promise((resolve, reject) => {
    users
      .doc(uid)
      .delete()
      .then(WriteResult => {
        resolve(WriteResult);
      })
      .catch(error => reject(error.message));
  });

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { createUser };
export { updateUser };
export { getUser };
export { deleteUser };
