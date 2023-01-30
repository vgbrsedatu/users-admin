/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `UserForm` React component view.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';
import React from 'react';

// » IMPORT COMPONENT

// » IMPORT CUSTOM HOOKS

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * An `object` with user information.
 *
 * @typedef   {object}  user
 * @property  {string}  name                  - User name.
 * @property  {string}  email                 - User email.
 * @property  {string}  password              - User password.
 * @property  {string}  phone                 - User phone.
 * @property  {boolean} verified              - User emailVerified.
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
 * Function to manage form submit.
 *
 * @typedef   {(e:React.ChangeEventHandler<HTMLInputElement>) => void} onSubmit
 */

/**
 * Function to manage changes in form inputs.
 *
 * @typedef   {(name: React.ChangeEventHandler<HTMLInputElement>) => void} onChange
 */

/**
 * An `Array` containing an option `Object`, used for the `Select` component.
 * The `Array` must contain all the `options` that will be displayed in the
 * `select` form.
 *
 * @typedef   {object}  option
 * @property  {string}  value   - User name.
 * @property  {string}  text    - User name.
 */

/**
 * An `Object`, with information for `option` on `Select` component.
 *
 * @typedef   {Array.<option>} options
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Object with RegExp for form entries.
 *
 * @constant {object} titles
 */
const regExps = {
  password: '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$',
  phone: '^\\d{10}$',
};

/**
 * Object with titles for form entries.
 *
 * @constant {Object} titles
 */
const titles = {
  password: 'Contraseña mayor a ocho caracteres, incluyendo letra y un número',
  phone: 'Sigue este formato 0000000000',
};

const selects = {
  verified: [
    { value: 'true', text: 'Sí' },
    { value: 'false', text: 'No' },
  ],
  disabled: [
    { value: 'true', text: 'Sí' },
    { value: 'false', text: 'No' },
  ],
  role: [
    { value: 'superadmin', text: 'Super Administrador' },
    { value: 'administrator', text: 'Administrador' },
    { value: 'editor', text: 'Editor' },
    { value: 'author', text: 'Autor' },
    { value: 'contributor', text: 'Colaborador' },
    { value: 'subscriber', text: 'Suscriptor' },
  ],
};

// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 *
 *
 * @param {*} match
 * @param {*} p1
 * @param {*} p2
 * @param {*} p3
 */
const replacer = (match, p1, p2, p3) => `${p1}${p2}${p3}`;

/**
 *
 *
 * @param {string} number The number to format.
 * @returns {string} A string with the formatted number.
 */
const numberFormat = number => number.replace(/^(\d{2})\s{1}(\d{4})\s{1}(\d{4})$/, replacer);

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `InputField` component react component.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.span - The text to be displayed in the span.
 * @param {string} props.type - Whether the password input should be displayed.
 * @param {string} props.name - Input name.
 * @param {onChange} props.onChange - Function to manage changes in form inputs.
 * @param {string} props.value - Input value.
 * @param {string} [props.pattern] - Input pattern.
 * @param {string} [props.title] - Input title.
 * @param {boolean} [props.required] - Input required.
 * @returns {JSX.Element} The `InputField` components.
 */
const Input = props => {
  const { span, type, name, value, onChange, pattern, title, required } = props;
  return (
    <React.Fragment key="InputField">
      <span>{span}</span>
      <input
        type={type}
        name={name}
        title={title}
        value={value}
        pattern={pattern}
        onChange={onChange}
        required={required}
      />
    </React.Fragment>
  );
};

Input.propTypes = {
  span: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  pattern: PropTypes.string,
  title: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  required: PropTypes.bool,
};

Input.defaultProps = {
  pattern: null,
  title: null,
  required: false,
};

/**
 * The `Select` component react component.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.span - The text to be displayed in the span.
 * @param {string} props.name - Select name.
 * @param {string} props.value - Defalut select value.
 * @param {onChange} props.onChange - Function to manage changes in form inputs.
 * @param {options} props.options - Select options.
 * @returns {JSX.Element} The `Select` components.
 */
const Select = ({ span, name, value, onChange, options }) => (
  <React.Fragment key="Select">
    <span>{span}</span>
    <select name={name} defaultValue={value} onChange={onChange}>
      {React.Children.toArray(
        options.map(option => <option value={option.value}>{option.text}</option>),
      )}
    </select>
  </React.Fragment>
);

