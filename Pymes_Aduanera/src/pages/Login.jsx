import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../css/Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === 'admin' && password === 'test123') {
      navigate('/admin');
    } else if (username === 'user' && password === 'test123') {
      navigate('/pagina2');
    } else {
      navigate('/error'); 
    }
  };

  return (
    <div className='containerLogin'>
      <div className="login-container">
      <div className="company-name">
        <h1 className='TitleLogin'>Pymes Aduanera</h1>
      </div>

      <img src="https://cdn-icons-png.flaticon.com/512/1996/1996005.png" alt="Logo de la empresa" className="logo" />

      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Usuario:</label>
          <input type="text" id="username" name="username" required value={username} onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="form-group">
          <label htmlFor="password">Contraseña:</label>
          <input type="password" id="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="form-group">
          <button type="submit">Iniciar sesión</button>
        </div>
      </form>
    </div>
    </div>
    
  );
}

export default Login;
