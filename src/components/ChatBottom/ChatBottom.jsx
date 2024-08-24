import React, { useEffect, useState } from 'react';
import './chatBottom.css';
import {useGlobalContext} from '../../context/GlobalContext'
const ChatBottom = ({idContacto}) => {
/*ChatBottom . Es el componenete que representa la parte inferior de la pantalla del chat, donde se va a poder filtrar por nombre
  contactos*/

  const {handleGuardarMensaje} = useGlobalContext()
  const [msj, setMsj] = useState('');
  
  const handleChangeOnValue = (e) => {
        setMsj(msjPrev => msjPrev = e.target.value);
        
  };
  useEffect(()=>{}, [msj])


const handleSubmit = (e, msj) => {
  e.preventDefault();
  handleGuardarMensaje(e, msj,idContacto);
  setMsj('');
}
  return (
 <form className='chatBottom' onSubmit={(e) => {handleSubmit(e, msj); setMsj('') }}>
    <input id='textBoxInput' type="text" placeholder="Escribe aqui..." required onChange={handleChangeOnValue} value={msj}/>
    <button type='submit'><i class="bi bi-chevron-double-right"></i></button>
</form>

  );
};

export default ChatBottom;