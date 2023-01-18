/**
 * @author Victor Giovanni Beltrán Rodríguez.
 * @file Manage electron notification settings.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT ELECTRON APIS
import { Notification } from 'electron';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `LEVELS` Object contains all urgency level of the notification.
 *
 * @private
 * @constant {object} levels
 */
const levels = {
  0: 'low',
  1: 'normal',
  2: 'critical',
};

// ━━ MAIN MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `notification()` function that show a native notification on macOS, Windows
 * and Linux.
 *
 * @private
 * @param   {object} options - Adds information to notification.
 * @param   {string} options.title - Representing the title of the notification.
 * @param   {string} options.body - Body notification.
 * @param   {string} options.icon - An icon to use in the notification.
 * @param   {number} options.urgency - The urgency level of the notification.
 * @returns {Notification} Launch a notification.
 * @example notification({
 *   title: 'A test notification',
 *   body: 'I am a body notification',
 *   urgency: 'critical',
 *   icon: 'assets/icons/app.ico',
 * });
 *
 */
const notification = ({ title, body, icon, urgency }) =>
  new Notification({
    title,
    body,
    icon,
    urgency: levels[urgency] || levels[0],
    silent: false,
  });

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default notification;
