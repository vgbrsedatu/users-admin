/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage settings for the property `rebuild` on `electron-forge`
 */

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * It is based on the `electron-rebuild` module api.
 *
 * @typedef {object} RebuildConfig
 * @property {string} [extraModules=[]] - An array of modules to rebuild as well as the detected modules.
 * @property {string} [onlyModules=null]  - An array of modules to rebuild, ONLY these module names will be rebuilt. The "types" property will be ignored if this option is set.
 * @property {string} [force=false]  - Force a rebuild of modules regardless of their current build state.
 * @property {string} [headerURL='https://www.electronjs.org/headers']  - The URL to download Electron header files from
 * @property {string} [types=['prod', 'optional']] - The types of modules to rebuild
 * @property {string} [mode] - The rebuild mode, either 'sequential' or 'parallel' - Default varies per platform (probably shouldn't mess with this one).
 * @property {string} [useElectronClang] - Whether to use the clang executable that Electron used when building its binary. This will guarantee compiler compatibility.
 */

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `rebuild` constant is used for the configuration of the `electron-forge`
 * module, it contains all the configuration of the option `rebuildConfig`. It
 * is based on the `electron-rebuild` module api.
 *
 * NOTE: Can not override the next options:
 * - `buildPath`
 * - `arch`
 * - `electronVersion`
 *
 * @type {RebuildConfig} rebuild
 */
const rebuild = {
  extraModules: [],
  // onlyModules: null,
  force: false,
  headerURL: 'https://www.electronjs.org/headers',
  types: ['prod', 'optional'],
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
module.exports = rebuild;
