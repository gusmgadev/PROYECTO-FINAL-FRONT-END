import React, { useState } from "react";
import { ContactInfo } from "../../components/index";
import "./InfoPage.css";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";

/*InfoPage: Componente que representa la pagina donde se visualiza la informacion del personaje de starwars vinculado con el contacto */
const InfoPage = () => {
  const {obtenerContactoPorId,guardarMensajes,obtenerMensajes} = useGlobalContext()
  const parametros = useParams()
  return (

      <div className="info">
     
      <ContactInfo idPersonaje={parametros.id} />
  
    </div>


  );
};

export default InfoPage;

