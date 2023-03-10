/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useUsers` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect, useState } from 'react';

// » IMPORT CUSTOM HOOKS
import { unSubscribe } from '../services/firebase/api/users';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * An `object` with user information.
 *
 * @typedef   {object}  user
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
 * The returns value from `useUsers`
 *
 * @typedef   {object}        usersHook
 * @property  {boolean}       loading   - The initial value is `false`, it changes when the `useUsers` hook finishes loading the `users`.
 * @property  {Array.<user>}  users     - The collection of users.
 */

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useUsers` it's a custom React hook witch communicates firebase api.
 *
 * @returns {usersHook} An object to manage the users colecction.
 */
const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsuscribe = unSubscribe(snapshot => {
      const updtate = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setUsers(updtate);
      setLoading(false);
    });
    return () => {
      unsuscribe();
    };
  }, []);

  return { users, loading };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useUsers;
