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
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_SUCCESS = value => ({
  type: types.SET_SUCCESS,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `loading` property in the `state`, the `payload` parameter must
 * be `boolean`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_LOADING = value => ({
  type: types.SET_LOADING,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `error` property in the `state`, the `payload` parameter must
 * be `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_ERROR = value => ({
  type: types.SET_ERROR,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `created` property in the `state`, the `payload` parameter must
 * be `boolean`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_CREATED = value => ({
  type: types.SET_CREATED,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `updated` property in the `state`, the `payload` parameter must
 * be `boolean`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_UPDATED = value => ({
  type: types.SET_UPDATED,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `deleted` property in the `state`, the `payload` parameter must
 * be `boolean`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_DELETED = value => ({
  type: types.SET_DELETED,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `user` property in the `state`, the `payload` parameter must
 * be `Object`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_USER = value => ({
  type: types.SET_USER,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `name` property in the `state`, the `payload` parameter must be
 * `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_NAME = value => ({
  type: types.SET_NAME,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `email` property in the `state`, the `payload` parameter must be
 * `string`.
 *
 * @param {boolean} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_EMAIL = value => ({
  type: types.SET_EMAIL,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `password` property in the `state`, the `payload` parameter must
 * be `string`.
 *
 * @param {boolean} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_PASSWORD = value => ({
  type: types.SET_PASSWORD,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `phone` property in the `state`, the `payload` parameter must be
 * `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_PHONE = value => ({
  type: types.SET_PHONE,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `photo` property in the `state`, the `payload` parameter must be
 * `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_PHOTO = value => ({
  type: types.SET_PHOTO,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `verified` property in the `state`, the `payload` parameter must
 * be `boolean`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: boolean }} Type of action to be executed in the reducer.
 */
const SET_VERIFIED = value => ({
  type: types.SET_VERIFIED,
  payload: value === 'true',
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `disabled` property in the `state`, the `payload` parameter must
 * be `boolean`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: boolean }} Type of action to be executed in the reducer.
 */
const SET_DISABLED = value => ({
  type: types.SET_DISABLED,
  payload: value === 'true',
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `role` property in the `state`, the `payload` parameter must be
 * `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_ROLE = value => ({
  type: types.SET_ROLE,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `company.name` property in the `state`, the `payload` parameter
 * must be `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_COMPANY_NAME = value => ({
  type: types.SET_COMPANY_NAME,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `company.title` property in the `state`, the `payload` parameter
 * must be `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_COMPANY_TITLE = value => ({
  type: types.SET_COMPANY_TITLE,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `company.location` property in the `state`, the `payload`
 * parameter must be `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_COMPANY_LOCATION = value => ({
  type: types.SET_COMPANY_LOCATION,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `company.department` property in the `state`, the `payload`
 * parameter must be `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_COMPANY_DEPARTMENT = value => ({
  type: types.SET_COMPANY_DEPARTMENT,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `address.street` property in the `state`, the `payload` parameter must
 * be `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_ADDRESS_STREET = value => ({
  type: types.SET_ADDRESS_STREET,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `address.number` property in the `state`, the `payload`
 * parameter must be `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_ADDRESS_NUMBER = value => ({
  type: types.SET_ADDRESS_NUMBER,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `address.settlement` property in the `state`, the `payload`
 * parameter must be `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_ADDRESS_SETTLEMENT = value => ({
  type: types.SET_ADDRESS_SETTLEMENT,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `address.postal` property in the `state`, the `payload` parameter
 * must be `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_ADDRESS_POSTAL = value => ({
  type: types.SET_ADDRESS_POSTAL,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `address.municipality` property in the `state`, the `payload`
 * parameter must be `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_ADDRESS_MUNICIPALITY = value => ({
  type: types.SET_ADDRESS_MUNICIPALITY,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `address.locality` property in the `state`, the `payload`
 * parameter must be `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_ADDRESS_LOCALITY = value => ({
  type: types.SET_ADDRESS_LOCALITY,
  payload: value,
});

/**
 * Auxiliary function for the reducer.
 *
 * Update the `address.state` property in the `state`, the `payload` parameter
 * must be `string`.
 *
 * @param {string} value - The new value that the state will take.
 * @returns {{ type: string, payload: string }} Type of action to be executed in the reducer.
 */
const SET_ADDRESS_STATE = value => ({
  type: types.SET_ADDRESS_STATE,
  payload: value,
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
