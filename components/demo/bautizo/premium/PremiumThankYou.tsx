"use client"

import { Heart, ArrowUp } from 'lucide-react'
import { MiaIsabelBautizoData, miaIsabelBautizoData } from '../vip/data/mia-isabel-data'
import { MiaIsabelTheme } from '@/lib/themes/mia-isabel-theme'

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