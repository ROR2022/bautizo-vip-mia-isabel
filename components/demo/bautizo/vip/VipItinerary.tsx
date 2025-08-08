"use client"

import { useState } from 'react'
import { MapPin, Clock, Heart, Sparkles } from 'lucide-react'
import { MiaIsabelBautizoData, miaIsabelBautizoData } from './data/mia-isabel-data'
import { MiaIsabelTheme } from '@/lib/themes/mia-isabel-theme'

interface VipItineraryProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

export function VipItinerary({ data: _data = miaIsabelBautizoData, theme: _theme }: VipItineraryProps) { // eslint-disable-line @typescript-eslint/no-unused-vars
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null)

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'preparation':
        return 'bg-pink-100 text-pink-800 border-pink-200'
      case 'photos':
        return 'bg-rose-100 text-rose-800 border-rose-200'
      case 'ceremony':
        return 'bg-pink-200 text-pink-900 border-pink-300'
      case 'celebration':
        return 'bg-rose-200 text-rose-900 border-rose-300'
      case 'farewell':
        return 'bg-pink-50 text-pink-700 border-pink-100'
      default:
        return 'bg-pink-100 text-pink-800 border-pink-200'
    }
  }

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'preparation':
        return 'Preparación'
      case 'photos':
        return 'Fotografía'
      case 'ceremony':
        return 'Ceremonia'
      case 'celebration':
        return 'Celebración'
      case 'farewell':
        return 'Despedida'
      default:
        return 'Evento'
    }
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-pink-300 to-rose-300 text-pink-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl border-2 border-pink-300">
            <div className="flex items-center gap-2">
              <span>🌸</span>
              <span>Cronograma del Día Bendecido</span>
              <span>💖</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">
            📅 ITINERARIO DEL BAUTISMO
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mx-4"></div>
            <Heart className="w-8 h-8 text-pink-500 fill-current" />
            <div className="h-1 w-20 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mx-4"></div>
          </div>
          
          <p className="text-lg text-pink-700 max-w-3xl mx-auto leading-relaxed">
            Cada momento de este día sagrado ha sido preparado con amor y bendiciones. 
            Acompáñanos en cada paso de esta hermosa celebración del sacramento de Sofia Valentina.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Línea central celestial */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-300 via-rose-300 to-pink-400 z-0"></div>

          {/* Eventos del itinerario */}
          <div className="space-y-12">
            {_data.itinerary.map((event, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
              >
                {/* Circulo del timeline */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-white border-4 border-pink-300 rounded-full shadow-lg z-0">
                  <div className="w-full h-full bg-gradient-to-r from-pink-400 to-rose-400 rounded-full"></div>
                </div>

                {/* Contenido del evento */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} relative z-10`}>
                  <div 
                    className={`bg-white rounded-2xl shadow-xl border-2 border-pink-100 p-6 transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                      selectedEvent === index ? 'ring-4 ring-pink-200 shadow-2xl' : ''
                    }`}
                    onClick={() => setSelectedEvent(selectedEvent === index ? null : index)}
                  >
                    {/* Hora y emoji */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-3xl">{event.icon}</div>
                        <div className="text-2xl font-bold text-pink-800">
                          {event.time}
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getTypeColor(event.type)}`}>
                        {getTypeLabel(event.type)}
                      </div>
                    </div>

                    {/* Título de la actividad */}
                    <h3 className="text-xl font-bold text-pink-800 mb-2">
                      {event.activity}
                    </h3>

                    {/* Ubicación */}
                    <div className="flex items-center gap-2 text-rose-600 mb-3">
                      <MapPin className="w-4 h-4" />
                      <span className="font-medium">{event.location}</span>
                    </div>

                    {/* Descripción */}
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {event.description}
                    </p>

                    {/* Detalles expandidos */}
                    {selectedEvent === index && (
                      <div className="mt-4 pt-4 border-t border-pink-100">
                        <div className="flex items-start gap-2 text-xs text-gray-600">
                          <MapPin className="w-3 h-3 mt-0.5 flex-shrink-0" />
                          <span>{event.address}</span>
                        </div>
                        
                        {/* Información adicional basada en el tipo */}
                        <div className="mt-3 p-3 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg">
                          {event.type === 'ceremony' && (
                            <div className="text-center">
                              <p className="text-sm text-pink-700 font-medium">✨ Momento Sagrado ✨</p>
                              <p className="text-xs text-gray-600 mt-1">
                                Este es el momento más importante del día: cuando Sofia Valentina recibe 
                                las aguas bautismales y se convierte en hija de Dios.
                              </p>
                            </div>
                          )}
                          
                          {event.type === 'photos' && (
                            <div className="text-center">
                              <p className="text-sm text-pink-700 font-medium">📸 Recuerdos Eternos</p>
                              <p className="text-xs text-gray-600 mt-1">
                                Capturaremos los momentos más hermosos para que queden grabados para siempre 
                                en nuestros corazones.
                              </p>
                            </div>
                          )}
                          
                          {event.type === 'celebration' && (
                            <div className="text-center">
                              <p className="text-sm text-rose-700 font-medium">🎉 Alegría Familiar</p>
                              <p className="text-xs text-gray-600 mt-1">
                                Tiempo de convivencia, risas y bendiciones compartidas con todos 
                                nuestros seres queridos.
                              </p>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Espacio en el lado opuesto */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/**Aqui el usuario quiere agregar una nota que 
         * invite a los invitados a que continuen la fiesta
         * despues del salon en la casa de la festejada
         * esta nota debe estar en un estilo tarjeta con un fondo rosa y un borde rosa
         * la nota debe estar en el centro de la pagina
         * la nota debe tener un titulo en el centro de la pagina
         * el titulo debe ser "Nota Final"
         * el titulo debe ser de 20px de tamaño
         * la nota debe tener un texto en el centro de la pagina que diga:
         * "Invitamos a todos nuestros seres queridos a que continuen la fiesta
         * después del salón en la casa de la festejada"
         * el texto debe ser de 10px de tamaño
         * el texto debe ser de color rosa
         */}

         <div className="text-center mt-16">
          <div className="bg-pink-100 rounded-2xl p-8 border border-pink-200 text-center">
            <h3 className="text-2xl font-bold text-pink-800">Nota Final</h3>
            <p className="text-sm text-pink-700">
              Invitamos a todos nuestros seres queridos a que continuen la fiesta
              después del salón en la casa de la festejada
            </p>
          </div>
         </div>



        {/* Nota final celestial */}
        <div className="mt-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8 border border-pink-200 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 text-rose-500" />
            <h3 className="text-2xl font-bold text-pink-800">Un Día de Bendiciones</h3>
            <Sparkles className="w-6 h-6 text-rose-500" />
          </div>
          
          <p className="text-lg text-pink-700 max-w-2xl mx-auto leading-relaxed mb-6">
            Cada momento de este día ha sido planeado con amor para celebrar la llegada 
            de {_data.event.celebrant.name} a la familia de Dios. Gracias por ser parte de esta 
            bendición celestial.
          </p>

                      <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl">⛪</div>
                <h4 className="font-semibold text-pink-700">Sacramento Sagrado</h4>
                <p className="text-sm text-gray-600">Un momento de gracia y bendición divina</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">👨‍👩‍👧‍👦</div>
                <h4 className="font-semibold text-pink-700">Unión Familiar</h4>
                <p className="text-sm text-gray-600">Celebrando con todos nuestros seres queridos</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">💖</div>
                <h4 className="font-semibold text-pink-700">Amor Infinito</h4>
                <p className="text-sm text-gray-600">Un día lleno de amor, alegría y esperanza</p>
              </div>
            </div>

          <div className="mt-6 p-4 bg-white/50 rounded-xl">
            <p className="text-sm text-pink-700">
              <Clock className="inline w-4 h-4 mr-1" />
              <strong>Recordatorio:</strong> Los horarios pueden ajustarse ligeramente según el desarrollo 
              de la ceremonia religiosa. Manténganse atentos a las indicaciones familiares.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}