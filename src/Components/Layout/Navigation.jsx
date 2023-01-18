/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Navigation` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { NavLink } from 'react-router-dom';

// » IMPORT CONSUMERS CONTEXT
import { useSignout } from '../../Context/AuthContext';

// » IMPORT CUSTOM HOOKS
import useTheme from '../../Hooks/useTheme';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Navigation` component.
 *
 * @component
 * @returns {JSX.Element} The `Navigation` components.
 */
const Navigation = () => {
  const { theme, toogleTheme } = useTheme();
  const onDark = theme === 'dark';
  const signout = useSignout();
  return (
    <nav id="navigation">
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/add">Crear usuario</NavLink>
      </div>
      <div>
        {onDark ? (
          <button type="button" className="btn-icon" onClick={() => toogleTheme()}>
            <i className="material-icons">light_mode</i>
          </button>
        ) : (
          <button type="button" className="btn-icon" onClick={() => toogleTheme()}>
            <i className="material-icons">dark_mode</i>
          </button>
        )}
        <button type="button" className="btn-icon" onClick={() => signout()}>
          <i className="material-icons">logout</i>
        </button>
      </div>
    </nav>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Navigation;
