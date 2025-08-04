"use client"

import { useState } from 'react'
import { Heart } from 'lucide-react'
import { premiumDemoData } from './data/premium-demo-data'
import { MiaIsabelBautizoData } from '../vip/data/mia-isabel-data'
import { MiaIsabelTheme } from '@/lib/themes/mia-isabel-theme'

interface PremiumFamilyProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

export function PremiumFamily({ data = premiumDemoData, theme }: PremiumFamilyProps) {
  const [selectedFamily, setSelectedFamily] = useState<number | null>(null)

  return (
    <section 
      className={`py-16 px-4 relative overflow-hidden`}
      style={{
        background: theme ? 
          `linear-gradient(135deg, rgba(252,231,243,0.9) 0%, rgba(254,205,211,0.8) 100%), url('${data.personalImages?.family || data.hero.backgroundImage}')` :
          `linear-gradient(to bottom right, #f0f9ff, #fdf2f8)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className={`w-16 h-16 ${theme ? 'bg-gradient-to-r from-pink-400 to-rose-400' : 'bg-gradient-to-r from-sky-400 to-pink-400'} rounded-full flex items-center justify-center`}>
              <span className="text-2xl">{theme ? '💖' : '👨‍👩‍👧‍👦'}</span>
            </div>
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold ${theme ? 'text-pink-800' : 'text-sky-800'} mb-4`}>
            {theme ? 'Familia Amorosa de Mia Isabel' : 'Nuestra Familia Especial'}
          </h2>
          <p className={`text-lg ${theme ? 'text-pink-600' : 'text-sky-600'} max-w-2xl mx-auto`}>
            Personas bendecidas que Dios ha puesto en nuestro camino y que forman parte 
            fundamental en la vida de {data.hero.name}. Cada uno tiene un lugar especial 
            en nuestros corazones {theme ? 'y acompañará a nuestra pequeña en su crecimiento espiritual.' : '.'}
          </p>
        </div>

        {/* Grid de familia especial */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.family.map((familyMember, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl p-6 border-2 transition-all duration-300 cursor-pointer hover:shadow-lg ${
                selectedFamily === index 
                  ? `${theme ? 'border-pink-400 bg-gradient-to-br from-pink-50 to-rose-50' : 'border-sky-400 bg-gradient-to-br from-sky-50 to-pink-50'} shadow-lg scale-105` 
                  : `${theme ? 'border-pink-200 hover:border-pink-300' : 'border-sky-200 hover:border-sky-300'}`
              }`}
              onClick={() => setSelectedFamily(selectedFamily === index ? null : index)}
            >
              {/* Icono y rol */}
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-12 h-12 ${theme ? 'bg-gradient-to-r from-pink-400 to-rose-400' : 'bg-gradient-to-r from-sky-400 to-pink-400'} rounded-full flex items-center justify-center text-white`}>
                  <span className="text-xl">{familyMember.role === 'Madre Amorosa' ? '💖' : (familyMember.icon || '👥')}</span>
                </div>
                <h3 className={`text-lg font-bold ${theme ? 'text-pink-800' : 'text-sky-800'}`}>
                  {familyMember.role}
                </h3>
              </div>

              {/* Nombres */}
              <div className="space-y-2 mb-4">
                {familyMember.names.map((name, nameIndex) => (
                  <p key={nameIndex} className="text-gray-700 font-medium">
                    {name}
                  </p>
                ))}
              </div>

              {/* Descripción */}
              <p className={`text-sm ${theme ? 'text-pink-600' : 'text-sky-600'} italic`}>
                {familyMember.description}
              </p>

              {/* Indicador de selección */}
              {selectedFamily === index && (
                <div className={`mt-4 pt-4 border-t ${theme ? 'border-pink-200' : 'border-sky-200'}`}>
                  <div className={`flex items-center gap-2 ${theme ? 'text-rose-600' : 'text-pink-600'}`}>
                    <Heart className="w-4 h-4 fill-current" />
                    <span className="text-xs font-medium">
                      Personas especiales en la vida de {data.hero.name}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mensaje especial */}
        <div className={`mt-16 ${theme ? 'bg-gradient-to-r from-pink-100 to-rose-100 border-pink-200' : 'bg-gradient-to-r from-sky-100 to-pink-100 border-sky-200'} rounded-2xl p-8 border`}>
          <div className="text-center">
            <div className="text-4xl mb-4">{theme ? '💖' : '💙'}</div>
            <h3 className={`text-2xl font-bold ${theme ? 'text-pink-800' : 'text-sky-800'} mb-4`}>
              {theme ? 'Bendiciones Familiares para Mia Isabel' : 'Bendiciones de Familia'}
            </h3>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl">👑</div>
                <h4 className={`font-semibold ${theme ? 'text-pink-700' : 'text-sky-700'}`}>Padrinos</h4>
                <p className="text-sm text-gray-600">Guías espirituales elegidos con amor para acompañar a {data.hero.name} en su fe</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">👴👵</div>
                <h4 className={`font-semibold ${theme ? 'text-pink-700' : 'text-sky-700'}`}>Abuelos</h4>
                <p className="text-sm text-gray-600">Pilares de sabiduría que bendicen con su experiencia y amor incondicional</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">{theme ? '🌸' : '💕'}</div>
                <h4 className={`font-semibold ${theme ? 'text-pink-700' : 'text-sky-700'}`}>Familia del Corazón</h4>
                <p className="text-sm text-gray-600">Seres queridos que eligimos para que sean parte de esta bendición</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/50 rounded-xl">
              <p className={`text-sm ${theme ? 'text-pink-700' : 'text-sky-700'}`}>
                <strong>{theme ? '🌸 Bendición familiar:' : '🙏 Bendición familiar:'}</strong> &quot;Que cada uno de ustedes sea instrumento 
                de amor y bendición en la vida de {data.hero.name}, guiándola siempre por el 
                camino del bien y la fe.&quot;
              </p>
            </div>
          </div>
        </div>

        {/* Decoración celestial */}
        <div className="text-center mt-8">
          <div className="flex justify-center items-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-transparent rounded-full"></div>
            <div className="flex gap-2">
              <span className="text-lg">☁️</span>
              <Heart className="w-6 h-6 text-pink-400 fill-current" />
              <span className="text-lg">☁️</span>
            </div>
            <div className="h-1 w-20 bg-gradient-to-l from-pink-300 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}