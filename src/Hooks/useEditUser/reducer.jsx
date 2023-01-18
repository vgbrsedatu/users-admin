/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `useStorage` a custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
import * as types from './types';

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Reducer function for `useAddUser` custom React Hook.
 *
 * @param {object} state - The current value of the state.
 * @param {object} action - Action to execute.
 * @param {string} action.type - Type of action to execute.
 * @param {function} action.payload - Payload for action to execute.
 * @returns {object} The updated status.
 */
const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.SET_SUCCESS:
      return { ...state, success: payload };
    case types.SET_LOADING:
      return { ...state, loading: payload };
    case types.SET_ERROR:
      return { ...state, error: payload };
    case types.SET_UPDATE:
      return { ...state, update: payload };
    case types.SET_NAME:
      return { ...state, update: { ...state.update, name: payload } };
    case types.SET_PHOTO:
      return { ...state, update: { ...state.update, photo: payload } };
    case types.SET_VERIFIED:
      return { ...state, update: { ...state.update, verified: payload } };
    case types.SET_MOBILE:
      return { ...state, update: { ...state.update, mobile: payload } };
    case types.SET_DISABLED:
      return { ...state, update: { ...state.update, disabled: payload } };
    case types.SET_ROLE:
      return { ...state, update: { ...state.update, role: payload } };
    case types.SET_EMAIL:
      return { ...state, update: { ...state.update, email: payload } };
    case types.SET_ADDRESS_STREET:
      return {
        ...state,
        update: { ...state.update, address: { ...state.update.address, street: payload } },
      };
    case types.SET_ADDRESS_MUNICIPALITY:
      return {
        ...state,
        update: { ...state.update, address: { ...state.update.address, municipality: payload } },
      };
    case types.SET_ADDRESS_NUMBER:
      return {
        ...state,
        update: { ...state.update, address: { ...state.update.address, number: payload } },
      };
    case types.SET_ADDRESS_STATE:
      return {
        ...state,
        update: { ...state.update, address: { ...state.update.address, state: payload } },
      };
    case types.SET_ADDRESS_LOCALITY:
      return {
        ...state,
        update: { ...state.update, address: { ...state.update.address, locality: payload } },
      };
    case types.SET_ADDRESS_SETTLEMENT:
      return {
        ...state,
        update: { ...state.update, address: { ...state.update.address, settlement: payload } },
      };
    case types.SET_ADDRESS_POSTAL:
      return {
        ...state,
        update: { ...state.update, address: { ...state.update.address, postal: payload } },
      };
    case types.SET_COMPANY_LOCATION:
      return {
        ...state,
        update: { ...state.update, company: { ...state.update.company, location: payload } },
      };
    case types.SET_COMPANY_NAME:
      return {
        ...state,
        update: { ...state.update, company: { ...state.update.company, name: payload } },
      };
    case types.SET_COMPANY_DEPARTMENT:
      return {
        ...state,
        update: { ...state.update, company: { ...state.update.company, department: payload } },
      };
    case types.SET_COMPANY_TITLE:
      return {
        ...state,
        update: { ...state.update, company: { ...state.update.company, title: payload } },
      };
    default:
      return state;
  }
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default reducer;
