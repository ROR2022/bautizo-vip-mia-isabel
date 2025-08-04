import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Crown, Sparkles } from 'lucide-react'
import { Toaster } from "@/components/ui/toaster"
import { MusicProvider } from '@/context/music-context'
import { vipDemoData } from '@/components/demo/quince/vip/data/vip-demo-data'

export const metadata: Metadata = {
  title: 'Demo XV Años - Paquete VIP | Web Invitations',
  description: 'Demostración del paquete VIP con logística completa: hospedaje, itinerario y pases ($899) - ¡El más exclusivo!',
  keywords: ['xv años', 'quinceañera', 'vip', 'hospedaje', 'itinerario', 'pases', 'exclusivo', 'lujo'],
}

export default function VipQuinceDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Badge VIP con gradiente dorado distintivo */}
      <div className={`bg-gradient-to-r ${vipDemoData.vip.color} text-white text-center py-4 relative z-50 shadow-xl`}>
        <div className="flex items-center justify-center gap-3 text-sm sm:text-base">
          <Crown className="w-5 h-5 fill-current animate-pulse" />
          <span className="font-bold text-lg">{vipDemoData.demo.badge}</span>
          <span className="hidden sm:inline font-medium">- {vipDemoData.demo.description}</span>
          <Crown className="w-5 h-5 fill-current animate-pulse" />
        </div>
        
        {/* Indicador de características VIP exclusivas */}
        <div className="text-xs text-yellow-100 mt-2 font-medium">
          <div className="flex items-center justify-center gap-1 flex-wrap">
            <span className="flex items-center gap-1">
              <Sparkles className="w-3 h-3" />
              <span>VIP EXCLUSIVO</span>
            </span>
            <span className="hidden sm:inline">•</span>
            <span>🏨 Hospedaje</span>
            <span>•</span>
            <span>📅 Itinerario</span>
            <span>•</span>
            <span>🎫 Pases</span>
          </div>
        </div>
        
        {/* Efecto de brillo sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>
      </div>

      {/* Botón de navegación de regreso con estilo VIP */}
      <Link 
        href="/"
        className="fixed top-24 left-4 z-40 bg-gradient-to-r from-yellow-400/90 to-amber-500/90 backdrop-blur-sm text-amber-900 px-4 py-2 rounded-full shadow-xl hover:from-yellow-300 hover:to-amber-400 transition-all duration-300 border-2 border-yellow-300/50 font-medium"
      >
        <div className="flex items-center gap-2 text-sm">
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Regresar a inicio</span>
          <span className="sm:hidden">Inicio</span>
        </div>
      </Link>

      {/* MusicProvider para funcionalidad VIP de música */}
      <MusicProvider>
        {/* Contenido principal */}
        {children}
      </MusicProvider>
      
      {/* Toaster para notificaciones con estilo VIP */}
      <Toaster />
    </div>
  )
} 