import React from 'react'
import './HomeBottom.css'
import { useGlobalContext } from '../../context/GlobalContext'
const HomeBottom = () => {
  const { searchTeam, handleChangeSearchTeam, setSearchTeam } = useGlobalContext();



const handleClickJedi = () => {
 
  setSearchTeam('Jedi')
  handleChangeSearchTeam()
}

  return (
    <div className='team'>


      <div className='teamJedi'>
        <img src='/imagenes/teamjedi.jpg' alt="" />

      </div>

      <div className='teamSith'>
        <img src='/imagenes/teamsith.jpg' alt=""  />
      </div>

    </div>
  )
}

export default HomeBottom