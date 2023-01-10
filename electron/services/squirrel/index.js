/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages the squirrel service for electron app.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT NATIVE NODE MODULES
const path = require('path');
const fs = require('fs');

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `App` type It's an electron module that control application event
 * lifecycle.
 *
 * @typedef {import('electron').App} App
 */

// ━━	MODULE	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `onSquirrel` constant, detects if the application is installed by
 * `Squirrel-installed`, at runtime.
 *
 * @constant {boolean} onSquirrel
 */
const onSquirrel = fs.existsSync(path.resolve(path.dirname(process.execPath), '..', 'update.exe'));

/**
 * The `startup()` function it is a handler for default Squirrel.Windows
 * event handler for your Electron apps.
 *
 * @private
 * @param   {App} app - The `app` electron module.
 * @returns {boolean} Returns `true` if some squirrel event run, the otherwise false.
 * @example const { app } = require('electron');
 * startup(app);
 *
 */
const startup = app => {
  if (process.platform !== 'win32') {
    return false;
  }
  const command = process.argv[1];
  switch (command) {
    case '--squirrel-install':
    case '--squirrel-updated':
      // Optionally do things such as:
      //
      // - Install desktop and start menu shortcuts
      // - Add your .exe to the PATH
      // - Write to the registry for things like file associations and
      //   explorer context menus

      // Always quit when done
      app.quit();

      return true;
    case '--squirrel-uninstall':
      // Undo anything you did in the --squirrel-install and
      // --squirrel-updated handlers

      // Always quit when done
      app.quit();

      return true;
    case '--squirrel-obsolete':
      // This is called on the outgoing version of your app before
      // we update to the new version - it's the opposite of
      // --squirrel-updated
      app.quit();
      return true;
    default:
      return false;
  }
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { onSquirrel };
export { startup };
