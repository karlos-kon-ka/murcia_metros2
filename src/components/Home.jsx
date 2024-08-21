import React, { useState } from 'react';
import Data from '../../Barrios.json';

function Home() {
 
  const [selectedBarrio, setSelectedBarrio] = useState('');
  const [superficie, setSuperficie] = useState('');
  const [precioTotal, setPrecioTotal] = useState(null);
  const [barrioImg, setBarrioImg] = useState('');

  // Maneja el cambio de selección del barrio
  const handleSelectChange = (e) => {
    const barrioSeleccionado = e.target.value;
    setSelectedBarrio(barrioSeleccionado);

    // Buscar el barrio seleccionado en el JSON y actualizar la imagen
    const barrio = Data.find((b) => b.barrio === barrioSeleccionado);
    if (barrio) {
      setBarrioImg(barrio.img);
    } else {
      setBarrioImg('');
    }
  };

  // Maneja el cambio del input de superficie
  const handleSuperficieChange = (e) => {
    setSuperficie(e.target.value);
  };

  // Función para calcular el precio total de la vivienda
  const calcularPrecioTotal = () => {
    // Encontrar el barrio seleccionado en el JSON
    const barrio = Data.find((b) => b.barrio === selectedBarrio);

    if (barrio && superficie) {
      // Calcular el precio total
      const precioTotalCalculado = barrio.precio_m2 * parseFloat(superficie);
      // Formatear el precio total con separadores de miles
      const precioFormateado = precioTotalCalculado.toLocaleString('es-ES', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
      setPrecioTotal(precioFormateado); // Guardar el resultado formateado
    } else {
      setPrecioTotal(null);
    }
  };

  return (
    <section className="seccion_principal">
      <div className="intro_parrafos">
        <div>
          <p>¿Sabes cuánto vale tu casa? <br /> Aquí puedes verlo en segundos.</p>
        </div>
        <div>
          <p>Añade tus datos para calcular con máxima exactitud el valor de tus metros cuadrados</p>
        </div>
      </div>

      <div className="pricipal_app">
        <div>
          {/* Select para elegir el barrio */}
          <select className='selector' value={selectedBarrio} onChange={handleSelectChange}>
            <option value="">Selecciona un barrio</option>
            {Data.map((barrio) => (
              <option key={barrio.id} value={barrio.barrio}>
                {barrio.barrio}
              </option>
            ))}
          </select>

          {/* Input para la superficie */}
          <input
            type="text"
            id="input3"
            placeholder="Introduce tu superficie"
            value={superficie}
            onChange={handleSuperficieChange}
          />

          {/* Botón para calcular */}
          <button onClick={calcularPrecioTotal}>Calcular Precio</button>

          {/* Mostrar el resultado del cálculo */}
          {precioTotal && selectedBarrio && (
            <div>
              <p>El precio total de la vivienda en {selectedBarrio} es de alrededor {precioTotal} €.</p>
            </div>
          )}

          {/* Mostrar la imagen del barrio seleccionado */}
          {barrioImg && (
            <div>
              <img src={barrioImg} id='fotobarrio' alt={`Imagen del barrio ${selectedBarrio}`} style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          )}
        </div>
      </div>
      <div className="intro_parrafos">
        <div>
          <p>Los precios pueden variar en función de la evolución temporal del mercado y de las obras de actualización que se realicen.</p>
        </div>
       
      </div>



      <div className='limpiezas' >

      </div>
    </section>
  );
}

export default Home;
