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
const WindowsControl = ({ maximize, controls }) => (
  <div className="titlebar__windows-control">
    <MinimizeButton onClick={controls.minimizeWindow} />
    {maximize ? (
      <RestoreButton onClick={controls.maximizeWindow} />
    ) : (
      <MaximizeButton onClick={controls.maximizeWindow} />
    )}
    <CloseButton onClick={controls.closeWindow} />
  </div>
);

WindowsControl.propTypes = {
  maximize: PropTypes.bool.isRequired,
  controls: PropTypes.shape({
    closeWindow: PropTypes.func.isRequired,
    minimizeWindow: PropTypes.func.isRequired,
    maximizeWindow: PropTypes.func.isRequired,
  }).isRequired,
};

/**
 * The `ModalControl` component.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {() => void} props.control - Function to close the current window.
 * @returns {JSX.Element} The `ModalControl` components.
 */
const ModalControl = ({ control }) => (
  <div className="titlebar__windows-control">
    <CloseButton onClick={control} />
  </div>
);

ModalControl.propTypes = {
  control: PropTypes.func.isRequired,
};

/**
 * The `MainControl` component.
 *
 * @component
 * @param {object} props - Component properties.
 * @param {boolean} props.onModal - If it is a normal or modal window.
 * @param {boolean} props.maximize - If the current window is maximized.
 * @param {() => void} props.closeWindow - Function to close the current window.
 * @param {() => void} props.minimizeWindow - Function to minimize the current window.
 * @param {() => void} props.maximizeWindow - Function to maximize/restore the current window.
 * @returns {JSX.Element} The `MainControl` components.
 */
const MainControl = ({ onModal, maximize, controls }) => (
  <React.Fragment key="MainControl">
    {onModal ? (
      <ModalControl control={controls.closeWindow} />
    ) : (
      <WindowsControl maximize={maximize} controls={controls} />
    )}
  </React.Fragment>
);

MainControl.propTypes = {
  onModal: PropTypes.bool.isRequired,
  maximize: PropTypes.bool.isRequired,
  controls: PropTypes.shape({
    closeWindow: PropTypes.func.isRequired,
    minimizeWindow: PropTypes.func.isRequired,
    maximizeWindow: PropTypes.func.isRequired,
  }).isRequired,
};

/**
 * The `TitleBar` component.
 *
 * @component
 * @returns {JSX.Element} The `TitleBar` components.
 */
const TitleBar = ({ onModal, title }) => {
  const { maximize, fullScreen, minimizeWindow, maximizeWindow, closeWindow } = useWindow();

  if (fullScreen) {
    return null;
  }

  return (
    <div id="titlebar" className="titlebar">
      <AppName title={title} />
      <MainControl
        onModal={onModal}
        maximize={maximize}
        controls={{
          minimizeWindow,
          maximizeWindow,
          closeWindow,
        }}
      />
    </div>
  );
};

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  onModal: PropTypes.bool.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TitleBar;
