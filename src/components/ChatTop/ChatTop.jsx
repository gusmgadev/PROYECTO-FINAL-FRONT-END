import React from 'react'
import './chatTop.css'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context/GlobalContext'

const ChatTop = ({ title, thumbnail, idContacto }) => {
/*ChatTop: Este componente representa la cabecera del chat, donde se visualiza el nombre del contacto y la imagen del contacto 
al hacer click sobre la imagen o nombre se accede a una ficha basica con datos del contacto que condice con un personaje de starwars*/
  const { searchTerm, handleChangeSearchTerm } = useGlobalContext();
  const navigate = useNavigate();
  let claseHeader = ''
  if (idContacto != "Contactos") {
    claseHeader = 'InfoContacto'
  }
  else {
    claseHeader = 'noInfo'
  }
  const handleClick = () => {
    navigate('/');
  }

  const handleOnClick = (id) => {

    console.log(id)
    if (title != 'Contactos') {
      //Se abrira una nueva pestaña donde se visualizará la informacion del contacto (correspondiente al perfil Star Wars que se obtiene de la API)
      const url = window.location.origin + '/InfoPage/' + id
      window.open(url, '_blank')

    }
  }
  const claseBuscar = title == 'Contactos' ? 'busca' : 'noBusca'
  console.log(claseBuscar)
  return (
    <div className="chatTop">
      <div className={claseHeader} onClick={() => handleOnClick(idContacto)}>
        <div className="imageContacts">
          <img src={thumbnail} alt="" />
        </div>
        <p>{title}</p>
      </div>
      <div className='close' >
        <button className={title} onClick={handleClick}><i className="bi bi-x"></i></button>
      </div>
    </div>
  )
}
export default ChatTop