import React from 'react'
import './Home.css'
import Contacts from '../../components/Contacts/Contacts'
import { ChatBottom, ChatTop } from '../../components'

import {useGlobalContext} from '../../context/GlobalContext'
import PageBottom from '../../components/PageBottom/PageBottom'
const Home = () => {

  const {contactos} = useGlobalContext()
  console.log(contactos)
  return (

    <div className='home'>
      <ChatTop title="Contactos" thumbnail="/imagenes/starwars.jpeg" idContacto='Contactos'/>
      <Contacts  />
      <PageBottom />
    </div>


  )
}

export default Home