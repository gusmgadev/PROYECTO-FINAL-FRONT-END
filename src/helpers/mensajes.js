import { DATA_MOOK } from "../data/data";
/*mensajes: Administra el acceso al localstorge donde se almacenan contactos y mensajes*/
export const obtenerDatosPorId = (id) => {
  const lista_contactos = obtenerContactos()
  return lista_contactos.find(contactos => Number(contactos.id) === Number(id));
}

export const obtenerContactos = () => {
  const contactos_guardados = localStorage.getItem('contactos')
  if(contactos_guardados){

      return JSON.parse(contactos_guardados)
  }
  else{

    guardarContactos(DATA_MOOK)
      return DATA_MOOK
  }
}

export const guardarContactos = (contactos) => {
  const productos_JSON = JSON.stringify(contactos)
  localStorage.setItem('contactos', productos_JSON)
}

export const guardarMensaje = (nuevo_mensaje, id_contacto) => {
  const contacto = obtenerDatosPorId(id_contacto)
  contacto.mensajes.push(nuevo_mensaje)
  return contacto
}

export const guardarMensajesContacto = (mensajes, id_contacto) => {
  const contactos = obtenerContactos()

  const contacto = contactos.find(contactos => Number(contactos.id) === Number(id_contacto));

  contacto.mensajes = mensajes
  const posicion = contactos.findIndex(contactos => Number(contactos.id) === Number(id_contacto));
  contactos[posicion] = contacto
  guardarContactos(contactos)
  return contactos
}


export const eliminarMensajePorId = (id_contacto,msg_id) =>{
  const contacto = obtenerDatosPorId(id_contacto)
  const lista_mensajes = contacto.mensajes
  const nueva_lista = lista_mensajes.filter( mensaje=> Number(mensaje.msg_id) !== Number(id))
  contacto.mensajes = nueva_lista
  const posicion = contactos.findIndex(contactos => Number(contactos.id) === Number(id_contacto));
  const contactos = obtenerContactos()
  contactos[posicion] = contacto
  guardarContactos(contactos)
  return contactos
}