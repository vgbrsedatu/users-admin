/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `names` for `dichacher` function.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT MODULES
import * as types from './types';

/**
 * The initial value of the state
 *
 * @constant {state} initial
 */
const names = {
  name: types.SET_NAME,
  email: types.SET_EMAIL,
  password: types.SET_PASSWORD,
  phone: types.SET_PHONE,
  photo: types.SET_PHOTO,
  verified: types.SET_VERIFIED,
  disabled: types.SET_DISABLED,
  role: types.SET_ROLE,

  company_name: types.SET_COMPANY_NAME,
  company_title: types.SET_COMPANY_TITLE,
  company_location: types.SET_COMPANY_LOCATION,
  company_department: types.SET_COMPANY_DEPARTMENT,

  address_street: types.SET_ADDRESS_STREET,
  address_number: types.SET_ADDRESS_NUMBER,
  address_settlement: types.SET_ADDRESS_SETTLEMENT,
  address_postal: types.SET_ADDRESS_POSTAL,
  address_locality: types.SET_ADDRESS_LOCALITY,
  address_municipality: types.SET_ADDRESS_MUNICIPALITY,
  address_state: types.SET_ADDRESS_STATE,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default names;
