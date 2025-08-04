"use client"
import { 
  MapPin, 
  Phone, 
  Star, 
  ExternalLink, 
  Wifi, 
  Car, 
  Coffee,
  Baby,
  Heart,
  Sparkles
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useIsClient } from "@/hooks/useIsClient"
import { vipDemoData } from "./data/vip-demo-data"
import { MiaIsabelBautizoData } from "./data/mia-isabel-data"
import { MiaIsabelTheme } from "@/lib/themes/mia-isabel-theme"

interface VipGuestInfoProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

export function VipGuestInfo({ data: _data = vipDemoData, theme: _theme }: VipGuestInfoProps) { // eslint-disable-line @typescript-eslint/no-unused-vars
  const isClient = useIsClient()

  const getGoogleMapsUrl = (address: string) => {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`
  }

  const getAmenityIcon = (amenity: string) => {
    if (amenity.toLowerCase().includes('wifi')) return <Wifi className="w-4 h-4" />
    if (amenity.toLowerCase().includes('parking') || amenity.toLowerCase().includes('estacionamiento')) return <Car className="w-4 h-4" />
    if (amenity.toLowerCase().includes('desayuno')) return <Coffee className="w-4 h-4" />
    if (amenity.toLowerCase().includes('niños') || amenity.toLowerCase().includes('cuna')) return <Baby className="w-4 h-4" />
    return <Star className="w-4 h-4" />
  }

  const getCategoryStyle = (category: string) => {
    switch (category.toLowerCase()) {
      case 'lujo':
        return 'bg-gradient-to-r from-sky-300 to-blue-300 text-sky-800'
      case 'familiar':
        return 'bg-gradient-to-r from-pink-300 to-rose-300 text-pink-800'
      case 'ejecutivo':
        return 'bg-gradient-to-r from-purple-300 to-violet-300 text-purple-800'
      case 'confort':
        return 'bg-gradient-to-r from-emerald-300 to-green-300 text-green-800'
      default:
        return 'bg-sky-200 text-sky-800'
    }
  }

  // Mostrar loading mientras el cliente no esté listo
  if (!isClient) {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-pink-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block bg-gradient-to-r from-sky-300 to-pink-300 text-sky-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl border-2 border-sky-300">
              <div className="flex items-center gap-2">
                <span>👼</span>
                <span>Información Especial</span>
                <span>☁️</span>
              </div>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4">
              🏨 INFORMACIÓN PARA INVITADOS
            </h2>
            
            <div className="flex items-center justify-center mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-pink-300 rounded-full mx-4"></div>
              <Heart className="w-8 h-8 text-sky-500 fill-current" />
              <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-pink-300 rounded-full mx-4"></div>
            </div>
            
            <p className="text-lg text-sky-700 max-w-2xl mx-auto leading-relaxed">
              Cargando información...
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-sky-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-sky-300 to-pink-300 text-sky-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl border-2 border-sky-300">
            <div className="flex items-center gap-2">
              <span>👼</span>
              <span>Información Especial para Familias</span>
              <span>☁️</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-sky-800 mb-4">
            🏨 HOSPEDAJE RECOMENDADO
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-pink-300 rounded-full mx-4"></div>
            <Heart className="w-8 h-8 text-sky-500 fill-current" />
            <div className="h-1 w-20 bg-gradient-to-r from-sky-300 to-pink-300 rounded-full mx-4"></div>
          </div>
          
          <p className="text-lg text-sky-700 max-w-2xl mx-auto leading-relaxed">
            Para nuestros invitados que vienen de fuera, hemos seleccionado 
            <span className="font-semibold text-pink-600"> hoteles familiares</span> cerca 
            de la iglesia con excelentes servicios para familias con bebés y niños pequeños.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {vipDemoData.guestInfo.map((hotel, _index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
            <div 
              key={hotel.id}
              className="bg-white rounded-2xl shadow-xl border-2 border-sky-100 overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
            >
              {/* Imagen del hotel */}
              <div className="relative h-48">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('${hotel.image}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Badge de categoría */}
                <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${getCategoryStyle(hotel.category)}`}>
                  {hotel.category}
                </div>
                
                {/* Rating */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1">
                  <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs font-bold text-gray-800">{hotel.rating}</span>
                </div>
              </div>

              {/* Contenido del hotel */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-sky-800 leading-tight">
                    {hotel.name}
                  </h3>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-pink-600">{hotel.price}</div>
                    <div className="text-xs text-sky-600">{hotel.priceUnit}</div>
                  </div>
                </div>

                {/* Distancia */}
                <div className="flex items-center gap-2 text-sky-600 mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{hotel.distance}</span>
                </div>

                {/* Descripción */}
                <p className="text-gray-700 text-sm leading-relaxed mb-4">
                  {hotel.description}
                </p>

                {/* Amenidades */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-sky-700 mb-2">Servicios familiares:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {hotel.amenities.slice(0, 6).map((amenity, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                        {getAmenityIcon(amenity)}
                        <span>{amenity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Información de contacto */}
                <div className="border-t border-sky-100 pt-4 mb-4">
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                    <MapPin className="w-3 h-3" />
                    <span>{hotel.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Phone className="w-3 h-3" />
                    <span>{hotel.phone}</span>
                  </div>
                </div>

                {/* Botones de acción */}
                <div className="flex gap-2">
                  <Button
                    onClick={() => window.open(getGoogleMapsUrl(hotel.address), '_blank')}
                    className="flex-1 bg-gradient-to-r from-sky-500 to-blue-500 hover:from-sky-600 hover:to-blue-600 text-white text-xs py-2"
                  >
                    <MapPin className="w-3 h-3 mr-1" />
                    Ver en Maps
                  </Button>
                  <Button
                    onClick={() => window.open(hotel.website, '_blank')}
                    variant="outline"
                    className="flex-1 border-sky-300 text-sky-700 hover:bg-sky-50 text-xs py-2"
                  >
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Sitio web
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Información adicional */}
        <div className="mt-12 bg-gradient-to-r from-sky-100 to-pink-100 rounded-2xl p-8 border border-sky-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-pink-500" />
              <h3 className="text-2xl font-bold text-sky-800">Recomendaciones Especiales</h3>
              <Sparkles className="w-6 h-6 text-pink-500" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl">🚗</div>
                <h4 className="font-semibold text-sky-700">Estacionamiento</h4>
                <p className="text-sm text-gray-600">Todos los hoteles cuentan con estacionamiento gratuito o valet</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">👶</div>
                <h4 className="font-semibold text-sky-700">Servicios para Bebés</h4>
                <p className="text-sm text-gray-600">Cunas, calentadores de biberón y servicios especiales disponibles</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">🍼</div>
                <h4 className="font-semibold text-sky-700">Comodidades Familiares</h4>
                <p className="text-sm text-gray-600">Áreas familiares, room service y atención especializada</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/50 rounded-xl">
              <p className="text-sm text-sky-700">
                <strong>Tip:</strong> Mencionen que vienen al bautizo de Sofia Valentina 
                para recibir atención preferencial y posibles descuentos especiales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}