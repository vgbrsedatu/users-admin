/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages the `firebase.storage` module.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT NATIVE NODE MODULES
import path from 'path';

// » IMPORT THIRD PARTIES MODULES
import { v4 as uuid } from 'uuid';

// » IMPORT MODULES
import { storage } from '../app';
import * as mimeType from '../utils/mime';

// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * A reference to a Cloud Storage bucket.
 *
 * @constant {Bucket}
 */
const bucket = storage.bucket();

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `uploadFiles` function uploads a file to firebase storage.
 *
 * @param {string} file - A file reference path.
 * @param {string} uid - An uid for the file.
 * @returns {Promise.<string|Error>} A string with url of file.
 * @example uploadFiles('some-file.jpeg', 'QSkZJRgA'); // The expected value `image/jpeg`
 *
 */
const uploadFiles = (file, uid) =>
  new Promise((resolve, reject) => {
    const extension = path.extname(file);
    bucket
      .upload(file, {
        destination: `users/${uid}${extension}`,
        public: true,
        resumable: false,
        gzip: true,
        validation: 'crc32c',
        cacheControl: 'public, max-age=31536000',
        metadata: {
          contentType: mimeType.encode(extension),
          metadata: {
            firebaseStorageDownloadTokens: uuid(),
          },
        },
      })
      .then(uploaded => {
        const imageUrl = uploaded[1].mediaLink;
        resolve(imageUrl);
      })
      .catch(err => {
        reject(err.message);
      });
  });

/**
 * The `uploadFromBlob` function uploads a file from a blob to firebase storage.
 *
 * @param {object} options - Configuration options.
 * @param {string} [options.mime] - The mime type of file.
 * @param {string} options.raw - The blob file.
 * @param {string} [options.uid] -  An uid for the file.
 * @param {boolean} [options.temporary] -  If the file will be temporary.
 * @returns {Promise.<string|Error>} A string with url of file.
 * @example uploadFromBlob({ mime, raw, uid }); // The expected value `image/jpeg`
 *
 */
const uploadFromBlob = ({ mime, raw, name, temporary = false } = {}) =>
  new Promise((resolve, reject) => {
    const options = {
      public: true,
      resumable: false,
      gzip: true,
      validation: 'crc32c',
      cacheControl: 'public, max-age=31536000',
      metadata: {
        contentType: mime || mimeType.fromBase64(raw),
        metadata: {
          firebaseStorageDownloadTokens: uuid(),
        },
      },
    };

    const extension = mimeType.decode('image/jpeg');
    const encoded = raw.replace(/^data:\w+\/\w+;base64,/, '');
    const fileBuffer = Buffer.from(encoded, 'base64');
    const file = temporary
      ? bucket.file(`users/temporary/temp.${extension}`)
      : bucket.file(`users/${name}.${extension}`);
    file
      .save(fileBuffer, options)
      .then(async () => {
        const [metadata] = await file.getMetadata();
        resolve(metadata.mediaLink);
      })
      .catch(err => {
        reject(err.message);
      });
  });

/**
 * The `deleteFiles` function deletes a file from firebase storage.
 *
 * @param {options} uid - The uid of the file.
 * @returns {Promise.<true|Error>} If the operation is successful it will return `true`.
 * @example deleteFiles('QSkZJRgA');
 *
 */
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
export { uploadFromBlob };
export { deleteFiles };
