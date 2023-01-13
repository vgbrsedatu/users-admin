/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Container` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENTS
import { useLocation } from 'react-router-dom';
import Router from '../../Routes/Router';
import Navigation from './Navigation';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Container` component.
 *
 * @component
 * @returns {JSX.Element} The `Container` components.
 */
const Container = () => {
  const { pathname } = useLocation();
  const onSignin = pathname === '/signin';

  return (
    <div id="container">
      {!onSignin && <Navigation />}
      <Router />
    </div>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Container;
