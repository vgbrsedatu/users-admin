/**
 * @author Victor Giovanni Beltrán Rodríguez.
 * @file Manages all menus for electron app.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT ELECTRON APIS
import { Menu } from 'electron';

// ━━	MODULE	━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `context()` function generally, the template is an array of options for
 * constructing a MenuItem. The usage can be referenced above.
 *
 * @private
 * @example createTray(options);
 *
 */
const context = app =>
  Menu.buildFromTemplate([
    {
      label: 'Cerrar',
      type: 'normal',
      click: () => {
        app.quit();
      },
    },
  ]);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { context }; // eslint-disable-line import/prefer-default-export
