"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Crown, Sparkles } from "lucide-react";
import {
  VipHero,
  VipAccommodation,
  VipItinerary,
  VipGuestPasses,
  VipPlaylist,
  VipGallery,
  PremiumInvitation,
  PremiumPadrinos,
  PremiumThankYou,
  PremiumMusicPlayer,
  BasicCountdown,
  BasicEventDetails,
  BasicAttendance,
  BasicGiftOptions,
  vipDemoData,
} from "@/components/demo/quince/vip";
import { ContactModal } from "@/components/landing/ContactModal";

export default function VipQuinceDemoPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleModalContact = () => {
    setIsContactModalOpen(true);
  };

  return (
    <main className="min-h-screen font-playfair">
      {/* Music Player VIP (invisible, maneja el audio) */}
      <PremiumMusicPlayer />

      {/* Hero VIP con música y branding dorado */}
      <VipHero />

      {/* Información completa de invitación (premium reutilizado) */}
      <PremiumInvitation />

      {/* Características básicas esenciales (reutilizadas) */}
      <BasicCountdown />
      <BasicEventDetails />

      {/* 🌟 CARACTERÍSTICAS VIP EXCLUSIVAS */}

      {/* Hospedaje recomendado - VIP EXCLUSIVO */}
      <VipAccommodation />

      {/* Itinerario completo - VIP EXCLUSIVO */}
      <VipItinerary />

      {/* Pases de invitados - VIP EXCLUSIVO */}
      <VipGuestPasses />

      {/* ✨ CARACTERÍSTICAS VIP ENHANCED */}

      {/* Playlist múltiple - VIP ENHANCED */}
      <VipPlaylist />

      {/* Galería categorizada - VIP ENHANCED */}
      <VipGallery />

      {/* Lista de padrinos (premium reutilizado) */}
      <PremiumPadrinos />

      {/* Características básicas finales (reutilizadas) */}
      <BasicAttendance />
      <BasicGiftOptions />

      {/* Mensaje final premium (reutilizado) */}
      <PremiumThankYou />

      {/* CTA Section VIP - La más exclusiva */}
      <section className="py-12 md:py-16 lg:py-20 px-4 bg-gradient-to-br from-yellow-50 via-amber-50 to-yellow-100">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8">
            <Crown className="w-6 md:w-8 h-6 md:h-8 text-yellow-600 fill-current" />
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-amber-900 text-center">
              {vipDemoData.demo.cta.title}
            </h2>
            <Crown className="w-6 md:w-8 h-6 md:h-8 text-yellow-600 fill-current" />
          </div>

          <p className="text-base md:text-lg lg:text-xl text-amber-700 mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed px-2">
            {vipDemoData.demo.cta.subtitle}
          </p>

          {/* Comparación completa de los 3 paquetes */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12">
            {/* Básico */}
            <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border-2 border-gray-200 relative">
              <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-gray-500 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium">
                Básico
              </div>
              <div className="mt-3 md:mt-4">
                <div className="text-2xl md:text-3xl font-bold text-gray-700 mb-2">
                  $299
                </div>
                <p className="text-gray-600 text-xs md:text-sm mb-4 md:mb-6">
                  5 características esenciales
                </p>
                <div className="space-y-2 md:space-y-3 text-left">
                  {[
                    "Cuenta Regresiva",
                    "Cuándo y dónde",
                    "Confirmación de asistencia",
                    "Opciones de regalo",
                    "Código de vestimenta",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs md:text-sm"
                    >
                      <Check className="w-3 md:w-4 h-3 md:h-4 text-green-500 flex-shrink-0" />
                      <span className="min-w-0">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-4 md:mt-6 border-gray-300 text-sm md:text-base"
                >
                  <Link href="/demo/quince/basic">Ver Demo Básico</Link>
                </Button>
              </div>
            </div>

            {/* Premium */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg border-2 border-purple-300 relative">
              <div className="absolute -top-2 md:-top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-3 md:px-4 py-1 rounded-full text-xs md:text-sm font-medium">
                <span className="hidden sm:inline">Premium - Popular</span>
                <span className="sm:hidden">Premium</span>
              </div>
              <div className="mt-3 md:mt-4">
                <div className="text-2xl md:text-3xl font-bold text-purple-700 mb-2">
                  $499
                </div>
                <p className="text-purple-600 text-xs md:text-sm mb-4 md:mb-6">
                  8 características (+3 multimedia)
                </p>
                <div className="space-y-2 md:space-y-3 text-left">
                  {[
                    "Todo del Básico",
                    "Música personalizada ✨",
                    "Galería de fotos ✨",
                    "Lista de padrinos ✨",
                    "Invitación completa",
                    "Mensaje personalizado",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs md:text-sm"
                    >
                      <Check className="w-3 md:w-4 h-3 md:h-4 text-purple-500 flex-shrink-0" />
                      <span
                        className={`min-w-0 ${
                          feature.includes("✨")
                            ? "font-medium text-purple-700"
                            : ""
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="w-full mt-4 md:mt-6 border-purple-300 text-purple-700 text-sm md:text-base"
                >
                  <Link href="/demo/quince/premium">Ver Demo Premium</Link>
                </Button>
              </div>
            </div>

            {/* VIP */}
            <div className="bg-gradient-to-br from-yellow-100 to-amber-100 rounded-xl md:rounded-2xl p-4 md:p-6 shadow-2xl border-4 border-yellow-400 relative md:transform md:hover:scale-105 transition-transform md:col-span-2 lg:col-span-1">
              <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-amber-500 text-amber-900 px-4 md:px-6 py-2 rounded-full text-xs md:text-sm font-bold shadow-lg max-w-[calc(100%-2rem)]">
                <span className="hidden sm:inline">
                  👑 VIP - EL MÁS EXCLUSIVO 👑
                </span>
                <span className="sm:hidden">👑 VIP 👑</span>
              </div>
              <div className="mt-4 md:mt-6">
                <div className="text-3xl md:text-4xl font-bold text-amber-800 mb-2">
                  $699
                </div>
                <p className="text-amber-700 text-xs md:text-sm mb-4 md:mb-6 font-medium">
                  11 características (+3 VIP exclusivas)
                </p>
                <div className="space-y-2 md:space-y-3 text-left">
                  {[
                    "Todo del Premium",
                    "🏨 Hospedaje recomendado 👑",
                    "📅 Itinerario completo 👑",
                    "🎫 Pases de invitados 👑",
                    "🎵 Playlist múltiple ⭐",
                    "📸 Galería categorizada ⭐",
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 text-xs md:text-sm"
                    >
                      <Check className="w-3 md:w-4 h-3 md:h-4 text-yellow-600 flex-shrink-0" />
                      <span
                        className={`min-w-0 ${
                          feature.includes("👑")
                            ? "font-bold text-amber-800"
                            : feature.includes("⭐")
                            ? "font-semibold text-amber-700"
                            : ""
                        }`}
                      >
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                <Button
                  asChild
                  onClick={handleModalContact}
                  className="w-full mt-4 md:mt-6 bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-amber-900 font-bold text-sm md:text-lg py-2 md:py-3 shadow-xl"
                >
                  <div className="flex items-center gap-2 cursor-pointer">
                    <span className="hidden sm:inline">
                      ¡ESTÁS AQUÍ! - {vipDemoData.demo.cta.buttonText}
                    </span>
                    <span className="sm:hidden">
                      ¡ESTÁS AQUÍ! - Contratar VIP
                    </span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Button>
              </div>
            </div>
          </div>

          {/* Valor diferencial VIP */}
          <div className="bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl border-2 border-yellow-200 mb-8 md:mb-12">
            <h3 className="text-lg md:text-2xl font-bold text-amber-800 mb-4 md:mb-6 flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 text-center">
              <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-yellow-600" />
              <span>¿Por qué elegir el paquete VIP?</span>
              <Sparkles className="w-5 md:w-6 h-5 md:h-6 text-yellow-600" />
            </h3>

            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">🏨</span>
                </div>
                <h4 className="font-semibold text-amber-800 mb-2 text-sm md:text-base">
                  Logística Completa
                </h4>
                <p className="text-amber-600 text-xs md:text-sm leading-relaxed">
                  Hospedaje, itinerario y pases digitales para una organización
                  profesional total
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">✨</span>
                </div>
                <h4 className="font-semibold text-amber-800 mb-2 text-sm md:text-base">
                  Experiencia Premium
                </h4>
                <p className="text-amber-600 text-xs md:text-sm leading-relaxed">
                  Playlist por momentos y galería categorizada para una
                  experiencia superior
                </p>
              </div>

              <div className="text-center">
                <div className="w-12 md:w-16 h-12 md:h-16 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-3 md:mb-4">
                  <span className="text-xl md:text-2xl">👑</span>
                </div>
                <h4 className="font-semibold text-amber-800 mb-2 text-sm md:text-base">
                  Estatus VIP
                </h4>
                <p className="text-amber-600 text-xs md:text-sm leading-relaxed">
                  El paquete más exclusivo con todas las características más 3
                  únicas del VIP
                </p>
              </div>
            </div>
          </div>

          {/* Botones de acción final */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center mb-6 md:mb-8 px-2">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-amber-900 px-6 md:px-10 py-3 md:py-4 text-base md:text-xl font-bold shadow-2xl transform hover:scale-105 transition-all"
            >
              <Link href={vipDemoData.demo.cta.link}>
                <span className="hidden sm:inline">
                  {vipDemoData.demo.cta.buttonText}
                </span>
                <span className="sm:hidden">Contratar VIP - $899</span>
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-amber-400 text-amber-700 hover:bg-amber-50 px-6 md:px-10 py-3 md:py-4 text-base md:text-xl font-semibold"
            >
              <Link href="/#plans">
                <span className="hidden sm:inline">
                  Comparar todos los paquetes
                </span>
                <span className="sm:hidden">Ver todos los paquetes</span>
              </Link>
            </Button>
          </div>

          {/* Nota final del demo VIP */}
          <div className="bg-gradient-to-r from-yellow-100 to-amber-100 rounded-xl md:rounded-2xl p-4 md:p-6 border-2 border-yellow-300 max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-2 md:gap-3 mb-3 md:mb-4 text-center">
              <Crown className="w-5 md:w-6 h-5 md:h-6 text-yellow-600 fill-current" />
              <h4 className="font-bold text-amber-800 text-base md:text-lg">
                Experiencia Demo VIP Completa
              </h4>
              <Crown className="w-5 md:w-6 h-5 md:h-6 text-yellow-600 fill-current" />
            </div>
            <p className="text-amber-700 leading-relaxed text-sm md:text-base">
              Acabas de experimentar la{" "}
              <strong>demostración más completa</strong> de nuestras
              invitaciones digitales. El paquete VIP incluye{" "}
              <strong>logística integral del evento</strong> con hospedaje,
              itinerario detallado, sistema de pases QR, playlist múltiple y
              galería categorizada.
            </p>
            <div className="mt-3 md:mt-4 p-3 bg-white/60 rounded-lg">
              <p className="text-xs md:text-sm text-amber-600">
                <strong>💎 Demo interactivo:</strong> Todos los formularios y
                botones funcionan, pero no envían datos reales. ¡Explora cada
                característica VIP!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Modal de contacto */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </main>
  );
}
