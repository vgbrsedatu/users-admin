/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `CloseButton` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `CloseButton` component. The `onClick` property, It must have
 * communication with the `useWindowState` custom Hook.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {function} props.onClick - Function to handle the change of window state
 * @returns {JSX.Element} The `CloseButton` components.
 */
const CloseButton = ({ onClick }) => {
  const name = 'title-bar__button title-bar__button--close';
  return (
    <button className={name} type="button" title="close" onClick={() => onClick()}>
      &#xE8BB;
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default CloseButton;
