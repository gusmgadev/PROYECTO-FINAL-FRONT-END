import React, { useState, useEffect } from 'react';
import { useGlobalContext } from '../../context/GlobalContext';
import { obtenerDatosPorId } from '../../helpers/mensajes';
import './ContactInfo.css'
const ContactInfo = ({idPersonaje}) => {
  const [personaje, setpersonaje] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const contacto = obtenerDatosPorId  (idPersonaje)
  useEffect(() => {
    // Función para obtener los datos de la API
    const fetchData = async () => {
      try {
        console.log(idPersonaje)
        const response = await fetch('https://swapi.dev/api/people/'+ idPersonaje + '/');
        if (!response.ok) {
          throw new Error('Error en la solicitud');
        }
        const data = await response.json();
        setpersonaje(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Manejo del estado de carga
  if (loading) {
    return <div className='contactInfo'>Cargando...</div>;
  }

  // Manejo de errores
  if (error) {
    return <div className='contactInfo'>Error: {error}</div>;
  }

  // Renderizado de los datos del personaj

  
  return (
    <div className='contactInfo'>

   
      <h1 className='nombre'>{personaje.name}</h1>
      <div className='datos'>
        
        <p><strong>Altura:</strong> {personaje.height} cm</p>
        <p><strong>Peso:</strong> {personaje.mass} kg</p>
        <p><strong>Color de cabello:</strong> {personaje.hair_color}</p>
        <p><strong>Color de piel:</strong> {personaje.skin_color}</p>
        <p><strong>Color de ojos:</strong> {personaje.eye_color}</p>
        <p><strong>Año de nacimiento:</strong> {personaje.birth_year}</p>
        <p><strong>Género:</strong> {personaje.gender}</p>

      </div>
      <div className='contactImage'>
      <img  src={contacto.thumbnail} alt="" />
      </div>
    </div>
  );
}

export default ContactInfo;