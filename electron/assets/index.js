/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages the assets for the application.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT NATIVE NODE MODULES
import path from 'path';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Collection of application icon paths file
 *
 * @typedef  {object} icons
 * @property {string} app         - Application icon paths file.
 * @property {string} about       - About icon paths file.
 * @property {string} success     - Success icon paths file.
 * @property {string} information - Information icon paths file.
 * @property {string} error       - Error icon paths file.
 * @property {string} warning     - Warning icon paths file.
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Path segments for assets directory.
 *
 * @type  {Object.<string, Array.<string>>}
 * @private
 */
const PATH_ASSETS = [__dirname, '..', '..', 'assets'];

/**
 * Collection of path segments for ico files.
 *
 * @type  {Object.<string, Array.<string>>}
 * @private
 */
const PATH_ICONS = {
  APP: [...PATH_ASSETS, 'icons', 'icon.app.ico'],
  ABOUT: [...PATH_ASSETS, 'icons', 'icon.about.png'],
  SUCCESS: [...PATH_ASSETS, 'icons', 'icon.success.ico'],
  INFORMATION: [...PATH_ASSETS, 'icons', 'icon.information.ico'],
  ERROR: [...PATH_ASSETS, 'icons', 'icon.error.ico'],
  WARNING: [...PATH_ASSETS, 'icons', 'icon.warning.ico'],
};

/**
 * Icon file path reference for the application.
 *
 * NOTE: The file is of type `.ico`
 *
 * @type {string} ICON_APP
 * @private
 */
const ICON_APP = path.join.apply(null, PATH_ICONS.APP);

/**
 * Icon file path reference for the about application.
 *
 * NOTE: The file is of type `.ico`
 *
 * @type {string} ICON_APP
 * @private
 */
const ICON_ABOUT = path.join.apply(null, PATH_ICONS.ABOUT);

/**
 * Icon file path reference for the information success.
 *
 * NOTE: The file is of type `.ico`
 *
 * @type {string} ICON_SUCCESS
 * @private
 */
const ICON_SUCCESS = path.join.apply(null, PATH_ICONS.SUCCESS);

/**
 * Icon file path reference for the information notification.
 *
 * NOTE: The file is of type `.ico`.
 *
 * @type {string} ICON_INFORMATION
 * @private
 */
const ICON_INFORMATION = path.join.apply(null, PATH_ICONS.INFORMATION);

/**
 * Icon file path reference for the error notification.
 *
 * NOTE: The file is of type `.ico`.
 *
 * @type {string} ICON_ERROR
 * @private
 */
const ICON_ERROR = path.join.apply(null, PATH_ICONS.ERROR);

/**
 * Icon file path reference for the warning notification.
 *
 * NOTE: The file is of type `.ico`.
 *
 * @type {string} ICON_WARNING
 * @private
 */
const ICON_WARNING = path.join.apply(null, PATH_ICONS.WARNING);

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * A collection of icon file path reference, for different application uses.
 *
 * @type {icons} icons
 * @private
 */
const icons = {
  app: ICON_APP,
  about: ICON_ABOUT,
  success: ICON_SUCCESS,
  information: ICON_INFORMATION,
  error: ICON_ERROR,
  warning: ICON_WARNING,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { icons }; // eslint-disable-line import/prefer-default-export
