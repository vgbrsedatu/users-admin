/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage all configuration settings for the `electron-forge` module.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
const configurations = require('./configurations/forge');

// ━━	MODULE	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 *
 *
 * @constant {ForgeConfig}
 */
const forgeConfig = {
  packagerConfig: configurations.packager,
  rebuildConfig: configurations.rebuild,
  makers: configurations.makers,
  publishers: configurations.publisher,
  plugins: configurations.plugins,
  hooks: configurations.hooks,
  buildIdentifier: configurations.buildIdentifier,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
module.exports = forgeConfig;
