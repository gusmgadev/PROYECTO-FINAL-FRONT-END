import React, { useState } from "react";
import { ChatTop, ChatWindows, ChatBottom } from "../../components/index";
import "./Chat.css";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../../context/GlobalContext";
const Chat = () => {
  const {obtenerContactoPorId,guardarMensajes,obtenerMensajes} = useGlobalContext()
  const parametros = useParams()
  return (
    <>
      <div className="chat">
      <ChatTop title={obtenerContactoPorId(parametros.id).nombre} thumbnail={obtenerContactoPorId(parametros.id).thumbnail} idContacto={parametros.id} />
      <ChatWindows memoryMensajes={obtenerContactoPorId(parametros.id).mensajes} />
      <ChatBottom idContacto={parametros.id} />
    </div>

    </>

  );
};

export default Chat;
