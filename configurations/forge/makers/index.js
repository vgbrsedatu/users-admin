/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage settings for the property `makers` on `electron-forge`
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
const squirrel = require('./squirrel');

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Basic structure to create a `maker`
 *
 * @typedef  {object} Maker
 * @property {string} name      - Maker names.
 * @property {string} config    - Maker configuration.
 * @property {string} platforms - Platforms where the application will be building.
 */

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `makers` constant, contains the configurations for the makers module.
 *
 *
 * @constant {Array.<Maker>} makers
 */
const makers = [
  {
    name: '@electron-forge/maker-squirrel',
    config: squirrel,
  },
  {
    name: '@electron-forge/maker-zip',
    platforms: ['darwin'],
  },
  {
    name: '@electron-forge/maker-deb',
    config: {},
  },
  {
    name: '@electron-forge/maker-rpm',
    config: {},
  },
];

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
module.exports = makers;
