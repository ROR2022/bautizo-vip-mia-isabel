// Datos premium para plantilla de bautizo - Hereda de basic y añade características premium
// NOTA: Los datos básicos se crearán en la Fase 4, por ahora usaremos los datos VIP como base

import { vipDemoData } from '@/components/demo/bautizo/vip/data/vip-demo-data'

export const premiumDemoData = {
  // Heredar datos básicos del VIP (luego se cambiará por basic)
  ...vipDemoData,
  
  // Configuración de música premium celestial
  music: {
    title: "Música Celestial",
    track: "/music/wonderful-cinematic-piano1.mp3",
    autoplay: false,
    loop: true,
    description: "Melodías angelicales para el bautismo de Sofia Valentina"
  },
  
  // Información completa de invitación (característica premium)
  invitation: {
    title: "INVITACIÓN DE BAUTISMO",
    message: "Con inmensa alegría y bendición de Dios, les invitamos a celebrar",
    subtitle: "El Bautismo de nuestra pequeña",
    blessing: "Con la bendición de Dios y nuestros corazones llenos de gratitud:",
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
    ceremony: vipDemoData.event.ceremony,
    celebration: vipDemoData.event.celebration,
    decorativeMessage: "Acompáñennos en este momento sagrado lleno de bendiciones"
  },
  
  // Lista de familia especial (característica premium)
  family: [
    { 
      role: "Padrinos de Bautismo", 
      names: ["Carlos Eduardo García Santos", "Ana Lucía Martínez Rodríguez"],
      description: "Quienes guiarán a Sofia en su camino de fe",
      icon: "👑"
    },
    { 
      role: "Abuelos Paternos", 
      names: ["Miguel García Hernández", "Rosa López Jiménez"],
      description: "Pilares de sabiduría y amor incondicional",
      icon: "👴👵"
    },
    { 
      role: "Abuelos Maternos", 
      names: ["José Martínez Silva", "Carmen Rivera González"],
      description: "Bendiciones y cariño de generaciones",
      icon: "💙"
    },
    { 
      role: "Tíos Especiales", 
      names: ["Fernando García López", "Sofía Martínez Rivera"],
      description: "Quienes llenarán de alegría la infancia de Sofia",
      icon: "🤗"
    },
    { 
      role: "Bisabuelos", 
      names: ["Antonio García Ruiz", "Elena López Morales"],
      description: "Bendiciones desde el cielo para nuestra pequeña",
      icon: "✨"
    },
    { 
      role: "Familia del Corazón", 
      names: ["Roberto Silva Martín", "Patricia Jiménez Torres"],
      description: "Amigos que se convirtieron en familia",
      icon: "💕"
    }
  ],
  
  // Galería de fotos del bautismo (característica premium)
  gallery: {
    title: "Galería de Bendiciones",
    subtitle: "Momentos especiales de Sofia Valentina",
    description: "Una colección de fotografías que capturan la preparación y alegría de este día sagrado",
    images: [
      { 
        src: "/images/bautizo/bautizo1.jpeg", 
        alt: "Sofia Valentina - Preparativos del bautismo", 
        caption: "El hermoso vestido angelical de Sofia",
        category: "preparacion"
      },
      { 
        src: "/images/bautizo/bautizo2.jpeg", 
        alt: "Decoración de la iglesia", 
        caption: "La iglesia preparada con amor para el sacramento",
        category: "ceremonia"
      },
      { 
        src: "/images/bautizo/bautizo3.jpeg", 
        alt: "Familia reunida", 
        caption: "La familia emocionada esperando este momento",
        category: "familia"
      },
      { 
        src: "/images/bautizo/bautizo4.jpeg", 
        alt: "Padrinos especiales", 
        caption: "Los padrinos elegidos con todo nuestro amor",
        category: "familia"
      }
    ]
  },
  
  // Mensaje final personalizado (característica premium)
  thankYou: {
    title: "¡Gracias por acompañarnos en este día bendecido!",
    personalMessage: "Cada uno de ustedes tiene un lugar especial en nuestros corazones y en la vida de Sofia Valentina. Su presencia hace que este sacramento sea aún más significativo.",
    message: "Con todo nuestro cariño y bendiciones:",
    signature: "Familia García Martínez",
    blessings: [
      "Que Dios los bendiga como ustedes bendicen nuestras vidas",
      "Que la paz del Señor esté siempre con ustedes",
      "Que el amor que compartimos hoy perdure para siempre"
    ],
    footer: {
      year: "2024",
      name: "BAUTISMO DE SOFIA VALENTINA",
      occasion: "15 de Septiembre 2024",
      blessing: "\"Porque de los tales es el Reino de los Cielos\" - Mateo 19:14",
      cta: {
        question: "¿TIENES UN EVENTO EN PUERTA?",
        action: "DISEÑA CON NOSOTROS TU INVITACIÓN WEB DIGITAL.",
        linkText: "AQUÍ",
        link: "https://www.invitacionesweb.lat/"
      }
    }
  },
  
  // Configuración premium para bautizo
  premium: {
    hasMusic: true,
    hasGallery: true,
    hasFamily: true,
    hasFullInvitation: true,
    hasPersonalizedThankYou: true,
    badge: "PREMIUM CELESTIAL",
    color: "from-sky-400 to-pink-400",
    theme: "Cielito Lindo"
  }
}

export type BaptismPremiumData = typeof premiumDemoData