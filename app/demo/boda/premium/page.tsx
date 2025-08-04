"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, Star } from 'lucide-react'
import {
  PremiumHero,
  PremiumInvitation,
  PremiumPadrinos,
  PremiumGallery,
  PremiumThankYou,
  PremiumMusicPlayer,
  BasicCountdown,
  BasicEventDetails,
  BasicAttendance,
  BasicGiftOptions,
  premiumDemoData
} from '@/components/demo/boda/premium'
import { useState } from 'react';
import { ContactModal } from '@/components/landing/ContactModal';

export default function PremiumBodaDemoPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleModalContact = () => {
    setIsContactModalOpen(true);
  };

  return (
    <main className="min-h-screen font-playfair">
      {/* Music Player premium (invisible, maneja el audio) */}
      <PremiumMusicPlayer />
      
      {/* Hero premium con música */}
      <PremiumHero />
      
      {/* Información de padres (premium) */}
      <PremiumInvitation />
      
      {/* Características básicas reutilizadas */}
      <BasicCountdown />
      <BasicEventDetails />
      
      {/* Características premium exclusivas */}
      <PremiumGallery />
      <PremiumPadrinos />
      
      {/* Confirmación y regalos (reutilizados del básico) */}
      <BasicAttendance />
      <BasicGiftOptions />
      
      {/* Mensaje final premium */}
      <PremiumThankYou />
      
      {/* CTA Section Premium */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Star className="w-6 h-6 text-purple-500 fill-current" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              {premiumDemoData.demo.cta.title}
            </h2>
            <Star className="w-6 h-6 text-purple-500 fill-current" />
          </div>
          
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {premiumDemoData.demo.cta.subtitle}
          </p>
          
          {/* Comparación visual */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Básico */}
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-200">
              <h3 className="text-xl font-semibold mb-4 text-gray-700">Paquete Básico</h3>
              <div className="text-2xl font-bold text-gray-600 mb-4">$299</div>
              <p className="text-sm text-gray-600 mb-4">5 características esenciales</p>
              <div className="space-y-2 text-sm text-left">
                {premiumDemoData.demo.features.slice(0, 5).map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-500" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Premium */}
            <div className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl p-6 shadow-lg border-2 border-purple-300 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                ¡LA MÁS SOLICITADA!
              </div>
              <h3 className="text-xl font-semibold mb-4 text-purple-700">Paquete Premium</h3>
              <div className="text-2xl font-bold text-purple-600 mb-4">$499</div>
              <p className="text-sm text-purple-700 mb-4">8 características (+3 premium exclusivas)</p>
              <div className="space-y-2 text-sm text-left">
                {premiumDemoData.demo.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-purple-500" />
                    <span className={index >= 5 ? "font-medium text-purple-700" : ""}>
                      {feature}
                      {index >= 5 && " ✨"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              onClick={handleModalContact}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg shadow-lg"
            >
              <div className="flex items-center gap-2 cursor-pointer">
                {premiumDemoData.demo.cta.buttonText}
                <ArrowRight className="w-4 h-4" />
              </div>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-purple-300 hover:border-purple-400 text-purple-700 px-8 py-4 text-lg"
            >
              <Link href="/demo/boda/basic">
                Ver paquete básico
              </Link>
            </Button>
          </div>
          
          {/* Valor agregado */}
          <div className="mt-8 p-6 bg-white rounded-xl border border-purple-200">
            <h4 className="font-semibold text-purple-800 mb-3">¿Por qué elegir Premium?</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-purple-500">🎵</span>
                <span>Música romántica para ambientar</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500">📸</span>
                <span>Galería elegante con tus mejores fotos</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-purple-500">👥</span>
                <span>Reconocimiento especial a tus padrinos</span>
              </div>
            </div>
          </div>
          
          {/* Nota explicativa */}
          <div className="mt-8 p-4 bg-purple-50 rounded-lg border border-purple-200 max-w-2xl mx-auto">
            <p className="text-sm text-purple-800">
              <strong>💡 Nota:</strong> Esta es una demostración interactiva del paquete premium para bodas. 
              Experimenta todas las características adicionales: música, galería completa y lista de padrinos.
              ¡Los formularios funcionan pero no envían datos reales!
            </p>
          </div>
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