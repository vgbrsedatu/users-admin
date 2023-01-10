/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `TitleBar` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENTS
import AppName from './AppName';
import MinimizeButton from './MinimizeButton';
import CloseButton from './CloseButton';

// » IMPORT CUSTOM HOOKS
import useWindow from '../../../../Hooks/useWindow';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `TitleBar` component.
 *
 * @component
 * @returns {JSX.Element} The `TitleBar` components.
 */
const TitleBar = () => {
  const { minimizeWindow, closeWindow } = useWindow();
  return (
    <div className="title-bar">
      <AppName />
      <div className="title-bar__menu">
        <MinimizeButton onClick={minimizeWindow} />
        <CloseButton onClick={closeWindow} />
      </div>
    </div>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TitleBar;
