import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Toaster } from "@/components/ui/toaster"
import { basicDemoData } from '@/components/demo/boda/basic/data/basic-demo-data'

export const metadata: Metadata = {
  title: 'Demo Boda - Paquete Básico | Web Invitations',
  description: 'Demostración interactiva del paquete básico para invitaciones digitales de boda ($299)',
  keywords: ['boda', 'matrimonio', 'invitación digital', 'demo', 'paquete básico'],
}

export default function BasicBodaDemoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen">
      {/* Badge indicador de demo */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-3 relative z-50">
        <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
          <span>{basicDemoData.demo.badge}</span>
          <span className="hidden sm:inline">- {basicDemoData.demo.description}</span>
        </div>
      </div>

      {/* Botón de navegación de regreso */}
      <Link 
        href="/"
        className="fixed top-16 left-4 z-40 bg-white/90 backdrop-blur-sm text-gray-800 px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 border border-gray-200"
      >
        <div className="flex items-center gap-2 text-sm">
          <ArrowLeft size={16} />
          <span className="hidden sm:inline">Regresar a inicio</span>
          <span className="sm:hidden">Inicio</span>
        </div>
      </Link>

      {/* Contenido principal */}
      {children}
      
      {/* Toaster para notificaciones */}
      <Toaster />
    </div>
  )
} 