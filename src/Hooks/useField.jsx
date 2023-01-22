/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useField` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect, useState } from 'react';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useField`.
 *
 * @typedef   {object}       fieldHook
 * @property  {string}       name       - The field name.
 * @property  {string}       type       - The field type.
 * @property  {string}       value      - The field value.
 * @property  {(e) => void}  onChange   - A function to update `value`.
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useField` it's a custom React hook, which can be used for form handling.
 *
 * @Hook
 * @param   {object}  options - objeto para configurar el gancho.
 * @param   {string}  options.name - The field name.
 * @param   {string}  options.type - The field type.
 * @param   {string}  options.initial - The initial field value.
 * @returns {fieldHook} An object to manage and field state.
 * @example
 * ```js
 *  const email = useField({ name: 'email', type: 'email', initial: user.email });
 *  <input {...email} />
 * ```
 *
 */
const useField = ({ name, type, initial }) => {
  const [value, setValue] = useState(initial || '');

  useEffect(() => {
    setValue(initial);
  }, [initial]);

  const onChange = e => {
    setValue(e.target.value);
  };
  return { name, type, value, onChange };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useField;
