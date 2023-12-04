import { useState } from 'react';
import "../css/admin/ParcelManager.css"
import File from "../Files/Parsersmeaning.pdf"

const PaquetesManager = () => {
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [paquetes, setPaquetes] = useState([
    {
        tipoProducto: 'Beauty Products',
        origen: 'Los Angeles, USA',
        direccionDestino: '456 Glam St, Beauty City',
        numeroCasillero: 'C67890',
        numeroTracking: '987654321',
        detalleTracking: 'En proceso de empaquetado',
        Estado: 'En tránsito',
        Archivo: 'beauty_product_invoice.pdf', // Nombre del documento
      },
      {
        tipoProducto: 'Sportswear',
        origen: 'Barcelona, Spain',
        direccionDestino: '789 Active Ave, Fitness Town',
        numeroCasillero: 'C24680',
        numeroTracking: '555111333',
        detalleTracking: 'En clasificación aduanera',
        Estado: 'En espera',
        Archivo: 'sportswear_order.docx', // Nombre del documento
      },
      {
        tipoProducto: 'Educational Books',
        origen: 'Tokyo, Japan',
        direccionDestino: '101 Learning St, Knowledge City',
        numeroCasillero: 'C13579',
        numeroTracking: '876543210',
        detalleTracking: 'En proceso de entrega',
        Estado: 'En ruta',
        Archivo: 'educational_books_manifest.xlsx', // Nombre del documento
      },
      {
        tipoProducto: 'Toys',
        origen: 'Sydney, Australia',
        direccionDestino: '321 Playful Blvd, Toyland',
        numeroCasillero: 'C24601',
        numeroTracking: '1122334455',
        detalleTracking: 'En revisión de seguridad',
        Estado: 'En espera de inspección',
        Archivo: 'toys_safety_certificate.pdf', // Nombre del documento
      },
      {
        tipoProducto: 'Sports Equipment',
        origen: 'Rio de Janeiro, Brazil',
        direccionDestino: '555 Stadium Rd, Sports City',
        numeroCasillero: 'C78901',
        numeroTracking: '5432109876',
        detalleTracking: 'En proceso de envío',
        Estado: 'En camino',
        Archivo: 'sports_equipment_warranty.doc', // Nombre del documento
      }

      
  ]);
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState({
    tipoProducto: '',
    origen: '',
    direccionDestino: '',
    numeroCasillero: '',
    numeroTracking: '',
    detalleTracking: '',
    Estado: '',
    Archivo: ''
  });
  
  
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value, type } = e.target;
  
    if (type === 'file') {
      const file = e.target.files[0];
      setPaqueteSeleccionado((prevPaquete) => ({
        ...prevPaquete,
        [name]: file,
      }));
    } else {
      setPaqueteSeleccionado((prevPaquete) => ({
        ...prevPaquete,
        [name]: value,
      }));
    }
  };
  

  const agregarPaquete = async () => {
    if (paqueteSeleccionado.Archivo) {
      const formData = new FormData();
      formData.append('Archivo', paqueteSeleccionado.Archivo);
      try {
        const response = await fetch('/ruta-de-tu-api-para-cargar-archivos', {
          method: 'POST',
          body: formData,
        });
  
      } catch (error) {
        console.error('Error al cargar el archivo:', error);
      }
    }
  
    // Resto del código...
  };
  

  const editarPaquete = (index) => {
    setPaqueteSeleccionado({ ...paquetes[index] });
    setEditIndex(index);
    setMostrarFormulario(true);
  };

  const eliminarPaquete = (index) => {
    const nuevosPaquetes = paquetes.filter((_, i) => i !== index);
    setPaquetes(nuevosPaquetes);
  };

  const resetForm = () => {
    setPaqueteSeleccionado({
      tipoProducto: '',
      origen: '',
      direccionDestino: '',
      numeroCasillero: '',
      numeroTracking: '',
      detalleTracking: '',
      Estado: '',
      Archivo: ''
    });
    setEditIndex(null);
    setMostrarFormulario(false);
  };

  const isAnyFieldEmpty = () => {
    return Object.values(paqueteSeleccionado).some((value) => value === '');
  };

  return (
    <div className="paquetes-manager">
      <h1 className='pm-title'>Agregar Nuevo Paquete</h1>
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
                <label>
                    Detalle Tracking:
                    <input
                    type="text"
                    name="detalleTracking"
                    value={paqueteSeleccionado.detalleTracking}
                    onChange={handleInputChange}
                    />
                </label>
                <label>
                    Estado:
                    <input
                    type="text"
                    name="detalleTracking"
                    value={paqueteSeleccionado.Estado}
                    onChange={handleInputChange}
                    />
                </label>
                <label className="formLabel">
                Archivo
                <input
                    type="file"
                    name="Archivo"
                    onChange={handleInputChange}
                    className='fileParcel'
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
                    <th>Detalle Tracking</th>
                    <th>Estado</th>
                    <th>Archivo</th>
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
                    <td>{paquete.detalleTracking}</td>
                    <td>{paquete.Estado}</td>
                    <td><a download="" href={File} className="pm-button-link">Download</a></td>
                    <td>
                        <button onClick={() => editarPaquete(index)} className="pm-button">Editar</button>
                        <button onClick={() => eliminarPaquete(index)} className="pm-button">Eliminar</button>
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
