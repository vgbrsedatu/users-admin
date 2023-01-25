/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Layout` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import { useLocation } from 'react-router-dom';

// » IMPORT COMPONENTS
import TitleBar from './TitleBar';
import Container from './Container';

// » IMPORT CUSTOM HOOKS

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Layout` component.
 *
 * @component
 * @returns {JSX.Element} The `Layout` components.
 */
const Layout = () => {
  const { pathname } = useLocation();
  const path = pathname.slice(1);
  const titles = {
    signin: 'Inicio de sesión',
    users: 'Lista de Usuarios',
    user: 'Perfil de usuario',
    edit: 'Editar perfil',
    add: 'Agregar usuario',
  };

  const title = titles[path] || 'Lista de Usuarios';

  return (
    <React.Fragment key="Layout">
      <TitleBar title={title} buttons="101" />
      <Container />
    </React.Fragment>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Layout;
