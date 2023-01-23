/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `actions` for `useUser` custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
import * as types from './types';

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Auxiliary function for the reducer.
 *
 * Update the `success` property in the `state`, the `payload` parameter must
 * be `boolean`.
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
 * Update the `loading` property in the `state`, the `payload` parameter must
 * be `boolean`.
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
 * Update the `error` property in the `state`, the `payload` parameter must
 * be `string`.
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
 * Update the `created` property in the `state`, the `payload` parameter must
 * be `boolean`.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {boolean} payload.payload - The new value that the state will take.
 */
const SET_CREATED = payload => ({
  type: types.SET_CREATED,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `updated` property in the `state`, the `payload` parameter must
 * be `boolean`.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {boolean} payload.payload - The new value that the state will take.
 */
const SET_UPDATED = payload => ({
  type: types.SET_UPDATED,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `deleted` property in the `state`, the `payload` parameter must
 * be `boolean`.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {boolean} payload.payload - The new value that the state will take.
 */
const SET_DELETED = payload => ({
  type: types.SET_DELETED,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `user` property in the `state`, the `payload` parameter must
 * be `Object`.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {object} payload.payload - The new value that the state will take.
 */
const SET_USER = payload => ({
  type: types.SET_USER,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `name` property in the `state`, the `payload` parameter must be
 * `string`.
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
 * Update the `email` property in the `state`, the `payload` parameter must be
 * `string`.
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
 * Update the `password` property in the `state`, the `payload` parameter must
 * be `string`.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_PASSWORD = payload => ({
  type: types.SET_PASSWORD,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `phone` property in the `state`, the `payload` parameter must be
 * `string`.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_PHONE = payload => ({
  type: types.SET_PHONE,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `photo` property in the `state`, the `payload` parameter must be
 * `string`.
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
 * Update the `verified` property in the `state`, the `payload` parameter must
 * be `boolean`.
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
 * Update the `disabled` property in the `state`, the `payload` parameter must
 * be `boolean`.
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
 * Update the `role` property in the `state`, the `payload` parameter must be
 * `string`.
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
 * Update the `company.name` property in the `state`, the `payload` parameter
 * must be `string`.
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
 * Update the `company.title` property in the `state`, the `payload` parameter
 * must be `string`.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_COMPANY_TITLE = payload => ({
  type: types.SET_COMPANY_TITLE,
  payload,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `company.location` property in the `state`, the `payload`
 * parameter must be `string`.
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
 * Update the `company.department` property in the `state`, the `payload`
 * parameter must be `string`.
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
 * Update the `error` property in the `state`, the `payload` parameter must
 * be `string`.
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
 * Update the `address.number` property in the `state`, the `payload`
 * parameter must be `string`.
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
 * Update the `address.settlement` property in the `state`, the `payload`
 * parameter must be `string`.
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
 * Update the `address.postal` property in the `state`, the `payload` parameter
 * must be `string`.
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
 * Update the `address.municipality` property in the `state`, the `payload`
 * parameter must be `string`.
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
 * Update the `address.locality` property in the `state`, the `payload`
 * parameter must be `string`.
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
 * Update the `address.state` property in the `state`, the `payload` parameter
 * must be `string`.
 *
 * @param {object} payload
 * @param {string} payload.type - Type of action to be executed in the reducer.
 * @param {string} payload.payload - The new value that the state will take.
 */
const SET_ADDRESS_STATE = payload => ({
  type: types.SET_ADDRESS_STATE,
  payload,
});

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { SET_SUCCESS };
export { SET_LOADING };
export { SET_ERROR };
export { SET_CREATED };
export { SET_UPDATED };
export { SET_DELETED };

export { SET_USER };
export { SET_NAME };
export { SET_EMAIL };
export { SET_PASSWORD };
export { SET_PHONE };
export { SET_PHOTO };
export { SET_VERIFIED };
export { SET_DISABLED };
export { SET_ROLE };

export { SET_COMPANY_NAME };
export { SET_COMPANY_TITLE };
export { SET_COMPANY_LOCATION };
export { SET_COMPANY_DEPARTMENT };

export { SET_ADDRESS_STREET };
export { SET_ADDRESS_NUMBER };
export { SET_ADDRESS_SETTLEMENT };
export { SET_ADDRESS_POSTAL };
export { SET_ADDRESS_LOCALITY };
export { SET_ADDRESS_MUNICIPALITY };
export { SET_ADDRESS_STATE };
