/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage settings for the property `buildIdentifier` on `electron-forge`
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
const commons = require('../commons');

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `buildIdentifier` constant can be used to identify different build
 * configurations. Normally, this property is set to the channel the build will
 * release to, or some other unique identifier.
 *
 * @constant {Array} buildIdentifier
 */
const buildIdentifier = `${commons.appId}`;

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
module.exports = buildIdentifier;
