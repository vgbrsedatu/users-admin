/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `actions` for `useEditUser` custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
import * as types from './types';

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {boolean} payload.payload - The new value that the state will take.
 */
const SET_SUCCESS = payload => ({
  type: types.SET_SUCCESS,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {boolean} payload.payload - The new value that the state will take.
 */
const SET_LOADING = payload => ({
  type: types.SET_LOADING,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_ERROR = payload => ({
  type: types.SET_ERROR,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {object} payload.payload - The new value that the state will take.
 */
const SET_UPDATE = payload => ({
  type: types.SET_UPDATE,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_NAME = payload => ({
  type: types.SET_NAME,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_PHOTO = payload => ({
  type: types.SET_PHOTO,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {boolean} payload.payload - The new value that the state will take.
 */
const SET_VERIFIED = payload => ({
  type: types.SET_VERIFIED,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_MOBILE = payload => ({
  type: types.SET_MOBILE,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {boolean} payload.payload - The new value that the state will take.
 */
const SET_DISABLED = payload => ({
  type: types.SET_DISABLED,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_ROLE = payload => ({
  type: types.SET_ROLE,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_EMAIL = payload => ({
  type: types.SET_EMAIL,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_ADDRESS_STREET = payload => ({
  type: types.SET_ADDRESS_STREET,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_ADDRESS_MUNICIPALITY = payload => ({
  type: types.SET_ADDRESS_MUNICIPALITY,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_ADDRESS_NUMBER = payload => ({
  type: types.SET_ADDRESS_NUMBER,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_ADDRESS_STATE = payload => ({
  type: types.SET_ADDRESS_STATE,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_ADDRESS_LOCALITY = payload => ({
  type: types.SET_ADDRESS_LOCALITY,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_ADDRESS_SETTLEMENT = payload => ({
  type: types.SET_ADDRESS_SETTLEMENT,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_ADDRESS_POSTAL = payload => ({
  type: types.SET_ADDRESS_POSTAL,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_COMPANY_LOCATION = payload => ({
  type: types.SET_COMPANY_LOCATION,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_COMPANY_NAME = payload => ({
  type: types.SET_COMPANY_NAME,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_COMPANY_DEPARTMENT = payload => ({
  type: types.SET_COMPANY_DEPARTMENT,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_COMPANY_TITLE = payload => ({
  type: types.SET_COMPANY_TITLE,
  payload,
});

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { SET_SUCCESS };
export { SET_LOADING };
export { SET_ERROR };
export { SET_UPDATE };
export { SET_NAME };
export { SET_PHOTO };
export { SET_VERIFIED };
export { SET_MOBILE };
export { SET_DISABLED };
export { SET_ROLE };
export { SET_EMAIL };
export { SET_ADDRESS_STREET };
export { SET_ADDRESS_MUNICIPALITY };
export { SET_ADDRESS_NUMBER };
export { SET_ADDRESS_STATE };
export { SET_ADDRESS_LOCALITY };
export { SET_ADDRESS_SETTLEMENT };
export { SET_ADDRESS_POSTAL };
export { SET_COMPANY_LOCATION };
export { SET_COMPANY_NAME };
export { SET_COMPANY_DEPARTMENT };
export { SET_COMPANY_TITLE };
