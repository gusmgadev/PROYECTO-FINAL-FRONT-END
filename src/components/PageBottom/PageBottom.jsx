import React from 'react'
import './PageBottom.css'
import { useGlobalContext } from '../../context/GlobalContext'
const PageBottom = () => {
/*PageBottom: Componente que se visualiza en la parte inferior de la pagina principal, donde existe un filtro de busqueda */
const { searchTerm, handleChangeSearchTerm } = useGlobalContext();


  return (
    <div className='busqueda'>
        <input className = "inputBuscar" onChange={handleChangeSearchTerm} value={searchTerm} placeholder="Filtrar" name='search' />
      </div>
  )
}

export default PageBottom