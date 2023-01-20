/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useLocalStorage` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState } from 'react';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `getItem()` function that returns that key's value, or `null` if the key
 * does not exist, in the given Storage object.
 *
 * @typedef {(key: string) => string|null} getItem
 */

/**
 * The `setItem()` function of the `Storage` interface, when passed a key name
 * and value, will add that key to the given `Storage` object, or update that
 * key's value if it already exists.
 *
 * @typedef {(key: string, value: *) => void} setItem
 */

/**
 * Functions to manage the `localStorage` api.
 *
 * @typedef   {object}  storage
 * @property  {getItem} storage.getItem - Function to get the current value of the `key`.
 * @property  {setItem} storage.setItem - Function to update the value of the `key`.
 */

/**
 * The current state value.
 *
 * @typedef {string|null} store
 */

/**
 * Update the state value.
 *
 * @typedef   {(string) => void}  setValue
 */

/**
 * The returns value from `useLocalStorage`
 *
 * @typedef {[store, setValue]} localStorageHook
 */

// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * An object with functions to manage the `localStorage` api.
 *
 * @type {storage} storage
 */
const storage = {
  getItem: key => {
    try {
      return JSON.parse(window.localStorage.getItem(key || null));
    } catch (e) {
      return null;
    }
  },
  setItem: (key, value) => {
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
 * The `useLocalStorage` it's a custom React hook, manage and store a state
 * using the `localStorage` api. The `useLocalStorage` returns an array for
 * elements to hold a value assigned with the `key` parameter.
 *
 * The first element of the array is the current value of the state, and the
 * second is a function to change its value.
 *
 * @param {string} key - The name of the key you want to create/update.
 * @param {*} defaults - The default value.
 * @returns {localStorageHook} An array to manage the `localStorage` api.
 * @example const [opacity, setOpacity] = useLocalStorage('opacity', 1);
 *
 */
const useLocalStorage = (key, defaults) => {
  const [store, setStore] = useState(() => {
    const item = storage.getItem(key);
    return item || defaults;
  });

  const setValue = value => {
    const updated = isFunction(value) ? value(store) : value;
    setStore(updated);
    storage.setItem(key, updated);
  };

  return [store, setValue];
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useLocalStorage;
