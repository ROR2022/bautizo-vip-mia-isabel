// Datos básicos para plantilla de bautizo - Características esenciales
export const basicDemoData = {
  hero: {
    name: "Sofia Valentina",
    subtitle: "Recibe el Sacramento del Bautismo",
    backgroundImage: "/images/bautizo/bautizo1.jpeg"
  },
  
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

  countdown: {
    targetDate: "September 15, 2024 12:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Esperamos contar con su presencia en este día tan especial",
    subtitle: "Por favor confirmen su asistencia para preparar todo con amor para Sofia Valentina.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrán acompañarnos?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de contacto",
      responseOptions: {
        yes: "¡Claro, ahí estaremos!",
        no: "Lo sentimos, no podremos asistir."
      }
    },
    additionalInfo: {
      note: "Su presencia hará que este sacramento sea aún más significativo",
      blessing: "Que Dios los bendiga como ustedes bendicen nuestras vidas"
    }
  },

  gifts: {
    title: "BENDICIONES PARA SOFIA",
    message: "Su presencia es nuestro mayor regalo, pero si desean obsequiarle algo a Sofia Valentina, pueden considerar:",
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
    ],
    blessing: "Que cada regalo sea una bendición que acompañe a Sofia en su crecimiento"
  },

  // Características básicas (sin referencias demo)
  basic: {
    hasCountdown: true,
    hasEventDetails: true,
    hasAttendance: true,
    hasGifts: true,
    hasDressCode: true,
    theme: "Cielito Lindo",
    color: "from-sky-300 to-pink-300"
  }
}

export type BaptismBasicData = typeof basicDemoData