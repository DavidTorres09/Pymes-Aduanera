import { useState } from 'react';
import "../css/user/TrackingUser.css"; // Asegúrate de tener la ruta correcta al archivo de estilos
import File from "../Files/Parsersmeaning.pdf"; // Asegúrate de tener la ruta correcta al archivo

const TrackingUser = () => {
  const [showModal, setShowModal] = useState(false);
  const [trackingData, setTrackingData] = useState([
    {
      id: 1,
      identification: 'ABC123',
      originCountry: 'Country A',
      destinationCountry: 'Country B',
      shippingLine: 'Naviera X',
      process: 'Trámite A',
      destination: 'City Z',
      processStatus: 'En proceso',
      reviewStatus: 'Pendiente',
      fileLink: 'https://example.com/file1.pdf', // Reemplaza con el enlace real del archivo
    },
    // Agrega más datos de seguimiento según sea necesario
  ]);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleReport = (newProduct) => {
    console.log('Producto Reportado:', newProduct);
    closeModal();
  };

  return (
    <div className="tracking-module">
    <h2 className="tracking-heading">Tracking de Pedidos</h2>
    <table className="tracking-table">
      <thead>
        <tr>
          <th className="tracking-id">Identificación</th>
          <th className="tracking-origin">Pais Origen</th>
          <th className="tracking-destination">Pais Destino</th>
          <th className="tracking-naviera">Naviera</th>
          <th className="tracking-process">Trámite</th>
          <th className="tracking-destination">Destino</th>
          <th className="tracking-process-status">Estado Trámite</th>
          <th className="tracking-review-status">Estado Revisión</th>
          <th className="tracking-actions">Acciones</th>
        </tr>
      </thead>
      <tbody>
        {trackingData.map((item) => (
          <tr key={item.id}>
            <td>{item.identification}</td>
            <td>{item.originCountry}</td>
            <td>{item.destinationCountry}</td>
            <td>{item.shippingLine}</td>
            <td>{item.process}</td>
            <td>{item.destination}</td>
            <td>{item.processStatus}</td>
            <td>{item.reviewStatus}</td>
            <td>
              <a download="" href={File} className="tracking-download-link">
                Descargar
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  
    <button className="tracking-report-button" onClick={openModal}>
      Reportar Nuevo Producto
    </button>
  
    {showModal && (
      <div className="tracking-overlay" onClick={closeModal}>
          <div className="tracking-report-modal">
            <div className="modal-content">
              <span className="close-button" onClick={closeModal}>
                &times;
              </span>
              <h2 className="report-heading">Reportar Nuevo Producto</h2>
              <form>
                <label htmlFor="productName" className="report-label">
                  Nombre del Producto:
                </label>
                <input type="text" id="productName" name="productName" className="report-input" />
  
            <label htmlFor="originCountry" className="report-label">Pais Origen:</label>
            <input type="text" id="originCountry" name="originCountry" className="report-input" />
  
            <label htmlFor="destinationCountry" className="report-label">Pais Destino:</label>
            <input type="text" id="destinationCountry" name="destinationCountry" className="report-input" />
  
            <label htmlFor="shippingLine" className="report-label">Naviera:</label>
            <input type="text" id="shippingLine" name="shippingLine" className="report-input" />
  
            <label htmlFor="process" className="report-label">Trámite:</label>
            <input type="text" id="process" name="process" className="report-input" />
  
            <label htmlFor="destination" className="report-label">Destino:</label>
            <input type="text" id="destination" name="destination" className="report-input" />
  
            <label htmlFor="reason" className="report-label">Motivo del Reporte:</label>
            <textarea id="reason" name="reason" className="report-textarea"></textarea>
  
            <button
                  type="button"
                  onClick={() => handleReport(/* Pasa los datos del formulario */)}
                  className="report-submit-button"
                >
                  Reportar Producto
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TrackingUser;