/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Footer` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT CUSTOM HOOKS
import useAbout from '../../../Hooks/useAbout';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Footer` component.
 *
 * @component
 * @returns {JSX.Element} The `Footer` components.
 */
const Footer = () => {
  const about = useAbout();
  return (
    <footer id="footer-wrapper">
      <ul className="footer">
        <li className="footer__item">
          Developed By: <span>{about?.author}</span>
        </li>
        <li className="footer__item">
          Version: <span>{about?.version}</span>
        </li>
        <li className="footer__item">
          Company: <span>{about?.company}</span>
        </li>
        <li className="footer__item">
          Copyright: <span>{about?.copyright}</span>
        </li>
      </ul>
    </footer>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Footer;
