import React from 'react'
import './chatTop.css'
import { Link, useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../../context/GlobalContext'

const ChatTop = ({ title, thumbnail, idContacto }) => {
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
    //navigate('/InfoPage/'+id);
      if (id != "Contactos") {

        const url = window.location.origin + '/InfoPage/'+id
        window.open(url, '_blank')
        
      }



    
  }

  const claseBuscar = title=='Contactos' ? 'busca' : 'noBusca'
  console.log(claseBuscar)
  return (
    <div className="chatTop">
      <div className= {claseHeader} onClick={() => handleOnClick(idContacto)}>
        <div className="imageContacts">
          <img src={thumbnail} alt="" />
        </div>
        <p>{title}</p>
      </div>

      <div className='close' >
        <button className = {title}	onClick={handleClick}><i className="bi bi-x"></i></button>
      </div>
    </div>
  )
}

export default ChatTop