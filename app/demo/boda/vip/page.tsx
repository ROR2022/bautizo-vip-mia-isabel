"use client"

import { useState } from 'react'
import { ContactModal } from '@/components/landing/ContactModal'
import { vipDemoData } from '@/components/demo/boda/vip/data/vip-demo-data'

// Componentes VIP exclusivos (NUEVOS)
import { VipHero } from '@/components/demo/boda/vip/VipHero'
import { VipAccommodation } from '@/components/demo/boda/vip/VipAccommodation'
import { VipItinerary } from '@/components/demo/boda/vip/VipItinerary'
import { VipGuestPasses } from '@/components/demo/boda/vip/VipGuestPasses'

// Componentes VIP enhanced (MEJORADOS)
import { VipPlaylist } from '@/components/demo/boda/vip/VipPlaylist'
import { VipGallery } from '@/components/demo/boda/vip/VipGallery'

// Componentes básicos reutilizados
import { BasicCountdown } from '@/components/demo/boda/basic/BasicCountdown'
import { BasicEventDetails } from '@/components/demo/boda/basic/BasicEventDetails'
import { BasicAttendance } from '@/components/demo/boda/basic/BasicAttendance'
import { BasicGiftOptions } from '@/components/demo/boda/basic/BasicGiftOptions'

// Componentes premium reutilizados
import { PremiumInvitation } from '@/components/demo/boda/premium/PremiumInvitation'
import { PremiumPadrinos } from '@/components/demo/boda/premium/PremiumPadrinos'
import { PremiumThankYou } from '@/components/demo/boda/premium/PremiumThankYou'

export default function BodaVipPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  return (
    <main className="min-h-screen">
      {/* 🌟 HERO VIP - Con música y branding exclusivo */}
      <VipHero />

      {/* 📋 INVITACIÓN COMPLETA - Heredada del premium */}
      <PremiumInvitation />

      {/* ⏰ CUENTA REGRESIVA - Heredada del básico */}
      <BasicCountdown />

      {/* 📅 CUÁNDO Y DÓNDE - Heredada del básico */}
      <BasicEventDetails />

      {/* 🏨 HOSPEDAJE RECOMENDADO - CARACTERÍSTICA VIP EXCLUSIVA */}
      <VipAccommodation />

      {/* 📅 ITINERARIO COMPLETO - CARACTERÍSTICA VIP EXCLUSIVA */}
      <VipItinerary />

      {/* 🎫 PASES DE INVITADOS - CARACTERÍSTICA VIP EXCLUSIVA */}
      <VipGuestPasses />

      {/* 🎵 PLAYLIST MÚLTIPLE - CARACTERÍSTICA VIP ENHANCED */}
      <VipPlaylist />

      {/* 📸 GALERÍA CATEGORIZADA - CARACTERÍSTICA VIP ENHANCED */}
      <VipGallery />

      {/* 👥 PADRINOS - Heredada del premium */}
      <PremiumPadrinos />

      {/* ✅ CONFIRMACIÓN DE ASISTENCIA - Heredada del básico */}
      <BasicAttendance />

      {/* 🎁 OPCIONES DE REGALO - Heredada del básico */}
      <BasicGiftOptions />

      {/* 💝 MENSAJE FINAL - Heredada del premium */}
      <PremiumThankYou />

      {/* 🚀 CTA SECTION VIP */}
      <section className="py-16 px-4 bg-gradient-to-br from-yellow-50 to-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl border-2 border-yellow-300">
            <div className="flex items-center gap-2">
              <span>👑</span>
              <span>Paquete VIP Exclusivo</span>
              <span>👑</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-amber-800 mb-6">
            {vipDemoData.demo.cta.title}
          </h2>
          
          <p className="text-xl text-amber-700 mb-8 leading-relaxed">
            {vipDemoData.demo.cta.subtitle}
          </p>

          {/* Comparación de paquetes */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {/* Básico */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Básico</h3>
              <div className="text-3xl font-bold text-gray-600 mb-4">$299</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✓ Cuenta regresiva</li>
                <li>✓ Información del evento</li>
                <li>✓ Confirmación de asistencia</li>
                <li>✓ Opciones de regalo</li>
                <li>✓ Código de vestimenta</li>
              </ul>
            </div>

            {/* Premium */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-2 border-purple-300 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                POPULAR
              </div>
              <h3 className="text-xl font-bold text-purple-800 mb-4">Premium</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">$499</div>
              <ul className="text-sm text-gray-600 space-y-2 mb-6">
                <li>✓ Todo del Básico</li>
                <li>✓ Música personalizada</li>
                <li>✓ Galería de fotos</li>
                <li>✓ Lista de padrinos</li>
                <li>✓ Invitación completa</li>
                <li>✓ Mensaje final</li>
              </ul>
            </div>

            {/* VIP */}
            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-2xl p-6 shadow-xl border-2 border-yellow-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-4 py-1 rounded-full text-sm font-bold">
                👑 VIP EXCLUSIVO
              </div>
              <h3 className="text-xl font-bold text-amber-800 mb-4">VIP</h3>
              <div className="text-3xl font-bold text-amber-600 mb-4">$699</div>
              <ul className="text-sm text-amber-700 space-y-2 mb-6">
                <li>✓ Todo del Premium</li>
                <li>✓ Hospedaje recomendado</li>
                <li>✓ Itinerario completo</li>
                <li>✓ Pases de invitados</li>
                <li>✓ Playlist múltiple</li>
                <li>✓ Galería categorizada</li>
              </ul>
            </div>
          </div>

          {/* Botón CTA */}
          <button
            onClick={() => setIsContactModalOpen(true)}
            className="bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 text-white px-8 py-4 rounded-full text-lg font-bold shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            {vipDemoData.demo.cta.buttonText}
          </button>

          <p className="text-sm text-amber-600 mt-4">
            * Precios en pesos mexicanos. Incluye IVA.
          </p>
        </div>
      </section>

      {/* Modal de contacto */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </main>
  )
} 