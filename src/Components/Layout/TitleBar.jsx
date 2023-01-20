/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `TitleBar` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import { PropTypes } from 'prop-types';

// » IMPORT CUSTOM HOOKS
import useWindow from '../../Hooks/useWindow';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `MinimizeButton` component. The `onClick` property, It must have
 * communication with the `useWindowState` custom Hook.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {() => void} props.onClick - Function to minimize the current window.
 * @returns {JSX.Element} The `MinimizeButton` components.
 */
const MinimizeButton = ({ onClick }) => {
  const name = 'titlebar__button';
  return (
    <button className={name} type="button" title="minimize" onClick={onClick}>
      &#xE921;
    </button>
  );
};

MinimizeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

/**
 * The `RestoreButton` component. The `onClick` property, It must have
 * communication with the `useWindowState` custom Hook.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {() => void} props.onClick - Function to maximize/restore the current window.
 * @returns {JSX.Element} The `RestoreButton` components.
 */
const RestoreButton = ({ onClick }) => {
  const name = 'titlebar__button';
  return (
    <button className={name} type="button" title="restore" onClick={onClick}>
      &#xE923;
    </button>
  );
};

RestoreButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

/**
 * The `MaximizeButton` component. The `onClick` property, It must have
 * communication with the `useWindowState` custom Hook.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {() => void} props.onClick - Function to maximize/restore the current window.
 * @returns {JSX.Element} The `MaximizeButton` components.
 */
const MaximizeButton = ({ onClick }) => {
  const name = 'titlebar__button';
  return (
    <button className={name} type="button" title="maximize" onClick={onClick}>
      &#xE922;
    </button>
  );
};

MaximizeButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

/**
 * The `CloseButton` component. The `onClick` property, It must have
 * communication with the `useWindowState` custom Hook.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {() => void} props.onClick - Function to close the current window.
 * @returns {JSX.Element} The `CloseButton` components.
 */
const CloseButton = ({ onClick }) => {
  const name = 'titlebar__button titlebar__button--close';
  return (
    <button className={name} type="button" title="close" onClick={onClick}>
      &#xE8BB;
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

/**
 * The `MaximizeButton` component. The `onClick` property, It must have
 * communication with the `useWindowState` custom Hook.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {boolean} props.maximize - If the current window is maximized.
 * @param {() => void} props.onClick - Function to maximize/restore the current window.
 * @returns {JSX.Element} The `MaximizeButton` components.
 */
const MaxRestButton = ({ maximize, onClick }) => (
  <React.Fragment key="maximize-restore">
    {maximize ? <RestoreButton onClick={onClick} /> : <MaximizeButton onClick={onClick} />}
  </React.Fragment>
);

MaxRestButton.propTypes = {
  maximize: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

/**
 * The `AppName` component.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.title - The title of current window.
 * @returns {JSX.Element} The `AppName` components.
 */
const AppName = ({ title }) => (
  <div className="titlebar__app-name">
    <span>&#xE700;</span>
    <p>{title}</p>
  </div>
);

AppName.propTypes = {
  title: PropTypes.string.isRequired,
};

/**
 * The `WindowsControl` component.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {boolean} props.maximize - If the current window is maximized.
 * @param {object} props.controls - An object with functions to control the current window.
 * @param {() => void} props.controls.closeWindow - Function to close the current window.
 * @param {() => void} props.controls.minimizeWindow - Function to minimize the current window.
 * @param {() => void} props.controls.maximizeWindow - Function to maximize/restore the current window.
 * @returns {JSX.Element} The `WindowsControl` components.
 */
const WindowsControl = ({ buttons, maximize, controls }) => {
  const types = {
    '001': { minimize: false, maximize: false, close: true },
    '101': { minimize: true, maximize: false, close: true }, // eslint-disable-line prettier/prettier
    '111': { minimize: true, maximize: true, close: true }, // eslint-disable-line prettier/prettier
  };
  const show = types[buttons] || types['111'];
  return (
    <div className="titlebar__windows-control">
      {show.minimize && <MinimizeButton onClick={controls.minimizeWindow} />}
      {show.maximize && <MaxRestButton maximize={maximize} onClick={controls.maximizeWindow} />}
      {show.close && <CloseButton onClick={controls.closeWindow} />}
    </div>
  );
};

WindowsControl.propTypes = {
  buttons: PropTypes.string.isRequired,
  maximize: PropTypes.bool.isRequired,
  controls: PropTypes.shape({
    minimizeWindow: PropTypes.func.isRequired,
    maximizeWindow: PropTypes.func.isRequired,
    closeWindow: PropTypes.func.isRequired,
  }).isRequired,
};

/**
 * The `TitleBar` component.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {string} props.title - The title that will be displayed in the Title bar.
 * @param {string} props.buttons - The buttons that will be displayed in the Title bar.
 * @returns {JSX.Element} The `TitleBar` components.
 */
const TitleBar = props => {
  const { title, buttons } = props;
  const { maximize, fullScreen, controls } = useWindow();

  if (fullScreen) {
    return null;
  }

  return (
    <div id="titlebar" className="titlebar">
      <AppName title={title} />
      <WindowsControl buttons={buttons} maximize={maximize} controls={controls} />
    </div>
  );
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  buttons: PropTypes.string,
};

TitleBar.defaultProps = {
  buttons: '111',
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TitleBar;
