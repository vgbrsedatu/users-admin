/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `AddUser` React component view.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENT
import AvatarImage from '../../Components/AvatarImage';

// » IMPORT CUSTOM HOOKS
import useUser from '../../Hooks/useUser';
import useStorage from '../../Hooks/useStorage';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `AddUser` component react component view.
 *
 * @component
 * @returns {JSX.Element} The `AddUser` components.
 */
const AddUser = () => {
  const { uploadFromBlob } = useStorage();
  const { state, createUser, dispacher, fields } = useUser();
  const { error, user } = state;
  const NAME = fields({ name: 'NAME', value: user.name });
  const EMAIL = fields({ name: 'EMAIL', value: user.email });
  const PASSWORD = fields({ name: 'PASSWORD', type: 'password', value: user.password });
  const MOBILE = fields({ name: 'MOBILE', value: user.mobile });
  const VERIFIED = fields({ name: 'VERIFIED', value: user.verified });
  const DISABLED = fields({ name: 'DISABLED', value: user.disabled });
  const ROLE = fields({ name: 'ROLE', value: user.role });
  const COMPANY_NAME = fields({ name: 'COMPANY_NAME', value: user.company.name });
  const COMPANY_TITLE = fields({ name: 'COMPANY_TITLE', value: user.company.title });
  const COMPANY_LOCATION = fields({ name: 'COMPANY_LOCATION', value: user.company.location });
  const COMPANY_DEPARTMENT = fields({ name: 'COMPANY_DEPARTMENT', value: user.company.department });
  const ADDRESS_STREET = fields({ name: 'ADDRESS_STREET', value: user.address.street });
  const ADDRESS_NUMBER = fields({ name: 'ADDRESS_NUMBER', value: user.address.number });
  const ADDRESS_SETTLEMENT = fields({ name: 'ADDRESS_SETTLEMENT', value: user.address.settlement });
  const ADDRESS_POSTAL = fields({ name: 'ADDRESS_POSTAL', value: user.address.postal });
  const ADDRESS_LOCALITY = fields({ name: 'ADDRESS_LOCALITY', value: user.address.locality });
  const ADDRESS_MUNICIPALITY = fields({
    name: 'ADDRESS_MUNICIPALITY',
    value: user.address.municipality,
  });
  const ADDRESS_STATE = fields({ name: 'ADDRESS_STATE', value: user.address.state });

  const onSubmit = e => {
    e.preventDefault();
    createUser();
  };

  const onSave = ({ mime, raw }) => {
    uploadFromBlob({ mime, raw, name: 'temporaly' })
      .then(payload => {
        dispacher('SET_PHOTO', payload);
      })
      .catch(err => {
        dispacher('SET_ERROR', err);
      });
  };

  return (
    <article id="edit-users" className="profile">
      <figure className="profile__image">
        <AvatarImage onSave={onSave} />
      </figure>
      <div className="profile__information">
        <h1 className="profile__title">Informacion del usuario</h1>
        {error && <span className="profile__error">{error}</span>}
        <form onSubmit={onSubmit} className="profile__form">
          <div className="profile__data">
            <span>Nombre:</span>
            <input {...NAME} />
            <span>Email:</span>
            <input {...EMAIL} />
            <span>Contraseña:</span>
            <input {...PASSWORD} />
            <span>Movil:</span>
            <input {...MOBILE} />
            <span>Verificado:</span>
            <select {...VERIFIED}>
              <option value>Sí</option>
              <option value={false}>No</option>
            </select>
            <span>Perfil activo:</span>
            <select {...DISABLED}>
              <option value="Sí">Sí</option>
              <option value="No">No</option>
            </select>
            <span>Role:</span>
            <select {...ROLE}>
              <option value="superadmin">Super Administrador</option>
              <option value="administrator">Administrador</option>
              <option value="editor">Editor</option>
              <option value="author">Autor</option>
              <option value="contributor">Colaborador</option>
              <option value="subscriber">Suscriptor</option>
            </select>
            <span>Compañia:</span>
            <input {...COMPANY_NAME} />
            <span>Puesto:</span>
            <input {...COMPANY_TITLE} />
            <span>Ubicacion:</span>
            <input {...COMPANY_LOCATION} />
            <span>Departmento:</span>
            <input {...COMPANY_DEPARTMENT} />
            <span>Calle:</span>
            <input {...ADDRESS_STREET} />
            <span>Numero:</span>
            <input {...ADDRESS_NUMBER} />
            <span>Asentamiento:</span>
            <input {...ADDRESS_SETTLEMENT} />
            <span>Codigo Postal:</span>
            <input {...ADDRESS_POSTAL} />
            <span>Localidad:</span>
            <input {...ADDRESS_LOCALITY} />
            <span>Municipio:</span>
            <input {...ADDRESS_MUNICIPALITY} />
            <span>Estado:</span>
            <input {...ADDRESS_STATE} />
          </div>
          <div className="profile__controls">
            <button type="submit" className="btn btn--primary">
              Actualizar Perfil
            </button>
          </div>
        </form>
      </div>
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default AddUser;
