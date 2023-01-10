/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage common configuration settings for the `electron-forge` module.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT NATIVE NODE MODULES
const url = require('url');
const path = require('path');

// » LOAD AND READ `package.json` file
const PACKAGE = require('../../../package.json');

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Segment path to the assets directory.
 *
 * @constant {srting} icon
 */
const PATH_ASSETS = [__dirname, '..', '..', '..', 'assets'];

/**
 * Segment path to the the app icon file.
 *
 * @constant {srting} icon
 */
const PATH_ICON_APP = [...PATH_ASSETS, 'package', 'icon.app.ico'];

/**
 * Absolute path to the app icon.
 *
 * @constant {srting} icon
 */
const icon = path.join.apply(null, PATH_ICON_APP);

const iconUrl = url.format({
  pathname: icon,
  protocol: 'file:',
  slashes: true,
});

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `commons` constais the commmons configuration for the `electron-forge`
 * module.
 *
 * @constant {object} commons
 */
const commons = {
  name: PACKAGE.productName,
  version: PACKAGE.version,
  author: PACKAGE.author.name,
  copyright: 'Copyright © 2014-2022 BRSoft, LLC',
  appId: `brsoft.useradmin.${PACKAGE.version}`,
  icon,
  iconUrl,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
module.exports = commons;
