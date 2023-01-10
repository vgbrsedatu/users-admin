/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `CloseButton` React component.
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { createPortal } from 'react-dom';
import { PropTypes } from 'prop-types';

// » IMPORT COMPONENTS
import TitleBar from './TitleBar';

// » IMPORT CUSTOM HOOKS
import usePortal from '../../Hooks/usePortal';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * A component to create `Portal` React
 *
 * @returns {ReactPortal}
 * @example
 * ```js
 *  <Portal id="modal">
 *    <h1>Thinking with portals</h1>
 *  </Portal>
 * ```
 */
const Portal = ({ children, id }) => {
  const target = usePortal('root-modal');
  target.setAttribute('id', id);
  target.setAttribute('class', 'modal');
  return createPortal(children, target);
};

Portal.propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
};

/**
 * A reusable component to create modal windows.
 *
 * @example
 * ```js
 *  <Modal id="modal" show={state} setShow={setState}>
 *    <p>Thinking with portals</p>
 *  </Modal>
 *```js
 *
 */
const Modal = ({ children, id, show, title, toogle }) => {
  if (!show) {
    return null;
  }
  return (
    <Portal id={id}>
      <TitleBar title={title} toogle={toogle} />
      <div className="modal_container">{children}</div>
    </Portal>
  );
};

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  id: PropTypes.string.isRequired,
  show: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  toogle: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Modal;
