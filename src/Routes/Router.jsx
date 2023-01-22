/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Router` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { Routes, Route } from 'react-router-dom';

// » IMPORT APP COMPONENT
import Protected from './Protected';
import AddUser from '../Views/AddUser';
import EditUser from '../Views/EditUser';
import User from '../Views/User';
import Password from '../Views/Password';
import Users from '../Views/Users';
import Signin from '../Views/Signin';

// ━━ COMPONENTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `AddUserProtected` component, is a view component protected by the
 * router.
 *
 * It must be used in the router: `path="add"`
 *
 * @component
 * @returns {JSX.Element} The `AddUserProtected` components.
 */
const AddUserProtected = () => (
  <Protected>
    <AddUser />
  </Protected>
);

/**
 * The `EditUserProtected` component, is a view component protected by the
 * router.
 *
 * It must be used in the router: `path="edit"`
 *
 * @component
 * @returns {JSX.Element} The `EditUserProtected` components.
 */
const EditUserProtected = () => (
  <Protected>
    <EditUser />
  </Protected>
);

/**
 * The `UserProtected` component, is a view component protected by the
 * router.
 *
 * It must be used in the router: `path="user"`
 *
 * @component
 * @returns {JSX.Element} The `UserProtected` components.
 */
const UserProtected = () => (
  <Protected>
    <User />
  </Protected>
);

/**
 * The `UsersProtected` component, is a view component protected by the
 * router.
 *
 * It must be used in the router: `path="/"`
 *
 * @component
 * @returns {JSX.Element} The `UsersProtected` components.
 */
const UsersProtected = () => (
  <Protected>
    <Users />
  </Protected>
);

/**
 * The `PasswordProtected` component, is a view component protected by the
 * router.
 *
 * It must be used in the router: `path="credential"`
 *
 * @component
 * @returns {JSX.Element} The `PasswordProtected` components.
 */
const PasswordProtected = () => (
  <Protected>
    <Password />
  </Protected>
);

/**
 * The `Router` component, is in charge of routing the application.
 *
 * @component
 * @returns {JSX.Element} The `Router` components.
 */
const Router = () => (
  <section id="view">
    <Routes>
      <Route path="/" element={<UsersProtected />} />
      <Route path="add" element={<AddUserProtected />} />
      <Route path="edit" element={<EditUserProtected />} />
      <Route path="user" element={<UserProtected />} />
      <Route path="password" element={<PasswordProtected />} />
      <Route path="signin" element={<Signin />} />
    </Routes>
  </section>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Router;
