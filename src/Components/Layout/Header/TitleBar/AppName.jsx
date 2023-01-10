/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `AppName` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT CUSTOM HOOKS
import useAbout from '../../../../Hooks/useAbout';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `AppName` component.
 *
 * @component
 * @returns {JSX.Element} The `AppName` components.
 */
const AppName = () => {
  const about = useAbout();
  return (
    <div className="title-bar__app-name">
      <span>&#xE700;</span>
      <p id="app-name">{about?.name}</p>
    </div>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default AppName;
