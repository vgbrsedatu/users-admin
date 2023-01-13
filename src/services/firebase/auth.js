import {
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut as signout,
} from 'firebase/auth';
import app from './app';
import AuthError from './AuthError';

const auth = getAuth(app);

const signIn = (email, password) =>
  new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => resolve(true))
      .catch(err => reject(new AuthError(err.code)));
  });

const signOut = () =>
  new Promise((resolve, reject) => {
    signout(auth)
      .then(() => resolve(true))
      .catch(err => reject(new AuthError(err.code)));
  });

const subscribe = observer => onAuthStateChanged(auth, observer);

// export default auth;
export { subscribe };
export { signIn };
export { signOut };
