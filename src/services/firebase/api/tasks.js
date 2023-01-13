import { getFirestore, getDocs, collection, getDoc, doc, onSnapshot } from 'firebase/firestore';
import app from '../app';

const firestore = getFirestore(app);

const tasksReference = collection(firestore, 'tasks');
const tasksSnapshot = getDocs(tasksReference);
const taskReference = id => doc(firestore, 'tasks', id);
const taskSnapshot = id => getDoc(taskReference(id));

const getTasks = () =>
  new Promise((resolve, reject) => {
    const documents = [];
    tasksSnapshot
      .then(snapshot => {
        snapshot.forEach(result => {
          const document = result.data();
          const data = {
            id: result.id,
            due: document.due.toDate(),
            class: document.class,
            task: document.task,
            note: document.note,
            done: document.done,
            subtasks: document.subtasks,
          };
          documents.push(data);
        });
        return documents;
      })
      .then(docs => resolve(docs))
      .catch(err => reject(err));
  });

const unSubscribe = (uid, snapshot, error) => onSnapshot(taskReference(uid), snapshot, error);

const getTask = id =>
  new Promise((resolve, reject) => {
    taskSnapshot(id)
      .then(snapShot => resolve(snapShot.data()))
      .catch(err => reject(err));
  });

export { getTasks };
export { getTask };
export { unSubscribe };
