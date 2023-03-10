/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages the configuration main proccess app.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT NATIVE NODE MODULES
import path from 'path';
import url from 'url';
import os from 'os';

// » IMPORT THIRD PARTIES MODULES

// » IMPORT ELECTRON APIS
import { app, BrowserWindow, ipcMain, nativeTheme, autoUpdater } from 'electron';

// » IMPORT ASSETS
import * as assets from '../assets';

// » IMPORT SYSTEM
import * as system from '../system';

// » IMPORT SYSTEM
import * as services from '../services';

import * as addons from '../addons';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `ON_DEVELOPMENT` constant its used to know if the main process is running
 * in the development environment.
 *
 * @constant {bolean} ON_DEVELOPMENT
 */
const ON_DEVELOPMENT = process.env.NODE_ENV === 'development';

/**
 * Reference to preload path file.
 *
 * @constant {string} PRELOAD_PATH
 */
const PRELOAD_PATH = path.join(__dirname, '..', 'preload', 'index.js');

/**
 * Reference to Application icons Path files.
 *
 * @constant {object} icons
 */
const { icons } = assets;

/**
 * Html file reference for `window`, to render `BrowserWindow`.
 *
 * @constant {string} mainWindowUrl
 * @private
 */
const WINDOW_URL = ON_DEVELOPMENT
  ? process.env.VITE_DEV_SERVER_URL
  : url.format({
      pathname: path.join(__dirname, '..', '..', 'renderer', 'index.html'),
      protocol: 'file:',
      slashes: true,
    });

const windowSetting = {
  icon: icons.app,
  title: app.getName(),
  preload: PRELOAD_PATH,
  loadFile: WINDOW_URL,
};

// ━━ FOR DEVELOPMENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
if (ON_DEVELOPMENT) {
  process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = true;
}
// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// ━━ APPLICATION SECURITY SETTINGS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » Default Squirrel.Windows event handler for main procces.
services.squirrel.startup(app);

// » Disable GPU Acceleration for Windows 7
if (os.release().startsWith('6.1')) {
  app.disableHardwareAcceleration();
}

// » Set application name for Windows 10+ notifications
if (process.platform === 'win32') {
  app.setAppUserModelId(app.getName());
}

// » Prevent multiple instances of the app
if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(0);
}

// ━━ SET APPLICATION ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
app.setAboutPanelOptions({
  applicationName: app.getName(),
  applicationVersion: app.getVersion(),
  copyright: 'Copyright © 2014-2022 BRSoft, LLC',
  credits: 'Team: BRSoft Electron',
  iconPath: icons.about,
});

// ━━ APP METHODS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » This method will be called when Electron has finished
// » initialization and is ready to create browser windows.
// » Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  system.tray({
    name: app.getName(),
    icon: icons.app,
    menu: system.menu.context(app),
  });
  system.window.main(windowSetting);
  app.on('activate', () => {
    // » On macOS it's common to re-create a window in the app when the
    // » dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) system.window.main(windowSetting);
  });
});

// ━━ APP EVENTS LISTENER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Emitted when the application has finished basic startup.
 *
 * NOTE: Quit when all windows are closed, except on macOS. There, it's common for
 * applications and their menu bar to stay active until the user quits explicitly
 * with Cmd + Q.
 *
 * @type {app} - Electron API
 * @listens app#window-all-closed - window-all-closed
 */
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});

/**
 * Emitted once, when Electron has finished initializing.
 *
 * @type {app} - Electron API
 * @listens app#wready - ready
 */
app.on('ready', () => {
  const handlerError = error => {
    const options = {
      title: error.name,
      content: error.message,
    };
    services.logger.error(error.message);
    system.dialog.sync.message(options);
    app.exit(1);
  };
  process.on('uncaughtException', handlerError);
  process.on('unhandledRejection', handlerError);
});

// ━━ SET AUTOUPDATER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `SHOULD_CHECK` is used to check if `autoUpdater.checkForUpdates()` should
 * be executed.
 *
 * @constant {bolean} SHOULD_CHECK
 */
const SHOULD_CHECK = app.isPackaged && services.squirrel.onSquirrel;

/**
 * A `Object` with Github repository information.
 *
 * @constant {object} github
 */
const github = {
  owner: 'vgbrsedatu',
  name: 'electron-vite-react',
};

/**
 * A `Object` with Github repository information.
 *
 * @constant {object} github
 */
const version = app.getVersion();

