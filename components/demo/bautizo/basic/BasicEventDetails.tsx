"use client";

import { MapPin, Clock } from "lucide-react";
import {
  MiaIsabelBautizoData,
  miaIsabelBautizoData,
} from "../vip/data/mia-isabel-data";
import { MiaIsabelTheme } from "@/lib/themes/mia-isabel-theme";

interface BasicEventDetailsProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

export function BasicEventDetails({
  data = miaIsabelBautizoData,
  theme,
}: BasicEventDetailsProps) {
  return (
    <section
      className="py-16 px-4 relative overflow-hidden"
      style={{
        background: theme
          ? `linear-gradient(135deg, rgba(252,231,243,0.9) 0%, rgba(254,205,211,0.8) 100%), url('${
              data.personalImages?.accent || data.hero.backgroundImage
            }')`
          : `linear-gradient(to bottom right, #f0f9ff, #fdf2f8)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="max-w-4xl mx-auto">
        {/* Header Celestial */}
        <div className="text-center mb-12">
          <h2
            className={`text-3xl md:text-4xl font-bold ${
              theme ? "text-pink-800" : "text-sky-800"
            } mb-4`}
          >
            {theme
              ? "Cuándo y Dónde - Día Especial de Mia Isabel"
              : "Cuándo y Dónde"}
          </h2>
          <div
            className={`w-24 h-1 ${
              theme
                ? "bg-gradient-to-r from-pink-400 to-rose-400"
                : "bg-gradient-to-r from-sky-400 to-pink-400"
            } mx-auto rounded-full`}
          ></div>
        </div>

        {/* Información de Sofia Valentina */}
        <div
          className={`bg-white rounded-2xl p-8 mb-8 text-center border-2 ${
            theme ? "border-pink-100" : "border-sky-100"
          } shadow-lg`}
        >
          <div className="flex items-center justify-center mb-4">
            <div
              className={`w-16 h-16 ${
                theme
                  ? "bg-gradient-to-r from-pink-400 to-rose-400"
                  : "bg-gradient-to-r from-sky-400 to-pink-400"
              } rounded-full flex items-center justify-center`}
            >
              <span className="text-2xl">{theme ? "🌸" : "👼"}</span>
            </div>
          </div>
          <h3
            className={`text-3xl font-bold ${
              theme ? "text-pink-800" : "text-sky-800"
            } mb-2`}
          >
            {data.event.celebrant.name}
          </h3>
          <p className={`${theme ? "text-pink-600" : "text-sky-600"} mb-2`}>
            Nacida el {data.event.celebrant.birthDate}
          </p>
          <p
            className={`${
              theme ? "text-rose-600" : "text-pink-600"
            } font-medium text-lg`}
          >
            {data.event.celebrant.age}
          </p>

          {/* Familia Personalizada */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div
              className={`${
                theme
                  ? "bg-pink-50 border-pink-200"
                  : "bg-sky-50 border-sky-200"
              } rounded-lg p-4 border`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">{theme ? "💖" : "👨‍👩‍👧"}</span>
                <h4
                  className={`font-semibold ${
                    theme ? "text-pink-800" : "text-sky-800"
                  }`}
                >
                  Su Madre Amorosa
                </h4>
              </div>
              <p className="text-gray-700">{data.event.parents.mother}</p>
              {theme && (
                <p className="text-sm text-pink-600 italic mt-1">
                  Quien con amor infinito la guía en su camino de fe
                </p>
              )}
            </div>
            <div
              className={`${
                theme
                  ? "bg-rose-50 border-rose-200"
                  : "bg-pink-50 border-pink-200"
              } rounded-lg p-4 border`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xl">👑</span>
                <h4
                  className={`font-semibold ${
                    theme ? "text-rose-800" : "text-pink-800"
                  }`}
                >
                  Sus Padrinos
                </h4>
              </div>
              <p className="text-gray-700">{data.event.godparents.godfather}</p>
              <p className="text-gray-700">{data.event.godparents.godmother}</p>
            </div>
          </div>
        </div>

        {/* Fecha del evento */}
        <div className="text-center mb-8">
          <div
            className={`inline-block ${
              theme
                ? "bg-gradient-to-r from-pink-500 to-rose-500"
                : "bg-gradient-to-r from-sky-500 to-pink-500"
            } text-white px-8 py-4 rounded-full text-xl font-semibold shadow-lg`}
          >
            {data.event.date.full}
          </div>
        </div>

        {/* Ceremonia Religiosa */}
        <div
          className={`bg-white rounded-2xl shadow-lg border-2 ${
            theme ? "border-pink-100" : "border-sky-100"
          } p-8 mb-8`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`w-12 h-12 ${
                theme ? "bg-pink-100" : "bg-sky-100"
              } rounded-full flex items-center justify-center`}
            >
              <span className="text-2xl">{theme ? "🌸" : "⛪"}</span>
            </div>
            <h3
              className={`text-2xl font-bold ${
                theme ? "text-pink-800" : "text-sky-800"
              }`}
            >
              {theme ? "Sacramento del Bautismo" : "Ceremonia Religiosa"}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock
                  className={`w-5 h-5 ${
                    theme ? "text-pink-500" : "text-sky-500"
                  }`}
                />
                <div>
                  <p
                    className={`font-semibold ${
                      theme ? "text-pink-800" : "text-sky-800"
                    }`}
                  >
                    {data.event.ceremony.time}
                  </p>
                  <p className="text-gray-600">{data.event.ceremony.type}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  className={`w-5 h-5 ${
                    theme ? "text-pink-500" : "text-sky-500"
                  } mt-1`}
                />
                <div>
                  <p
                    className={`font-semibold ${
                      theme ? "text-pink-800" : "text-sky-800"
                    }`}
                  >
                    {data.event.ceremony.venue}
                  </p>
                  <p className="text-gray-600">{data.event.ceremony.address}</p>
                </div>
              </div>
            </div>

            <div
              className={`${
                theme
                  ? "bg-pink-50 border-pink-200"
                  : "bg-sky-50 border-sky-200"
              } rounded-lg p-4 border`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{theme ? "🌺" : "✨"}</span>
                <h4
                  className={`font-semibold ${
                    theme ? "text-pink-700" : "text-sky-700"
                  }`}
                >
                  {theme ? "Detalles Especiales" : "Información Importante"}
                </h4>
              </div>
              <ul
                className={`text-sm ${
                  theme ? "text-pink-700" : "text-sky-700"
                } space-y-1`}
              >
                <li>• Llegar 30 minutos antes de la ceremonia</li>
                <li>• Vestimenta: {data.event.dressCode}</li>
                <li>• Ambiente familiar y de bendición</li>
                <li>• Se tomará sesión de fotos después del sacramento</li>
                {theme && <li>• Celebración al estilo mexicano tradicional</li>}
              </ul>
            </div>
          </div>

          {/* Verso bíblico */}
          <div
            className={`mt-6 p-4 ${
              theme
                ? "bg-gradient-to-r from-pink-50 to-rose-50 border-pink-200"
                : "bg-gradient-to-r from-sky-50 to-pink-50 border-sky-200"
            } rounded-lg border`}
          >
            <p
              className={`text-center ${
                theme ? "text-pink-700" : "text-sky-700"
              } italic`}
            >
              &ldquo;Eres obra perfecta de Dios, creado con amor y
              destinado a brillar con su luz.&rdquo;
            </p>
            
          </div>
        </div>

        {/* Celebración Familiar */}
        <div
          className={`bg-white rounded-2xl shadow-lg border-2 ${
            theme ? "border-rose-100" : "border-pink-100"
          } p-8`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`w-12 h-12 ${
                theme ? "bg-rose-100" : "bg-pink-100"
              } rounded-full flex items-center justify-center`}
            >
              <span className="text-2xl">{theme ? "🌺" : "🎉"}</span>
            </div>
            <h3
              className={`text-2xl font-bold ${
                theme ? "text-rose-800" : "text-pink-800"
              }`}
            >
              {theme ? "Celebración Familiar Mexicana" : "Celebración Familiar"}
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock
                  className={`w-5 h-5 ${
                    theme ? "text-rose-500" : "text-pink-500"
                  }`}
                />
                <div>
                  <p
                    className={`font-semibold ${
                      theme ? "text-rose-800" : "text-pink-800"
                    }`}
                  >
                    {data.event.celebration.time}
                  </p>
                  <p className="text-gray-600">{data.event.celebration.type}</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin
                  className={`w-5 h-5 ${
                    theme ? "text-rose-500" : "text-pink-500"
                  } mt-1`}
                />
                <div>
                  <p
                    className={`font-semibold ${
                      theme ? "text-rose-800" : "text-pink-800"
                    }`}
                  >
                    {data.event.celebration.venue}
                  </p>
                  <p className="text-gray-600">
                    {data.event.celebration.address}
                  </p>
                </div>
              </div>
            </div>

            <div
              className={`${
                theme
                  ? "bg-rose-50 border-rose-200"
                  : "bg-pink-50 border-pink-200"
              } rounded-lg p-4 border`}
            >
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{theme ? "🌼" : "💙"}</span>
                <h4
                  className={`font-semibold ${
                    theme ? "text-rose-700" : "text-pink-700"
                  }`}
                >
                  {theme ? "Qué Esperar - Tradición Mexicana" : "Qué Esperar"}
                </h4>
              </div>
              <ul
                className={`text-sm ${
                  theme ? "text-rose-700" : "text-pink-700"
                } space-y-1`}
              >
                <li>• Reunión familiar llena de alegría</li>
                <li>• Convivencia y bendiciones compartidas</li>
                <li>• Comida especial preparada con amor</li>
                <li>• Entrega de recuerdos del bautismo</li>
                {theme && (
                  <>
                    <li>• Música mexicana tradicional</li>
                    <li>• Ambiente familiar acogedor</li>
                  </>
                )}
              </ul>
            </div>
          </div>

          {/* Mensaje especial */}
          <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-rose-50 rounded-lg border border-pink-200">
            <div className="text-center">
              <div className="text-2xl mb-2">👨‍👩‍👧‍👦</div>
              <p className="text-pink-700 font-medium">
                Un momento para compartir en familia la alegría de este
                sacramento
              </p>
            </div>
          </div>
        </div>

        {/* Temática */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-gradient-to-r from-sky-100 to-pink-100 px-6 py-3 rounded-full border border-sky-200">
            <p className="text-sky-700 font-medium">
              <span className="text-lg">☁️</span> Temática: {data.event.theme}{" "}
              <span className="text-lg">☁️</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
