"use client"

import { Heart, ArrowUp } from 'lucide-react'
import { MiaIsabelBautizoData, miaIsabelBautizoData } from '../vip/data/mia-isabel-data'
import { MiaIsabelTheme } from '@/lib/themes/mia-isabel-theme'
import { premiumDemoData } from './data/premium-demo-data'

interface PremiumThankYouProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

export function PremiumThankYou({ data = miaIsabelBautizoData, theme: _theme }: PremiumThankYouProps) { // eslint-disable-line @typescript-eslint/no-unused-vars
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-800 to-rose-800 text-white">
      <div className="max-w-4xl mx-auto text-center">
        {/* Header Celestial */}
        <div className="mb-12">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-3xl">🌸</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {data.thankYou.title}
          </h2>
        </div>

        {/* Mensaje principal */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 mb-8 border border-white/20">
          <p className="text-lg md:text-xl leading-relaxed mb-8">
            {data.thankYou.personalMessage}
          </p>
          
          <div className="border-t border-white/20 pt-8">
            <p className="text-lg mb-4">{data.thankYou.message}</p>
            <p className="text-2xl md:text-3xl font-bold text-rose-300">
              {data.thankYou.signature}
            </p>
          </div>
        </div>

        {/* Bendiciones especiales */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
          <div className="text-center mb-6">
            <div className="text-3xl mb-4">✨</div>
            <h3 className="text-xl font-bold text-pink-200 mb-4">
              Bendiciones para Ustedes
            </h3>
          </div>
          
          <div className="space-y-4">
            {data.thankYou.blessings.map((blessing, index) => (
              <p key={index} className="text-sm md:text-base opacity-90 italic">
                &quot;{blessing}&quot;
              </p>
            ))}
          </div>
        </div>

        {/* Información del evento */}
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 mb-8 border border-white/10">
          <div className="space-y-4">
            <p className="text-sm opacity-80">
              {data.thankYou.footer.year}
            </p>
            <p className="text-lg font-semibold">
              {data.thankYou.footer.name}
            </p>
            <p className="text-sm opacity-80">
              {data.thankYou.footer.occasion}
            </p>
            <div className="border-t border-white/20 pt-4">
              <p className="text-sm italic opacity-90">
                {data.thankYou.footer.blessing}
              </p>
            </div>
          </div>
        </div>

        {/* Mensaje celestial final */}
        <div className="bg-gradient-to-r from-pink-600 to-rose-600 rounded-xl p-6 mb-8 border border-white/20">
          <div className="text-2xl mb-4">🌸💖🌸</div>
          <h3 className="text-xl font-bold mb-3">
            Un Día de Gracia y Bendición
          </h3>
          <p className="text-sm opacity-90 leading-relaxed">
            Este día quedará grabado para siempre en nuestros corazones como un momento 
            de gracia especial. Gracias por hacer que el bautismo de Mia Isabel 
            sea aún más significativo con su presencia y amor.
          </p>
        </div>

        {/* Decoración celestial */}
        <div className="flex justify-center items-center gap-4 mb-6">
          <div className="h-1 w-20 bg-gradient-to-r from-transparent to-pink-300 rounded-full"></div>
          <div className="flex gap-2 text-2xl">
            <span>🌸</span>
            <Heart className="w-6 h-6 text-rose-300 fill-current" />
            <span>🌸</span>
          </div>
          <div className="h-1 w-20 bg-gradient-to-l from-transparent to-rose-300 rounded-full"></div>
        </div>

        {/* Botón de regreso arriba */}
        <button
          onClick={scrollToTop}
          className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-all duration-300 border border-white/20"
          title="Regresar arriba"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        {/* Contenido del CTA */}
        <div className="relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 mt-8 mb-8 border border-white/10">
          {/* Efecto de brillo exterior */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 via-rose-600/20 to-pink-600/20 rounded-2xl blur-xl -z-10 opacity-60"></div>
          
          <div className="relative z-10 text-center">
            {/* Corona decorativa */}
            <div className="mx-auto w-12 h-12 mb-4 text-rose-300">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15 6L19 7L17 11L19 15L15 16L12 20L9 16L5 15L7 11L5 7L9 6L12 2Z" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.2" />
              </svg>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-pink-200">
              {premiumDemoData.thankYou.footer.cta.question}
            </h3>
            
            {/* Separador decorativo */}
            <div className="flex items-center justify-center my-4">
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
              <div className="mx-3 text-rose-300 text-xs">✧</div>
              <div className="h-px w-12 bg-gradient-to-r from-transparent via-rose-300 to-transparent"></div>
            </div>
            
            <p className="text-pink-100 text-base mb-6 leading-relaxed max-w-md mx-auto">
              {premiumDemoData.thankYou.footer.cta.action}
            </p>
            
            {/* Botón CTA */}
            <a
              href={premiumDemoData.thankYou.footer.cta.link}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-600 via-rose-600 to-pink-600 
                       text-white px-8 py-4 rounded-full font-semibold text-lg
                       hover:shadow-xl hover:shadow-pink-600/30 
                       transform hover:scale-105 transition-all duration-300
                       border border-pink-500/20 relative overflow-hidden group"
            >
              {/* Efecto brillante al hover */}
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              
              {/* Icono de estrella */}
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14 8L20 8L15 12L17 18L12 14L7 18L9 12L4 8L10 8L12 2Z" fill="currentColor" />
              </svg>
              
              <span className="relative z-10">{premiumDemoData.thankYou.footer.cta.linkText}</span>
              
              {/* Icono de flecha */}
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12h14m-7-7l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Mensaje de paz final */}
        <div className="mt-8 p-4 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
          <p className="text-sm opacity-80">
            <strong>🕊️ Que la paz de Dios:</strong> que sobrepasa todo entendimiento, 
            guarde sus corazones y sus pensamientos en Cristo Jesús para siempre.
          </p>
        </div>
      </div>
    </section>
  )
}