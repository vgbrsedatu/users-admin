/**
 * @author Victor Giovanni Beltrán Rodríguez.
 * @file Manages electron native system dialogs the modules are separated by
 * synchronous and asynchronous.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
import * as async from './async';
import * as sync from './sync';

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { async };
export { sync };
