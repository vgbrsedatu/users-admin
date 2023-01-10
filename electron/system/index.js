/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Main file to export all electron system to main proccess.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import * as dialog from './dialog';
import * as file from './file';
import * as menu from './menu';
import notification from './notification';
import tray from './tray';

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { dialog };
export { file };
export { menu };
export { notification };
export { tray };
