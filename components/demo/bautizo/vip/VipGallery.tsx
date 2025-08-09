"use client"

import { useState, useCallback, useEffect } from 'react'
import { X, ChevronLeft, ChevronRight, Heart, Sparkles } from 'lucide-react'
import Image from 'next/image'
import { MiaIsabelBautizoData, miaIsabelBautizoData } from './data/mia-isabel-data'
import { MiaIsabelTheme } from '@/lib/themes/mia-isabel-theme'

interface VipGalleryProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

export function VipGallery({ data = miaIsabelBautizoData, theme: _theme }: VipGalleryProps) { // eslint-disable-line @typescript-eslint/no-unused-vars
  const [selectedCategory, setSelectedCategory] = useState(data.galleryCategories[0].name)
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const currentCategory = data.galleryCategories.find(cat => cat.name === selectedCategory)
  const currentImages = currentCategory?.images || []

  const closeModal = useCallback(() => {
    setSelectedImage(null)
  }, [])

  const nextImage = () => {
    if (currentImages.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === currentImages.length - 1 ? 0 : prev + 1
      )
    }
  }

  const prevImage = () => {
    if (currentImages.length > 0) {
      setCurrentImageIndex((prev) => 
        prev === 0 ? currentImages.length - 1 : prev - 1
      )
    }
  }

  const openImage = (index: number) => {
    setCurrentImageIndex(index)
    setSelectedImage(index)
  }

  // Cerrar modal con Escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal()
      }
    }

    if (selectedImage !== null) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [selectedImage, closeModal])

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-rose-50">
      <div className="max-w-6xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-pink-300 to-rose-300 text-pink-800 px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl border-2 border-pink-300">
            <div className="flex items-center gap-2">
              <span>🌸</span>
              <span>Galería de Momentos Bendecidos</span>
              <span>💖</span>
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-pink-800 mb-4">
            📸 GALERÍA DE RECUERDOS
          </h2>
          
          <div className="flex items-center justify-center mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mx-4"></div>
            <Heart className="w-8 h-8 text-pink-500 fill-current" />
            <div className="h-1 w-20 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full mx-4"></div>
          </div>
          
          <p className="text-lg text-pink-700 max-w-3xl mx-auto leading-relaxed">
            Cada fotografía captura un momento especial en la preparación y celebración 
            del bautismo de {data.hero.name}. Momentos llenos de amor, bendiciones y alegría 
            que quedarán por siempre en nuestros corazones.
          </p>
        </div>

        {/* Selector de categorías */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {data.galleryCategories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category.name
                  ? 'bg-gradient-to-r from-pink-400 to-rose-400 text-white shadow-lg'
                  : 'bg-white text-pink-700 hover:bg-pink-50 border border-pink-200'
              }`}
            >
              <span className="text-lg">{category.icon}</span>
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Información de la categoría actual */}
        {currentCategory && (
          <div className="text-center mb-8">
            <div className={`inline-block p-4 rounded-2xl bg-gradient-to-r ${currentCategory.color} mb-4`}>
              <div className="text-3xl">{currentCategory.icon}</div>
            </div>
            <h3 className="text-2xl font-bold text-pink-800 mb-2">
              {currentCategory.name}
            </h3>
            <p className="text-pink-600 max-w-2xl mx-auto">
              {currentImages.length} {currentImages.length === 1 ? 'fotografía' : 'fotografías'} que capturan estos momentos especiales
            </p>
          </div>
        )}

        {/* Galería de imágenes */}
        {currentCategory && (
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentImages.map((image, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transform hover:scale-105 transition-all duration-300 border-2 border-pink-100"
                  onClick={() => openImage(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={256}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  
                  {/* Overlay con información */}
                  <div className="absolute inset-0 bg-gradient-to-t from-sky-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <p className="font-semibold text-sm">{image.caption}</p>
                    </div>
                  </div>
                  
                  {/* Icono de zoom celestial */}
                  <div className="absolute top-4 right-4 w-8 h-8 bg-pink-200/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-pink-800 text-sm">🔍</span>
                  </div>

                  {/* Marco celestial decorativo */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-pink-200/50 pointer-events-none"></div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Modal de imagen ampliada */}
        {selectedImage !== null && currentImages.length > 0 && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              {/* Imagen principal */}
              <Image
                src={currentImages[currentImageIndex]?.src || ''}
                alt={currentImages[currentImageIndex]?.alt || ''}
                width={800}
                height={600}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Información de la imagen */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
                <h3 className="text-white text-xl font-bold mb-2">
                  {currentImages[currentImageIndex].caption}
                </h3>
                <p className="text-gray-300 text-sm">
                  {currentImageIndex + 1} de {currentImages.length} en {currentCategory?.name}
                </p>
              </div>

              {/* Botón de cerrar */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-pink-500/80 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Navegación izquierda */}
              {currentImages.length > 1 && (
                <>
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-pink-500/80 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>

                  {/* Navegación derecha */}
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-pink-500/80 hover:bg-pink-600 rounded-full flex items-center justify-center text-white transition-colors"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </>
              )}

              {/* Indicadores de posición */}
              {currentImages.length > 1 && (
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                  {currentImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-pink-400' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Información adicional */}
        <div className="mt-16 bg-gradient-to-r from-pink-100 to-rose-100 rounded-2xl p-8 border border-pink-200">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="w-6 h-6 text-rose-500" />
              <h3 className="text-2xl font-bold text-pink-800">Momentos Inolvidables</h3>
              <Sparkles className="w-6 h-6 text-rose-500" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl">📸</div>
                <h4 className="font-semibold text-pink-700">Recuerdos Eternos</h4>
                <p className="text-sm text-gray-600">Cada fotografía cuenta la historia de este día bendecido</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">👨‍👩‍👧‍👦</div>
                <h4 className="font-semibold text-pink-700">Familia Unida</h4>
                <p className="text-sm text-gray-600">Momentos compartidos con nuestros seres más queridos</p>
              </div>
              
              <div className="space-y-2">
                <div className="text-3xl">✨</div>
                <h4 className="font-semibold text-pink-700">Bendiciones</h4>
                <p className="text-sm text-gray-600">Capturando la gracia y alegría de este sacramento</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white/50 rounded-xl">
              <p className="text-sm text-pink-700">
                <strong>💖 Con amor:</strong> Cada imagen en esta galería representa un momento 
                especial en la celebración del bautismo de {data.hero.name}. Gracias por ser 
                parte de estos recuerdos que atesoraremos para siempre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}