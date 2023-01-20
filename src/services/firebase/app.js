/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `firebase/app` modules.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Options to configure the app's services.
 *
 * @constant {object}
 */
const firebaseOptions = {
  apiKey: 'AIzaSyDLS2vUjj5jRxQZwzm6MVvTiJgVoNGQU9w',
  authDomain: 'fir-testing-vgbr.firebaseapp.com',
  projectId: 'fir-testing-vgbr',
  storageBucket: 'fir-testing-vgbr.appspot.com',
  messagingSenderId: '70231797598',
  appId: '1:70231797598:web:ba439f5219fb6a8922a9cf',
  measurementId: 'G-K7Z4YD4BQV',
};

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The initialized `firebase` app.
 *
 * @type {FirebaseApp}
 */
const app = initializeApp(firebaseOptions);

/**
 *  The Auth service associated with a specific app.
 *
 * @constant {Auth} auth
 */
const auth = getAuth(app);

/**
 * The `Firestore` service for the given app.
 *
 * @constant {Firestore}
 */
const firestore = getFirestore(app);

/**
 * The `Storage` service for the default app or a given app.
 *
 * @constant {Storage} storage
 */
const storage = getStorage(app);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default app;
export { auth };
export { firestore };
export { storage };
