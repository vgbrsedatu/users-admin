/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useOpacity` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect, useState } from 'react';

// » IMPORT CUSTOM HOOKS
import { getUser } from '../services/firebase/api/users';

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
const useUser = uid => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(true);

  useEffect(() => {
    getUser(uid)
      .then(response => {
        setUser(response);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
      });
  }, [uid]);

  return { user, loading, error };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useUser;
