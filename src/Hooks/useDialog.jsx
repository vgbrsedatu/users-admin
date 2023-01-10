/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useDialog` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState } from 'react';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useDialog`
 *
 * @typedef   {object}      DialogResponse
 * @property  {string}      choice         - The value chosen by the user.
 * @property  {() => void}  dialog         - A function to open a modal window.
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * An object with options for `user` and configuration of `invoke`
 *
 * @constant {object}
 */
const options = {
  user: ['Cats 🐱', 'Dogs 🐶', 'Pigs 🐷'],
  invoke: {
    message: 'What are your favorite animals',
    type: 'question',
    buttons: ['Cats', 'Dogs', 'Or pigs'],
    defaultId: 0,
    title: 'And the question is...',
    detail: 'We want to know your likes',
    icon: 'app',
    textWidth: 1,
    normalizeAccessKeys: true,
  },
};

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useDialog` it's a custom React hook witch communicates with the
 * `electron` api.
 *
 * @returns {DialogResponse} An object to interact with a modal window.
 */
const useDialog = () => {
  const [choice, setChoice] = useState('');

  const dialog = async () => {
    const choiced = await window.appRuntime.invoke('dialog:message', options.invoke);
    setChoice(options.user[choiced]);
  };

  return { choice, dialog };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useDialog;
