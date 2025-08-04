// Datos para plantilla de bautizo VIP - Temática "Cielito Lindo"
export const vipDemoData = {
  // Información del Hero principal
  hero: {
    name: "Sofia Valentina",
    subtitle: "Recibe el Sacramento del Bautismo y fiesta de primer año",
    backgroundImage: "/images/bautizo/bautizo1.jpeg",
    theme: "Cielito Lindo"
  },
  
  // Información del evento
  event: {
    celebrant: {
      name: "SOFIA VALENTINA GARCÍA MARTÍNEZ",
      birthDate: "15 de Marzo 2024",
      age: "6 meses"
    },
    parents: {
      father: "ALEJANDRO GARCÍA LÓPEZ",
      mother: "MARÍA JOSÉ MARTÍNEZ RIVERA"
    },
    godparents: {
      godfather: "CARLOS EDUARDO GARCÍA SANTOS", 
      godmother: "ANA LUCÍA MARTÍNEZ RODRÍGUEZ"
    },
    date: {
      full: "Domingo 15 de Septiembre 2024",
      day: "Domingo",
      date: "15 de Septiembre 2024"
    },
    ceremony: {
      time: "12:00 hrs.",
      venue: "Parroquia San José",
      address: "Calle Morelos 456, Centro, 64000 Monterrey, N.L.",
      type: "Sacramento del Bautismo"
    },
    celebration: {
      time: "14:00 hrs.",
      venue: "Jardín Familiar Los Ángeles", 
      address: "Av. Constitución 789, San Pedro, 66220 Monterrey, N.L.",
      type: "Celebración Familiar"
    },
    dressCode: "Formal Elegante",
    theme: "Cielito Lindo - Colores Pasteles"
  },

  // Cuenta regresiva
  countdown: {
    targetDate: "September 15, 2024 12:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  // Configuración de música
  music: {
    title: "Cielito Lindo - Especial para Mia Isabel",
    track: "/music/cielito-lindo-mia-isabel.mp3",
    autoplay: false,
    loop: true,
    description: "Melodía especial elegida para este día bendecido de Mia Isabel"
  },

  // Invitación completa
  invitation: {
    title: "INVITACIÓN DE BAUTISMO",
    message: "Con inmensa alegría y bendición de Dios, les invitamos a celebrar",
    subtitle: "El Bautismo de nuestra pequeña",
    blessing: "Con la bendición de Dios y nuestros corazones llenos de gratitud:",
    celebrant: "Sofia Valentina García Martínez",
    parents: {
      father: "ALEJANDRO GARCÍA LÓPEZ",
      mother: "MARÍA JOSÉ MARTÍNEZ RIVERA"
    },
    godparents: {
      godfather: "CARLOS EDUARDO GARCÍA SANTOS", 
      godmother: "ANA LUCÍA MARTÍNEZ RODRÍGUEZ"
    },
    decorativeMessage: "Acompáñennos en este momento sagrado"
  },

  // Información práctica para invitados (antigua sección accommodation)
  guestInfo: [
    {
      id: "hotel-quinta-real",
      name: "Hotel Quinta Real Monterrey",
      category: "Lujo",
      rating: 5,
      distance: "2.5 km de la iglesia",
      price: "$2,200",
      priceUnit: "por noche",
      address: "Av. Diego Rivera 500, Valle Oriente, 66269 San Pedro Garza García, N.L.",
      phone: "+52 81 8368 1000",
      amenities: [
        "Spa familiar",
        "Áreas para niños", 
        "Valet parking",
        "Room service",
        "Wifi gratuito",
        "Cunas disponibles"
      ],
      description: "Hotel boutique ideal para familias con bebés",
      image: "/images/bautizo/bautizo1.jpeg",
      website: "https://quintareal.com"
    },
    {
      id: "hotel-family-garden",
      name: "Garden Family Suites",
      category: "Familiar",
      rating: 4,
      distance: "1.8 km de la iglesia", 
      price: "$1,600",
      priceUnit: "por noche",
      address: "Av. Familia 200, San Pedro, 66220 Monterrey, N.L.",
      phone: "+52 81 8319 5500",
      amenities: [
        "Suites familiares",
        "Área de juegos",
        "Estacionamiento gratuito",
        "Desayuno incluido",
        "Wifi gratuito",
        "Servicio de niñera"
      ],
      description: "Perfecto para familias que viajan con niños pequeños",
      image: "/images/bautizo/bautizo2.jpeg",
      website: "https://gardenfamily.com"
    }
  ],
  
  // Itinerario completo del día del bautismo
  itinerary: [
    {
      time: "10:00",
      activity: "Llegada de la familia", 
      location: "Parroquia San José",
      address: "Calle Morelos 456, Centro, 64000 Monterrey, N.L.",
      description: "Preparativos y encuentro con el padre celebrante",
      icon: "⛪",
      type: "preparation"
    },
    {
      time: "11:30",
      activity: "Llegada de padrinos e invitados",
      location: "Parroquia San José", 
      address: "Calle Morelos 456, Centro, 64000 Monterrey, N.L.",
      description: "Bienvenida y preparación para la ceremonia",
      icon: "👨‍👩‍👧‍👦",
      type: "preparation"
    },
    {
      time: "12:00",
      activity: "Ceremonia de Bautismo",
      location: "Parroquia San José",
      address: "Calle Morelos 456, Centro, 64000 Monterrey, N.L.",
      description: "Sacramento del Bautismo de Sofia Valentina",
      icon: "✨",
      type: "ceremony"
    },
    {
      time: "12:45",
      activity: "Sesión de fotos familiares",
      location: "Jardín de la Parroquia",
      address: "Calle Morelos 456, Centro, 64000 Monterrey, N.L.",
      description: "Fotos con la familia y padrinos",
      icon: "📸",
      type: "photos"
    },
    {
      time: "14:00",
      activity: "Celebración familiar",
      location: "Jardín Familiar Los Ángeles",
      address: "Av. Constitución 789, San Pedro, 66220 Monterrey, N.L.",
      description: "Recepción y celebración con familia e invitados",
      icon: "🎉",
      type: "celebration"
    },
    {
      time: "14:30",
      activity: "Tiempo de convivencia",
      location: "Jardín Familiar Los Ángeles - Área Social",
      address: "Av. Constitución 789, San Pedro, 66220 Monterrey, N.L.",
      description: "Convivencia familiar y bendiciones",
      icon: "👼",
      type: "celebration"
    },
    {
      time: "15:00",
      activity: "Comida familiar",
      location: "Jardín Familiar Los Ángeles - Comedor",
      address: "Av. Constitución 789, San Pedro, 66220 Monterrey, N.L.",
      description: "Almuerzo especial en honor a Sofia Valentina",
      icon: "🍽️",
      type: "celebration"
    },
    {
      time: "16:30",
      activity: "Entrega de recuerdos",
      location: "Jardín Familiar Los Ángeles - Sala Principal",
      address: "Av. Constitución 789, San Pedro, 66220 Monterrey, N.L.",
      description: "Agradecimientos y entrega de detalles",
      icon: "🎁",
      type: "farewell"
    }
  ],
  
  // Roles familiares (antigua sección guestPasses)
  familyRoles: [
    {
      id: "padrinos",
      type: "Padrinos", 
      description: "Los elegidos para acompañar a Sofia en su camino de fe",
      color: "from-yellow-100 to-amber-100",
      icon: "👑",
      features: [
        "Participación especial en ceremonia",
        "Lugar preferencial en celebración",
        "Sesión de fotos exclusiva",
        "Kit de recuerdos especial"
      ],
      qrColor: "#F59E0B",
      borderColor: "border-yellow-200"
    },
    {
      id: "abuelos",
      type: "Abuelos",
      description: "Los pilares de sabiduría y amor de nuestra familia",
      color: "from-blue-100 to-sky-100", 
      icon: "👴👵",
      features: [
        "Mesa familiar especial",
        "Participación en bendiciones",
        "Sesión de fotos generacional",
        "Atención personalizada"
      ],
      qrColor: "#3B82F6",
      borderColor: "border-blue-200"
    },
    {
      id: "familia-cercana",
      type: "Familia Cercana",
      description: "Tíos, primos y familiares queridos",
      color: "from-pink-100 to-rose-100",
      icon: "👨‍👩‍👧‍👦",
      features: [
        "Participación en celebración",
        "Fotos familiares grupales",
        "Mesa familiar asignada",
        "Recuerdo especial"
      ],
      qrColor: "#EC4899",
      borderColor: "border-pink-200"
    },
    {
      id: "invitados",
      type: "Invitados Especiales",
      description: "Amigos queridos que nos acompañan en este día",
      color: "from-purple-100 to-violet-100",
      icon: "🤗",
      features: [
        "Participación en ceremonia",
        "Celebración familiar",
        "Convivencia especial",
        "Bendiciones compartidas"
      ],
      qrColor: "#8B5CF6",
      borderColor: "border-purple-200"
    }
  ],
  
  // Playlist temática celestial
  playlist: {
    title: "Melodías Celestiales",
    subtitle: "Música especial para el bautismo de Sofia Valentina",
    categories: [
      {
        name: "Ceremonia Sacra",
        icon: "✨",
        color: "from-sky-100 to-blue-100",
        tracks: [
          {
            title: "Ave María",
            artist: "Coro Angelical",
            duration: "3:45",
            file: "/music/beautiful-fairy-piano1.mp3"
          },
          {
            title: "Hallelujah Celestial",
            artist: "Voces Sagradas",
            duration: "4:12",
            file: "/music/wonderful-cinematic-piano1.mp3"
          },
          {
            title: "Bendición Angelical",
            artist: "Música Sacra",
            duration: "3:28",
            file: "/music/hopeful-cinematic-piano1.mp3"
          }
        ]
      },
      {
        name: "Celebración Familiar",
        icon: "🎵",
        color: "from-pink-100 to-rose-100",
        tracks: [
          {
            title: "Canción de Cuna Celestial",
            artist: "Melodías Tiernas",
            duration: "3:15",
            file: "/music/calm-emotional-cello-main1.mp3"
          },
          {
            title: "Amor de Familia",
            artist: "Corazones Unidos",
            duration: "4:00",
            file: "/music/romantic-love-piano1.mp3"
          },
          {
            title: "Pequeño Ángel",
            artist: "Canciones del Corazón",
            duration: "3:33",
            file: "/music/fairy-tale1.mp3"
          }
        ]
      },
      {
        name: "Ambiente Angelical",
        icon: "☁️",
        color: "from-purple-100 to-violet-100",
        tracks: [
          {
            title: "Nubes de Algodón",
            artist: "Instrumental Suave",
            duration: "4:20",
            file: "/music/emotional-violin1.mp3"
          },
          {
            title: "Cielito Lindo",
            artist: "Melodías Tradicionales",
            duration: "3:50",
            file: "/music/piano-strings1.mp3"
          },
          {
            title: "Bendiciones del Cielo",
            artist: "Sonidos Celestiales",
            duration: "4:05",
            file: "/music/inspiring-happy-violins1.mp3"
          }
        ]
      }
    ]
  },

  // Galería de momentos
  gallery: {
    title: "Momentos Bendecidos",
    subtitle: "Los preparativos y momentos especiales de Sofia Valentina",
    categories: [
      {
        name: "Preparativos",
        icon: "👶",
        color: "from-sky-50 to-blue-50",
        images: [
          {
            src: "/images/bautizo/bautizo1.jpeg",
            alt: "Preparativos del vestido de bautizo",
            caption: "El hermoso vestido angelical"
          },
          {
            src: "/images/bautizo/bautizo2.jpeg", 
            alt: "Decoración de la iglesia",
            caption: "La iglesia preparada para el sacramento"
          }
        ]
      },
      {
        name: "Familia",
        icon: "👨‍👩‍👧",
        color: "from-pink-50 to-rose-50",
        images: [
          {
            src: "/images/bautizo/bautizo3.jpeg",
            alt: "Familia reunida",
            caption: "La familia emocionada por este día"
          },
          {
            src: "/images/bautizo/bautizo4.jpeg",
            alt: "Padrinos especiales",
            caption: "Los padrinos elegidos con amor"
          }
        ]
      }
    ]
  },

  // Lista de familia especial (antigua sección padrinos)
  family: [
    { 
      role: "Padrinos de Bautismo", 
      names: ["Carlos Eduardo García Santos", "Ana Lucía Martínez Rodríguez"],
      description: "Quienes guiarán a Sofia en su camino de fe"
    },
    { 
      role: "Abuelos Paternos", 
      names: ["Miguel García Hernández", "Rosa López Jiménez"],
      description: "Pilares de sabiduría y amor incondicional"
    },
    { 
      role: "Abuelos Maternos", 
      names: ["José Martínez Silva", "Carmen Rivera González"],
      description: "Bendiciones y cariño de generaciones"
    },
    { 
      role: "Tíos Especiales", 
      names: ["Fernando García López", "Sofía Martínez Rivera"],
      description: "Quienes llenarán de alegría la infancia de Sofia"
    }
  ],
  
  // Confirmación de asistencia
  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Esperamos contar con su presencia en este día tan especial",
    subtitle: "Por favor confirmen su asistencia para preparar todo con amor.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrán acompañarnos?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de contacto",
      responseOptions: {
        yes: "¡Claro, ahí estaremos!",
        no: "Lo sentimos, no podremos asistir."
      }
    }
  },

  // Opciones de regalo para bebé
  gifts: {
    title: "BENDICIONES PARA SOFIA",
    message: "Su presencia es nuestro mayor regalo, pero si desean obsequiarle algo a Sofia, pueden considerar:",
    options: [
      {
        icon: "💰",
        title: "Cuenta de Ahorro para Sofia",
        description: "BBVA Bancomer",
        details: "Cuenta: 9876543210\nCLABE: 012987654321098765\nA nombre de: Sofia Valentina García Martínez"
      },
      {
        icon: "👶",
        title: "Mesa de Regalos Infantil",
        description: "Liverpool Kids",
        details: "Evento: Bautizo Sofia Valentina\nCódigo: BT234567"
      },
      {
        icon: "🙏",
        title: "Donativo Benéfico",
        description: "Fundación Niños del Cielo",
        details: "En honor a Sofia Valentina\nCuenta: 5432109876"
      }
    ]
  }
}

export type BaptismDemoData = typeof vipDemoData