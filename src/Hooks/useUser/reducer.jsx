/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `reducer` for `useUser` custom React Hook.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
import * as types from './types';

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Reducer function for `useUser` custom React Hook.
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
    case types.SET_CREATED:
      return { ...state, created: payload };
    case types.SET_UPDATED:
      return { ...state, updated: payload };
    case types.SET_DELETED:
      return { ...state, deleted: payload };
    case types.SET_USER:
      return { ...state, user: { ...payload } };
    case types.SET_NAME:
      return { ...state, user: { ...state.user, name: payload } };
    case types.SET_EMAIL:
      return { ...state, user: { ...state.user, email: payload } };
    case types.SET_PASSWORD:
      return { ...state, user: { ...state.user, password: payload } };
    case types.SET_MOBILE:
      return { ...state, user: { ...state.user, mobile: payload } };
    case types.SET_PHOTO:
      return { ...state, user: { ...state.user, photo: payload } };
    case types.SET_VERIFIED:
      return { ...state, user: { ...state.user, verified: payload } };
    case types.SET_DISABLED:
      return { ...state, user: { ...state.user, disabled: payload } };
    case types.SET_ROLE:
      return { ...state, user: { ...state.user, role: payload } };
    case types.SET_COMPANY_NAME:
      return {
        ...state,
        user: { ...state.user, company: { ...state.user.company, name: payload } },
      };
    case types.SET_COMPANY_TITLE:
      return {
        ...state,
        user: { ...state.user, company: { ...state.user.company, title: payload } },
      };
    case types.SET_COMPANY_LOCATION:
      return {
        ...state,
        user: { ...state.user, company: { ...state.user.company, location: payload } },
      };
    case types.SET_COMPANY_DEPARTMENT:
      return {
        ...state,
        user: { ...state.user, company: { ...state.user.company, department: payload } },
      };
    case types.SET_ADDRESS_STREET:
      return {
        ...state,
        user: { ...state.user, address: { ...state.user.address, street: payload } },
      };
    case types.SET_ADDRESS_NUMBER:
      return {
        ...state,
        user: { ...state.user, address: { ...state.user.address, number: payload } },
      };
    case types.SET_ADDRESS_SETTLEMENT:
      return {
        ...state,
        user: { ...state.user, address: { ...state.user.address, settlement: payload } },
      };
    case types.SET_ADDRESS_POSTAL:
      return {
        ...state,
        user: { ...state.user, address: { ...state.user.address, postal: payload } },
      };
    case types.SET_ADDRESS_LOCALITY:
      return {
        ...state,
        user: { ...state.user, address: { ...state.user.address, locality: payload } },
      };
    case types.SET_ADDRESS_MUNICIPALITY:
      return {
        ...state,
        user: { ...state.user, address: { ...state.user.address, municipality: payload } },
      };
    case types.SET_ADDRESS_STATE:
      return {
        ...state,
        user: { ...state.user, address: { ...state.user.address, state: payload } },
      };
    default:
      return state;
  }
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default reducer;
