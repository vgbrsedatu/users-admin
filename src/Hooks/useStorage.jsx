/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useStorage` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState } from 'react';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useTheme`
 *
 * @typedef   {Map}                  StorageResponse
 * @property  {'dark'|'light'}       StorageResponse.0  - The current value of `theme`.
 * @property  {() => void}           StorageResponse.1      - A function to change the value of `theme`.
 */
// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * An object with functions to manage the `localStorage` api.
 *
 * @constant {Object} storage
 */
const storage = {
  get: key => {
    try {
      return JSON.parse(window.localStorage.getItem(key || null));
    } catch (e) {
      return null;
    }
  },

  set: (key, value) => {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      window.localStorage.clear();
    }
  },
};

/**
 * The `isFunction()` function, checks if the passed value is an `Function`.
 *
 * @param {*} value - The value to be checked.
 * @returns {boolean} Returns `true` if `value` is a `Function`; otherwise, `false`.
 * @example isFunction('Hello world'); // the expected value is false
 *
 */
const isFunction = value => ({}.toString.call(value) === '[object Function]');

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useStorage` it's a custom React hook, manage and store a state using
 * the `localStorage` api. The `useStorage` returns an array for elements to
 * hold a value assigned with the `key` parameter.
 *
 * The first element of the array is the current value of the state, and the
 * second is a function to change its value.
 *
 * @param {string} key - The name of the key you want to create/update.
 * @param {*} defaults - The default value.
 * @returns {[any, (value:any) => void]} An array with two element the `state` and `setState`.
 */
const useStorage = (key, defaults) => {
  const [store, setStore] = useState(() => {
    const item = storage.get(key);
    return item || defaults;
  });

  const setValue = value => {
    const updated = isFunction(value) ? value(store) : value;
    setStore(updated);
    storage.set(key, updated);
  };
  return [store, setValue];
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useStorage;
