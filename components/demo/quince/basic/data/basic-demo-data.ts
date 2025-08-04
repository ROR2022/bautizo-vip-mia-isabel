// Datos demo para el paquete básico de quinceañera
export const basicDemoData = {
  hero: {
    name: "Isabella María",
    subtitle: "¡Mis XV años!",
    backgroundImage: "/images/quince/quince1.jpeg"
  },
  
  event: {
    celebrant: "Isabella María González Hernández",
    parents: {
      father: "MIGUEL ÁNGEL GONZÁLEZ RIVERA",
      mother: "PATRICIA HERNÁNDEZ LÓPEZ"
    },
    date: {
      full: "Sábado 15 de Septiembre 2024",
      day: "Sábado",
      date: "15 de Septiembre 2024"
    },
    ceremony: {
      time: "15:00 hrs.",
      venue: "Parroquia San José Obrero",
      address: "Av. Revolución 123, Centro, 64000 Monterrey, N.L.",
      type: "Misa de Acción de Gracias"
    },
    party: {
      time: "17:00 hrs.",
      venue: "Salón Los Encinos",
      address: "Carr. Nacional 456, Valle Alto, 64989 Monterrey, N.L.",
      type: "Recepción"
    },
    dressCode: "Formal",
    restrictions: "No Niños"
  },

  countdown: {
    targetDate: "September 15, 2024 15:00:00",
    backgroundImage: "/images/countdown-bg.jpg"
  },

  attendance: {
    title: "CONFIRMACIÓN DE ASISTENCIA",
    message: "Respetuosamente <No Niños>",
    subtitle: "Espero que no sea impedimento para que ustedes puedan asistir a mi fiesta.",
    fields: {
      name: "Nombre completo",
      response: "¿Podrás acompañarme?",
      companions: "Nombre(s) de acompañante(s)",
      phone: "Número de celular",
      responseOptions: {
        yes: "¡Claro, ahí estaré!",
        no: "Lo siento, no podré asistir."
      }
    }
  },

  gifts: {
    title: "OPCIONES DE REGALO",
    message: "Mi mejor regalo es compartir contigo este gran día, si deseas obsequiarme algo, puedo sugerir las siguientes opciones:",
    options: [
      {
        icon: "💳",
        title: "Transferencia Bancaria",
        description: "BBVA Bancomer",
        details: "Cuenta: 1234567890\nCLABE: 012345678901234567\nA nombre de: Patricia Hernández López"
      },
      {
        icon: "🎁",
        title: "Mesa de Regalos",
        description: "Liverpool",
        details: "Evento: XV años Isabella\nCódigo: 51234567"
      },
      {
        icon: "💰",
        title: "Sobre con efectivo",
        description: "El día del evento",
        details: "Puedes entregarlo en la recepción"
      }
    ]
  },

  demo: {
    badge: "🎭 DEMO - Paquete Básico ($299)",
    description: "Esta es una demostración del paquete básico",
    features: [
      "Cuenta Regresiva",
      "Cuándo y dónde", 
      "Confirmación de asistencia",
      "Opciones de regalo",
      "Código de vestimenta"
    ],
    cta: {
      title: "¿Te gusta este paquete?",
      subtitle: "Incluye todas las características esenciales para tu evento",
      buttonText: "Contratar Paquete Básico - $299",
      link: "/#pricing"
    }
  }
}

export type BasicDemoData = typeof basicDemoData 