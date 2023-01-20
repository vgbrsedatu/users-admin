/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage the `app` module of the `firestore-admin`
 */

// ━━	IMPORT MODULES	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { getFirestore } from 'firebase-admin/firestore';
import { getStorage } from 'firebase-admin/storage';

// » IMPORT MODULES
import serviceAccount from './service-account.json';

// ━━	CONSTANTS	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Object to configure the firebase application.
 *
 * @constant {object} options
 */
const options = {
  credential: cert(serviceAccount),
  databaseURL: 'https://fir-testing-vgbr.firebaseio.com',
  storageBucket: 'gs://fir-testing-vgbr.appspot.com',
};

// ━━	MODULE	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Firebase application.
 *
 * @constant {App} options
 */
const app = initializeApp(options, 'test');

/**
 *  The Auth service associated with a specific app.
 *
 * @constant {Auth} auth
 */
const auth = getAuth(app);

/**
 * The `Firestore` service for the given app.
 *
 * @constant {FirebaseFirestore.Firestore}
 */
const firestore = getFirestore(app);

/**
 * The `Storage` service for the default app or a given app.
 *
 * @constant {FirebaseFirestore.Storage} storage
 */
const storage = getStorage(app);

// ━━	EXPORT MODULE	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { auth };
export { firestore };
export { storage };
