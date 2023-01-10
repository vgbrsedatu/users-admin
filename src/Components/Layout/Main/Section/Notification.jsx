/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Notification` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT CUSTOM HOOKS
import useNotification from '../../../../Hooks/useNotification';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Notification` component.
 *
 * @component
 * @returns {JSX.Element} The `Notification` components.
 */
const Notification = () => {
  const send = useNotification();
  return (
    <article className="feature">
      <h3 className="feature__title">Notifications</h3>
      <div className="feature__detail">
        <p>
          Click to create a <span>notification</span>
        </p>
        <button type="button" className="btn btn--primary" id="notification" onClick={send}>
          Notification
        </button>
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Notification;
