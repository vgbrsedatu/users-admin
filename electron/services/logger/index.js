/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manages the logger service for electron app.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
import logger from 'electron-log';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Check if node enviroment is `development`.
 *
 * @constant {bolean} LEVEL
 */

const ON_DEVELOPMENT = process.env.NODE_ENV === 'development';

/**
 * Levels for file logger. The different levels that sopgg handles are:
 *
 * - `error`.
 * - `warn`.
 * - `info`.
 * - `verbose`.
 * - `debug`.
 * - `silly`.
 *
 * @constant {'info'| 'silly'} LEVEL
 */
const LEVEL = ON_DEVELOPMENT ? 'info' : 'silly';

/**
 * Formats for file and console logger.
 *
 * @constant {Object} LEVEL
 * @property {string} console - Console format
 * @property {string} file - File format
 */
const FORMATS = {
  console: '> {text}',
  file: `[{y}-{m}-{d} {h}:{i}:{s}.{ms}] [{level}]\t\t{text}`,
};

// » Set logger before export.
logger.transports.file.level = LEVEL;
logger.transports.console.useStyles = true;
logger.transports.console.format = FORMATS.console;
logger.transports.file.format = FORMATS.file;

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default logger;
