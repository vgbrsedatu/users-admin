import { getFirestore, getDoc, doc, collection, getDocs } from 'firebase/firestore';
import app from '../app';

const firestore = getFirestore(app);

const usersReference = collection(firestore, 'users');
const userReference = uid => doc(firestore, 'users', uid);
const userSnapshot = uid => getDoc(userReference(uid));
const usersSnapshot = () => getDocs(usersReference);

const getUser = uid =>
  new Promise((resolve, reject) => {
    userSnapshot(uid)
      .then(snapShot => {
        resolve(snapShot.data());
      })
      .catch(err => {
        reject(err);
      });
  });

const getUsers = () =>
  new Promise((resolve, reject) => {
    const documents = [];
    usersSnapshot()
      .then(snapShot => {
        snapShot.forEach(result => {
          const document = result.data();
          const data = {
            id: result.id,
            ...document,
          };
          documents.push(data);
        });
        return documents;
      })
      .then(docs => {
        resolve(docs);
      })
      .catch(err => {
        reject(err);
      });
  });

export { getUser };
export { getUsers };
