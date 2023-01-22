/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `users` collection in `firebase`
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  deleteDoc,
  onSnapshot,
} from 'firebase/firestore';

// » IMPORT MODULES
import { firestore } from '../app';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const usersReference = collection(firestore, 'users');
const usersSnapshot = getDocs(usersReference);

const userReference = id => doc(firestore, 'users', id);
const user = {
  get: id => getDoc(userReference(id)),
  set: id => setDoc(userReference(id)),
  delete: id => deleteDoc(userReference(id)),
};

// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const getUser = id =>
  new Promise((resolve, reject) => {
    user
      .get(id)
      .then(snapShot => {
        resolve({
          id,
          ...snapShot.data(),
        });
      })
      .catch(err => {
        reject(err);
      });
  });

const deleteUser = id =>
  new Promise((resolve, reject) => {
    user
      .delete(id)
      .then(() => {
        resolve(true);
      })
      .catch(err => {
        reject(err);
      });
  });

const getUsers = () =>
  new Promise((resolve, reject) => {
    usersSnapshot
      .then(snapShot =>
        snapShot.docs.map(result => ({
          id: result.id,
          ...result.data(),
        })),
      )
      .then(docs => {
        resolve(docs);
      })
      .catch(err => {
        reject(err);
      });
  });

const unSubscribe = (snapshot, error) => onSnapshot(usersReference, snapshot, error);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { getUser };
export { deleteUser };
export { getUsers };
export { unSubscribe };
