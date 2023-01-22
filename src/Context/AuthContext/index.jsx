/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `AuthContext` React component.
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';
import { createContext, useContext, useState, useEffect, useMemo } from 'react';

// » IMPORT MODULES
import { signIn, signOut, unSubscribe } from '../../services/firebase/auth';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * A `function` to start session.
 *
 * @typedef {({ email, password }: { email: string, password: string })=> Promise.<true|AuthError>} signin
 */

/**
 * A `function` to end session.
 *
 * @typedef {()=> Promise.<true|AuthError>} signout
 */

/**
 * The returns value from `useAuth`.
 *
 * @typedef   {object}      authConsumer
 * @property  {null|string} auth          - The current auth value.
 * @property  {signin}      signin        - A `function` to start session.
 * @property  {signout}     signout       - A `function` to end session.
 * @property  {boolean}     loading       - The initial value is `true`
 */

/**
 * The returns value from `useAuth`.
 *
 * @typedef   {object}      authHook
 * @property  {null|string} auth      - The current auth value.
 * @property  {boolean}     loading   - The initial value is `true`
 */

/**
 * The returns value from `useSignout`.
 *
 * @typedef   {object}  signinHook
 * @property  {signin}  signin     - A `function` to start session.
 * @property  {boolean} loading    - The initial value is `true`
 */

/**
 * An `Object` with functions to modify the window and values of the current
 * window state.
 *
 * @typedef   {object} authConsumer
 * @property  {boolean} auth - Its value is `true` if the window is maximized, otherwise, `false`.
 * @property  {boolean} loading -  Its value is `true` if the window is fullscreened, otherwise, `false`.
 * @property  {({ email, password }:{ email: string, password: string }) => void} signin - A `function` to start session.
 * @property  {()=> void} signout - A `function` to close current session.
 */

/**
 * An `Object` with functions to modify the window and values of the current
 * window state.
 *
 * @typedef {object} Signin
 * @property  {boolean} loading -  Its value is `true` if the window is fullscreened, otherwise, `false`.
 * @property  {({ email: string, password: string })=> Promises.<string|Error>} signin - A `function` to start session.
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » AUTH CONTEXT
/**
 * The `AuthContext` context provides a context related with application
 * authentication. When React renders a component that subscribes to this
 * Context object it will read the current context value.
 *
 * @type {React.Context}
 */
const AuthContext = createContext();

// ━━ PROVIDER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Component that provides a context about the authentication of the
 * application.
 *
 * Provide information and context:
 *
 * @param {object} props - Component properties.
 * @param {JSX.Element} props.children - The component that will provide context.
 * @returns {JSX.Element} Component that provides context authentication.
 */
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = unSubscribe(current => {
      if (current) {
        setAuth(current.uid);
      } else {
        setAuth(current);
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signin = ({ email, password }) =>
    new Promise((resolve, reject) => {
      signIn(email, password)
        .then(() => {
          resolve(true);
        })
        .catch(e => {
          reject(e);
        });
    });

  const signout = () =>
    new Promise((resolve, reject) => {
      signOut()
        .then(() => {
          resolve(true);
        })
        .catch(e => {
          reject(e);
        });
    });

  const value = useMemo(
    () => ({
      auth,
      loading,
      signin,
      signout,
    }),
    [auth, loading],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

/**
 * The `useAuthConsumer` custom Hook, is a consumer of `AuthContext`, provides
 * context about application authentication, provide status information and
 * functionality such as login and logout.
 *
 * @throws Will throw an `Error` if the hook is not used within the `AuthContext` provider
 * @returns {authConsumer} An `Object` with values and functions to manage the authentication of the application.
 */
const useAuthConsumer = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthConsumer must be within the AuthContext provider');
  }
  return context;
};

/**
 * The `useAuth` custom Hook, is a consumer of `AuthContext`, provides an object
 * with information about the active user.
 *
 * @throws Will throw an `Error` if the hook is not used within the `AuthContext` provider
 * @returns {authHook} An `Object` with values and functions to manage the authentication of the application.
 */
const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be within the AuthContext provider');
  }

  return {
    auth: context.auth,
    loading: context.loading,
  };
};

/**
 * The `useSignin` custom Hook, is a consumer of `AuthContext`, provides
 * a `function` to start session.
 *
 * @throws Will throw an `Error` if the hook is not used within the `AuthContext` provider
 * @returns {signinHook} A `function` to start session.
 */
const useSignin = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useSignin must be within the AuthContext provider');
  }
  return {
    signin: context.signin,
    loading: context.loading,
  };
};

/**
 * The `useSignout` custom Hook, is a consumer of `AuthContext`, provides
 * a `function` to logout session.
 *
 * @throws Will throw an `Error` if the hook is not used within the `AuthContext` provider
 * @returns {signout} A `function` to logout session.
 */
const useSignout = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useSignout must be within the AuthContext provider');
  }
  return context.signout;
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default AuthProvider;
export { useAuthConsumer, useAuth, useSignin, useSignout };
