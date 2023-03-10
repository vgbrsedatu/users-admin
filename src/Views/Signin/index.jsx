/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Manage `Signin` React component view.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

// » IMPORT COMPONENTS
import Loading from '../../Components/Loading';

// » IMPORT CUSTOM HOOKS
import { useSignin } from '../../Context/AuthContext';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Signin` component react component view.
 *
 * @component
 * @returns {JSX.Element} The `Signin` components.
 */
const Signin = () => {
  const [email, setEmail] = useState('vibeltranr@gmail.com');
  const [password, setPassword] = useState('dipper123');
  const [error, setError] = useState(null);
  const { loading, signin } = useSignin();
  const navigate = useNavigate();
  const location = useLocation();
  const redirect = !location.state ? '/' : location.state.from;

  const onClick = () => {
    signin({ email, password })
      .then(() => {
        navigate(redirect);
      })
      .catch(err => {
        setError(err.message);
      });
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <article id="signin" className="surface">
      <form className="signup">
        <fieldset>
          <legend>Signup</legend>
          <label className="form-group" htmlFor="email">
            <span>Correo:</span>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Escribe tu correo usuario"
              value={email}
              required
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </label>
          <label className="form-group" htmlFor="password">
            <span>Contraseña:</span>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Escribe tu correo contraseña"
              value={password}
              required
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </label>
          <div className="form-group">
            <button className="btn btn--primary" type="button" onClick={onClick}>
              Enviar
            </button>
          </div>
        </fieldset>
      </form>
      {error && <div className="error-message">{error}</div>}
    </article>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Signin;
