import { createContext, useContext, useEffect, useState } from "react";
import { obtenerContactos ,guardarMensajesContacto} from "../helpers/mensajes";

/*GlobalContext: contexto donde se maneja el acceso a los contactos y mensajes, se accede al localstorge y se 
asigna a un estado */

const GlobalContext = createContext()

export const GlobalContextProvider = ({children}) => {

    const [contactos, setContactos] = useState(obtenerContactos()) 
    const [searchTerm, setSearchTerm] = useState('')

    const [searchTeam, setSearchTeam] = useState('')

    const handleChangeSearchTeam = () => {

        setSearchTeam(searchTeam)

        
    }

    
    useEffect(()=>{
        const contactList = obtenerContactos()
        console.log(searchTeam)
        if(searchTeam != 'todos'){
            
            const newContactList = contactList.filter(contacto => (contacto.team == searchTeam))
            setContactos(newContactList)
        }
        else{
            setContactos(contactList)
            setSearchTerm('')
        }
        
    }, [searchTeam])

    const handleChangeSearchTerm = ( e ) => {
        setSearchTerm(e.target.value)
  
    }

    
    useEffect(()=>{
        const contactList = obtenerContactos()
        if(searchTerm != ''){
            const newContactList = contactList.filter(contacto => contacto.nombre.toLowerCase().includes(searchTerm.toLowerCase()))
            setContactos(newContactList)
        }
        else{
            setContactos(contactList)
        }
        
    }, [searchTerm])

    const obtenerContactoPorId = (id) => {
        const contacto = contactos.find(contacto => Number(contacto.id) === Number(id));
        return contacto
        
      }
    const obtenerIndexContacto = (id) => {
        const index = contactos.findIndex(contacto => Number(contacto.id) === Number(id));
        return index
    }

    const handleDeleteContacto = (id) => {
        setProductos(eliminarContactoPorId(id))
        navigation('/')
    }
    const handleGuardarMensaje = (e, textValue,idContacto) =>{
        const contacto = obtenerContactoPorId(idContacto)     
        e.preventDefault();
        contacto.mensajes.push({
            author: "yo",
            content: textValue,
            fecha: "ahora",
            estado: "enviado",
            id: contacto.mensajes.length + 1})
            const contactosModificados = obtenerContactos()
            contactosModificados[obtenerIndexContacto(idContacto)].mensajes = contacto.mensajes
            setContactos(contactosPrev => contactosPrev = contactosModificados)
            guardarMensajesContacto(contacto.mensajes, idContacto)
        };




    return (
        <GlobalContext.Provider value={
                {
                    contactos: contactos,
                    handleGuardarMensaje: handleGuardarMensaje,
                    obtenerContactoPorId: obtenerContactoPorId,
                    handleChangeSearchTerm: handleChangeSearchTerm,
                    searchTerm: searchTerm,
                    handleChangeSearchTeam: handleChangeSearchTeam,
                    searchTeam: searchTeam,
                    setSearchTeam:setSearchTeam

            
                    
                }
            }>
            {children}
        </GlobalContext.Provider>
    )
}



export const useGlobalContext = () => {
    /*Esto devolvera el objeto value proveido por el GlobalContext  */
    return useContext(GlobalContext)
}
