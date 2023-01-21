/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useStorage` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useStorage`
 *
 * @typedef   {object} storageHook
 * @property  {({ mime, raw, name }:{mime: string, raw: string, name:string }) => Promise.<string|Error>} uploadFromBlob - Function to upload a file from a blob.
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useUser` it's a custom React hook witch communicates with the `electron`
 * api, used to upload fles.
 *
 * @returns {storageHook} An object to manage the users.
 */
const useStorage = () => {
  const uploadFromBlob = ({ mime, raw, name }) =>
    new Promise((resolve, reject) => {
      window.appRuntime
        .invoke('image:upload', { mime, raw, name })
        .then(payload => {
          resolve(payload);
        })
        .catch(payload => {
          reject(payload);
        });
    });

  return { uploadFromBlob };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useStorage;
