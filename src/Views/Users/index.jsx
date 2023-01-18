/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Users` React component view.
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useNavigate } from 'react-router-dom';

// » IMPORT CUSTOM HOOKS
import useUsers from '../../Hooks/useUsers';

// » IMPORT COMPONENTS
import Loading from '../../Components/Loading';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `roles` object is used to translate the roles.
 *
 * @constant {object} roles
 */
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
const Users = () => {
  const { users, loading } = useUsers();
  const navigate = useNavigate();

  if (loading) {
    return <Loading />;
  }

  const toProfile = id => {
    navigate('/user', { state: id });
  };

  return (
    <article id="users" className="surface">
      <h1 className="surface__title">Lista de usuarios {users.length}</h1>
      <div className="surface__body">
        <table className="users">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Role</th>
              <th>Verificado</th>
              <th>Activo</th>
              <th>Perfil</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{roles[user.role]}</td>
                <td className="center">{user.verified ? 'Si' : 'No'}</td>
                <td className="center">{user.disabled ? 'No' : 'Si'}</td>
                <td className="center">
                  <button type="button" className="btn-icon" onClick={() => toProfile(user.id)}>
                    <i className="material-icons">person</i>
                  </button>
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
