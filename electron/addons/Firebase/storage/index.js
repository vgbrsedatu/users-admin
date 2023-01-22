/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages Auth service bound to the provided App.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT NATIVE NODE MODULES
import path from 'path';

// » IMPORT THIRD PARTIES MODULES
import mimeTypes from 'mime-types';

// » IMPORT MODULES
import { storage } from '../app';

// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `base64MimeType` function returns the mime type from base64 encoded file.
 *
 * @param {string} encoded - A base64 encoded file.
 * @returns {string} A string with mime type value.
 * @example const mime = base64MimeType('data:image/jpeg;base64,/9j/4AAQSkZJRgA...'); // The expected value `image/jpeg`
 *
 */
const base64MimeType = encoded => {
  const regExps = /data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/;
  if (typeof encoded !== 'string') {
    return null;
  }

  const mime = encoded.match(regExps);

  if (!(mime && mime.length)) {
    return null;
  }

  return mime[1];
};
// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

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
      })
      .then(uploaded => {
        const imageUrl = uploaded[1].mediaLink;
        resolve(imageUrl);
      })
      .catch(err => {
        console.error(err.message);
        reject(err.message);
      });
  });

/**
 * The `uploadFromBlob` function uploads a file from a blob to firebase storage.
 *
 * @param {object} options - Configuration options.
 * @param {string} [options.mime] - The mime type of file.
 * @param {string} options.raw - The blob file.
 * @param {string} options.uid -  An uid for the file.
 * @returns {Promise.<string|Error>} A string with url of file.
 * @example uploadFromBlob({ mime, raw, uid }); // The expected value `image/jpeg`
 *
 */
const uploadFromBlob = ({ mime, raw, uid }) =>
  new Promise((resolve, reject) => {
    const options = {
      public: true,
      resumable: false,
      metadata: { contentType: base64MimeType(raw) || mime },
      validation: false,
    };
    const extension = mimeTypes.extension('image/jpeg');
    const encoded = raw.replace(/^data:\w+\/\w+;base64,/, '');
    const fileBuffer = Buffer.from(encoded, 'base64');
    const file = bucket.file(`users/${uid}.${extension}`);
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
