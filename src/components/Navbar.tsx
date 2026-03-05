import Link from "next/link";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-50 drop-shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center relative z-20">
        
        {/* Logo'ya tıklayınca en üste gitsin */}
        <Link href="#ana-sayfa" className="text-2xl font-bold text-slate-700 tracking-wide">
          Sema <span className="text-rose-400">Aydın</span>
        </Link>

        {/* Menü Linkleri (a etiketi ile sayfa içi kaydırma yapıyoruz) */}
        <div className="hidden md:flex space-x-8 text-slate-500 font-medium">
          <a href="#ana-sayfa" className="hover:text-rose-400 transition-colors">Ana Sayfa</a>
          <a href="#hakkimda" className="hover:text-rose-400 transition-colors">Hakkımda</a>
          <a href="#sertifikalar" className="hover:text-rose-400 transition-colors">Eğitimler & Sertifikalar</a>
          <a href="#randevu" className="hover:text-rose-400 transition-colors">Randevu Takvimi</a>
        </div>

        {/* İletişim Butonu */}
        <a 
          href="#iletisim" 
          className="hidden md:block bg-rose-400 text-white px-6 py-2.5 rounded-md hover:bg-rose-500 transition-all shadow-[4px_4px_0_0_rgba(251,113,133,0.3)] font-semibold active:translate-y-1 active:shadow-none"
        >
          İletişime Geç
        </a>
      </nav>

      {/* Bulut Efekti */}
      <div className="absolute left-0 right-0 -bottom-6 w-full overflow-hidden leading-[0] z-10 pointer-events-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[30px] block relative">
          <path fill="#ffffff" d="M0,0 V40 Q15,60 30,40 Q45,60 60,40 Q75,60 90,40 Q105,60 120,40 Q135,60 150,40 Q165,60 180,40 Q195,60 210,40 Q225,60 240,40 Q255,60 270,40 Q285,60 300,40 Q315,60 330,40 Q345,60 360,40 Q375,60 390,40 Q405,60 420,40 Q435,60 450,40 Q465,60 480,40 Q495,60 510,40 Q525,60 540,40 Q555,60 570,40 Q585,60 600,40 Q615,60 630,40 Q645,60 660,40 Q675,60 690,40 Q705,60 720,40 Q735,60 750,40 Q765,60 780,40 Q795,60 810,40 Q825,60 840,40 Q855,60 870,40 Q885,60 900,40 Q915,60 930,40 Q945,60 960,40 Q975,60 990,40 Q1005,60 1020,40 Q1035,60 1050,40 Q1065,60 1080,40 Q1095,60 1110,40 Q1125,60 1140,40 Q1155,60 1170,40 Q1185,60 1200,40 V0 Z" />
        </svg>
      </div>
    </div>
  );
}