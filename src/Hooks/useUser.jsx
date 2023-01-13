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
 * An `object` with user information.
 *
 * @typedef   {object}  User
 * @property  {string}  email                 - User email.
 * @property  {string}  name                  - User name.
 * @property  {string}  password              - User password.
 * @property  {string}  phone                 - User phone.
 * @property  {boolean} emailVerified         - User emailVerified.
 * @property  {boolean} disabled              - User disabled.
 * @property  {string}  role                  - User role.
 * @property  {object}  company               - Information about User company.
 * @property  {string}  company.name          - User company name.
 * @property  {string}  company.department    - User company department.
 * @property  {string}  company.title         - User company title.
 * @property  {string}  company.location      - User company location.
 * @property  {object}  address               - Information about user address.
 * @property  {string}  address.street        - User address street.
 * @property  {string}  address.number        - User address number.
 * @property  {string}  address.settlement    - User address settlement.
 * @property  {string}  address.postal        - User address postal.
 * @property  {string}  address.municipality  - User address municipality.
 * @property  {string}  address.locality      - User address locality.
 * @property  {string}  address.state         - User address state.
 */

/**
 * The returns value from `useUser`
 *
 * @typedef   {object}        UserResponse
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useUser` it's a custom React hook witch communicates firebase api.
 *
 * @returns {UserResponse} An object to manage the users.
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
