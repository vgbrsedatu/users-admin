/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Users` React component view.
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';
import { NavLink } from 'react-router-dom';

// » IMPORT CUSTOM HOOKS
import useUsers from '../../Hooks/useUsers';

// » IMPORT COMPONENTS
import Loading from '../../Components/Loading';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

const roles = {
  superadmin: 'Super Administrador',
  administrator: 'Administrador',
  editor: 'Editor',
  author: 'Autor',
  contributor: 'Colaborador',
  subscriber: 'Suscriptor',
};

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Users` react component view.
 *
 * @component
 * @returns {JSX.Element} The `Users` components.
 */
const ToProfile = ({ id, label }) => (
  <NavLink to={`/user/:${id}`} state={id}>
    {label}
  </NavLink>
);

ToProfile.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

/**
 * The `Users` react component view.
 *
 * @component
 * @returns {JSX.Element} The `Users` components.
 */
const Users = () => {
  const { users, loading } = useUsers();

  if (loading) {
    return <Loading />;
  }

  return (
    <article className="surface">
      <h1 className="surface__title">Users</h1>
      <div className="surface__body">
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Role</th>
              <th>Verificado</th>
              <th>Activo</th>
              <th>Editar</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{roles[user.role]}</td>
                <td>{user.verified ? 'Si' : 'No'}</td>
                <td>{user.disabled ? 'No' : 'Si'}</td>
                <td>
                  <ToProfile id={user.id} label="Editar" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Users;
