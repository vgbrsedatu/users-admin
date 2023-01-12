/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage main window settings.
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
 * The`main()` function create and control browser windows.
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
 * @returns {BrowserWindow} A BrowserWindow.
 * @example main({ icon, title, preload, loadFile });
 *
 */
const main = ({ icon, title, preload, loadFile }) => {
  // » Create the browser window.
  const window = new BrowserWindow({
    width: 850,
    height: 650,
    minWidth: 850,
    minHeight: 650,
    resizable: false,
    fullscreenable: false,
    maximizable: false,
    frame: false,
    titleBarStyle: 'hidden',
    title,
    show: false,
    transparent: false,
    hasShadow: false,
    icon,
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
  window.loadURL(loadFile);

  // » Emitted when the web page has been rendered (while not being shown)
  // » and window can be displayed without a visual flash.
  window.once('ready-to-show', () => {
    window.show();
  });

  window.on('enter-full-screen', () => window.webContents.send('window-fullscreen', true));
  window.on('leave-full-screen', () => window.webContents.send('window-fullscreen', false));
  window.on('maximize', () => window.webContents.send('window-maximize', true));
  window.on('unmaximize', () => window.webContents.send('window-maximize', false));

  return window;
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default main;
