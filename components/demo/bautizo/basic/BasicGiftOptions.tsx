"use client"

import { CreditCard, Heart } from 'lucide-react'
import { MiaIsabelBautizoData, miaIsabelBautizoData } from '../vip/data/mia-isabel-data'
import { MiaIsabelTheme } from '@/lib/themes/mia-isabel-theme'

interface BasicGiftOptionsProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

export function BasicGiftOptions({ data = miaIsabelBautizoData, theme: _theme }: BasicGiftOptionsProps) { // eslint-disable-line @typescript-eslint/no-unused-vars
  const getIcon = (icon: string) => {
    switch (icon) {
      case '💰':
        return <CreditCard className="w-6 h-6" />
      case '👶':
        return <span className="text-2xl">👶</span>
      case '🙏':
        return <span className="text-2xl">🙏</span>
      default:
        return <span className="text-2xl">{icon}</span>
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-4xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center">
              <span className="text-2xl">🎁</span>
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pink-800 mb-4">
            {data.gifts.title}
          </h2>
          <p className="text-lg text-pink-600 max-w-2xl mx-auto">
            {data.gifts.message}
          </p>
        </div>

        {/* Opciones de regalo */}
        <div className="grid md:grid-cols-3 gap-6">
          {data.gifts.options.map((option, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-6 border-2 border-pink-100 hover:shadow-lg transition-all duration-300 hover:border-pink-200"
            >
              {/* Icono */}
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full flex items-center justify-center text-white">
                  {getIcon(option.icon)}
                </div>
              </div>

              {/* Título */}
              <h3 className="text-xl font-bold text-pink-800 text-center mb-2">
                {option.title}
              </h3>

              {/* Descripción */}
              <p className="text-pink-600 text-center mb-4 font-medium">
                {option.description}
              </p>

              {/* Detalles */}
              <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg p-4 border border-pink-200">
                <p className="text-sm text-gray-700 whitespace-pre-line">
                  {option.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mensaje de bendición */}
        <div className="mt-12 bg-white rounded-2xl p-8 text-center border-2 border-pink-100 shadow-lg">
          <div className="text-4xl mb-4">💖</div>
          <p className="text-lg text-pink-700 italic font-medium mb-6">
            {data.gifts.blessing}
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="space-y-2">
              <div className="text-3xl">💰</div>
              <h4 className="font-semibold text-pink-700">Ahorro Futuro</h4>
              <p className="text-sm text-gray-600">Una cuenta de ahorro será el mejor regalo para el futuro de Mia Isabel</p>
            </div>
            
            <div className="space-y-2">
              <div className="text-3xl">👶</div>
              <h4 className="font-semibold text-pink-700">Regalos Infantiles</h4>
              <p className="text-sm text-gray-600">Artículos especiales para acompañar el crecimiento de nuestra bebé</p>
            </div>
            
            
          </div>
        </div>

        {/* Información adicional */}
        <div className="mt-8 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-6 border border-pink-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <span className="text-lg">✨</span>
              <h3 className="text-xl font-bold text-pink-800">Recordatorio Especial</h3>
              <span className="text-lg">✨</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="bg-white/50 rounded-lg p-4">
                <h4 className="font-semibold text-pink-700 mb-2 flex items-center gap-2">
                  <span>💖</span> Importante:
                </h4>
                <ul className="text-sm text-pink-700 space-y-1">
                  <li>• Lo más importante es su presencia y bendiciones</li>
                  <li>• Cualquier gesto viene del corazón</li>
                  <li>• No hay obligation de obsequiar algo</li>
                </ul>
              </div>
              
              <div className="bg-white/50 rounded-lg p-4">
                <h4 className="font-semibold text-pink-700 mb-2 flex items-center gap-2">
                  <span>🤗</span> Con cariño:
                </h4>
                <ul className="text-sm text-pink-700 space-y-1">
                  <li>• Su amor y compañía son invaluables</li>
                  <li>• Las bendiciones perduran para siempre</li>
                  <li>• Mia Isabel conocerá del amor que la rodea</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/70 rounded-xl">
              <p className="text-sm text-pink-700 italic">
                <strong>🌟 Bendición:</strong> &ldquo;Que cada gesto de amor hacia Mia Isabel sea devuelto 
                multiplicado en bendiciones para ustedes y sus familias.&rdquo;
              </p>
            </div>
          </div>
        </div>

        {/* Decoración celestial */}
        <div className="text-center mt-8">
          <div className="flex justify-center items-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-300 to-transparent rounded-full"></div>
            <div className="flex gap-2">
              <span className="text-lg">🌸</span>
              <Heart className="w-6 h-6 text-rose-400 fill-current" />
              <span className="text-lg">🌸</span>
            </div>
            <div className="h-1 w-20 bg-gradient-to-l from-rose-300 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}