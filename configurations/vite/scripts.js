/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file  Manage scripts for the `vite` configuration module.
 */

// ━━ IMPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT API NODE MODULES
import fs from 'fs';
import path from 'path';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Optio
 *
 * @type {fs.RmOptions}
 */
const RmOptions = {
  recursive: true,
  force: true,
};

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `createPath()` Join all arguments together and normalize the resulting
 * path from path segments.
 *
 * @private
 * @param   {string} segments - Path Segments.
 * @returns {string} A Joinded path.
 * @example const APP_ICO = createPath([__dirname, 'assets', 'icons', 'app.ico']);
 *
 */
const createPath = segments => path.join.apply(null, segments);

/**
 * The `remove()` Synchronously removes files and directories.
 *
 * @private
 * @param   {string} directory - File Reference.
 * @returns {void}
 * @example const APP_ICO = path.join.apply(null, [__dirname, 'assets', 'icons', 'app.ico']);
 *
 * remove(APP_ICO);
 */
const remove = directory => fs.rmSync(directory, RmOptions);

/**
 * The `debounce()` function create delay time for a callback function.
 *
 * @private
 * @param   {string} callback - A callback function.
 * @param   {string} delay - Time to execute callback function.
 * @returns {void}
 * @example const plugins = [ customStart(plugins.customStart)];
 *
 */
const debounce = (callback, delay = 299) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => callback(...args), delay);
  };
};

//  ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { createPath };
export { remove };
export { debounce };
