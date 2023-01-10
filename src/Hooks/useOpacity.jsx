/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useOpacity` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect } from 'react';

// » IMPORT CUSTOM HOOKS
import useStorage from './useStorage';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useOpacity`
 *
 * @typedef   {object}    OpacityResponse
 * @property  {string}    opacity         - The `opacity` value.
 * @property  {(value:string) => void}  changeOpacity   - A function to change `opacity` state.
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useOpacity` it's a custom React hook witch communicates with the
 * `electron` api, used to manages opacity state.
 *
 * @returns {OpacityResponse} An object to manage the opacity state.
 */
const useOpacity = () => {
  const [opacity, setOpacity] = useStorage('opacity', 1);

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
