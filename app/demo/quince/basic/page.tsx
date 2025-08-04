"use client";

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import {
  BasicHero,
  BasicCountdown, 
  BasicEventDetails,
  BasicAttendance,
  BasicGiftOptions,
  basicDemoData
} from '@/components/demo/quince/basic'
import { useState } from 'react';
import { ContactModal } from '@/components/landing/ContactModal';

export default function BasicQuinceDemoPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleModalContact = () => {
    setIsContactModalOpen(true);
  };

  return (
    <main className="min-h-screen font-playfair">
      {/* Componentes incluidos en el paquete básico */}
      <BasicHero />
      <BasicCountdown />
      <BasicEventDetails />
      <BasicAttendance />
      <BasicGiftOptions />
      
      {/* CTA Section - Llamada a la acción */}
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {basicDemoData.demo.cta.title}
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            {basicDemoData.demo.cta.subtitle}
          </p>
          
          {/* Lista de características incluidas */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 mb-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Características incluidas:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {basicDemoData.demo.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Botones de acción */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              asChild 
              size="lg" 
              onClick={handleModalContact}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg"
            >
              <div className="flex items-center gap-2 cursor-pointer">
                {basicDemoData.demo.cta.buttonText}
                <ArrowRight className="w-4 h-4" />
              </div>
            </Button>
            
            <Button 
              asChild 
              variant="outline" 
              size="lg"
              className="border-2 border-gray-300 hover:border-gray-400 text-gray-700 px-8 py-4 text-lg"
            >
              <Link href="/#plans">
                Ver todos los paquetes
              </Link>
            </Button>
          </div>
          
          {/* Nota explicativa */}
          <div className="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 max-w-2xl mx-auto">
            <p className="text-sm text-blue-800">
              <strong>💡 Nota:</strong> Esta es una demostración interactiva. 
              Los formularios funcionan pero no envían datos reales. 
              ¡Explora todas las características del paquete básico!
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