/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages Auth service bound to the provided App.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
import { storage } from '../app';

// » IMPORT NATIVE NODE MODULES
const path = require('path');

const bucket = storage.bucket();

const uploadFiles = (file, uid) =>
  new Promise((resolve, reject) => {
    const extension = path.extname(file);
    bucket
      .upload(file, {
        destination: `testing/${uid}${extension}`,
        public: true,
      })
      .then(uploaded => {
        resolve(uploaded);
      })
      .catch(err => {
        reject(err.message);
      });
  });

const deleteFiles = uid =>
  new Promise((resolve, reject) => {
    bucket
      .deleteFiles({
        prefix: `users/${uid}`,
      })
      .then(() => {
        resolve(true);
      })
      .catch(err => {
        reject(err.message);
      });
  });

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { uploadFiles };
export { deleteFiles };
