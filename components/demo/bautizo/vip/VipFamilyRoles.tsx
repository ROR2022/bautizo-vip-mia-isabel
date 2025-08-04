"use client"

import { useState, useRef } from 'react'
import { Download, QrCode, Heart, Sparkles, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { vipDemoData } from './data/vip-demo-data'
import { MiaIsabelBautizoData } from './data/mia-isabel-data'
import { MiaIsabelTheme } from '@/lib/themes/mia-isabel-theme'

interface VipFamilyRolesProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

export function VipFamilyRoles({ data = vipDemoData, theme }: VipFamilyRolesProps) {
  const [selectedRole, setSelectedRole] = useState<string | null>(null)
  const [guestName, setGuestName] = useState('')
  const [guestEmail, setGuestEmail] = useState('')
  const passRef = useRef<HTMLDivElement>(null)

  const generateQRCode = (roleId: string, guestName: string) => {
    // En una implementación real, esto generaría un QR code real
    // Por ahora, simulamos con un div estilizado
    return `QR-${roleId}-${guestName.replace(/\s+/g, '-')}`
  }

  const downloadPass = async () => {
    if (!passRef.current || !selectedRole) return

    try {
      // En una implementación real, usaríamos html2canvas para generar la imagen
      // Por ahora, simulamos la descarga
      const role = data.familyRoles.find((r) => r.id === selectedRole)
      if (!role) return

      // Simular descarga
      const link = document.createElement('a')
      link.download = `rol-familiar-${role.type.toLowerCase()}-${guestName}.png`
      link.href = '#'
      link.click()
      
      alert('Tarjeta de rol familiar descargada exitosamente! (Demo)')
    } catch (error) {
      console.error('Error al descargar tarjeta:', error)
      alert('Error al descargar la tarjeta')
    }
  }

  const selectedRoleData = selectedRole ? data.familyRoles.find((r) => r.id === selectedRole) : null

  return (
    <section 
      className={`py-16 px-4 relative overflow-hidden`}
      style={{
        background: theme ? 
          `linear-gradient(135deg, rgba(252,231,243,0.92) 0%, rgba(254,205,211,0.85) 100%), url('${data.personalImages?.institutional || data.hero.backgroundImage}')` :
          `linear-gradient(to bottom right, #f0f9ff, #fdf2f8)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <div className={`inline-block ${theme ? 'bg-gradient-to-r from-pink-300 to-rose-300 text-pink-800 border-pink-300' : 'bg-gradient-to-r from-sky-300 to-pink-300 text-sky-800 border-sky-300'} px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl border-2`}>
            <div className="flex items-center gap-2">
              <span>{theme ? '🌸' : '👼'}</span>
              <span>{theme ? 'Roles Familiares para Mia Isabel' : 'Roles Familiares Especiales'}</span>
              <span>{theme ? '🌺' : '☁️'}</span>
            </div>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold ${theme ? 'text-pink-800' : 'text-sky-800'} mb-4`}>
            {theme ? '💖 ROLES EN LA CELEBRACIÓN' : '👨‍👩‍👧‍👦 ROLES EN LA CELEBRACIÓN'}
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className={`h-1 w-20 ${theme ? 'bg-gradient-to-r from-pink-300 to-rose-300' : 'bg-gradient-to-r from-sky-300 to-pink-300'} rounded-full mx-4`}></div>
            <Heart className={`w-8 h-8 ${theme ? 'text-pink-500' : 'text-sky-500'} fill-current`} />
            <div className={`h-1 w-20 ${theme ? 'bg-gradient-to-r from-pink-300 to-rose-300' : 'bg-gradient-to-r from-sky-300 to-pink-300'} rounded-full mx-4`}></div>
          </div>
          
          <p className={`text-lg ${theme ? 'text-pink-700' : 'text-sky-700'} max-w-3xl mx-auto leading-relaxed`}>
            Cada miembro de la familia tiene un papel especial en este día bendecido. 
            Genera tarjetas personalizadas de identificación con códigos QR únicos para 
            cada rol familiar en la celebración de {data.hero.name}.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Selección de roles */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold ${theme ? 'text-pink-800' : 'text-sky-800'} mb-6`}>Roles Familiares Disponibles</h3>
            
            {data.familyRoles.map((role) => (
              <div
                key={role.id}
                className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
                  selectedRole === role.id
                    ? `${theme ? 'border-pink-400 bg-gradient-to-r from-pink-50 to-rose-50' : role.borderColor + ' bg-gradient-to-r ' + role.color} shadow-xl scale-105`
                    : `${theme ? 'border-pink-200 hover:border-pink-300' : 'border-sky-200 hover:border-sky-300'} bg-white hover:shadow-lg`
                }`}
                onClick={() => setSelectedRole(selectedRole === role.id ? null : role.id)}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{role.icon}</div>
                    <div>
                      <h4 className={`text-xl font-bold ${theme ? 'text-pink-800' : 'text-sky-800'}`}>{role.type}</h4>
                      <p className="text-sm text-gray-600">{role.description}</p>
                    </div>
                  </div>
                  {selectedRole === role.id && (
                    <Check className={`w-6 h-6 ${theme ? 'text-pink-600' : 'text-sky-600'}`} />
                  )}
                </div>

                <div className="space-y-2">
                  <h5 className={`font-semibold ${theme ? 'text-pink-700' : 'text-sky-700'} text-sm`}>Participaciones especiales:</h5>
                  {role.features.map((feature: string, index: number) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-1.5 h-1.5 ${theme ? 'bg-pink-400' : 'bg-sky-400'} rounded-full`}></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Generador de tarjeta */}
          <div className="space-y-6">
            <h3 className={`text-2xl font-bold ${theme ? 'text-pink-800' : 'text-sky-800'} mb-6`}>Generar Tarjeta de Rol</h3>
            
            {!selectedRole ? (
              <div className={`bg-white rounded-2xl p-8 border-2 ${theme ? 'border-pink-100' : 'border-sky-100'} text-center`}>
                <div className="text-6xl mb-4">{theme ? '🌸' : '👈'}</div>
                <h4 className={`text-xl font-bold ${theme ? 'text-pink-800' : 'text-sky-800'} mb-2`}>Selecciona un Rol</h4>
                <p className="text-gray-600">
                  Elige uno de los roles familiares de la izquierda para generar una tarjeta personalizada
                </p>
              </div>
            ) : (
              <div className="space-y-6">
                {/* Formulario */}
                <div className={`bg-white rounded-2xl p-6 border-2 ${theme ? 'border-pink-100' : 'border-sky-100'}`}>
                  <h4 className={`text-lg font-bold ${theme ? 'text-pink-800' : 'text-sky-800'} mb-4`}>Información del Invitado</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className={`block text-sm font-medium ${theme ? 'text-pink-700' : 'text-sky-700'} mb-2`}>
                        Nombre completo *
                      </label>
                      <input
                        type="text"
                        value={guestName}
                        onChange={(e) => setGuestName(e.target.value)}
                        placeholder="Ej: María González López"
                        className={`w-full px-4 py-3 border ${theme ? 'border-pink-200 focus:ring-pink-400' : 'border-sky-200 focus:ring-sky-400'} rounded-lg focus:ring-2 focus:border-transparent`}
                      />
                    </div>
                    
                    <div>
                      <label className={`block text-sm font-medium ${theme ? 'text-pink-700' : 'text-sky-700'} mb-2`}>
                        Email (opcional)
                      </label>
                      <input
                        type="email"
                        value={guestEmail}
                        onChange={(e) => setGuestEmail(e.target.value)}
                        placeholder="ejemplo@email.com"
                        className={`w-full px-4 py-3 border ${theme ? 'border-pink-200 focus:ring-pink-400' : 'border-sky-200 focus:ring-sky-400'} rounded-lg focus:ring-2 focus:border-transparent`}
                      />
                    </div>
                  </div>
                </div>

                {/* Vista previa de la tarjeta */}
                {selectedRoleData && guestName && (
                  <div ref={passRef} className={`bg-white rounded-2xl p-1 border-2 ${theme ? 'border-pink-100' : 'border-sky-100'}`}>
                    <div className={`rounded-xl p-6 ${theme ? 'bg-gradient-to-r from-pink-100 to-rose-100 border-pink-300' : `bg-gradient-to-r ${selectedRoleData.color} border-2 ${selectedRoleData.borderColor}`} border-2`}>
                      {/* Header de la tarjeta */}
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-2">{selectedRoleData.icon}</div>
                        <h3 className={`text-2xl font-bold ${theme ? 'text-pink-800' : 'text-sky-800'}`}>Bautismo de {data.hero.name}</h3>
                        <p className={`text-sm ${theme ? 'text-pink-600' : 'text-sky-600'}`}>{data.event.date?.full || "[FECHA_A_DEFINIR]"}</p>
                      </div>

                      {/* Información del invitado */}
                      <div className="bg-white/80 rounded-lg p-4 mb-6">
                        <div className="text-center">
                          <h4 className={`text-lg font-bold ${theme ? 'text-pink-800' : 'text-sky-800'}`}>{guestName}</h4>
                          <p className={`${theme ? 'text-pink-600' : 'text-sky-600'} font-medium`}>{selectedRoleData.type}</p>
                          {guestEmail && (
                            <p className="text-xs text-gray-600 mt-1">{guestEmail}</p>
                          )}
                        </div>
                      </div>

                      {/* QR Code simulado */}
                      <div className="text-center mb-4">
                        <div className="inline-block p-2 bg-white rounded-lg">
                          <div 
                            className="w-24 h-24 bg-gray-800 rounded flex items-center justify-center"
                            style={{ backgroundColor: selectedRoleData.qrColor }}
                          >
                            <QrCode className="w-16 h-16 text-white" />
                          </div>
                        </div>
                        <p className={`text-xs ${theme ? 'text-pink-700' : 'text-sky-700'} mt-2`}>
                          ID: {generateQRCode(selectedRoleData.id, guestName)}
                        </p>
                      </div>

                      {/* Pie de la tarjeta */}
                      <div className="text-center">
                        <p className={`text-xs ${theme ? 'text-pink-700' : 'text-sky-700'} font-medium`}>
                          {selectedRoleData.description}
                        </p>
                        <div className="mt-2 flex items-center justify-center gap-1">
                          <Heart className={`w-3 h-3 ${theme ? 'text-rose-500' : 'text-pink-500'}`} />
                          <span className={`text-xs ${theme ? 'text-pink-600' : 'text-sky-600'}`}>Con amor, {data.invitation.parents.mother}</span>
                          <Heart className={`w-3 h-3 ${theme ? 'text-rose-500' : 'text-pink-500'}`} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Botón de descarga */}
                {selectedRoleData && guestName && (
                  <Button
                    onClick={downloadPass}
                    className={`w-full ${theme ? 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600' : 'bg-gradient-to-r from-sky-500 to-pink-500 hover:from-sky-600 hover:to-pink-600'} text-white py-3`}
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Descargar Tarjeta de Rol
                  </Button>
                )}
              </div>
            )}
          </div>
        </div>

        {/* Información adicional */}
        <div className={`mt-16 ${theme ? 'bg-gradient-to-r from-pink-100 to-rose-100 border-pink-200' : 'bg-gradient-to-r from-sky-100 to-pink-100 border-sky-200'} rounded-2xl p-8 border`}>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className={`w-6 h-6 ${theme ? 'text-rose-500' : 'text-pink-500'}`} />
              <h3 className={`text-2xl font-bold ${theme ? 'text-pink-800' : 'text-sky-800'}`}>{theme ? 'Información Importante para Mia Isabel' : 'Información Importante'}</h3>
              <Sparkles className={`w-6 h-6 ${theme ? 'text-rose-500' : 'text-pink-500'}`} />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl">📱</div>
                <h4 className={`font-semibold ${theme ? 'text-pink-700' : 'text-sky-700'}`}>Código QR</h4>
                <p className="text-sm text-gray-600">Cada tarjeta incluye un código único para identificación</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">{theme ? '🌸' : '🎨'}</div>
                <h4 className={`font-semibold ${theme ? 'text-pink-700' : 'text-sky-700'}`}>{theme ? 'Diseño Mexicano Tradicional' : 'Diseño Personalizado'}</h4>
                <p className="text-sm text-gray-600">{theme ? 'Estilo rosa pálido mexicano para cada rol familiar' : 'Colores únicos para cada tipo de rol familiar'}</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">💝</div>
                <h4 className={`font-semibold ${theme ? 'text-pink-700' : 'text-sky-700'}`}>Recuerdo Especial</h4>
                <p className="text-sm text-gray-600">Una hermosa tarjeta conmemorativa del día bendecido</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/50 rounded-xl">
              <p className={`text-sm ${theme ? 'text-pink-700' : 'text-sky-700'}`}>
                <strong>Nota:</strong> Las tarjetas pueden imprimirse en papel fotográfico para mejor calidad. 
                Se recomienda tamaño de tarjeta de crédito (85mm x 54mm) para facilitar el manejo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}