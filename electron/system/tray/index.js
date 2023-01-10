/**
 * @author Victor Giovanni Beltrán Rodríguez.
 * @file Manages electron Tray for Add icons and context menus to the system's
 * notification area.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT ELECTRON APIS
import { Tray } from 'electron';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Keep a global reference of the appIcon object, if you don't, the appIcon will
 * be closed automatically when the JavaScript object is garbage collected.
 * @type {null}
 */
let appIcon = null;

// ━━	MODULE	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `tray()` function that show a native notification on macOS, Windows and Linux.
 *
 * @private
 * @param   {object} options - Adds name, icon and menu to tray.
 * @param   {string} options.icon - Icon for context menu.
 * @param   {string} options.name - Sets the hover text for this tray icon.
 * @param   {string} options.menu - Sets the context menu for this icon.
 * @example const contextMenu = Menu.buildFromTemplate([
 *  { label: 'Item1', type: 'radio' },
 *  { label: 'Item2', type: 'radio' },
 *  { label: 'Item3', type: 'radio', checked: true },
 *  { label: 'Item4', type: 'radio' }
 * ]);
 *
 * tray({
 *   icon: 'assets/icons/app.ico',
 *   name: 'A name application',
 *   menu: contextMenu,
 * });
 *
 */
const tray = ({ icon, name, menu }) => {
  appIcon = new Tray(icon);
  appIcon.setToolTip(name);
  appIcon.setContextMenu(menu);
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default tray; // eslint-disable-line import/prefer-default-export