Select.propTypes = {
  span: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

/**
 * The `UserForm` component react component.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {user} props.user - An object with some user's information.
 * @param {boolean} props.password - Whether the password input should be displayed.
 * @param {onSubmit} props.onSubmit - Function to manage form submit.
 * @param {onChange} props.onChange - Function to manage changes in form inputs.
 * @returns {JSX.Element} The `UserForm` components.
 */
const UserForm = ({ user, password, onSubmit, onChange }) => (
  <form onSubmit={onSubmit} className="profile__form">
    <div className="profile__data">
      <Input
        span="Nombre:"
        type="text"
        name="name"
        value={user.name}
        onChange={onChange}
        required
      />
      <Input
        span="Email:"
        type="text"
        name="email"
        value={user.email}
        onChange={onChange}
        required
      />
      {password && (
        <React.Fragment key="password">
          <Input
            span="Contraseña:"
            type="password"
            name="password"
            value={user.password}
            pattern={regExps.password}
            title={titles.password}
            onChange={onChange}
            required
          />
        </React.Fragment>
      )}
      <Input
        span="Telefono:"
        type="text"
        name="phone"
        value={numberFormat(user.phone)}
        pattern={regExps.phone}
        title={titles.phone}
        onChange={onChange}
        required
      />
      <Select
        span="Verificado:"
        name="verified"
        value={user.verified}
        onChange={onChange}
        options={selects.verified}
      />
      <Select
        span="Perfil inactivo:"
        name="disabled"
        value={user.disabled}
        onChange={onChange}
        options={selects.disabled}
      />
      <Select
        span="Role:"
        name="role"
        value={user.role}
        onChange={onChange}
        options={selects.role}
      />
      <Input
        span="Compañia:"
        type="text"
        name="company_name"
        value={user.company.name}
        onChange={onChange}
        required
      />
      <Input
        span="Puesto:"
        type="text"
        name="company_title"
        value={user.company.title}
        onChange={onChange}
        required
      />
      <Input
        span="Ubicacion:"
        type="text"
        name="company_location"
        value={user.company.location}
        onChange={onChange}
        required
      />
      <Input
        span="Departmento:"
        type="text"
        name="company_department"
        value={user.company.department}
        onChange={onChange}
        required
      />
      <Input
        span="Calle:"
        type="text"
        name="address_street"
        value={user.address.street}
        onChange={onChange}
        required
      />
      <Input
        span="Numero:"
        type="text"
        name="address_number"
        value={user.address.number}
        onChange={onChange}
        required
      />
      <Input
        span="Asentamiento:"
        type="text"
        name="address_settlement"
        value={user.address.settlement}
        onChange={onChange}
        required
      />
      <Input
        span="Codigo Postal:"
        type="text"
        name="address_postal"
        value={user.address.postal}
        onChange={onChange}
        required
      />
      <Input
        span="Localidad:"
        type="text"
        name="address_locality"
        value={user.address.locality}
        onChange={onChange}
      />
      <Input
        span="Municipio:"
        type="text"
        name="address_municipality"
        value={user.address.municipality}
        onChange={onChange}
        required
      />
      <Input
        span="Estado:"
        type="text"
        name="address_state"
        value={user.address.state}
        onChange={onChange}
        required
      />
    </div>
    <div className="profile__controls">
      <button type="submit" className="btn btn--primary btn--small">
        Guardar
      </button>
    </div>
  </form>
);

UserForm.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string,
    phone: PropTypes.string.isRequired,
    verified: PropTypes.bool.isRequired,
    disabled: PropTypes.bool.isRequired,
    role: PropTypes.oneOf([
      'superadmin',
      'administrator',
      'editor',
      'author',
      'contributor',
      'subscriber',
    ]).isRequired,
    company: PropTypes.PropTypes.shape({
      name: PropTypes.string.isRequired,
      department: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
    }).isRequired,
    address: PropTypes.PropTypes.shape({
      street: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      settlement: PropTypes.string.isRequired,
      postal: PropTypes.string.isRequired,
      municipality: PropTypes.string.isRequired,
      locality: PropTypes.string.isRequired,
      state: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  password: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default UserForm;
