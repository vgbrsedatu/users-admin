/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Task` modules.
 */

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

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `User` class manages the information of a user.
 *
 * @version 1.0.0
 */
class User {
  /**
   * Creates an instance of `User`.
   *
   *
   * @memberof  User
   * @param     {task} task - Information about a user.
   * @example
   * ```js
   *  const user = new User({
   *    id: '5RTEMfExecjIby9DceeV',
   *    email: 'Hedley A. Berry',
   *    password: 'goodfellas1243',
   *    photo: null,
   *    phone: '+527844962669',
   *    role: 'subscriber',
   *    verified: false,
   *    disabled: false,
   *    company: {
   *      name: 'Google, LLC',
   *      department: 'Firebase Team',
   *      title: 'Junior Developer',
   *      location: 'Floor No. 3',
   *    },
   *    address: {
   *      street: 'Amphitheatre Parkway',
   *      number: '1600',
   *      settlement: 'Mountain View',
   *      postal: '55319',
   *      municipality: '',
   *      locality: '',
   *      state: 'California',
   *    },
   *  });
   * ```
   *
   */
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.password = user.password;
    this.photo = user.photo || '';
    this.role = user.role || 'subscriber';
    this.verified = user.verified || false;
    this.disabled = user.disabled || false;
    this.company = {
      name: user.company.name,
      department: user.company.department,
      title: user.company.title,
      location: user.company.location,
    };
    this.address = {
      street: user.address.street,
      number: user.address.number,
      settlement: user.address.settlement,
      postal: user.address.postal,
      municipality: user.address.municipality,
      locality: user.address.locality,
      state: user.address.state,
    };
  }
}

const userConverter = {
  toFirestore: user => ({
    name: user.name,
    email: user.email,
    password: user.password,
    photo: user.photo || '',
    role: user.role || 'subscriber',
    verified: user.verified || false,
    disabled: user.disabled || false,
    company: {
      name: user.company.name,
      department: user.company.department,
      title: user.company.title,
      location: user.company.location,
    },
    address: {
      street: user.address.street,
      number: user.address.number,
      settlement: user.address.settlement,
      postal: user.address.postal,
      municipality: user.address.municipality,
      locality: user.address.locality || '',
      state: user.address.state,
    },
  }),
  fromFirestore: (snapshot, options) => {
    const data = snapshot.data(options);
    return new User({
      id: snapshot.id,
      name: data.name,
      email: data.email,
      password: data.password,
      photo: data.photo || '',
      role: data.role || 'subscriber',
      verified: data.verified || false,
      disabled: data.disabled || false,
      company: {
        name: data.company.name,
        department: data.company.department,
        title: data.company.title,
        location: data.company.location,
      },
      address: {
        street: data.address.street,
        number: data.address.number,
        settlement: data.address.settlement,
        postal: data.address.postal,
        municipality: data.address.municipality,
        locality: data.address.locality,
        state: data.address.state,
      },
    });
  },
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export { User };
export { userConverter };
