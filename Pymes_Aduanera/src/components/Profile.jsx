import { useState } from 'react';
import './Perfil.css';

const Perfil = () => {
  // Estado para almacenar los datos del usuario
  const [usuario, setUsuario] = useState({
    nombreUsuario: 'John',
    Apellido1: 'Doe',
    Apellido2: 'Smith',
    idUsuario: '123456789',
    Numero: '123-456-7890',
    Correo: 'john.doe@example.com',
  });

  const actualizarDatos = () => {

    setUsuario({
      ...usuario,
      nombreUsuario: 'NuevoNombre',
    });
  };

  return (
    <div className="perfil-container">
      <h2>Datos del Usuario</h2>
      <div className="datos-usuario">
        <p>
          <strong>Nombre:</strong> {usuario.nombreUsuario}
        </p>
        <p>
          <strong>Apellido:</strong> {usuario.Apellido1} {usuario.Apellido2}
        </p>
        <p>
          <strong>Cedula de Identidad:</strong> {usuario.idUsuario}
        </p>
        <p>
          <strong>Número Telefónico:</strong> {usuario.Numero}
        </p>
        <p>
          <strong>Correo Electrónico:</strong> {usuario.Correo}
        </p>
      </div>
      <button onClick={actualizarDatos}>Actualizar Datos</button>
    </div>
  );
};

export default Perfil;
