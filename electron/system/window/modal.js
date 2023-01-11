/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage modal window settings.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT ELECTRON APIS
import { BrowserWindow } from 'electron';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `ON_DEVELOPMENT` constant its used to know if the main process is running
 * in the development environment.
 *
 * @constant {bolean} ON_DEVELOPMENT
 */
const ON_DEVELOPMENT = process.env.NODE_ENV === 'development';

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The`modal()` function create and control browser windows.
 *
 * NOTE: This function cannot be used until the `ready` event of the `app` module
 * is emitted.
 *
 * @private
 * @param   {object} settins - Settins to create the main window.
 * @param   {string} settins.icon - Reference to icon path file.
 * @param   {string} settins.title - Window title.
 * @param   {string} settins.preload - Reference to preload file.
 * @param   {string} settins.loadFile - Reference to loadFile file.
 * @param   {BrowserWindow} settins.parent - Reference to loadFile file.
 * @param   {BrowserWindow} settins.view - url segment where the modal window will open.
 * @returns {BrowserWindow} A BrowserWindow.
 * @example modal({ icon, title, preload, loadFile });
 *
 */
const modal = ({ icon, title, preload, parent, loadFile, view }) => {
  // » Create the browser window.
  const window = new BrowserWindow({
    width: 850,
    height: 650,
    minWidth: 850,
    minHeight: 650,
    resizable: false,
    fullscreenable: false,
    frame: false,
    titleBarStyle: 'hidden',
    title,
    show: false,
    transparent: false,
    hasShadow: false,
    icon,
    parent,
    modal: true,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      sandbox: false,
      preload,
    },
  });

  window.webContents.on('did-finish-load', () => {
    if (ON_DEVELOPMENT) {
      window.webContents.once('devtools-opened', () => window.focus());
      window.webContents.openDevTools({ mode: 'undocked' });
    }
  });

  // » Load the index.html of the app.
  window.loadURL(`${loadFile}#/${view}`);

  // » Emitted when the web page has been rendered (while not being shown)
  // » and window can be displayed without a visual flash.
  window.once('ready-to-show', () => {
    window.show();
  });

  return window;
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default modal;
