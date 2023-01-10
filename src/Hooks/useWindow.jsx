/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useWindow` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect, useState } from 'react';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useWindow`
 *
 * @typedef {Object} WindowResponse
 * @property {boolean} maximize - If the window state is maximized, Default value is `false`.
 * @property {boolean} fullScreen - If the window state is fullscreened, Default value is `false`.
 * @property {function():void} closeWindow - A function that sends a signal to ipcMain to close the window.
 * @property {function():void} minimizeWindow - A function that sends a signal to ipcMain to minimize the window.
 * @property {function():void} maximizeWindow - A function that sends a signal to ipcMain to maximize the window.
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useWindow` it's a custom React hook witch communicates with the
 * `electron` api, used to manage window states.
 *
 * @returns {WindowResponse}
 */
const useWindow = () => {
  const [maximize, setMaximize] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    const handler = (event, payload) => {
      setMaximize(payload);
    };
    window.appRuntime.subscribe('window-maximize:reply', handler);
    return () => {
      window.appRuntime.remove('window-maximize:reply', handler);
    };
  }, []);

  useEffect(() => {
    const handler = (event, payload) => {
      setFullScreen(payload);
    };
    window.appRuntime.subscribe('window-fullscreen:reply', handler);
    return () => {
      window.appRuntime.remove('window-fullscreen:reply', handler);
    };
  }, []);

  const closeWindow = () => {
    window.appRuntime.send('window-close');
  };

  const minimizeWindow = () => {
    window.appRuntime.send('window-minimize');
  };

  const maximizeWindow = () => {
    window.appRuntime.send('window-maximize');
  };

  return { maximize, fullScreen, closeWindow, minimizeWindow, maximizeWindow };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useWindow;
