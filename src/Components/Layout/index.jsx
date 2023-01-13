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

// » IMPORT CUSTOM HOOKS
import Container from './Container';

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
  const modals = ['disney'];
  const titles = {
    signin: 'Inicio de sesión',
    users: 'Lista de Usuarios',
    user: 'Perfil de usuario',
    edit: 'Editar perfil',
    add: 'Agregar usuario',
  };

  const title = titles[path] || 'Lista de Usuarios';
  const onModal = !modals.includes(path);

  return (
    <React.Fragment key="Layout">
      <TitleBar title={title} onModal={onModal} />
      <Container />
    </React.Fragment>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Layout;