/**
 * A `Object` with information for configuring `autoUpdater.setFeedURL()`
 *
 * @constant {object} FeedURLOptions
 */
const FeedURLOptions = services.update.createOptions({ github, version });

// » Set feed url on autoupdater module
autoUpdater.setFeedURL(FeedURLOptions);

// » Prevent asks the server if there is an update if the application is not
// » packaged or some `Squirrel.Windows` is executed.
if (SHOULD_CHECK) {
  autoUpdater.checkForUpdates();
}

// ━━ AUTOUPDATER EVENTS LISTENER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Emitted when checking if an update has started.
 *
 * @type {autoUpdater} - Electron API
 * @listens autoUpdater#checking-for-update
 *
 */
autoUpdater.on('checking-for-update', () => {
  services.logger.info('checking-for-update');
});

/**
 * Emitted when there is an available update. The update is downloaded
 * automatically.
 *
 * @type {autoUpdater} - Electron API
 * @listens autoUpdater#update-available
 *
 */
autoUpdater.on('update-available', () => {
  services.logger.info('update-available');
});

/**
 * Emitted when there is no available update.
 *
 * @type {autoUpdater} - Electron API
 * @listens autoUpdater#update-not-available
 *
 */
autoUpdater.on('update-not-available', () => {
  services.logger.info('update-not-available');
});

/**
 * Emitted when there is an error while updating.
 *
 * @type {autoUpdater} - Electron API
 * @listens autoUpdater#error
 *
 */
autoUpdater.on('error', error => {
  services.logger.error('update-on-error', error);
});

/**
 * This event is emitted after a user calls `quitAndInstall()`.
 *
 * When this API is called, the before-quit event is not emitted before all
 * windows are closed. As a result you should listen to this event if you wish
 * to perform actions before the windows are closed while a process is quitting,
 * as well as listening to before-quit.
 *
 * @type {autoUpdater} - Electron API
 * @listens autoUpdater#before-quit-for-update
 *
 */
autoUpdater.on('before-quit-for-update', () => {
  services.logger.info('before-quit-for-update');
});

/**
 * Emitted when an update has been downloaded.
 *
 * On Windows only `releaseName` is available.
 *
 * NOTE: Note: It is not strictly necessary to handle this event. A successfully
 * downloaded update will still be applied the next time the application starts.
 *
 * @type {autoUpdater} - Electron API
 * @listens AutoUpdater#update-downloaded
 * @param {Electron.Event} event - A electron event.
 * @param {string} releaseNotes - The release notes.
 * @param {string} releaseName - The release name.
 * @param {Date} releaseDate - The release Date.
 * @param {string} updateURL - The release notes.
 *
 */
autoUpdater.on('update-downloaded', (event, releaseNotes, releaseName) => {
  const message = process.platform === 'win32' ? releaseNotes : releaseName;
  services.logger.info('update-downloaded', message);
  const options = {
    type: 'info',
    buttons: ['Restart', 'Later'],
    title: 'Application Update',
    message,
    detail: 'A new version has been downloaded. Restart the application to apply the updates.',
  };

  system.dialog.async.message(options).then(value => {
    if (value.response === 0) autoUpdater.quitAndInstall();
  });
});

// ━━ IPC'S EVENTS LISTENER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » NOTE: Inter-Process Communication
/**
 * Listen to `opacity` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#opacity
 * @param {IpcMainEvent} event -
 * @param {number} opacity -
 *
 */
ipcMain.on('opacity', (event, opacity) => {
  const sender = BrowserWindow.fromWebContents(event.sender);
  sender.setOpacity(opacity);
});

/**
 * Listen to `window-minimize` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#window-minimize
 */
ipcMain.on('window-minimize', event => {
  const sender = BrowserWindow.fromWebContents(event.sender);
  sender.minimize();
});

ipcMain.on('window-maximize', event => {
  const sender = BrowserWindow.fromWebContents(event.sender);
  if (sender.isMaximized()) {
    sender.restore();
  } else {
    sender.maximize();
  }
});

/**
 * Listen to `window-close` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#owindow-close
 */
ipcMain.on('window-close', event => {
  const sender = BrowserWindow.fromWebContents(event.sender);
  sender.close();
});

/**
 * Listen to `window-open` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#window-open
 */
ipcMain.on('window-open', (event, view) => {
  const sender = BrowserWindow.fromWebContents(event.sender);
  system.window.modal({ ...windowSetting, view, parent: sender });
});

