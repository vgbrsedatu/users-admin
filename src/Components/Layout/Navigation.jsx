/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Container` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENTS
import { NavLink } from 'react-router-dom';
import { useSignout } from '../../Context/AuthContext';
import useTheme from '../../Hooks/useTheme';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Container` component.
 *
 * @component
 * @returns {JSX.Element} The `Container` components.
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
