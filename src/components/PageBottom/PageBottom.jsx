import React from 'react'
import './PageBottom.css'
import { useGlobalContext } from '../../context/GlobalContext'
const PageBottom = () => {
  
const { searchTerm, handleChangeSearchTerm } = useGlobalContext();


  return (
    <div className='busqueda'>
        <input className = "inputBuscar" onChange={handleChangeSearchTerm} value={searchTerm} placeholder="Filtrar" name='search' />
      </div>
  )
}

export default PageBottom