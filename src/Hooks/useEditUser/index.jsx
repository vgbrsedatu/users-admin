/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useEditUser` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect, useReducer } from 'react';

// » IMPORT CUSTOM HOOKS
import reducer from './reducer';
import * as actions from './actions';

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
 * The `update` property, when executing the `toFirebase` function can change it to
 * `true` or `false.`
 *
 * The `loading` property, the current user data will change it to `false.`
 *
 * The `error` property, if there is an error in the hook, it will change to a
 * `string` with the value of the error.
 *
 * @typedef   {object}  State
 * @property  {User}    update  - Object that stores the values of the user that will be updated.
 * @property  {boolean} success - El valore inicial es `null`.
 * @property  {boolean} loading - El valore inicial es `true`.
 * @property  {string}  error   - El valore inicial es `null`.
 */

/**
 * The returns value from `useUser`
 *
 * @typedef   {object}                        EditUserResponse
 * @property  {(name:string, value:*)=>void}  dispacher        - Auxiliary function for the reducer.
 * @property  {()=>void}                      toFirebase       - Function that update the new state in Firebase.
 * @property  {State}                         data             - The current state.
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * @constant {State} initial
 */
const initial = {
  update: {},
  success: null,
  loading: true,
  error: null,
};

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useUser` it's a custom React hook witch communicates firebase api.
 *
 * @returns {EditUserResponse} An object to manage the users.
 */
const useEditUser = user => {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    dispatch(actions.SET_UPDATE(user));
    dispatch(actions.SET_LOADING(false));
  }, [user]);

  useEffect(() => {
    const handleEvent = (event, payload) => {
      dispatch(actions.SET_SUCCESS, payload.success);
      dispatch(actions.SET_ERROR, payload.error);
    };
    window.appRuntime.subscribe('user:edit.reply', handleEvent);
    return () => {
      window.appRuntime.removeAll('user:edit.reply');
    };
  }, []);

  const toFirebase = () => {
    window.appRuntime.send('user:edit', { update: state.update });
  };

  const dispacher = (name, value) => {
    const action = actions[name];
    dispatch(action(value));
  };

  return { dispacher, toFirebase, data: state };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useEditUser;
