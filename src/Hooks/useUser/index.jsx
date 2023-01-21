/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useUser` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect, useReducer } from 'react';

// » IMPORT MODULES
import { getUser } from '../../services/firebase/api/users';
import reducer from './reducer';
import * as actions from './actions';

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
 * The returns value from `useUser`
 *
 *
 * @typedef   {object}  state
 * @property  {user}    user    - Object that stores the values of the user that will be updated.
 * @property  {boolean} created - Used for the create user operation. The initial value is `null`.
 * @property  {boolean} updated - Used for the update user operation. The initial value is `null`.
 * @property  {boolean} deleted - Used for the delete user operation. The initial value is `null`.
 * @property  {boolean} loading - Used for data loading logic. The initial value is `true`.
 * @property  {string}  error   - Used to monitor all operating errors. The initial value is `null`.
 */

/**
 * Auxiliary function for the reducer.
 *
 * @typedef   {(name: string, value: any) => void} dispacher
 */

/**
 * Function for managing inputs.
 *
 * @typedef   {({ name, type, value } :
 *  { name: string, type: string, value: any }) => {
 *    name: string,
 *    type: string,
 *    value: any,
 *    onChange: () => void,
 *  }} fields
 */

/**
 * The returns value from `useUser`
 *
 * @typedef   {object}              userHook
 * @property  {dispacher}           dispacher   - Auxiliary function for the reducer.
 * @property  {fields}              fields      - Function for managing inputs.
 * @property  {()=>void}            createUser  - Function to create a user.
 * @property  {()=>void}            updatedUser - Function to update a user.
 * @property  {(uid:string)=>void}  deleteUser  - Function to delete a user.
 * @property  {state}               state       - The current state.
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The initial value of the state
 *
 * @constant {state} initial
 */
const initial = {
  user: {
    email: '',
    name: '',
    password: null,
    photo: '/assets/images/svg/default.svg',
    mobile: '',
    role: '',
    verified: '',
    disabled: '',
    company: {
      name: '',
      department: '',
      title: '',
      location: '',
    },
    address: {
      street: '',
      number: '',
      settlement: '',
      postal: '',
      municipality: '',
      locality: '',
      state: '',
    },
  },
  created: null,
  updated: null,
  deleted: null,
  loading: true,
  error: null,
};

// ━━ CUSTOM REACT HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useUser` it's a custom React hook witch communicates firebase api.
 *
 * @returns {userHook} An object to manage the users.
 */
const useUser = uid => {
  const [state, dispatch] = useReducer(reducer, initial);

  useEffect(() => {
    getUser(uid)
      .then(response => {
        dispatch(actions.SET_USER(response));
        dispatch(actions.SET_LOADING(false));
      })
      .catch(err => {
        dispatch(actions.SET_ERROR, err.message);
      });
  }, [uid]);

  useEffect(() => {
    const handleEvent = (event, payload) => {
      dispatch(actions.SET_CREATED, payload.success);
      dispatch(actions.SET_ERROR, payload.error);
      dispatch(actions.SET_USER, payload.user);
    };
    window.appRuntime.subscribe('user:create.reply', handleEvent);
    return () => {
      window.appRuntime.removeAll('user:create.reply');
    };
  }, []);

  useEffect(() => {
    const handleEvent = (event, payload) => {
      dispatch(actions.SET_UPDATED, payload.success);
      dispatch(actions.SET_ERROR, payload.error);
      dispatch(actions.SET_USER, payload.user);
    };
    window.appRuntime.subscribe('user:updated.reply', handleEvent);
    return () => {
      window.appRuntime.removeAll('user:updated.reply');
    };
  }, []);

  useEffect(() => {
    const handleEvent = (event, payload) => {
      dispatch(actions.SET_DELETED, payload.success);
      dispatch(actions.SET_ERROR, payload.error);
      dispatch(actions.SET_USER, initial.user);
    };
    window.appRuntime.subscribe('user:delete.reply', handleEvent);
    return () => {
      window.appRuntime.removeAll('user:delete.reply');
    };
  }, []);

  const dispacher = (name, value) => {
    const action = actions[name];
    dispatch(action(value));
  };

  const fields = ({ name, type, value }) => {
    const onChange = e => {
      const { name: NAME, value: VALUE } = e.target;
      const action = `SET_${NAME}`;
      dispacher(action, VALUE);
    };

    return {
      name,
      type: type || 'text',
      value,
      onChange,
    };
  };

  const createUser = () => {
    window.appRuntime.send('user:create', state.user);
  };

  const updatedUser = () => {
    window.appRuntime.send('user:updated', { update: state.update });
  };

  const deleteUser = id => {
    window.appRuntime.send('user:delete', id);
  };

  return { dispacher, fields, createUser, updatedUser, deleteUser, state };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useUser;
