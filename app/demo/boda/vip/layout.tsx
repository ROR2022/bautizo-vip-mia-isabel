import type { Metadata } from 'next'
import { MusicProvider } from '@/context/music-context'
import { VipMusicPlayer } from '@/components/demo/boda/vip/VipMusicPlayer'

export const metadata: Metadata = {
  title: 'Demo VIP - Boda Ana & Carlos | Invitaciones Digitales',
  description: 'Experiencia VIP completa para bodas. Incluye hospedaje recomendado, itinerario completo, pases de invitados, playlist múltiple y galería categorizada. El paquete más exclusivo para tu boda.',
  keywords: [
    'invitación digital boda',
    'invitación virtual boda',
    'invitación online boda',
    'demo VIP boda',
    'paquete VIP boda',
    'hospedaje boda',
    'itinerario boda',
    'pases invitados boda',
    'playlist boda',
    'galería boda',
    'Ana Carlos boda',
    'Monterrey boda'
  ],
  openGraph: {
    title: 'Demo VIP - Boda Ana & Carlos | Invitaciones Digitales',
    description: 'Experiencia VIP completa para bodas con hospedaje, itinerario, pases y más.',
    type: 'website',
    images: ['/images/boda/boda1.jpeg']
  }
}

export default function BodaVipLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <MusicProvider>
      <div className="relative">
        {/* Badge VIP flotante */}
        <div className="fixed top-4 left-4 z-50 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-4 py-2 rounded-full text-sm font-bold shadow-2xl border-2 border-yellow-300 animate-pulse">
          👑 DEMO VIP - Boda
        </div>
        
        {/* Badge de regreso */}
        <div className="fixed top-4 right-4 z-50">
          <a 
            href="/demo/boda/premium" 
            className="bg-white/90 backdrop-blur-sm text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-lg border border-gray-200 hover:bg-white transition-all duration-300"
          >
            ← Premium
          </a>
        </div>
        
        {/* Reproductor de música VIP */}
        <VipMusicPlayer />
        
        {children}
      </div>
    </MusicProvider>
  )
} 