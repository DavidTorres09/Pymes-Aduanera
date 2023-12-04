import { useState } from 'react';
import "../css/admin/ParcelManager.css"

const PaquetesManager = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [paquetes, setPaquetes] = useState([
    {
        tipoProducto: 'Electronics',
        origen: 'New York, USA',
        direccionDestino: '123 Main St, Cityville',
        numeroCasillero: 'C12345',
        numeroTracking: '123456789',
      },
      {
        tipoProducto: 'Clothing',
        origen: 'Paris, France',
        direccionDestino: '456 Fashion Ave, Style City',
        numeroCasillero: 'C67890',
        numeroTracking: '987654321',
      },
      {
        tipoProducto: 'Books',
        origen: 'London, UK',
        direccionDestino: '789 Library St, Bookland',
        numeroCasillero: 'C24680',
        numeroTracking: '555111333',
      },
  ]);
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState({
    tipoProducto: '',
    origen: '',
    direccionDestino: '',
    numeroCasillero: '',
    numeroTracking: '',
  });
  
  
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPaqueteSeleccionado((prevPaquete) => ({
      ...prevPaquete,
      [name]: value,
    }));
  };

  const agregarPaquete = () => {
    if (editIndex !== null) {
      // If editIndex is not null, it means we are editing an existing package
      const nuevosPaquetes = [...paquetes];
      nuevosPaquetes[editIndex] = { ...paqueteSeleccionado };
      setPaquetes(nuevosPaquetes);

      // Reset the editIndex after saving the edition
      setEditIndex(null);
    } else {
      // If editIndex is null, it means we are adding a new package
      setPaquetes((prevPaquetes) => [...prevPaquetes, { ...paqueteSeleccionado }]);
    }

    // Clear the form
    resetForm();
  };

  const editarPaquete = (index) => {
    // Set the selected package for editing
    setPaqueteSeleccionado({ ...paquetes[index] });
    setEditIndex(index);

    // Show the modal
    setMostrarFormulario(true);
  };

  const eliminarPaquete = (index) => {
    // Implement the logic to delete the selected package
    const nuevosPaquetes = paquetes.filter((_, i) => i !== index);
    setPaquetes(nuevosPaquetes);
  };

  const resetForm = () => {
    // Clear the form
    setPaqueteSeleccionado({
      tipoProducto: '',
      origen: '',
      direccionDestino: '',
      numeroCasillero: '',
      numeroTracking: '',
    });

    // Reset the editIndex
    setEditIndex(null);

    // Hide the modal
    setMostrarFormulario(false);
  };

  const isAnyFieldEmpty = () => {
    return Object.values(paqueteSeleccionado).some((value) => value === '');
  };

  return (
    <div className="paquetes-manager">
      <button className="btn-agregar" onClick={() => setMostrarFormulario(true)}>
        Agregar Paquete
      </button>

      {mostrarFormulario && (
        <div className="pm-modal-overlay">
          <div className="pm-modal-content">
            <span className="pm-close" onClick={() => resetForm()}>&times;</span>
            <form className="pm-formulario-paquete">
                <label>
                    Tipo de Producto:
                    <input
                    type="text"
                    name="tipoProducto"
                    value={paqueteSeleccionado.tipoProducto}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Origen:
                    <input
                    type="text"
                    name="origen"
                    value={paqueteSeleccionado.origen}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Destino:
                    <input
                    type="text"
                    name="direccionDestino"
                    value={paqueteSeleccionado.direccionDestino}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Casillero:
                    <input
                    type="text"
                    name="numeroCasillero"
                    value={paqueteSeleccionado.numeroCasillero}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Tracking:
                    <input
                    type="text"
                    name="numeroTracking"
                    value={paqueteSeleccionado.numeroTracking}
                    onChange={handleInputChange}
                    />
                </label>
                <button
                className="pm-btn-guardar"
                type="button"
                onClick={agregarPaquete}
                disabled={isAnyFieldEmpty()}
              >
                {editIndex !== null ? 'Guardar Edición' : 'Guardar Paquete'}
              </button>
            </form>
          </div>
        </div>
      )}

      <div className="pm-listado-paquetes">
        <h2>Listado de Paquetes</h2>
        <table>
            <thead>
                <tr>
                    <th>Tipo de Producto</th>
                    <th>Origen</th>
                    <th>Destino</th>
                    <th>Casillero</th>
                    <th>Tracking</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {paquetes.map((paquete, index) => (
                <tr key={index}>
                    <td>{paquete.tipoProducto}</td>
                    <td>{paquete.origen}</td>
                    <td>{paquete.direccionDestino}</td>
                    <td>{paquete.numeroCasillero}</td>
                    <td>{paquete.numeroTracking}</td>
                    <td>
                        <button onClick={() => editarPaquete(index)}>Editar</button>
                        <button onClick={() => eliminarPaquete(index)}>Eliminar</button>
                    </td>
                </tr>
                ))}
            </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaquetesManager;