/**
 * Listen to `notification` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#notification
 */
ipcMain.on('notification', (event, payload) => {
  const notification = system.notification({
    ...payload,
    urgency: payload.urgency || 0,
    icon: icons[payload.icon] || icons.app,
  });
  notification.show();
});

/**
 * Listen to `dialog:message` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#dialog:message
 */
ipcMain.handle('dialog:message', (event, payload) => {
  const window = BrowserWindow.fromId(event.sender.id);
  const selection = system.dialog.sync.message(window, {
    ...payload,
    icon: icons[payload.icon] || icons.app,
  });
  return selection;
});

/**
 * Listen to `theme:current` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#theme:current
 */
ipcMain.on('theme:current', event => {
  const source = nativeTheme.themeSource;
  const shouldUseDark = nativeTheme.shouldUseDarkColors;
  const current = services.theme.getCurrent(source, shouldUseDark);
  event.returnValue = current;
});

/**
 * Listen to `theme-mode:toggle` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#theme-mode:toggle
 */
ipcMain.on('theme:toggle', (event, theme) => {
  const onDark = theme === 'dark';
  if (onDark) {
    nativeTheme.themeSource = 'light';
    event.reply('theme:toggle.reply', 'light');
  } else {
    nativeTheme.themeSource = 'dark';
    event.reply('theme:toggle.reply', 'dark');
  }
});

/**
 * Listen to `theme-mode:toggle` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#theme-mode:toggle
 */
ipcMain.on('theme:choose', (event, choose) => {
  const sources = ['system', 'light', 'dark'];
  const theme = sources.includes(choose) ? choose : 'system';
  nativeTheme.themeSource = theme;
  const shouldUseDark = nativeTheme.shouldUseDarkColors;
  const current = services.theme.getCurrent({ theme, shouldUseDark });
  event.reply('theme:toggle.reply', current);
});

/**
 * Listen to `user:delete` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#user:delete
 */
ipcMain.on('user:delete', (event, id) => {
  const response = system.dialog.sync.message({
    message: '¿Estas seguro que deseas eliminar este perfil?',
    type: 'question',
    buttons: ['No estoy seguro', 'Sí'],
    title: 'Administrador de usuarios',
    defaultId: 0,
    cancelId: 0,
  });
  if (response === 1) {
    addons.firebase
      .deleteUser(id)
      .then(() => {
        event.reply('user:delete.reply', { success: true, error: false });
      })
      .catch(err => {
        event.reply('user:delete.reply', { success: false, error: err.message });
      });
  }
});

/**
 * Listen to `user:create` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#user:create
 */
ipcMain.on('user:create', (event, payload) => {
  // services.logger.debug(payload);
  addons.firebase
    .createUser(payload)
    .then(() => {
      services.logger.debug('User created');
      event.reply('user:create.reply', { success: true, error: false });
    })
    .catch(err => {
      services.logger.debug('User not created');
      services.logger.debug(err);
      event.reply('user:create.reply', { success: false, error: err.message });
    });
});

/**
 * Listen to `user:update` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#user:update
 */
ipcMain.on('user:update', (event, payload) => {
  addons.firebase
    .updateUser(payload)
    .then(() => {
      services.logger.debug('User updated');
      event.reply('user:update.reply', { success: true, error: false });
    })
    .catch(err => {
      services.logger.debug('User not updated');
      services.logger.debug(err);
      event.reply('user:update.reply', { success: false, error: err.message });
    });
});

/**
 * Listen to `user:password` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#user:password
 */
ipcMain.on('user:password', (event, payload) => {
  services.logger.debug(payload);
  addons.firebase
    .updatePassword(payload)
    .then(() => {
      services.logger.debug('Password updated');
      event.reply('user:password.reply', { success: true, error: false });
    })
    .catch(err => {
      services.logger.debug('Password not updated');
      services.logger.debug(err);
      event.reply('user:password.reply', { success: false, error: err.message });
    });
});

/**
 * Listen to `image:upload` channel.
 *
 * @type {ipcMain} - Electron API
 * @listens ipcMain#image:upload
 */
ipcMain.handle('image:upload', (event, { mime, raw, name, temporary }) => { // eslint-disable-line arrow-body-style, prettier/prettier
  return new Promise((resolve, reject) => {
    addons.firebase
      .uploadFromBlob({ mime, raw, name, temporary })
      .then(result => {
        resolve(result);
      })
      .catch(err => {
        reject(err.message);
      });
  });
});
