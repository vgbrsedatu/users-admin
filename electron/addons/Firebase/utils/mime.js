/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages the `utils.mime` module.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
import mimeTypes from 'mime-types';

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `fromBase64` function returns the mime type from base64 encoded file.
 *
 * @param {string} encoded - A base64 encoded file.
 * @returns {string} A string with mime type value.
 * @example const mime = fromBase64('data:image/jpeg;base64,/9j/4AAQSkZJRgA...'); // The expected value `image/jpeg`
 *
 */
const fromBase64 = encoded => {
  const regExps = /data:([a-zA-Z0-9]+\/[a-zA-Z0-9-.+]+).*,.*/;
  if (typeof encoded !== 'string') return null;

  const mime = encoded.match(regExps);
  if (!(mime && mime.length)) return null;
  return mime[1];
};

/**
 * The `encode` function returns the `mime-type` from extension file.
 *
 * @param {string} extension - An extension file.
 * @returns {string} A string with `mime-type` value.
 * @example const mime = encode('.jpeg'); // The expected value `image/jpeg`
 *
 */
const encode = extension => mimeTypes.lookup(extension);

/**
 * The `decode` function returns the extension file from `mime-type`.
 *
 * @param {string} mime - A `mime-type` of the file.
 * @returns {string} A string with the extension file.
 * @example const extension = decode('image/jpeg'); // The expected value `.jpeg`
 *
 */
const decode = mime => mimeTypes.extension(mime);
// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { fromBase64 };
export { encode };
export { decode };
