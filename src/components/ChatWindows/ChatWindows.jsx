import React from 'react';
import './chatWindows.css';

const ChatWindows = ({memoryMensajes}) => {
  /* ChatWindows: componente que contiene y visualiza los mensajes de un contacto en particular. 
  Si el mensaje es del contacto se puestra a la izquierda, si es un mensaje mio se muestra a la derecha*/
  const mapping = memoryMensajes.map((item) => {
    const render = item.author !== 'yo' ? 'leftRender' : 'rigthRender';
    return (
      <div key={(item.id)} className={render}>
        <p>{item.content} </p>
        
        <div className="state">

          <div className="time">
            <span>
              {item.fecha}
            </span>
            
            <span>
              {item.hour}
            </span>
            
          </div>
          <span>
            {item.estado}
          </span>
      
          

        </div>
      </div>
    );
  });

  return (
    <>
    <div className='chatWindow'>
      {mapping}
    </div>
    </>
  );
};

export default ChatWindows;