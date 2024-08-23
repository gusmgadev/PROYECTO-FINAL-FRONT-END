const DATA_MOOK = [
  {
    nombre: 'Luke Skywalker',
    thumbnail: '/imagenes/luke.jpg',
    ultima_conexion: 'ayer',
    id: 1,
    team: 'Jedi',
    mensajes: [
      {
        author: 'yo',
        content: 'Hola luke, ¿cómo estás?',
        estado: 'visto',
        fecha: 'hoy',
        hour: '13:15',
        id: 'msg1'
      },
      {
        author: 'Luke Skywalker',
        content: '¡Todo bien! ¿Y tú?',
        estado: 'visto',
        fecha: 'hoy',
        hour: '13:20',
        id: 'msg2'
      },
      
    ]
  },
  {
    nombre: 'Leia Organa',
    id: 5,
    thumbnail: '/imagenes/leia.png',
    ultima_conexion: 'ayer',
    team: 'Jedi',
    mensajes: [
      {
        author: 'yo',
        content: 'Hola Princesa, ¿cómo estás?',
        estado: 'entregado',
        fecha: '23/12/2024',
        hour: '10:00',
        id: 'msg1'
      },
      {
        author: 'Leia',
        content: 'Hola Soldado, estoy bien. ¿Y ud?',
        estado: 'visto',
        fecha: '23/12/2024',
        hour: '10:05',
        id: 'msg2'
      }
    ]
  },
  {
    nombre: 'Obi-Wan Kenobi',
    id: 10,
    thumbnail: '/imagenes/obiwan.jpg',
    ultima_conexion: 'hoy',
    team: 'Jedi',
    mensajes: [
      {
        author: 'yo',
        content: '¿Hola Obi-Wan, ¿cómo está, maestro?',
        estado: 'entregado',
        fecha: 'ayer',
        hour: '15:30',
        id: 'msg1'
      },
      {
        author: 'Obi-Wan Kenobi',
        content: 'Bien, preparando la nave . Partimos hoy, 7pm?',
        estado: 'visto',
        fecha: 'ayer',
        hour: '15:35',
        id: 'msg2'
      },
      {
        author: 'yo',
        content: 'puede ser a las 8 pm ?',
        estado: 'visto',
        fecha: 'ayer',
        hour: '16:00',
        id: 'msg3'
      }
    ]
  },
  {
    nombre: 'R2-D2',
    id: 3,
    thumbnail: '/imagenes/r2d2.jpg',
    ultima_conexion: 'hoy',
    team: 'Jedi',
    mensajes: [
      {
        author: 'yo',
        content: 'Hola Arturito, ¿qué tal?',
        estado: 'entregado',
        fecha: '15/07/2024',
        hour: '11:00',
        id: 'msg1'
      },
      {
        author: 'R2-D2',
        content: 'Bien y tu?',
        estado: 'visto',
        fecha: '15/07/2024',
        hour: '11:05',
        id: 'msg2'
      },
      {
        author: 'yo',
        content: 'Todo bien, gracias.',
        estado: 'visto',
        fecha: '15/07/2024',
        hour: '11:10',
        id: 'msg3'
      }
    ]
  },
  {
    nombre: 'Biggs Darklighter',
    id: 9,
    thumbnail: '/imagenes/Biggs Darklighter.jpg',
    ultima_conexion: 'hoy',
    team: 'Sith',
    mensajes: [
      {
        author: 'yo',
        content: 'Biggs, ¿Tienes tiempo para hablar?',
        estado: 'no entregado',
        fecha: '20/06/2024',
        hour: '14:30',
        id: 'msg1'
      },
      {
        author: 'Biggs Darklighter',
        content: 'Sí, estoy libre ahora.',
        estado: 'visto',
        fecha: '20/06/2024',
        hour: '14:35',
        id: 'msg2'
      },
      {
        author: 'yo',
        content: 'Genial, ¿puedes ayudarme con una nave?',
        estado: 'visto',
        fecha: '20/06/2024',
        hour: '14:45',
        id: 'msg3'
      }
    ]
  },
  {
    nombre: 'C-3PO',
    id: 2,
    thumbnail: '/imagenes/c3po.jpg',
    ultima_conexion: 'hoy',
    team: 'Jedi',
    mensajes: [
      {
        author: 'yo',
        content: 'Hol R2-D2, ¿te gustaría venir a mi fiesta?',
        estado: 'entregado',
        fecha: 'hoy',
        hour: '16:00',
        id: 'msg1'
      },
      {
        author: 'C-3PO',
        content: 'Claro, ¿cuándo es?',
        estado: 'visto',
        fecha: 'hoy',
        hour: '16:05',
        id: 'msg2'
      },
      {
        author: 'yo',
        content: 'Este sábado a las 8pm.',
        estado: 'visto',
        fecha: 'hoy',
        hour: '16:10',
        id: 'msg3'
      },
      {
        author: 'C-3PO',
        content: 'Perfecto, allí estaré.',
        estado: 'visto',
        fecha: 'hoy',
        hour: '16:15',
        id: 'msg4'
      }
    ]
  },
  {
    nombre: 'Darth Vader',
    id: 4,
    thumbnail: '/imagenes/Vader.png',
    ultima_conexion: 'ayer',
    team: 'Sith',
    mensajes: [
      {
        author: 'yo',
        content: '¿Has terminado el proyecto?',
        estado: 'entregado',
        fecha: '01/05/2024',
        hour: '09:00',
        id: 'msg1'
      },
      {
        author: 'Vader',
        content: 'Sí, te lo envío ahora mismo.',
        estado: 'visto',
        fecha: '01/05/2024',
        hour: '09:05',
        id: 'msg2'
      },
      {
        author: 'yo',
        content: '¡Gracias!',
        estado: 'visto',
        fecha: '01/05/2024',
        hour: '09:10',
        id: 'msg3'
      },
      {
        author: 'Vader',
        content: 'De nada, ¡que tengas un buen día!',
        estado: 'visto',
        fecha: '01/05/2024',
        hour: '09:15',
        id: 'msg4'
      },
      {
        author: 'yo',
        content: 'Igualmente.',
        estado: 'visto',
        fecha: '01/05/2024',
        hour: '09:20',
        id: 'msg5'
      }
    ]
  }
];

export { DATA_MOOK };