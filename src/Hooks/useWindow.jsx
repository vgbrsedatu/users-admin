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
 * @typedef {object} windowHook
 * @property {boolean} maximize - If the window state is maximized, Default value is `false`.
 * @property {boolean} fullScreen - If the window state is fullscreened, Default value is `false`.
 * @property {object} controls - An object with functions to minimize maximize and close the window.
 * @property {() => void} controls.closeWindow - A function that sends a signal to ipcMain to close the window.
 * @property {() => void} controls.minimizeWindow - A function that sends a signal to ipcMain to minimize the window.
 * @property {() => void} controls.maximizeWindow - A function that sends a signal to ipcMain to maximize the window.
 * @property {(view:string) => void} controls.openWindow - A function that sends a signal to ipcMain to open a Window.
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useWindow` it's a custom React hook witch communicates with the
 * `electron` api, used to manage window states.
 *
 * @returns {windowHook}
 */
const useWindow = () => {
  const [maximize, setMaximize] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    const handler = (event, payload) => {
      setMaximize(payload);
    };
    window.appRuntime.subscribe('window-maximize', handler);
    return () => {
      window.appRuntime.removeAll('window-maximize');
    };
  }, []);

  useEffect(() => {
    const handler = (event, payload) => {
      setFullScreen(payload);
    };
    window.appRuntime.subscribe('window-fullscreen', handler);
    return () => {
      window.appRuntime.removeAll('window-fullscreen');
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

  const openWindow = view => {
    window.appRuntime.send('window-open', view);
  };

  return {
    maximize,
    fullScreen,
    controls: {
      closeWindow,
      minimizeWindow,
      maximizeWindow,
      openWindow,
    },
  };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useWindow;
