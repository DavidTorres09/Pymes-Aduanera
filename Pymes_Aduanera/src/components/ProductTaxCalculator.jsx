import { useState } from 'react';
import "../css/user/ProductTax.css";

const ProductTaxCalculator = () => {
  const [selectedProduct, setSelectedProduct] = useState('');
  const [taxPercentage, setTaxPercentage] = useState(null);

  const commonProducts = [
    { type: 'Import', name: 'Product A', taxPercentage: 10 },
    { type: 'Import', name: 'Product B', taxPercentage: 15 },
    { type: 'Export', name: 'Product C', taxPercentage: 8 },
  ];

  const handleProductChange = (product) => {
    setSelectedProduct(product);
    setTaxPercentage(null);
  };

  const handleVerifyClick = () => {
    if (selectedProduct) {
      setTaxPercentage(selectedProduct.taxPercentage);
    }
  };

  return (
    <div className="product-tax-calculator">
      <h2>Calculadora de Impuestos</h2>

      <div className="input-container">
        <label htmlFor="productType">Tipo de Producto:</label>
        <select
          id="productType"
          className="product-type-select"
          onChange={(e) => handleProductChange(e.target.value)}
        >
          <option value="">Seleccione un tipo</option>
          <option value="Import">Importación</option>
          <option value="Export">Exportación</option>
        </select>

        <label htmlFor="productName">Producto:</label>
        <select
          id="productName"
          className="product-name-select"
          onChange={(e) => handleProductChange(e.target.value)}
        >
          <option value="">Seleccione un producto</option>
          {commonProducts.map((product, index) => (
            <option key={index} value={product}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      <button className="verify-button" onClick={handleVerifyClick}>
        Verificar
      </button>

      {taxPercentage !== null && (
        <div className="result-container">
          <p className="result-text">
            El porcentaje de impuestos para {selectedProduct.name} es: {taxPercentage}%
          </p>
        </div>
      )}
    </div>
  );
};

export default ProductTaxCalculator;
