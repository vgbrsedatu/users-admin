/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useOpacity` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect } from 'react';

// » IMPORT CUSTOM HOOKS
import useLocalStorage from './useLocalStorage';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useOpacity`.
 *
 * @typedef   {object}                  opacityHook
 * @property  {number}                  opacity         - The current `opacity` value.
 * @property  {(value:string) => void}  changeOpacity   - A function to update `opacity` value.
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useOpacity` it's a custom React hook witch communicates with the
 * `electron` api, used to manages opacity state.
 *
 * @returns {opacityHook} An object to manage the opacity state.
 * @example const { opacity, changeOpacity } = useOpacity('opacity', 1);
 *
 */
const useOpacity = () => {
  const [opacity, setOpacity] = useLocalStorage('opacity', 1);

  useEffect(() => {
    window.appRuntime.send('opacity', opacity);
  }, [opacity]);

  const changeOpacity = value => {
    setOpacity(parseFloat(value));
  };

  return { opacity, changeOpacity };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useOpacity;
