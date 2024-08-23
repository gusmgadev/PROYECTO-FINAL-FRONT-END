import React from 'react';
import './chatWindows.css';

const ChatWindows = ({memoryMensajes}) => {
  //componente que contiene los mensajes de un contacto
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