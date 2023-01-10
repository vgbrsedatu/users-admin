/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useNotification` a custom React Hook.
 */

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useNotification`
 *
 * @typedef   {() => void}  NotificationResponse
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * An object to configure a system notification.
 *
 * @constant {Object}
 */
const options = {
  title: 'Custom notification',
  body: 'Hello I am a notification',
  urgency: 0,
  icon: 'app',
};

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useNotification` it's a custom React hook witch communicates with the
 * `electron` api.
 *
 * @returns {NotificationResponse} A function to activate a system notification.
 */
const useNotification = () => {
  const send = () => {
    window.appRuntime.send('notification', options);
  };

  return send;
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useNotification;
