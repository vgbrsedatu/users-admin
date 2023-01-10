/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Header` React component.
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT CUSTOM HOOKS
import useAbout from '../../../../Hooks/useAbout';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Header` component.
 *
 * @component
 * @returns {JSX.Element} The `Header` components.
 */
const Header = () => {
  const about = useAbout();
  return (
    <header className="title-app">
      <h2 className="title-app__presentation">AN APPLICATION WITH ELECTRON AND REACT</h2>
      <h4 id="app-description" className="title-app__description">
        {about?.description}
      </h4>
    </header>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Header;
