import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-slate-300 py-16 border-t-4 border-rose-400 mt-auto">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        
        {/* Logo ve Ünvan */}
        <div className="space-y-4">
          <Link href="#ana-sayfa" className="text-2xl font-bold text-white tracking-wide">
            Sema <span className="text-rose-400">Aydın</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed font-medium">
            Sağlıklı İletişim ve Güvenli Yutma.<br />
            Anadolu Üniversitesi, Dil ve Konuşma Terapisi.
          </p>
        </div>

        {/* Hızlı Menü */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">Sayfalar</h3>
          <a href="#ana-sayfa" className="hover:text-rose-400 transition-colors text-sm w-max">Ana Sayfa</a>
          <a href="#hakkimda" className="hover:text-rose-400 transition-colors text-sm w-max">Hakkımda</a>
          <a href="#sertifikalar" className="hover:text-rose-400 transition-colors text-sm w-max">Eğitimler & Sertifikalar</a>
          <a href="#randevu" className="hover:text-rose-400 transition-colors text-sm w-max">Randevu Takvimi</a>
        </div>

        {/* İletişim Bilgileri */}
        <div className="flex flex-col space-y-3">
          <h3 className="text-white font-bold uppercase tracking-wider text-sm mb-2">İletişim</h3>
          <p className="text-sm">Eskişehir, Türkiye</p>
          <a href="#iletisim" className="text-sm hover:text-rose-400 transition-colors w-max">Bana Ulaşın</a>
        </div>
        
      </div>

      {/* Alt Telif Hakkı Çizgisi */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-slate-500 font-medium">
          &copy; {new Date().getFullYear()} Sema Aydın. Tüm hakları saklıdır.
        </p>
        <p className="text-xs text-slate-500 flex items-center gap-1.5 font-medium tracking-wide">
          Sevgiyle tasarlandı <span className="text-rose-400 text-sm">♥</span> 6 Mart
        </p>
      </div>
    </footer>
  );
}