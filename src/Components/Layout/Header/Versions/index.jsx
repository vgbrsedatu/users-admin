/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Versions` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT CUSTOM HOOKS
import useVersions from '../../../../Hooks/useVersions';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Versions` component.
 *
 * @component
 * @returns {JSX.Element} The `Versions` components.
 */
const Versions = () => {
  const versions = useVersions();
  return (
    <ul className="version">
      <li className="version__item">
        Electron <span id="electron-version">{versions?.electron}</span>
      </li>
      <li className="version__item">
        Chromium <span id="chrome-version">{versions?.chrome}</span>
      </li>
      <li className="version__item">
        Node <span id="node-version">{versions?.node}</span>
      </li>
      <li className="version__item">
        V8 <span id="v8-version">{versions?.v8}</span>
      </li>
    </ul>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Versions;
