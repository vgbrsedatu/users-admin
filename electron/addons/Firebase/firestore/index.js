/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages Auth service bound to the provided App.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
import { firestore } from '../app';

const users = firestore.collection('users');

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
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
export { getUser };
export { deleteUser };
