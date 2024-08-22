import React, { useState } from "react";
import { ChatTop, HomeBottom,  ContactInfo } from "../../components/index";
import "./InfoPage.css";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
import PageBottom from "../../components/PageBottom/PageBottom";

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

