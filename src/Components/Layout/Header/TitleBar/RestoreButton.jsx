/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `RestoreButton` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `RestoreButton` component. The `onClick` property, It must have
 * communication with the `useWindowState` custom Hook.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {function} props.onClick - Function to handle the change of window state
 * @returns {JSX.Element} The `RestoreButton` components.
 */
const RestoreButton = ({ onClick }) => (
  <button className="title-bar__button" type="button" title="restore" onClick={() => onClick()}>
    &#xE923;
  </button>
);

RestoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default RestoreButton;
