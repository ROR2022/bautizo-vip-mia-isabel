// Tema Visual Personalizado para Mia Isabel Juarez Torres
// Basado en estilo mexicano tradicional con rosa pálido y elementos blancos

export const miaIsabelTheme = {
  name: "Mia Isabel - Estilo Mexicano Tradicional",
  description: "Inspirado en papel picado, encajes y elementos festivos mexicanos",
  
  colors: {
    // Colores principales extraídos de tema1.png
    primary: "#F8BBD9", // Rosa pálido (fondo principal)
    primaryLight: "#FDE7F3", // Rosa muy claro
    primaryDark: "#EC4899", // Rosa más intenso para acentos
    
    secondary: "#FFFFFF", // Blanco (encaje, elementos decorativos)
    secondaryDark: "#F9FAFB", // Blanco grisáceo muy suave
    
    accent: "#1F2937", // Negro suave (texto principal)
    accentLight: "#4B5563", // Gris oscuro
    
    // Colores complementarios mexicanos
    festive: "#F59E0B", // Dorado festivo (papel picado)
    nature: "#10B981", // Verde mexicano (cactus, hojas)
    religious: "#E5E7EB", // Gris claro (cruz, palomas)
    
    // Fondos y superficies
    background: "#FEF7F0", // Crema muy suave
    surface: "#FFFFFF",
    border: "#F3F4F6",
    
    // Estados
    success: "#10B981",
    warning: "#F59E0B", 
    error: "#EF4444",
    info: "#3B82F6"
  },
  
  gradients: {
    // Gradiente principal rosa pálido
    hero: "from-pink-50 via-rose-100 to-pink-200",
    heroOverlay: "from-pink-100/20 to-rose-200/30",
    
    // Secciones con tema mexicano
    sections: "from-pink-50 to-white",
    festiveSections: "from-amber-50 to-orange-100",
    religious: "from-gray-50 to-white",
    
    // Elementos decorativos
    papelPicado: "from-pink-200 via-rose-300 to-pink-400",
    encaje: "from-white to-gray-100",
    flores: "from-green-100 to-emerald-200"
  },
  
  typography: {
    // Fuentes siguiendo el estilo de la imagen
    headings: {
      primary: "font-bold uppercase tracking-wide", // "ACOMPAÑANOS A CELEBRAR"
      ceremonial: "font-extrabold text-4xl uppercase", // "BAUTIZO"
      name: "font-script text-5xl", // "Mia Isabel" en cursiva elegante
      subtitle: "font-medium uppercase text-sm tracking-widest" // "DE NUESTRA HIJA"
    },
    body: {
      primary: "font-normal",
      elegant: "font-light leading-relaxed"
    }
  },
  
  decorative: {
    // Elementos mexicanos tradicionales
    patterns: {
      papelPicado: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(248,187,217,0.1) 10px, rgba(248,187,217,0.1) 20px)",
      encaje: "radial-gradient(circle at 20px 20px, white 2px, transparent 2px)",
      flores: "🌸🌺🌼", // Unicode para flores
      mexican: "🌵🌿🦋" // Elementos mexicanos
    },
    
    // Símbolos religiosos
    religious: {
      cruz: "✝", 
      palomas: "🕊",
      angeles: "👼",
      bendicion: "🙏"
    },
    
    // Elementos festivos
    celebration: {
      papel: "🎀",
      flores: "🌸",
      fiesta: "🎉",
      corazon: "💖"
    }
  },
  
  spacing: {
    // Espaciado inspirado en diseños mexicanos tradicionales
    decorative: "2rem", // Espacio para elementos decorativos
    section: "4rem", // Entre secciones principales
    frame: "1.5rem", // Marco interno como en la imagen
    papelPicado: "0.5rem" // Espacio para papel picado
  },
  
  borders: {
    // Bordes decorativos como el encaje de la imagen
    encaje: "border-2 border-dashed border-pink-200",
    marco: "border-4 border-white shadow-lg",
    decorativo: "border border-pink-300 rounded-lg",
    festivo: "border-2 border-amber-200 border-dotted"
  },
  
  shadows: {
    // Sombras suaves para profundidad
    papel: "shadow-md",
    marco: "shadow-xl shadow-pink-200/50",
    elementos: "shadow-sm",
    flotante: "shadow-lg shadow-pink-300/30"
  }
}

// Utilidades para aplicar el tema
export const getMiaIsabelClasses = {
  // Fondos principales
  heroBg: `bg-gradient-to-br ${miaIsabelTheme.gradients.hero}`,
  sectionBg: `bg-gradient-to-b ${miaIsabelTheme.gradients.sections}`,
  festiveBg: `bg-gradient-to-r ${miaIsabelTheme.gradients.festiveSections}`,
  
  // Textos ceremoniales
  mainTitle: `${miaIsabelTheme.typography.headings.ceremonial} text-gray-800`,
  nameTitle: `${miaIsabelTheme.typography.headings.name} text-pink-600`,
  subtitle: `${miaIsabelTheme.typography.headings.subtitle} text-gray-600`,
  
  // Marcos y decoraciones
  mainFrame: `${miaIsabelTheme.borders.marco} ${miaIsabelTheme.shadows.marco}`,
  decorativeFrame: `${miaIsabelTheme.borders.decorativo}`,
  
  // Elementos interactivos
  button: "bg-pink-500 hover:bg-pink-600 text-white font-medium py-3 px-6 rounded-lg shadow-md transition-all duration-200",
  cardHover: "hover:shadow-lg hover:shadow-pink-200/50 transition-all duration-300"
}

export type MiaIsabelTheme = typeof miaIsabelTheme