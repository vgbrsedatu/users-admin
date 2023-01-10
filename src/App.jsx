/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `App` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { HashRouter as Router } from 'react-router-dom';

// » IMPORT COMPONENTS
import Layout from './Components/Layout';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `App` component, It is the main component where the entire `react`
 * application is managed.
 *
 * @component
 * @returns {JSX.Element} The `App` components.
 */
const App = () => (
  <Router>
    <Layout />
  </Router>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default App;
