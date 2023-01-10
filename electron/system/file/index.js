/**
 * @file Manages functions related to file system operations.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT NATIVE NODE MODULES
import fs from 'fs';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * An `Object` that contains the options for the netx function:
 *
 * - `fs.statSync()`.
 *
 * @private
 * @constant {object} STAT_OPTIONS
 * @property {boolean} bigint         - Encoding format.
 * @property {boolean} throwIfNoEntry - Throw an exception when if there is no entry.
 *
 */
const STAT_OPTIONS = {
  bigint: false,
  throwIfNoEntry: true,
};

/**
 * An `Object` that contains the options for the next function:
 *
 * - `fs.readdirSync()`.
 *
 * @private
 * @constant {object} READ_DIRECTORY_OPTIONS
 * @property {string}  encoding      - Encoding format.
 * @property {boolean} withFileTypes - Is set to true, the result will contain <fs.Dirent> objects.
 */
const READ_DIRECTORY_OPTIONS = {
  encoding: 'utf8',
  withFileTypes: false,
};

/**
 * An `Object` that contains the options for the next function:
 *
 * - `fs.mkdirSync()`.
 *
 * @private
 * @constant {object} MKDIR_OPTIONS
 * @property {boolean} recursive - If it will be recursive.
 * @property {string}  mode      - Mode for create directory.
 */
const MKDIR_OPTIONS = {
  recursive: false,
  mode: 0o777,
};

/**
 * An `Object` that contains the options for the next function:
 *
 * - `fs.rmdirSync()`.
 *
 * @private
 * @constant {object} MKDIR_OPTIONS
 * @property {number}  forse      - When true, exceptions will be ignored if path does not exist.
 * @property {boolean} maxRetries - Maximum number of retries of the operation.
 * @property {boolean} recursive  - If it will be recursive.
 * @property {number}  retryDelay - The amount of time in milliseconds to wait between retries.
 */
const RMDIR_OPTIONS = {
  force: false,
  maxRetries: 0,
  recursive: false,
  retryDelay: 100,
};

/**
 * An `Object` that contains the options for the next function:
 *
 * - `fs.realpathSync()`.
 *
 * @private
 * @constant {object} REAL_PATH_OPTIONS
 * @property {string} encoding - Encoding format.
 */
const REAL_PATH_OPTIONS = {
  encoding: 'utf8',
};

/**
 * An `Object` that contains the options for the next function:
 *
 * - `fs.writeFileSync()`.
 *
 * @private
 * @constant {object} WRITE_OPTIONS
 * @property {string} encoding - Encoding format.
 * @property {string} mode     - Mode format.
 * @property {string} flag     - Flag for write mode.
 */
const WRITE_OPTIONS = {
  encoding: 'utf8',
  mode: 0o666,
  flag: 'w',
};

/**
 * An `Object` that contains the options for the next function:
 *
 * - `fs.readFileSync()`.
 *
 * @private
 * @constant {object} READ_OPTIONS
 * @property {string} encoding - Encoding format.
 * @property {string} flag     - Flag for reading mode.
 */
const READ_OPTIONS = {
  encoding: 'utf8',
  flag: 'r',
};

/**
 * Constant for `fs.copyFile`. Flag indicating the destination file should not
 * be overwritten if it already exists.
 *
 * @private
 * @constant {number} COPYFILE_EXCL
 */
const { COPYFILE_EXCL } = fs.constants;

// ━━	MODULE	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `existsPath()` function checks if a given path exists. The function
 * returns `boolean`.
 *
 * The function requires the `path` param, must be a `string`.
 *
 * @private
 * @param     {string} path - The given path.
 * @returns   {boolean} Returns `true` if the path exists, `false` otherwise.
 * @example existsPath(path); // true
 *
 */
const existsPath = path => fs.existsSync(path);

/**
 * The `isFile()` function checks if a given path is a file. The function
 * returns `boolean`.
 *
 * The function requires the `path` param, must be a `string`.
 *
 * @private
 * @param     {string} path - The given path.
 * @returns   {boolean} Returns `true` if the path is a file, `false` otherwise.
 * @example isFile(path); // true
 *
 */
const isFile = path => fs.statSync(path, STAT_OPTIONS).isFile();

/**
 * The `isDirectory()` function checks if a given path is a directory. The
 * function returns `boolean`.
 *
 * The function requires the `path` param, must be a `string`.
 *
 * @private
 * @param     {string} path - The given path.
 * @returns   {boolean} Returns `true` if the path is a directory, `false` otherwise.
 * @example isDirectory(path); // true
 *
 */
const isDirectory = path => fs.statSync(path, STAT_OPTIONS).isDirectory();

/**
 * The `readDirectory()` function reads the contents of the directory. The
 * function returns a string `array`.
 *
 * The function requires the `path` param, must be a `string`.
 *
 * @private
 * @param     {string} path - The given directory.
 * @returns   {Array.<string>} The contents of a given directory.
 * @example const notesFiles = readDirectory(notesPath); // ['note_1.txt', 'note_2.txt']
 *
 */
