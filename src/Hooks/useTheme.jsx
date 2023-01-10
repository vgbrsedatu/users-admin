/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useTheme` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect } from 'react';

// » IMPORT CUSTOM HOOKS
import useStorage from './useStorage';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useTheme`
 *
 * @typedef   {object}                  ThemeResponse
 * @property  {'dark'|'light'}          theme         - The current value of `theme`.
 * @property  {() => void}              toogleTheme   - A function to change the value of `theme`.
 * @property  {(choose:string) => void} chooseTheme   - A function to choose the value of `theme`, allowed values are `light` `dark` or `system`.
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useTheme` it's a custom React hook witch communicates with the
 * `electron` api, used to manages versions state.
 *
 * @returns {ThemeResponse} Information about the versions application.
 */
const useTheme = () => {
  const [theme, setTheme] = useStorage('theme', null);

  useEffect(() => {
    const current = window.appRuntime.sendSync('theme:current');
    if (theme !== current) {
      setTheme(current);
    }
  }, [theme, setTheme]);

  useEffect(() => {
    const handleEvent = (event, payload) => {
      setTheme(payload);
    };
    window.appRuntime.subscribe('theme:toggle.reply', handleEvent);
    return () => {
      window.appRuntime.remove('theme:toggle.reply', handleEvent);
    };
  }, [setTheme]);

  useEffect(() => {
    const handleEvent = (event, payload) => {
      setTheme(payload);
    };
    window.appRuntime.subscribe('theme:choose.reply', handleEvent);
    return () => {
      window.appRuntime.remove('theme:choose.reply', handleEvent);
    };
  }, [setTheme]);

  const toogleTheme = () => {
    window.appRuntime.send('theme:toggle', theme);
  };

  const chooseTheme = choose => {
    window.appRuntime.send('theme:choose', choose);
  };

  return { theme, toogleTheme, chooseTheme };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useTheme;
