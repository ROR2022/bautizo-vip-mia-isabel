import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Star } from 'lucide-react'
import { Toaster } from "@/components/ui/toaster"
import { MusicProvider } from '@/context/music-context'
import { premiumDemoData } from '@/components/demo/boda/premium/data/premium-demo-data'

export const metadata: Metadata = {
  title: 'Demo Boda - Paquete Premium | Web Invitations',
  description: 'Demostración del paquete premium con música, galería y padrinos ($499) - ¡La más solicitada!',
  keywords: ['boda', 'matrimonio', 'premium', 'música', 'galería', 'padrinos', 'invitación digital'],
}

export default function PremiumBodaDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Badge premium con gradiente distintivo */}
      <div className={`bg-gradient-to-r ${premiumDemoData.premium.color} text-white text-center py-3 relative z-50 shadow-lg`}>
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <Star className="w-4 h-4 fill-current" />
          <span className="font-medium">{premiumDemoData.demo.badge}</span>
          <span className="hidden sm:inline">- {premiumDemoData.demo.description}</span>
          <Star className="w-4 h-4 fill-current" />
        </div>
        
        {/* Indicador de características premium */}
        <div className="text-xs text-purple-100 mt-1">
          🎵 Música • 🖼️ Galería • 👥 Padrinos
        </div>
      </div>

      {/* Botón de navegación de regreso */}
      <Link 
        href="/"
        className="fixed top-20 left-4 z-40 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 border border-gray-200"
      >
        <div className="flex items-center gap-2 text-sm">
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Regresar a inicio</span>
          <span className="sm:hidden">Inicio</span>
        </div>
      </Link>

      {/* MusicProvider para funcionalidad premium de música */}
      <MusicProvider>
        {/* Contenido principal */}
        {children}
      </MusicProvider>
      
      {/* Toaster para notificaciones */}
      <Toaster />
    </div>
  )
} 