const readDirectory = path => fs.readdirSync(path, READ_DIRECTORY_OPTIONS);

/**
 * The `mkdir()` function create a directory from a given path. The function
 * returns `undefined`, or if `recursive` is `true`.
 *
 * The function requires the `path` param, must be a `string`. And optional
 * param `recursive`. And an optional parameter `recursive`, must be a `bolean`.
 *
 * @private
 * @param     {string} path - The directory to create.
 * @param     {boolean} [recursive] - If the function will be recursive.
 * @returns   {string|undefined} The first directory path created.
 * @example mkdir(path);
 *
 */
const mkdir = (path, recursive = false) => fs.mkdirSync(path, { ...MKDIR_OPTIONS, recursive });

/**
 * The `rmdir()` function delete a directory from a given path.
 *
 * The function requires the `path` param, must be a `string`. And optional
 * param `recursive`. And an optional parameter `recursive`, must be a `bolean`.
 *
 * @private
 * @param     {string} path - The directory to create.
 * @param     {boolean} [recursive] - If the function will be recursive.
 * @returns   {void} Returns `undefined`, or if `recursive` is `true`, the first directory path created.
 * @example rmdir(path);
 *
 */
const rmdir = (path, recursive = false) => fs.rmdirSync(path, { ...RMDIR_OPTIONS, recursive });

/**
 * The `resolvedPath()`  is used to synchronously compute the canonical pathname
 * of a given path. It does so by resolving the `.`, `..` and the symbolic links
 * in the path and returning the resolved path.
 *
 * The function requires the `path` param, must be a `string`.
 *
 * @private
 * @param     {string} path - The path of the directory that has to be resolved.
 * @returns   {string|Buffer} It returns a `String` that represents the resolved path.
 * @example resolvedPath(__dirname); //
 *
 */
const resolvedPath = path => fs.realpathSync(path, REAL_PATH_OPTIONS);

/**
 * The `writeFileSync()` function writes a file synchronously from a given path
 * and content, the path includes the filename and its extension.
 *
 * @private
 * @param     {string} file - Filename including its path.
 * @param     {string} data - The information to write.
 * @returns   {void} The function returns undefined.
 * @example writeFileSync(file, data);
 *
 */
const writeFileSync = (file, data) => fs.writeFileSync(file, data, WRITE_OPTIONS);

/**
 * The `writeFileAsync()` function writes a file asynchronously from a given path
 * and content, the path includes the filename and its extension.
 *
 * @private
 * @param     {string} file - Filename including its path.
 * @param     {string} data - The information to write.
 * @returns   {Promise<true|Error>} Return `true` if operation completed successfully, otherwise `Error`.
 * @example writeFileAsync(file, data);
 *
 */
const writeFileAsync = (file, data) =>
  new Promise((resolve, reject) => {
    fs.writeFile(file, data, WRITE_OPTIONS, err => {
      if (err) reject(err);
      else resolve(true);
    });
  });

/**
 * The `readFileSync()` function read a file synchronously from a given path,
 * the path includes the filename and its extension.
 *
 * @private
 * @param     {string} path - Filename including its path.
 * @returns   {string} The file content.
 * @example readFileSync(path);
 *
 */
const readFileSync = path => fs.readFileSync(path, READ_OPTIONS);

/**
 * The `readFileAsync()` function read a file asynchronously from a given path,
 * the path includes the filename and its extension.
 *
 * @private
 * @param     {string} path - Filename including its path.
 * @returns   {Promise<string|Error>} The file content if operation completed successfully, otherwise `Error`.
 * @example readFileAsync(pathFile);
 *
 */
const readFileAsync = path =>
  new Promise((resolve, reject) => {
    fs.readFile(path, READ_OPTIONS, (err, data) => {
      if (err) return reject(err);
      return resolve(data);
    });
  });

/**
 * The `copyFileSync()` function, makes synchronously copies `source` file to
 * `destination`. By default, dest is overwritten if it already exists. The
 * function returns `void`.
 *
 * The function requires the params `source` and `destination` both must be a
 * `string`.
 *
 * @private
 * @param   {string} source - Source filename to copy.
 * @param   {string} destination - Destination filename of the copy operation.
 * @returns {void}
 * @example copyFileSync(pathFile);
 *
 */
const copyFileSync = (source, destination) => fs.copyFileSync(source, destination, COPYFILE_EXCL);

/**
 * The `deleteFileSync()` function delete a file synchronously from a given
 * path. The function returns `void`.
 *
 * The function requires the param `path` must be a `string`.
 *
 * @private
 * @param   {string} path - The file to delete.
 * @returns {undefined}
 * @example deleteFileSync(pathFile);
 *
 */
const deleteFileSync = path => fs.unlinkSync(path);

// ━━ EXPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { existsPath };
export { isFile };
export { isDirectory };
export { readDirectory };
export { mkdir };
export { rmdir };
export { resolvedPath };
export { writeFileSync };
export { writeFileAsync };
export { readFileSync };
export { readFileAsync };
export { copyFileSync };
export { deleteFileSync };
