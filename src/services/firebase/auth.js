/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `auth` firebase module.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
import { onAuthStateChanged, signInWithEmailAndPassword, signOut as signout } from 'firebase/auth';

// » IMPORT MODULES
import { auth } from './app';
import AuthError from './AuthError';

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Asynchronously signs in using an email and password.
 *
 * @remarks Fails with an error if the email address and password do not match.
 * @param {string} email - User email.
 * @param {string} password - User pasword.
 * @returns {Promise.<true|AuthError>}
 */
const signIn = (email, password) =>
  new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        resolve(true);
      })
      .catch(err => {
        reject(new AuthError(err.code));
      });
  });

/**
 * Signs out the current user
 *
 * @returns {Promise.<true|AuthError>}
 */
const signOut = () =>
  new Promise((resolve, reject) => {
    signout(auth)
      .then(() => {
        resolve(true);
      })
      .catch(err => {
        reject(new AuthError(err.code));
      });
  });

/**
 * Adds an observer for changes to the user's sign-in state.
 *
 * @param {(user) => void} observer - Callback triggered on change.
 */
const unSubscribe = observer => onAuthStateChanged(auth, observer);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { unSubscribe };
export { signIn };
export { signOut };
