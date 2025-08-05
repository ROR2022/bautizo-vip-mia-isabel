"use client"

import { Heart, Users } from 'lucide-react'
import { premiumDemoData } from './data/premium-demo-data'
import { MiaIsabelBautizoData, miaIsabelBautizoData } from '../vip/data/mia-isabel-data'
import { MiaIsabelTheme } from '@/lib/themes/mia-isabel-theme'

interface PremiumInvitationProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

export function PremiumInvitation({ data = miaIsabelBautizoData, theme }: PremiumInvitationProps) {
  return (
    <section 
      className={`py-16 px-4 relative overflow-hidden`}
      style={{
        background: theme ? 
          `linear-gradient(135deg, rgba(252,231,243,0.9) 0%, rgba(254,205,211,0.8) 100%), url('${data.personalImages?.secondary || data.hero.backgroundImage}')` :
          `linear-gradient(to bottom right, #f0f9ff, #fdf2f8)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className={`w-16 h-16 ${theme ? 'bg-gradient-to-r from-pink-400 to-rose-400' : 'bg-gradient-to-r from-sky-400 to-pink-400'} rounded-full flex items-center justify-center`}>
              <span className="text-2xl">{theme ? '🌸' : '👼'}</span>
            </div>
          </div>
          <h2 className={`text-3xl md:text-4xl font-bold ${theme ? 'text-pink-800' : 'text-sky-800'} mb-4`}>
            {data.invitation.title}
          </h2>
          <p className={`text-xl ${theme ? 'text-pink-600' : 'text-sky-600'}`}>
            {data.invitation.message}
          </p>
        </div>

        {/* Contenido principal de la invitación */}
        <div className={`bg-white rounded-2xl shadow-xl p-8 md:p-12 border-2 ${theme ? 'border-pink-100' : 'border-sky-100'}`}>
          {/* Título principal */}
          <div className="text-center mb-8">
            <h3 className={`text-4xl md:text-5xl font-bold ${theme ? 'text-pink-700' : 'text-sky-700'} mb-4`}>
              {data.invitation.subtitle}
            </h3>
            <p className={`text-lg ${theme ? 'text-pink-600' : 'text-sky-600'}`}>
              {data.invitation.blessing}
            </p>
          </div>

          {/* Información de la bebé */}
          <div className="text-center mb-8">
            <div className={`${theme ? 'bg-gradient-to-r from-pink-100 to-rose-100 border-pink-200' : 'bg-gradient-to-r from-sky-100 to-pink-100 border-sky-200'} rounded-xl p-6 mb-6 border`}>
              <div className="text-4xl mb-4">✨</div>
              <h4 className={`text-3xl font-bold ${theme ? 'text-pink-800' : 'text-sky-800'} mb-2`}>
                {data.invitation.celebrant}
              </h4>
              <p className={`${theme ? 'text-pink-600' : 'text-sky-600'}`}>
                Nacida el {data.event.celebrant.birthDate}
              </p>
              <p className={`${theme ? 'text-rose-600' : 'text-pink-600'} font-medium`}>
                {data.event.celebrant.age}
              </p>
            </div>
          </div>

          {/* Información de padres y padrinos */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Padres */}
            <div className={`${theme ? 'bg-pink-50 border-pink-200' : 'bg-sky-50 border-sky-200'} rounded-xl p-6 border`}>
              <div className="flex items-center gap-3 mb-4">
                <Users className={`w-6 h-6 ${theme ? 'text-pink-600' : 'text-sky-600'}`} />
                <h5 className={`text-xl font-semibold ${theme ? 'text-pink-800' : 'text-sky-800'}`}>
                  Su Madre
                </h5>
              </div>
              <div className="space-y-3 text-gray-700">
                {/* Adaptado para familia monoparental */}
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-pink-500 text-2xl">💖</span>
                    <p className="font-semibold text-lg">
                      {data.invitation.parents.mother}
                    </p>
                  </div>
                  <p className="text-sm text-gray-500 italic">
                    Madre amorosa y dedicada
                  </p>
                </div>
              </div>
            </div>

            {/* Padrinos */}
            <div className="bg-pink-50 rounded-xl p-6 border border-pink-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">👑</span>
                <h5 className="text-xl font-semibold text-pink-800">
                  Sus Padrinos
                </h5>
              </div>
              <div className="space-y-3 text-gray-700">
                <div className="flex items-center gap-2">
                  <span className="text-blue-500">👨</span>
                  <p className="font-medium">
                    {data.invitation.godparents.godfather}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-pink-500">👩</span>
                  <p className="font-medium">
                    {data.invitation.godparents.godmother}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Información de la ceremonia y celebración */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Ceremonia */}
            <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">⛪</span>
                <h5 className="text-xl font-semibold text-purple-800">
                  Ceremonia Religiosa
                </h5>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className={`font-bold ${theme ? 'text-pink-700' : 'text-purple-700'}`}>
                  {data.event.date.full}
                </p>
                <p className="font-medium">
                  {data.event.ceremony.time}
                </p>
                <p className="text-sm">
                  {data.event.ceremony.venue}
                </p>
                <p className="text-xs text-gray-600">
                  {data.event.ceremony.address}
                </p>
              </div>
            </div>

            {/* Celebración */}
            <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">🎉</span>
                <h5 className="text-xl font-semibold text-rose-800">
                  Celebración Familiar
                </h5>
              </div>
              <div className="space-y-2 text-gray-700">
                <p className="font-bold text-rose-700">
                  Mismo día
                </p>
                <p className="font-medium">
                  {data.event.celebration.time}
                </p>
                <p className="text-sm">
                  {data.event.celebration.venue}
                </p>
                <p className="text-xs text-gray-600">
                  {data.event.celebration.address}
                </p>
              </div>
            </div>
          </div>

          {/* Mensaje decorativo celestial */}
          <div className="text-center bg-gradient-to-r from-sky-50 to-pink-50 rounded-xl p-6 border border-sky-200">
            <div className="text-3xl mb-3">☁️✨☁️</div>
            <p className="text-lg text-sky-700 italic font-medium">
              {data.invitation.decorativeMessage}
            </p>
          </div>

          {/* Elementos decorativos celestiales */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center gap-4">
              <div className="w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center">
                <span className="text-xs">☁️</span>
              </div>
              <div className="w-12 h-12 bg-pink-200 rounded-full flex items-center justify-center">
                <span className="text-lg">👼</span>
              </div>
              <div className="w-8 h-8 bg-sky-200 rounded-full flex items-center justify-center">
                <span className="text-xs">☁️</span>
              </div>
            </div>
          </div>

          {/* Verso bíblico */}
          <div className="text-center mt-8 pt-6 border-t border-sky-100">
            <p className="text-sm text-sky-600 italic">
              &quot;Porque de los tales es el Reino de los Cielos&quot;
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Mateo 19:14
            </p>
          </div>
        </div>

        {/* Decoración inferior */}
        <div className="text-center mt-8">
          <div className="flex justify-center items-center gap-2">
            <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-transparent rounded-full"></div>
            <Heart className="w-6 h-6 text-pink-400 fill-current" />
            <div className="h-1 w-20 bg-gradient-to-l from-pink-300 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  )
}