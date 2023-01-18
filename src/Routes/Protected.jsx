/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Protected` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useLocation, Navigate } from 'react-router-dom';
import { PropTypes } from 'prop-types';

// » IMPORT APP COMPONENT
import { useAuthConsumer } from '../Context/AuthContext';
import Loading from '../Components/Loading';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Protected` component, provides protection for some routes if there is
 * no authentication.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {JSX.Element} props.children - Component to be protected.
 * @returns {JSX.Element} The `Protected` components.
 */
const Protected = ({ children }) => {
  const { auth, loading } = useAuthConsumer();
  const { pathname } = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (!auth) {
    return <Navigate to="/signin" state={{ from: pathname }} replace />;
  }

  return children;
};

Protected.propTypes = {
  children: PropTypes.element.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Protected;
