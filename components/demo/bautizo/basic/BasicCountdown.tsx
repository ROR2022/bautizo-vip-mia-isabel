"use client"

import { useState, useEffect } from 'react'
import { basicDemoData } from './data/basic-demo-data'
import { MiaIsabelBautizoData } from '../vip/data/mia-isabel-data'
import { MiaIsabelTheme } from '@/lib/themes/mia-isabel-theme'

interface BasicCountdownProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

export function BasicCountdown({ data = basicDemoData, theme }: BasicCountdownProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  })

  useEffect(() => {
    const targetDate = new Date(data.countdown.targetDate).getTime()

    const timer = setInterval(() => {
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24))
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((difference % (1000 * 60)) / 1000)

        setTimeLeft({ days, hours, minutes, seconds })
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 })
      }
    }, 1000)

    return () => clearInterval(timer)
  }, [data.countdown.targetDate])

  return (
    <section 
      className="py-16 px-4 relative overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(${theme ? 'rgba(248, 187, 217, 0.7), rgba(252, 231, 243, 0.7)' : 'rgba(135, 206, 235, 0.7), rgba(255, 192, 203, 0.7)'}), url('${data.countdown.backgroundImage}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Decoración mexicana tradicional */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {theme ? (
          <>
            <div className="absolute top-20 left-10 text-white/30 text-4xl animate-pulse">🌸</div>
            <div className="absolute top-32 right-20 text-white/20 text-3xl animate-pulse delay-1000">🌺</div>
            <div className="absolute bottom-40 left-1/4 text-white/25 text-2xl animate-pulse delay-500">🌼</div>
          </>
        ) : (
          <>
            <div className="absolute top-20 left-10 text-white/30 text-4xl animate-pulse">☁️</div>
            <div className="absolute top-32 right-20 text-white/20 text-3xl animate-pulse delay-1000">☁️</div>
            <div className="absolute bottom-40 left-1/4 text-white/25 text-2xl animate-pulse delay-500">☁️</div>
          </>
        )}
      </div>

      <div className="max-w-4xl mx-auto text-center text-white relative z-10">
        {/* Header personalizado */}
        <div className="mb-8">
          <div className="text-4xl mb-4">{theme ? '🌸' : '👼'}</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Faltan para el día bendecido
          </h2>
          <p className="text-xl opacity-90">
            Sacramento de Bautismo de {data.hero.name}
          </p>
        </div>
        
        {/* Countdown Timer */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-8">
          <div className="bg-white/25 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
            <div className="text-3xl md:text-5xl font-bold mb-2">
              {timeLeft.days.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base opacity-90">
              Días
            </div>
          </div>
          
          <div className="bg-white/25 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
            <div className="text-3xl md:text-5xl font-bold mb-2">
              {timeLeft.hours.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base opacity-90">
              Horas
            </div>
          </div>
          
          <div className="bg-white/25 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
            <div className="text-3xl md:text-5xl font-bold mb-2">
              {timeLeft.minutes.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base opacity-90">
              Minutos
            </div>
          </div>
          
          <div className="bg-white/25 backdrop-blur-sm rounded-xl p-4 md:p-6 border border-white/20">
            <div className="text-3xl md:text-5xl font-bold mb-2">
              {timeLeft.seconds.toString().padStart(2, '0')}
            </div>
            <div className="text-sm md:text-base opacity-90">
              Segundos
            </div>
          </div>
        </div>
        
        {/* Mensaje celestial */}
        <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
          <div className="text-3xl mb-4">✨</div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Un día de gracia y bendición se acerca
          </h3>
          <p className="text-lg md:text-xl opacity-90 mb-4">
            {basicDemoData.event.date.full} a las {basicDemoData.event.ceremony.time}
          </p>
          <p className="text-base opacity-80">
            En {basicDemoData.event.ceremony.venue}
          </p>
        </div>

        {/* Verso bíblico */}
        <div className="mt-8 bg-white/15 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <p className="text-lg italic opacity-90 mb-2">
            &ldquo;Porque de los tales es el Reino de los Cielos&rdquo;
          </p>
          <p className="text-sm opacity-70">
            Mateo 19:14
          </p>
        </div>
      </div>
    </section>
  )
}