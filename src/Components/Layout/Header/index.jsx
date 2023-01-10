/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Header` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENTS
import TitleBar from './TitleBar';
import Versions from './Versions';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Header` component.
 *
 * @component
 * @returns {JSX.Element} The `Header` components.
 */
const Header = () => (
  <header id="header-wrapper">
    <nav>
      <TitleBar />
      <Versions />
    </nav>
  </header>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Header;
