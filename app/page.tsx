import { MusicProvider } from "@/context/music-context";
import { VipHero } from "@/components/demo/bautizo/vip/VipHero";
import { PremiumInvitation } from "@/components/demo/bautizo/premium/PremiumInvitation";
import { BasicCountdown } from "@/components/demo/bautizo/basic/BasicCountdown";
import { BasicEventDetails } from "@/components/demo/bautizo/basic/BasicEventDetails";
import { VipGuestInfo } from "@/components/demo/bautizo/vip/VipGuestInfo";
import { VipItinerary } from "@/components/demo/bautizo/vip/VipItinerary";
import { VipFamilyRoles } from "@/components/demo/bautizo/vip/VipFamilyRoles";
import { VipPlaylist } from "@/components/demo/bautizo/vip/VipPlaylist";
import { VipGallery } from "@/components/demo/bautizo/vip/VipGallery";
import { PremiumFamily } from "@/components/demo/bautizo/premium/PremiumFamily";
import { BasicAttendance } from "@/components/demo/bautizo/basic/BasicAttendance";
import { BasicGiftOptions } from "@/components/demo/bautizo/basic/BasicGiftOptions";
import { PremiumThankYou } from "@/components/demo/bautizo/premium/PremiumThankYou";

// 🎊 DATOS PERSONALIZADOS PARA MIA ISABEL
import { miaIsabelBautizoData } from "@/components/demo/bautizo/vip/data/mia-isabel-data";
import { miaIsabelTheme, getMiaIsabelClasses } from "@/lib/themes/mia-isabel-theme";

export default function MiaIsabelBautizoPage() {
  return (
    <div className={`min-h-screen ${getMiaIsabelClasses.sectionBg}`}>
      <MusicProvider>
        {/* 🌟 HERO MEXICANO TRADICIONAL - Mia Isabel Juarez Torres */}
        <VipHero data={miaIsabelBautizoData} theme={miaIsabelTheme} />

        {/* 📋 INVITACIÓN MEXICANA TRADICIONAL - Para Mia Isabel Juarez Torres */}
        <PremiumInvitation data={miaIsabelBautizoData} theme={miaIsabelTheme} />

        {/* ⏰ CUENTA REGRESIVA AL SACRAMENTO - Para el bautizo de Mia Isabel */}
        <BasicCountdown data={miaIsabelBautizoData} theme={miaIsabelTheme} />

        {/* 📅 DETALLES DEL BAUTISMO - Información del evento de Mia Isabel */}
        <BasicEventDetails data={miaIsabelBautizoData} theme={miaIsabelTheme} />

        {/* ℹ️ INFORMACIÓN PARA INVITADOS - CARACTERÍSTICA VIP EXCLUSIVA */}
        {/*
        <VipGuestInfo data={miaIsabelBautizoData} theme={miaIsabelTheme} />
        */}

        {/* 📅 ITINERARIO COMPLETO - Día especial de Mia Isabel - VIP EXCLUSIVO */}
        <VipItinerary data={miaIsabelBautizoData} theme={miaIsabelTheme} />

        {/* 👩‍👧 ROLES FAMILIARES - Familia Juarez Torres (Madre soltera) - VIP EXCLUSIVO */}
        <VipFamilyRoles data={miaIsabelBautizoData} theme={miaIsabelTheme} />

        {/* 🎵 PLAYLIST MEXICANA - Cielito Lindo y más - VIP ENHANCED */}
        <VipPlaylist data={miaIsabelBautizoData} theme={miaIsabelTheme} />

        {/* 📸 GALERÍA DE MOMENTOS - Recuerdos de Mia Isabel - VIP ENHANCED */}
        <VipGallery data={miaIsabelBautizoData} theme={miaIsabelTheme} />

        {/* 👥 FAMILIA JUAREZ TORRES - Adaptado para madre soltera */}
        <PremiumFamily data={miaIsabelBautizoData} theme={miaIsabelTheme} />

        {/* ✅ CONFIRMACIÓN DE ASISTENCIA - Para el bautizo de Mia Isabel */}
        <BasicAttendance data={miaIsabelBautizoData} theme={miaIsabelTheme} />

        {/* 🎁 BENDICIONES PARA MIA ISABEL - Opciones de regalo personalizadas */}
        <BasicGiftOptions data={miaIsabelBautizoData} theme={miaIsabelTheme} />

        {/* 💝 MENSAJE DE REYNA MONSERRAT - Gratitud maternal */}
        <PremiumThankYou data={miaIsabelBautizoData} theme={miaIsabelTheme} />
      </MusicProvider>
    </div>
  );
}
