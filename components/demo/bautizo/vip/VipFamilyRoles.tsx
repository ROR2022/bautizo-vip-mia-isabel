"use client";

import { useState, useRef } from "react";
import {
  Heart,
  Sparkles,
  Lock,
  Eye,
  EyeOff,
  Settings,
  X,
  MessageCircle,
  Download,
  Image as ImageIcon,
} from "lucide-react";
//import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  MiaIsabelBautizoData,
  miaIsabelBautizoData,
} from "./data/mia-isabel-data";
import { MiaIsabelTheme } from "@/lib/themes/mia-isabel-theme";

interface VipFamilyRolesProps {
  data?: MiaIsabelBautizoData;
  theme?: MiaIsabelTheme;
}

interface InvitationFormData {
  guestName: string;
  personalMessage: string;
  tableNumber: string;
  numberOfGuests: string;
  whatsappNumber: string;
}

export function VipFamilyRoles({
  data = miaIsabelBautizoData,
  theme,
}: VipFamilyRolesProps) {
  // 🔐 Sistema de autenticación admin discreto
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showAuthPopover, setShowAuthPopover] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [authError, setAuthError] = useState("");

  // 📝 Estados del formulario de invitación
     const [formData, setFormData] = useState<InvitationFormData>({
     guestName: "",
     personalMessage: "",
     tableNumber: "",
     numberOfGuests: "",
     whatsappNumber: "",
   });

  const [isDownloading, setIsDownloading] = useState(false);
  const invitationRef = useRef<HTMLDivElement>(null);

  // 🔑 Función de autenticación simple
  const handleAuthentication = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "admin1234") {
      setIsAuthenticated(true);
      setAuthError("");
      setPassword("");
      setShowAuthPopover(false);
    } else {
      setAuthError("Contraseña incorrecta");
      setPassword("");
    }
  };

  // 📱 Función para generar mensaje de WhatsApp
  const generateWhatsAppMessage = () => {
    const invitationURL = "https://bautizo-vip-mia-isabel.vercel.app/"; //window.location.origin

    return `🌸 ¡Hola ${formData.guestName}! 🌸

${formData.personalMessage}

Tienes una invitación especial al bautismo de:
👶 Mia Isabel Juarez Torres

📅 ${data.event.date?.full || "[FECHA_A_DEFINIR]"}
⛪ ${data.event.ceremony?.venue || "[IGLESIA_A_DEFINIR]"}
🕐 ${data.event.ceremony?.time || "[HORA_A_DEFINIR]"}

🪑 Tu mesa asignada: ${formData.tableNumber}
👥 Número de personas: ${formData.numberOfGuests} ${parseInt(formData.numberOfGuests) === 1 ? 'persona' : 'personas'}

✨ Ver tu invitación completa aquí:
👉 ${invitationURL}

¡Te esperamos para celebrar este día tan especial!

Con mucho cariño,
${data.invitation.parents.mother} 💖🌸`;
  };

  // 📤 Función para enviar por WhatsApp
     const sendWhatsAppInvitation = () => {
     if (!formData.guestName || !formData.whatsappNumber || !formData.numberOfGuests) {
       alert("Por favor completa todos los campos obligatorios");
       return;
     }

    const cleanNumber = formData.whatsappNumber.replace(/\D/g, "");
    if (cleanNumber.length !== 10) {
      alert("El número debe tener exactamente 10 dígitos");
      return;
    }

    //5538970588
    const message = generateWhatsAppMessage();
    const mexicanNumber = `52${cleanNumber}`; // Agregar código de país México (+52)
    const whatsappURL = `https://wa.me/${mexicanNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  // 📱 Función para formatear número de teléfono mexicano
  const formatMexicanPhone = (value: string) => {
    // Eliminar todo excepto números
    const numbers = value.replace(/\D/g, "");

    // Limitar a 10 dígitos
    const limited = numbers.slice(0, 10);

    // Formatear como XXX XXX XXXX
    if (limited.length >= 6) {
      return `${limited.slice(0, 3)} ${limited.slice(3, 6)} ${limited.slice(
        6
      )}`;
    } else if (limited.length >= 3) {
      return `${limited.slice(0, 3)} ${limited.slice(3)}`;
    }
    return limited;
  };

  // 🖼️ Función para descargar la invitación como PNG
  const downloadInvitationPNG = async () => {
    if (!invitationRef.current) return;

    setIsDownloading(true);

    try {
      // Usar html2canvas si está disponible, sino usar método alternativo
      if (typeof window !== "undefined") {
        // Método usando html2canvas (si está disponible)
        const html2canvas = (await import("html2canvas")).default;

        // Obtener dimensiones reales del elemento
        const actualWidth = invitationRef.current.scrollWidth;
        const actualHeight = invitationRef.current.scrollHeight;

        // Capturar con configuración simplificada
        const canvas = await html2canvas(invitationRef.current, {
          background: "#ffffff",
          useCORS: true,
          allowTaint: true,
          logging: false,
          width: actualWidth,
          height: actualHeight,
        });

        // Convertir a blob y descargar
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              const link = document.createElement("a");
              link.download = `invitacion-${formData.guestName
                .replace(/\s+/g, "-")
                .toLowerCase()}-mia-isabel.png`;
              link.href = url;
              link.click();
              URL.revokeObjectURL(url);
            }
          },
          "image/png",
          0.95
        ); // Alta calidad
      }
    } catch (error) {
      console.error("Error al generar PNG:", error);
      // Método alternativo usando captura de pantalla nativa
      alert(
        'Para descargar la invitación:\n1. Haz click derecho en la vista previa\n2. Selecciona "Guardar imagen como..."\n3. O usa captura de pantalla (Ctrl/Cmd + Shift + S)'
      );
    } finally {
      setIsDownloading(false);
    }
  };

  // 📝 Función para actualizar campos del formulario
  const updateFormData = (field: keyof InvitationFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section
      className={`py-16 px-4 relative overflow-hidden`}
      style={{
        background: theme
          ? `linear-gradient(135deg, rgba(252,231,243,0.92) 0%, rgba(254,205,211,0.85) 100%), url('${
              data.personalImages?.institutional || data.hero.backgroundImage
            }')`
          : `linear-gradient(to bottom right, #f0f9ff, #fdf2f8)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🔐 Badge de autenticación discreto */}
      <div className="absolute top-4 right-4 z-50">
        {!isAuthenticated ? (
          <div className="relative">
            <button
              onClick={() => setShowAuthPopover(!showAuthPopover)}
              className={`p-2 ${
                theme
                  ? "bg-pink-500 hover:bg-pink-600"
                  : "bg-sky-500 hover:bg-sky-600"
              } rounded-full shadow-lg transition-colors`}
              title="Área de administración"
            >
              <Settings className="w-5 h-5 text-white" />
            </button>

            {/* Popover de autenticación */}
            {showAuthPopover && (
              <div
                className={`absolute top-12 right-0 w-80 bg-white rounded-xl shadow-2xl border-2 ${
                  theme ? "border-pink-200" : "border-sky-200"
                } p-4 z-50`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className={`font-bold ${
                      theme ? "text-pink-800" : "text-sky-800"
                    }`}
                  >
                    Admin Panel
                  </h3>
                  <button
                    onClick={() => setShowAuthPopover(false)}
                    className={`p-1 hover:bg-gray-100 rounded ${
                      theme ? "text-pink-600" : "text-sky-600"
                    }`}
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                <form onSubmit={handleAuthentication} className="space-y-3">
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Contraseña"
                      className={`w-full px-3 py-2 pr-10 border ${
                        authError
                          ? "border-red-300"
                          : theme
                          ? "border-pink-200"
                          : "border-sky-200"
                      } rounded-lg text-sm`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>

                  {authError && (
                    <p className="text-xs text-red-600">{authError}</p>
                  )}

                  <Button
                    type="submit"
                    size="sm"
                    className={`w-full ${
                      theme
                        ? "bg-pink-500 hover:bg-pink-600"
                        : "bg-sky-500 hover:bg-sky-600"
                    }`}
                  >
                    <Lock className="w-3 h-3 mr-1" />
                    Acceder
                  </Button>
                </form>
              </div>
            )}
          </div>
        ) : (
          <div
            className={`flex items-center gap-2 px-3 py-2 ${
              theme ? "bg-green-500" : "bg-green-500"
            } rounded-full shadow-lg`}
          >
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <span className="text-white text-xs font-medium">Admin</span>
          </div>
        )}
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Header Principal */}
        <div className="text-center mb-12">
          <div
            className={`inline-block ${
              theme
                ? "bg-gradient-to-r from-pink-300 to-rose-300 text-pink-800 border-pink-300"
                : "bg-gradient-to-r from-sky-300 to-pink-300 text-sky-800 border-sky-300"
            } px-6 py-3 rounded-full text-sm font-bold mb-6 shadow-xl border-2`}
          >
            <div className="flex items-center gap-2">
              <span>{theme ? "💌" : "📨"}</span>
              <span>
                {theme
                  ? "Invitaciones Personalizadas para Mia Isabel"
                  : "Invitaciones Personalizadas"}
              </span>
              <span>{theme ? "🌸" : "✨"}</span>
            </div>
          </div>

          <h2
            className={`text-4xl md:text-5xl font-bold ${
              theme ? "text-pink-800" : "text-sky-800"
            } mb-4`}
          >
            {theme
              ? "💖 INVITACIONES PERSONALIZADAS"
              : "💌 INVITACIONES PERSONALIZADAS"}
          </h2>

          <div className="flex items-center justify-center mb-6">
            <div
              className={`h-1 w-20 ${
                theme
                  ? "bg-gradient-to-r from-pink-300 to-rose-300"
                  : "bg-gradient-to-r from-sky-300 to-pink-300"
              } rounded-full mx-4`}
            ></div>
            <Heart
              className={`w-8 h-8 ${
                theme ? "text-pink-500" : "text-sky-500"
              } fill-current`}
            />
            <div
              className={`h-1 w-20 ${
                theme
                  ? "bg-gradient-to-r from-pink-300 to-rose-300"
                  : "bg-gradient-to-r from-sky-300 to-pink-300"
              } rounded-full mx-4`}
            ></div>
          </div>

          <div
            className={`text-lg ${
              theme ? "text-pink-700" : "text-sky-700"
            } max-w-3xl mx-auto leading-relaxed`}
          >
            {isAuthenticated ? (
              <>
                Crea invitaciones personalizadas para cada familiar con mensaje
                especial, número de mesa y envío directo por WhatsApp para la
                celebración de {data.hero.name}.
              </>
            ) : (
              <div className="hidden">
                Funcionalidad disponible para organizadores del evento. Permite
                crear invitaciones personalizadas para la celebración de{" "}
                {data.hero.name}.
              </div>
            )}
          </div>
        </div>

        {isAuthenticated ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Formulario de Invitación */}
            <div className="space-y-6">
              <h3
                className={`text-2xl font-bold ${
                  theme ? "text-pink-800" : "text-sky-800"
                } mb-6`}
              >
                📝 Crear Invitación Personal
              </h3>

              <div
                className={`bg-white rounded-2xl p-6 border-2 ${
                  theme ? "border-pink-100" : "border-sky-100"
                } shadow-lg`}
              >
                <div className="space-y-4">
                  {/* Nombre del invitado */}
                  <div>
                    <label
                      className={`block text-sm font-medium ${
                        theme ? "text-pink-700" : "text-sky-700"
                      } mb-2`}
                    >
                      Nombre del invitado *
                    </label>
                    <input
                      type="text"
                      value={formData.guestName}
                      onChange={(e) =>
                        updateFormData("guestName", e.target.value)
                      }
                      placeholder="Ej: María González López"
                      className={`w-full px-4 py-3 border ${
                        theme
                          ? "border-pink-200 focus:ring-pink-400"
                          : "border-sky-200 focus:ring-sky-400"
                      } rounded-lg focus:ring-2 focus:border-transparent`}
                    />
                  </div>

                  {/* Mensaje personalizado */}
                  <div>
                    <label
                      className={`block text-sm font-medium ${
                        theme ? "text-pink-700" : "text-sky-700"
                      } mb-2`}
                    >
                      Mensaje de saludo personalizado *
                    </label>
                    <textarea
                      value={formData.personalMessage}
                      onChange={(e) =>
                        updateFormData("personalMessage", e.target.value)
                      }
                      placeholder="Ej: ¡Querida tía María! Esperamos que puedas acompañarnos en este día tan especial..."
                      rows={4}
                      className={`w-full px-4 py-3 border ${
                        theme
                          ? "border-pink-200 focus:ring-pink-400"
                          : "border-sky-200 focus:ring-sky-400"
                      } rounded-lg focus:ring-2 focus:border-transparent resize-none`}
                    />

                    {/* Sugerencias de mensaje */}
                    <div
                      className={`mt-3 p-3 ${
                        theme
                          ? "bg-pink-50 border-pink-200"
                          : "bg-sky-50 border-sky-200"
                      } rounded-lg border`}
                    >
                      <p
                        className={`text-xs font-medium ${
                          theme ? "text-pink-700" : "text-sky-700"
                        } mb-2`}
                      >
                        💡 Sugerencias de mensajes:
                      </p>
                      <div className="space-y-1">
                        {[
                          "¡Querida familia! Esperamos que nos acompañen en este día tan bendecido...",
                          "Con gran alegría los invitamos a celebrar este momento especial...",
                          "¡Hola! Tu presencia sería el mejor regalo en el bautismo de nuestra pequeña...",
                          "Estimados padrinos, este día no sería completo sin ustedes...",
                          "¡Queridos abuelos! Su bendición y presencia son muy importantes para nosotros...",
                        ].map((suggestion, index) => (
                          <button
                            key={index}
                            type="button"
                            onClick={() =>
                              updateFormData("personalMessage", suggestion)
                            }
                            className={`text-left w-full px-2 py-1 text-xs ${
                              theme
                                ? "text-pink-600 hover:bg-pink-100"
                                : "text-sky-600 hover:bg-sky-100"
                            } rounded hover:font-medium transition-colors`}
                          >
                            &quot;{suggestion}&quot;
                          </button>
                        ))}
                      </div>
                      <p
                        className={`text-xs ${
                          theme ? "text-pink-500" : "text-sky-500"
                        } mt-2`}
                      >
                        Haz clic en cualquier sugerencia para usarla y
                        personalizarla
                      </p>
                    </div>
                  </div>

                                     {/* Número de mesa */}
                   <div>
                     <label
                       className={`block text-sm font-medium ${
                         theme ? "text-pink-700" : "text-sky-700"
                       } mb-2`}
                     >
                       Número de mesa *
                     </label>
                     <input
                       type="text"
                       value={formData.tableNumber}
                       onChange={(e) =>
                         updateFormData("tableNumber", e.target.value)
                       }
                       placeholder="Ej: Mesa 5"
                       className={`w-full px-4 py-3 border ${
                         theme
                           ? "border-pink-200 focus:ring-pink-400"
                           : "border-sky-200 focus:ring-sky-400"
                       } rounded-lg focus:ring-2 focus:border-transparent`}
                     />
                   </div>

                   {/* Número de personas */}
                   <div>
                     <label
                       className={`block text-sm font-medium ${
                         theme ? "text-pink-700" : "text-sky-700"
                       } mb-2`}
                     >
                       Número de personas/boletos *
                     </label>
                     <select
                       value={formData.numberOfGuests}
                       onChange={(e) =>
                         updateFormData("numberOfGuests", e.target.value)
                       }
                       className={`w-full px-4 py-3 border ${
                         theme
                           ? "border-pink-200 focus:ring-pink-400"
                           : "border-sky-200 focus:ring-sky-400"
                       } rounded-lg focus:ring-2 focus:border-transparent`}
                     >
                       <option value="">Selecciona número de personas</option>
                       <option value="1">1 persona</option>
                       <option value="2">2 personas</option>
                       <option value="3">3 personas</option>
                       <option value="4">4 personas</option>
                       <option value="5">5 personas</option>
                       <option value="6">6 personas</option>
                       <option value="7">7 personas</option>
                       <option value="8">8 personas</option>
                       <option value="9">9 personas</option>
                       <option value="10">10 personas</option>
                     </select>
                     <p className="text-xs text-gray-500 mt-1">
                       Indica cuántas personas están incluidas en esta invitación
                     </p>
                   </div>

                  {/* WhatsApp */}
                  <div>
                    <label
                      className={`block text-sm font-medium ${
                        theme ? "text-pink-700" : "text-sky-700"
                      } mb-2`}
                    >
                      WhatsApp México (10 dígitos) *
                    </label>
                    <div className="relative">
                      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm font-medium">
                        🇲🇽 +52
                      </div>
                      <input
                        type="tel"
                        value={formData.whatsappNumber}
                        onChange={(e) =>
                          updateFormData(
                            "whatsappNumber",
                            formatMexicanPhone(e.target.value)
                          )
                        }
                        placeholder="555 123 4567"
                        maxLength={13} // XXX XXX XXXX = 13 chars con espacios
                        className={`w-full pl-16 pr-4 py-3 border ${
                          formData.whatsappNumber &&
                          formData.whatsappNumber.replace(/\D/g, "").length !==
                            10
                            ? "border-red-300 focus:ring-red-400"
                            : theme
                            ? "border-pink-200 focus:ring-pink-400"
                            : "border-sky-200 focus:ring-sky-400"
                        } rounded-lg focus:ring-2 focus:border-transparent`}
                      />
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <p className="text-xs text-gray-500">
                        Formato: XXX XXX XXXX (solo México)
                      </p>
                      {formData.whatsappNumber && (
                        <span
                          className={`text-xs ${
                            formData.whatsappNumber.replace(/\D/g, "")
                              .length === 10
                              ? "text-green-600"
                              : "text-red-500"
                          }`}
                        >
                          {formData.whatsappNumber.replace(/\D/g, "").length}/10
                        </span>
                      )}
                    </div>
                    {formData.whatsappNumber &&
                      formData.whatsappNumber.replace(/\D/g, "").length !==
                        10 &&
                      formData.whatsappNumber.length > 0 && (
                        <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                          ⚠️ Debe tener exactamente 10 dígitos
                        </p>
                      )}
                  </div>
                </div>
              </div>
            </div>

            {/* Vista Previa de Invitación */}
            <div className="space-y-6">
              <h3
                className={`text-2xl font-bold ${
                  theme ? "text-pink-800" : "text-sky-800"
                } mb-6`}
              >
                👀 Vista Previa
              </h3>

              {!formData.guestName ? (
                <div
                  className={`bg-white rounded-2xl p-8 border-2 ${
                    theme ? "border-pink-100" : "border-sky-100"
                  } text-center`}
                >
                  <div className="text-6xl mb-4">{theme ? "💌" : "📝"}</div>
                  <h4
                    className={`text-xl font-bold ${
                      theme ? "text-pink-800" : "text-sky-800"
                    } mb-2`}
                  >
                    Completa el Formulario
                  </h4>
                  <p className="text-gray-600">
                    Llena los datos del lado izquierdo para ver la vista previa
                    de la invitación personalizada
                  </p>
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Tarjeta de invitación */}
                  <div
                    ref={invitationRef}
                    className={`bg-white rounded-2xl p-1 border-2 ${
                      theme ? "border-pink-200" : "border-sky-200"
                    } shadow-lg`}
                  >
                    <div
                      className={`rounded-xl p-6 ${
                        theme
                          ? "bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100"
                          : "bg-gradient-to-br from-sky-50 via-pink-50 to-purple-50"
                      } border-2 ${
                        theme ? "border-pink-200" : "border-sky-200"
                      } max-w-md mx-auto`}
                    >
                      {/* Header de invitación */}
                      <div className="text-center mb-6">
                        <div className="text-4xl mb-3">
                          {theme ? "🌸" : "✨"}
                        </div>
                        <h3
                          className={`text-2xl font-bold ${
                            theme ? "text-pink-800" : "text-sky-800"
                          } mb-2`}
                        >
                          ¡Estás Invitad
                          {formData.guestName.toLowerCase().endsWith("a") ||
                          formData.guestName.toLowerCase().includes("maría") ||
                          formData.guestName.toLowerCase().includes("ana")
                            ? "a"
                            : "o"}
                          !
                        </h3>
                        <h4
                          className={`text-xl font-semibold ${
                            theme ? "text-rose-700" : "text-purple-700"
                          }`}
                        >
                          Bautismo de {data.hero.name}
                        </h4>
                        <p
                          className={`text-sm ${
                            theme ? "text-pink-600" : "text-sky-600"
                          } mt-2`}
                        >
                          {data.event.date?.full || "[FECHA_A_DEFINIR]"}
                        </p>
                      </div>

                      {/* Saludo personalizado */}
                      <div className="bg-white/80 rounded-lg p-4 mb-4">
                        <h5
                          className={`font-bold ${
                            theme ? "text-pink-800" : "text-sky-800"
                          } mb-2`}
                        >
                          ¡Hola {formData.guestName}!
                        </h5>
                        {formData.personalMessage && (
                          <p className="text-gray-700 text-sm leading-relaxed">
                            {formData.personalMessage}
                          </p>
                        )}
                      </div>

                      {/* Detalles del evento */}
                      <div className="space-y-2 mb-4">
                        <div
                          className={`flex items-center gap-2 text-sm ${
                            theme ? "text-pink-700" : "text-sky-700"
                          }`}
                        >
                          <span>📅</span>
                          <span>
                            {data.event.date?.full || "[FECHA_A_DEFINIR]"}
                          </span>
                        </div>
                        <div
                          className={`flex items-center gap-2 text-sm ${
                            theme ? "text-pink-700" : "text-sky-700"
                          }`}
                        >
                          <span>🕐</span>
                          <span>
                            {data.event.ceremony?.time || "[HORA_A_DEFINIR]"}
                          </span>
                        </div>
                        <div
                          className={`flex items-center gap-2 text-sm ${
                            theme ? "text-pink-700" : "text-sky-700"
                          }`}
                        >
                          <span>⛪</span>
                          <span>
                            {data.event.ceremony?.venue ||
                              "[IGLESIA_A_DEFINIR]"}
                          </span>
                        </div>
                                                 {formData.tableNumber && (
                           <div
                             className={`flex items-center gap-2 text-sm font-bold ${
                               theme ? "text-rose-700" : "text-purple-700"
                             }`}
                           >
                             <span>🪑</span>
                             <span>Tu mesa: {formData.tableNumber}</span>
                           </div>
                         )}
                         {formData.numberOfGuests && (
                           <div
                             className={`flex items-center gap-2 text-sm font-bold ${
                               theme ? "text-rose-700" : "text-purple-700"
                             }`}
                           >
                             <span>👥</span>
                             <span>Para {formData.numberOfGuests} {parseInt(formData.numberOfGuests) === 1 ? 'persona' : 'personas'}</span>
                           </div>
                         )}
                      </div>

                      {/* Footer */}
                      <div className="text-center border-t border-pink-200 pt-4">
                        <div className="flex items-center justify-center gap-1 mb-2">
                          <Heart
                            className={`w-3 h-3 ${
                              theme ? "text-rose-500" : "text-pink-500"
                            } fill-current`}
                          />
                          <span
                            className={`text-xs ${
                              theme ? "text-pink-600" : "text-sky-600"
                            }`}
                          >
                            Con amor, {data.invitation.parents.mother}
                          </span>
                          <Heart
                            className={`w-3 h-3 ${
                              theme ? "text-rose-500" : "text-pink-500"
                            } fill-current`}
                          />
                        </div>
                        <p className="text-xs text-gray-500">
                          ¡Te esperamos para celebrar este día tan especial!
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Botones de acción */}
                  {formData.guestName && (
                    <div className="space-y-3">
                      {/* Botón de descarga PNG */}
                      <Button
                        onClick={downloadInvitationPNG}
                        disabled={isDownloading}
                        className={`w-full ${
                          theme
                            ? "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                            : "bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700"
                        } text-white py-3 font-medium`}
                      >
                        {isDownloading ? (
                          <>
                            <div className="w-5 h-5 mr-2 animate-spin rounded-full border-2 border-white border-t-transparent"></div>
                            Generando imagen...
                          </>
                        ) : (
                          <>
                            <Download className="w-5 h-5 mr-2" />
                            Descargar como PNG
                          </>
                        )}
                      </Button>

                      {/* Botón de envío por WhatsApp */}
                                             {formData.whatsappNumber &&
                         formData.whatsappNumber.replace(/\D/g, "").length ===
                           10 && formData.numberOfGuests && (
                          <Button
                            onClick={sendWhatsAppInvitation}
                            className={`w-full ${
                              theme
                                ? "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                                : "bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
                            } text-white py-3 font-medium`}
                          >
                            <MessageCircle className="w-5 h-5 mr-2" />
                            Enviar por WhatsApp (+52 {formData.whatsappNumber})
                          </Button>
                        )}
                    </div>
                  )}

                  {/* Información sobre WhatsApp + imagen */}
                  {formData.guestName && (
                    <div
                      className={`mt-4 p-4 ${
                        theme
                          ? "bg-blue-50 border-blue-200"
                          : "bg-blue-50 border-blue-200"
                      } rounded-lg border`}
                    >
                      <div className="flex items-start gap-2">
                                                 <ImageIcon
                           className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0"
                           
                         />
                        <div>
                          <h6 className="font-semibold text-blue-800 text-sm mb-1">
                            💡 Para enviar con imagen:
                          </h6>
                          <ol className="text-xs text-blue-700 space-y-1">
                            <li>1. Descarga la imagen PNG ⬆️</li>
                            <li>2. Envía el mensaje de WhatsApp ⬆️</li>
                            <li>
                              3. En WhatsApp, adjunta manualmente la imagen
                              descargada
                            </li>
                          </ol>
                          <p className="text-xs text-blue-600 mt-2 italic">
                            ⚠️ WhatsApp no permite adjuntar imágenes
                            automáticamente por seguridad
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          <div
          style={{display: 'none'}}
            className={`${
              theme
                ? "bg-gradient-to-r from-pink-100 to-rose-100 border-pink-200"
                : "bg-gradient-to-r from-sky-100 to-pink-100 border-sky-200"
            } rounded-2xl p-8 border text-center`}
          >
            <div className="text-6xl mb-4">{theme ? "🔒" : "🔐"}</div>
            <h3
              className={`text-2xl font-bold ${
                theme ? "text-pink-800" : "text-sky-800"
              } mb-4`}
            >
              Área de Administración
            </h3>
            <p
              className={`text-lg ${
                theme ? "text-pink-700" : "text-sky-700"
              } mb-6`}
            >
              Esta funcionalidad está disponible únicamente para organizadores
              del evento. Permite crear invitaciones personalizadas con mensaje
              especial y envío directo por WhatsApp.
            </p>
            <p
              className={`text-sm ${theme ? "text-pink-600" : "text-sky-600"}`}
            >
              Si eres organizador, usa el botón {theme ? "⚙️" : "⚙️"} en la
              esquina superior derecha para acceder.
            </p>
          </div>
        )}

        {/* Información adicional */}
        <div
        style={{display: 'none'}}
          className={`mt-16 ${
            theme
              ? "bg-gradient-to-r from-pink-100 to-rose-100 border-pink-200"
              : "bg-gradient-to-r from-sky-100 to-pink-100 border-sky-200"
          } rounded-2xl p-8 border`}
        >
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles
                className={`w-6 h-6 ${
                  theme ? "text-rose-500" : "text-pink-500"
                }`}
              />
              <h3
                className={`text-2xl font-bold ${
                  theme ? "text-pink-800" : "text-sky-800"
                }`}
              >
                {theme
                  ? "Información Importante para Mia Isabel"
                  : "Información Importante"}
              </h3>
              <Sparkles
                className={`w-6 h-6 ${
                  theme ? "text-rose-500" : "text-pink-500"
                }`}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl">💌</div>
                <h4
                  className={`font-semibold ${
                    theme ? "text-pink-700" : "text-sky-700"
                  }`}
                >
                  Invitación Personal
                </h4>
                <p className="text-sm text-gray-600">
                  Cada invitado recibe un mensaje personalizado y único
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl">📱</div>
                <h4
                  className={`font-semibold ${
                    theme ? "text-pink-700" : "text-sky-700"
                  }`}
                >
                  WhatsApp Directo
                </h4>
                <p className="text-sm text-gray-600">
                  Envío automático con enlace a la invitación completa
                </p>
              </div>

              <div className="space-y-2">
                <div className="text-3xl">{theme ? "🌸" : "🎨"}</div>
                <h4
                  className={`font-semibold ${
                    theme ? "text-pink-700" : "text-sky-700"
                  }`}
                >
                  {theme ? "Diseño Mexicano Tradicional" : "Diseño Elegante"}
                </h4>
                <p className="text-sm text-gray-600">
                  {theme
                    ? "Tema rosa mexicano para la celebración de Mia Isabel"
                    : "Colores y estilo adaptados al evento"}
                </p>
              </div>
            </div>

            <div 
            style={{display: 'none'}}
            className="mt-6 p-4 bg-white/50 rounded-xl">
              <p
                className={`text-sm ${
                  theme ? "text-pink-700" : "text-sky-700"
                }`}
              >
                <strong>Funcionalidad Admin:</strong> Esta herramienta permite a
                los organizadores crear y enviar invitaciones personalizadas,
                incluyendo asignación de mesas y mensajes especiales para cada
                invitado del bautismo de {data.hero.name}.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
