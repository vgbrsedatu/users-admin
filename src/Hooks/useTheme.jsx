/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useTheme` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect } from 'react';

// » IMPORT CUSTOM HOOKS
import useLocalStorage from './useLocalStorage';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useTheme`
 *
 * @typedef   {object}                  themeHook
 * @property  {'dark'|'light'}          theme         - The current value of `theme`.
 * @property  {() => void}              toogleTheme   - A function to change the value of `theme`.
 * @property  {(choose:string) => void} chooseTheme   - A function to choose the value of `theme`, allowed values are `light` `dark` or `system`.
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useTheme` it's a custom React hook witch communicates with the
 * `electron` api, used to manages scheme color app.
 *
 * @returns {themeHook} Returns a stateful value, and a function to update it.
 */
const useTheme = () => {
  const [theme, setTheme] = useLocalStorage('theme', null);

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
      window.appRuntime.removeAll('theme:toggle.reply');
    };
  }, [setTheme]);

  useEffect(() => {
    const handleEvent = (event, payload) => {
      setTheme(payload);
    };
    window.appRuntime.subscribe('theme:choose.reply', handleEvent);
    return () => {
      window.appRuntime.removeAll('theme:choose.reply');
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
