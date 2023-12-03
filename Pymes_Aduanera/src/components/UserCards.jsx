import { useState } from 'react';
import Modal from 'react-modal';
import '../css/admin/UserCards.css'; // Asegúrate de importar tu archivo de estilos

const UserCards = () => {
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nombreUsuario: 'Juan',
      Apellido1: 'Perez',
      Apellido2: 'Gomez',
      idUsuario: '123456789',
      Numero: '555-1234',
      Correo: 'juan.perez@example.com',
    },
    {
      id: 2,
      nombreUsuario: 'Ana',
      Apellido1: 'González',
      Apellido2: 'López',
      idUsuario: '987654321',
      Numero: '555-5678',
      Correo: 'ana.gonzalez@example.com',
    },
    {
      id: 3,
      nombreUsuario: 'Carlos',
      Apellido1: 'Rodríguez',
      Apellido2: 'Martínez',
      idUsuario: '654321987',
      Numero: '555-4321',
      Correo: 'carlos.rodriguez@example.com',
    },
    {
      id: 4,
      nombreUsuario: 'María',
      Apellido1: 'Sánchez',
      Apellido2: 'Fernández',
      idUsuario: '789456123',
      Numero: '555-8765',
      Correo: 'maria.sanchez@example.com',
    },
    {
      id: 5,
      nombreUsuario: 'Pedro',
      Apellido1: 'López',
      Apellido2: 'Díaz',
      idUsuario: '321654987',
      Numero: '555-2345',
      Correo: 'pedro.lopez@example.com',
    },
    {
      id: 6,
      nombreUsuario: 'Laura',
      Apellido1: 'Ramírez',
      Apellido2: 'Hernández',
      idUsuario: '456789012',
      Numero: '555-7890',
      Correo: 'laura.ramirez@example.com',
    }   
  ]);

  const [nuevoCliente, setNuevoCliente] = useState({
    nombreUsuario: '',
    Apellido1: '',
    Apellido2: '',
    idUsuario: '',
    Numero: '',
    Correo: '',
  });
  
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  
  const [modalIsOpen, setModalIsOpen] = useState(false);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNuevoCliente((prevCliente) => ({
      ...prevCliente,
      [name]: value,
    }));
  };
  
  const guardarCliente = () => {
    if (clienteSeleccionado) {
      // Si hay un cliente seleccionado, se está modificando
      const nuevosClientes = clientes.map((cliente) =>
        cliente.id === clienteSeleccionado.id ? { ...clienteSeleccionado, ...nuevoCliente } : cliente
      );
      setClientes(nuevosClientes);
    } else {
      // Si no hay cliente seleccionado, se está agregando uno nuevo
      setClientes((prevClientes) => [
        ...prevClientes,
        { id: prevClientes.length + 1, ...nuevoCliente },
      ]);
    }
    setNuevoCliente({
      nombreUsuario: '',
      Apellido1: '',
      Apellido2: '',
      idUsuario: '',
      Numero: '',
      Correo: '',
    });
  
    setModalIsOpen(false);
    setClienteSeleccionado(null);
  };
  
  const abrirModificar = (cliente) => {
    // Abrir el modal y establecer el cliente seleccionado para modificar
    setModalIsOpen(true);
    setClienteSeleccionado(cliente);
  
    // Copiar todos los campos del cliente al estado nuevoCliente
    setNuevoCliente({ ...cliente });
  };
  
  const abrirEliminar = (cliente) => {
    const nuevosClientes = clientes.filter((c) => c.id !== cliente.id);
    setClientes(nuevosClientes);
  
    setModalIsOpen(false);
    setClienteSeleccionado(null);
  };
  
  const openModal = () => {
    setModalIsOpen(true);
    setClienteSeleccionado(null);
  };
  
  const closeModal = () => {
    setNuevoCliente({
      nombreUsuario: '',
      Apellido1: '',
      Apellido2: '',
      idUsuario: '',
      Numero: '',
      Correo: '',
    });
    setModalIsOpen(false);
    setClienteSeleccionado(null);
  };

  return (
    <div className="container">
      <h1>Agregar Nuevo Cliente</h1>
      <button onClick={openModal}>Agregar Cliente</button>

      <h1>Clientes Actuales</h1>
      <div className="card-container">
        {clientes.map((cliente) => (
          <div key={cliente.id} className="card">
            <h2>{`${cliente.nombreUsuario} ${cliente.Apellido1} ${cliente.Apellido2}`}</h2>
            <p>ID: {cliente.idUsuario}</p>
            <p>Número de Teléfono: {cliente.Numero}</p>
            <p>Correo Electrónico: {cliente.Correo}</p>
            <button onClick={() => abrirModificar(cliente)} className='modify'>Modificar</button>
            <button onClick={() => abrirEliminar(cliente)}>Eliminar</button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Agregar Nuevo Cliente"
        className="modal"
        overlayClassName="overlay"
      >
        <h2>Agregar Nuevo Cliente</h2>
        <form>
          <label>
            Nombre:
            <input
              type="text"
              name="nombreUsuario"
              value={nuevoCliente.nombreUsuario}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Primer Apellido:
            <input
              type="text"
              name="Apellido1"
              value={nuevoCliente.Apellido1}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Segundo Apellido:
            <input
              type="text"
              name="Apellido2"
              value={nuevoCliente.Apellido2}
              onChange={handleInputChange}
            />
          </label>
          <label>
            ID:
            <input
              type="number"
              name="idUsuario"
              value={nuevoCliente.idUsuario}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Telefono:
            <input
              type="text"
              name="Numero"
              value={nuevoCliente.Numero}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Correo:
            <input
              type="email"
              name="Correo"
              value={nuevoCliente.Correo}
              onChange={handleInputChange}
            />
          </label>
         
          
          <button type="button" onClick={guardarCliente}>
            {clienteSeleccionado ? 'Modificar Cliente' : 'Guardar Cliente'}
          </button>
          <button type="button" onClick={closeModal}>Cerrar</button>
        </form>
      </Modal>
    </div>
  );
};

export default UserCards;
