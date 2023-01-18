/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useDeleteUser` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect, useState } from 'react';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The returns value from `useDeleteUser`
 *
 * The property `success`, the initial value is null, when using the
 * `deleteUser` function depending on the response, it can be `true`, if the
 * user was successfully deleted otherwise it is `false`.
 *
 * The property `error`, the initial value is null, when using the
 * `deleteUser` function depending on the response, it can be `string`
 * containing the error message, if the user was successfully deleted otherwise
 * it is `false`.
 *
 * @typedef   {object}                deleteUserHook
 * @property  {Bolean|null}           success         - The initial value is `null`.
 * @property  {string|null}           error           - The initial value is `null`.
 * @property  {(id: string) => void}  deleteUser      - Function to delete a user.
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useUser` it's a custom React hook witch communicates firebase api.
 *
 * @returns {deleteUserHook} An object to manage the users.
 */
const useDeleteUser = () => {
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleEvent = (event, payload) => {
      setSuccess(payload.success);
      setError(payload.error);
    };
    window.appRuntime.subscribe('user:delete.reply', handleEvent);
    return () => {
      window.appRuntime.removeAll('user:delete.reply');
    };
  }, []);

  const deleteUser = id => {
    window.appRuntime.send('user:delete', id);
  };

  return {
    deleteUser,
    success,
    error,
  };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useDeleteUser;
