// 🎊 DATOS PERSONALIZADOS - BAUTIZO VIP MIA ISABEL JUAREZ TORRES
// Estilo Mexicano Tradicional inspirado en tema1.png

export const miaIsabelBautizoData = {
  // 📸 GALERÍA PERSONALIZADA DE MIA ISABEL
  personalImages: {
    primary: "/images/custom/mia1.jpeg",     // Imagen principal/portada
    secondary: "/images/custom/mia2.jpeg",   // Invitación y secciones elegantes
    accent: "/images/custom/mia3.jpeg",      // Countdown y elementos dinámicos
    family: "/images/custom/mia4.jpeg",      // Familia y roles
    institutional: "/images/custom/image1.jpg", // Elementos formales
    // Sistema de rotación para variedad visual
    gallery: [
      "/images/custom/mia1.jpeg",
      "/images/custom/mia2.jpeg", 
      "/images/custom/mia3.jpeg",
      "/images/custom/mia4.jpeg"
    ],
    watermarks: {
      subtle: "/images/custom/mia1.jpeg",    // Marca de agua principal
      decorative: "/images/custom/mia2.jpeg" // Elementos decorativos
    }
  },

  // Información del Hero principal
  hero: {
    name: "Mia Isabel",
    subtitle: "Recibe el Sacramento del Bautismo y fiesta de primer año",
    backgroundImage: "/images/custom/mia1.jpeg", // ✨ IMAGEN REAL DE MIA ISABEL
    theme: "Mia Isabel - Estilo Mexicano Tradicional"
  },
  
  // Información del evento personalizada
  event: {
    celebrant: {
      name: "MIA ISABEL JUAREZ TORRES",
      birthDate: "3 de Septiembre 2024", 
      age: "1 Año"
    },
    parents: {
      mother: "REYNA MONSERRAT JUAREZ TORRES",
      // padre omitido intencionalmente - familia monoparental
    },
    godparents: {
      godfather: "Jesús Alejandro Juárez Torres", 
      godmother: "Dalia Isabel Elizalde Camacho" 
    },
    date: {
      full: "Sábado 6 de Septiembre 2025", // Ej: "Domingo 15 de Diciembre 2024"
      day: "Sábado", // Ej: "Domingo"
      date: "6 de Septiembre 2025" // Ej: "15 de Diciembre 2024"
    },
    ceremony: {
      time: "12:30 hrs.", // Ej: "12:00 hrs."
      venue: "Santuario del Señor de las Misericordias", // Ej: "Parroquia San José"
      address: "San Pedro Atocpan, Panchimalco, Milpa Alta, 12200 San Pedro Atocpan, CDMX", // Ej: "Calle Morelos 456, Centro"
      type: "Sacramento del Bautismo"
    },
    celebration: {
      time: "14:30 hrs.", // Ej: "14:00 hrs."
      venue: "Salón Mario Alberto", // Ej: "Jardín Familiar Los Ángeles"
      address: "Camino Real a san Pedro Actopan 14, San Gregorio Atlapulco, 16650 Ciudad de México, CDMX", // Ej: "Av. Constitución 789"
      type: "Celebración Familiar"
    },
    dressCode: "Formal Elegante - Colores Pasteles",
    theme: "Mexicano Tradicional - Cielito Lindo"
  },

  // Cuenta regresiva personalizada
  countdown: {
    targetDate: "September 6, 2025 12:00:00", // Formato: "December 15, 2024 12:00:00"
    backgroundImage: "/images/custom/mia3.jpeg" // ✨ IMAGEN REAL DE MIA ISABEL para countdown
  },

  // 🎵 CONFIGURACIÓN DE MÚSICA PERSONALIZADA (FASE 3 COMPLETADA)
  music: {
    title: "Cielito Lindo - Especial para Mia Isabel",
    track: "/music/cielito-lindo-mia-isabel.mp3",
    autoplay: false,
    loop: true,
    description: "Melodía mexicana tradicional elegida con amor para este día bendecido",
    // Nueva música mexicana tradicional agregada
    alternativeTrack: {
      title: "La Bikina - Mariachi Vargas de Tecalitlán", 
      track: "/images/custom/LA BIKINA MARIACHI VARGAS DE TECALITLAN.mp3",
      description: "Clásico mariachi mexicano para la celebración familiar"
    }
  },

  // Invitación personalizada con enfoque en madre soltera
  invitation: {
    title: "INVITACIÓN DE BAUTISMO",
    message: "Con inmensa alegría y bendición de Dios, Reyna Monserrat te invita a celebrar",
    subtitle: "El Bautismo de su pequeña princesa",
    blessing: "Con la bendición de Dios y el corazón lleno de gratitud:",
    celebrant: "Mia Isabel Juarez Torres",
    parents: {
      mother: "REYNA MONSERRAT JUAREZ TORRES"
      // Padre omitido intencionalmente para familia monoparental
    },
    godparents: {
      godfather: "Jesús Alejandro Juárez Torres", 
      godmother: "Dalia Isabel Elizalde Camacho"
    },
    decorativeMessage: "Acompáñanos en este momento sagrado y especial para Mia Isabel",
    mexicanElements: {
      symbols: "✝🕊🌸", // Cruz, palomas, flores como en tema1.png
      festive: "🎀🌺🦋", // Elementos festivos mexicanos
      blessing: "🙏👼💖" // Símbolos de bendición
    }
  },

  // Información práctica para invitados (personalizada para la ubicación)
  guestInfo: [
    {
      id: "hospedaje-local-1",
      name: "[HOTEL_RECOMENDADO_1]", // A definir según ubicación
      category: "Familiar",
      rating: 4,
      distance: "[DISTANCIA_IGLESIA]", // A definir
      price: "[PRECIO_NOCHE]", // A definir
      priceUnit: "por noche",
      address: "[DIRECCION_HOTEL]", // A definir
      phone: "[TELEFONO_HOTEL]", // A definir
      amenities: [
        "Áreas para niños",
        "Estacionamiento gratuito",
        "Wifi gratuito",
        "Cunas disponibles",
        "Desayuno incluido",
        "Ambiente familiar"
      ],
      description: "Perfecto para familias que asisten al bautizo de Mia Isabel",
      image: "/images/bautizo/bautizo1.jpeg",
      website: "[WEBSITE_HOTEL]" // A definir
    }
  ],
  

  /**
   * En la parte del itinerario será 
12:30 llegada de la familia e invitados  
12:45: llegada de los padrinos 
13:00 ceremonia de bautismo 
14:00 sesión de fotos familiares
14:30 recepción 
15:00 comienzo de la fiesta
   */

  // Itinerario personalizado del día del bautismo
  itinerary: [
    {
      time: "12:30 hrs.", // A definir
      activity: "Llegada de la familia e invitados", 
      location: "Santuario del Señor de las Misericordias",
      address: "San Pedro Atocpan, Panchimalco, Milpa Alta, 12200 San Pedro Atocpan, CDMX",
      description: "Preparativos y encuentro con el padre celebrante para Mia Isabel",
      icon: "⛪",
      type: "preparation"
    },
    {
      time: "12:45 hrs.", // A definir
      activity: "Llegada de padrinos",
      location: "Santuario del Señor de las Misericordias", 
      address: "San Pedro Atocpan, Panchimalco, Milpa Alta, 12200 San Pedro Atocpan, CDMX",
      description: "Bienvenida y preparación para la ceremonia de Mia Isabel",
      icon: "👨‍👩‍👧‍👦",
      type: "preparation"
    },
    {
      time: "13:00 hrs.", 
      activity: "Ceremonia de Bautismo",
      location: "Santuario del Señor de las Misericordias",
      address: "San Pedro Atocpan, Panchimalco, Milpa Alta, 12200 San Pedro Atocpan, CDMX",
      description: "Sacramento del Bautismo de Mia Isabel Juarez Torres",
      icon: "✨",
      type: "ceremony"
    },
    {
      time: "14:00 hrs.", 
      activity: "Sesión de fotos familiares",
      location: "Santuario del Señor de las Misericordias",
      address: "San Pedro Atocpan, Panchimalco, Milpa Alta, 12200 San Pedro Atocpan, CDMX",
      description: "Fotos con Reyna Monserrat, padrinos y familia de Mia Isabel",
      icon: "📸",
      type: "photos"
    },
    {
      time: "14:30 hrs.", 
      activity: "Recepción",
      location: "Salón Mario Alberto",
      address: "Camino Real a san Pedro Actopan 14, San Gregorio Atlapulco, 16650 Ciudad de México, CDMX",
      description: "Recepción y celebración en honor a Mia Isabel",
      icon: "🎉",
      type: "celebration"
    },
    {
      time: "15:00 hrs.", 
      activity: "Tiempo de convivencia",
      location: "Salón Mario Alberto",
      address: "Camino Real a san Pedro Actopan 14, San Gregorio Atlapulco, 16650 Ciudad de México, CDMX",
      description: "Convivencia familiar y bendiciones para Mia Isabel",
      icon: "👼",
      type: "celebration"
    },
    {
      time: "15:30 hrs.", 
      activity: "Comida familiar",
      location: "Salón Mario Alberto",
      address: "Camino Real a san Pedro Actopan 14, San Gregorio Atlapulco, 16650 Ciudad de México, CDMX",
      description: "Almuerzo especial en honor a Mia Isabel",
      icon: "🍽️",
      type: "celebration"
    },
    {
      time: "16:00 hrs.", 
      activity: "Actividades Sorpresa",
      location: "Salón Mario Alberto",
      address: "Camino Real a san Pedro Actopan 14, San Gregorio Atlapulco, 16650 Ciudad de México, CDMX",
      description: "Actividades sorprendentes para Mia Isabel",
      icon: "🎉",
      type: "celebration"
    }
  ],
  
  // Roles familiares adaptados para familia monoparental
  familyRoles: [
    {
      id: "madre-especial",
      type: "Madre Amorosa", 
      description: "Reyna Monserrat, quien con amor infinito guía a Mia Isabel",
      color: "from-pink-100 to-rose-100",
      icon: "💖",
      features: [
        "Figura principal en la ceremonia",
        "Bendición maternal especial",
        "Dedicatoria personal",
        "Momento emotivo único"
      ],
      qrColor: "#EC4899",
      borderColor: "border-pink-200"
    },
    {
      id: "padrinos",
      type: "Padrinos de Bautismo", 
      description: "Los elegidos para acompañar a Mia Isabel en su camino de fe",
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
      description: "Los pilares de sabiduría y amor de la familia Juarez Torres",
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
      description: "Tíos, primos y familiares queridos de Mia Isabel",
      color: "from-green-100 to-emerald-100",
      icon: "👨‍👩‍👧‍👦",
      features: [
        "Participación en celebración",
        "Fotos familiares grupales",
        "Mesa familiar asignada",
        "Recuerdo especial"
      ],
      qrColor: "#10B981",
      borderColor: "border-green-200"
    },
    {
      id: "invitados",
      type: "Invitados Especiales",
      description: "Amigos queridos que acompañan a Reyna Monserrat en este día",
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
  
  // Playlist temática mexicana tradicional
  playlist: {
    title: "Melodías Mexicanas para Mia Isabel",
    subtitle: "Música tradicional especial para el bautismo",
    categories: [
      {
        name: "Ceremonia Sacra",
        icon: "✨",
        color: "from-pink-100 to-rose-100",
        tracks: [
          {
            title: "Cielito Lindo",
            artist: "Versión Especial para Mia Isabel", 
            duration: "4:25",
            file: "/music/cielito-lindo-mia-isabel.mp3",
            featured: true // ⭐ Canción principal destacada
          },
          {
            title: "La Bikina - Mariachi Vargas de Tecalitlán",
            artist: "Mariachi Vargas de Tecalitlán",
            duration: "3:42",
            file: "/images/custom/LA BIKINA MARIACHI VARGAS DE TECALITLAN.mp3",
            featured: true // ⭐ Segunda canción mexicana tradicional destacada
          },
          {
            title: "Ave María Mexicana",
            artist: "Coro Tradicional",
            duration: "3:45",
            file: "/music/beautiful-fairy-piano1.mp3"
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
        name: "Celebración Mexicana",
        icon: "🎵",
        color: "from-amber-100 to-orange-100",
        tracks: [
          {
            title: "Las Mañanitas para Mia Isabel",
            artist: "Versión Tradicional",
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
            title: "Pequeña Princesa",
            artist: "Canciones del Corazón",
            duration: "3:33",
            file: "/music/fairy-tale1.mp3"
          }
        ]
      },
      {
        name: "Ambiente Festivo",
        icon: "🌸",
        color: "from-green-100 to-emerald-100",
        tracks: [
          {
            title: "Papel Picado",
            artist: "Instrumental Mexicano",
            duration: "4:20",
            file: "/music/emotional-violin1.mp3"
          },
          {
            title: "Flores Mexicanas",
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

  // Galería de momentos personalizada
  gallery: {
    title: "Momentos Especiales de Mia Isabel",
    subtitle: "Los preparativos y momentos bendecidos",
    categories: [
      {
        name: "Preparativos",
        icon: "👶",
        color: "from-pink-50 to-rose-50",
        images: [
          {
            src: "/images/bautizo/bautizo3.jpeg", // Usar imagen de referencia
            alt: "Diseño especial para Mia Isabel",
            caption: "El diseño mexicano tradicional elegido con amor"
          },
          {
            src: "/images/bautizo/bautizo1.jpeg", 
            alt: "Preparativos del vestido de bautizo",
            caption: "El hermoso vestido angelical de Mia Isabel"
          }
        ]
      },
      {
        name: "Familia Amorosa",
        icon: "💖",
        color: "from-amber-50 to-yellow-50",
        images: [
          {
            src: "/images/bautizo/bautizo2.jpeg",
            alt: "Reyna Monserrat y Mia Isabel",
            caption: "Madre e hija, un amor infinito"
          },
          {
            src: "/images/bautizo/bautizo4.jpeg",
            alt: "Familia reunida",
            caption: "La familia emocionada por este día especial"
          }
        ]
      }
    ]
  },

  // Lista de familia adaptada para madre soltera
  family: [
    { 
      role: "Madre Amorosa", 
      names: ["Reyna Monserrat Juarez Torres"],
      description: "Quien con amor infinito y fortaleza guía a Mia Isabel en la fe"
    },
    { 
      role: "Padrinos de Bautismo", 
      names: ["Jesús Alejandro Juárez Torres", "Dalia Isabel Elizalde Camacho"],
      description: "Quienes acompañarán a Mia Isabel en su camino espiritual"
    },
    { 
      role: "Abuelos Maternos", 
      names: ["Rosendo Juárez Diaz", "Reyna Beatriz Torres de la Fuente"],
      description: "Pilares de sabiduría y bendiciones familiares"
    },
    { 
      role: "Tíos Especiales", 
      names: ["[TIO_1]", "[TIA_1]"],
      description: "Quienes llenarán de alegría y cariño la vida de Mia Isabel"
    }
  ],
  
  // Confirmación de asistencia personalizada
  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Reyna Monserrat espera contar con su presencia en este día tan especial para Mia Isabel",
    subtitle: "Por favor confirmen su asistencia para preparar todo con amor mexicano tradicional.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrán acompañarnos?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de contacto",
      responseOptions: {
        yes: "¡Claro, ahí estaremos para Mia Isabel!",
        no: "Lo sentimos, no podremos acompañar a Mia Isabel."
      }
    },
    additionalInfo: {
      note: "Su confirmación nos ayuda a preparar todo con el amor que Mia Isabel merece. ¡Esperamos contar con ustedes!"
    }
  },

  // Opciones de regalo personalizadas para Mia Isabel
  gifts: {
    title: "BENDICIONES PARA MIA ISABEL",
    message: "Su presencia es nuestro mayor regalo, pero si desean obsequiarle algo especial a Mia Isabel, pueden considerar:",
    options: [
      {
        icon: "💰",
        title: "Cuenta de Ahorro para Mia Isabel",
        description: "[BANCO_A_DEFINIR]", // A definir
        details: "Cuenta: [NUMERO_CUENTA]\nCLABE: [CLABE]\nA nombre de: Mia Isabel Juarez Torres"
      },
      {
        icon: "👶",
        title: "Mesa de Regalos Infantil",
        description: "[TIENDA_A_DEFINIR]", // A definir
        details: "Evento: Bautizo Mia Isabel Juarez Torres\nCódigo: [CODIGO_EVENTO]"
      },
      {
        icon: "🙏",
        title: "Donativo Benéfico",
        description: "[FUNDACION_A_DEFINIR]", // A definir
        details: "En honor a Mia Isabel Juarez Torres\nCuenta: [NUMERO_DONATIVO]"
      }
    ],
    blessing: "Que cada regalo sea una bendición que acompañe a Mia Isabel en su crecimiento"
  },

  // Mensaje de agradecimiento de Reyna Monserrat (Premium Thank You)
  thankYou: {
    title: "MENSAJE DE REYNA MONSERRAT",
    personalMessage: "Con el corazón lleno de gratitud y amor, quiero agradecer a cada uno de ustedes por haber compartido este día tan especial para Mia Isabel y para mí. Su presencia, sus bendiciones y su cariño hicieron que el bautismo de mi pequeña princesa fuera aún más significativo.",
    message: "Que Dios los bendiga abundantemente como ustedes han bendecido nuestras vidas con su amor y compañía en este sacramento sagrado.",
    signature: "Con amor infinito,\nReyna Monserrat Juarez Torres\nMadre orgullosa de Mia Isabel",
    blessings: [
      "Que Dios les conceda salud y felicidad",
      "Que sus familias estén siempre llenas de amor",
      "Que encuentren bendiciones en cada día",
      "Que la paz del Señor more en sus corazones"
    ],
    footer: {
      year: "2024",
      name: "Familia Juarez Torres",
      occasion: "Bautismo de Mia Isabel",
      blessing: "Que Dios los acompañe siempre en su camino"
    }
  }
}

export type MiaIsabelBautizoData = typeof miaIsabelBautizoData & {
  personalImages?: typeof miaIsabelBautizoData.personalImages;
}

// Mensajes inclusivos para familia monoparental
export const inclusiveTexts = {
  blessing: "Con la bendición de Dios y el amor infinito de su madre Reyna Monserrat",
  welcome: "Reyna Monserrat te invita con el corazón lleno de alegría",
  celebration: "Celebremos juntos este momento sagrado para Mia Isabel",
  gratitude: "Agradecemos tu presencia en este día especial para nuestra pequeña princesa",
  maternal: "El amor de una madre es el reflejo del amor divino",
  faith: "Con fe y esperanza, Mia Isabel inicia su camino espiritual",
  mexican: "Con tradición mexicana y corazón abierto, te esperamos"
}