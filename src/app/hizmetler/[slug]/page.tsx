import Link from "next/link";
import { notFound } from "next/navigation";

// Hizmet içeriklerinin veritabanı
const hizmetIcerikleri: Record<string, { baslik: string; nedir: string; tedavi: string }> = {
  "konusma-bozukluklari": {
    baslik: "Konuşma Bozuklukları",
    nedir: "Konuşma bozuklukları; bir kişinin sesleri doğru üretmesinde, konuşmasının akıcılığında veya sesinin kalitesinde yaşadığı zorlukları kapsayan genel bir şemsiye terimdir. Kişinin kendini ifade etmesini ve sosyal iletişimini olumsuz etkileyebilir.",
    tedavi: "Tedavi süreci, sorunun kaynağına (nörolojik, anatomik veya öğrenilmiş davranış) göre tamamen kişiye özel planlanır. Öncelikle kapsamlı bir değerlendirme yapılarak bozukluğun türü belirlenir. Ardından nefes koordinasyonu, ses teli egzersizleri veya doğru artikülasyon çalışmaları ile konuşmanın anlaşılırlığı ve akıcılığı hedeflenir."
  },
  "dil-ve-konusma-terapisi": {
    baslik: "Dil ve Konuşma Terapisi",
    nedir: "Dil ve Konuşma Terapisi (DKT), iletişim, dil, konuşma, ses ve yutma bozukluklarının önlenmesi, değerlendirilmesi ve rehabilitasyonu ile ilgilenen bilim dalıdır. Hem çocukları hem de yetişkinleri kapsar.",
    tedavi: "Terapide bütüncül bir yaklaşım benimsenir. Aile bilgilendirmesi, çevresel düzenlemeler ve birebir seanslar aracılığıyla kişinin iletişim becerileri en üst düzeye çıkarılır. Modern teknolojik araçlar ve kanıta dayalı terapi yöntemleri harmanlanarak güvenli bir iyileşme ortamı sağlanır."
  },
  "gecikmis-konusma": {
    baslik: "Gecikmiş Konuşma",
    nedir: "Çocuğun alıcı (anlama) ve ifade edici (konuşma) dil becerilerinin, kendi yaşından beklenen gelişimsel aşamaların gerisinde kalması durumudur. Çocuğun iletişim kurmak yerine hırçınlaşmasına veya içe kapanmasına yol açabilir.",
    tedavi: "Çocuklarla yapılan terapilerde temel aracımız 'Oyun'dur. Doğal oyun ortamında, çocuğun ilgisini çeken materyallerle iletişime geçme isteği artırılır. Aileye, evde nasıl bir dil modeli olmaları gerektiği konusunda stratejiler (Floortime, etkileşimli kitap okuma vb.) öğretilerek süreç desteklenir."
  },
  "kekemelik-terapisi": {
    baslik: "Kekemelik Terapisi",
    nedir: "Konuşmanın doğal akışının; seslerin veya hecelerin tekrarlanması, uzatılması veya hava akışının aniden kesilmesi (bloklar) ile istemsizce kesintiye uğramasıdır. Buna sıklıkla göz kırpma veya el-kol hareketleri gibi ikincil davranışlar eşlik edebilir.",
    tedavi: "Kekemelik terapisinde amaç, kekemeliği tamamen 'yok etmek' değil, kekemeliği 'yönetmeyi' ve takılmalara rağmen rahatça iletişim kurabilmeyi öğretmektir. Duyarsızlaştırma çalışmaları, nefes teknikleri, akıcılık şekillendirme ve kekemelik modifikasyonu yöntemleri kullanılarak bireyin konuşma özgüveni yeniden inşa edilir."
  },
  "artikulasyon": {
    baslik: "Artikülasyon (Sesletim) Bozukluğu",
    nedir: "Konuşma seslerini üretmek için kullandığımız organların (dil, dudak, damak, diş vb.) yanlış kullanımı sonucu seslerin hatalı üretilmesidir. En bilinen örneği 'R' veya 'S' harflerini söyleyememek veya yerine başka ses kullanmaktır (Araba yerine Ayaba demek gibi).",
    tedavi: "Terapide öncelikle hedeflenen sesin doğru üretim yeri (örneğin dilin nereye değmesi gerektiği) aynalar veya görsel materyaller yardımıyla hastaya gösterilir. Sesin tek başına, ardından hece, kelime, cümle ve en son günlük konuşma içinde doğru üretilmesi için aşamalı ve sistematik egzersizler yapılır."
  },
  "fonolojik-bozukluk": {
    baslik: "Fonolojik (Algısal) Bozukluk",
    nedir: "Çocuğun sesleri fiziksel olarak üretebilmesine rağmen, dildeki ses kurallarını kavrayamaması ve kelime içinde seslerin yerlerini değiştirmesi, düşürmesi veya başka seslerle değiştirmesi durumudur. (Örn: 'Kitap' yerine 'Tipak' veya 'Kedi' yerine 'Tedi' demek).",
    tedavi: "Tedavide odak noktamız ağız motor kasları değil, 'işitsel ayırt etme' becerisidir. Çocuğa hedeflenen seslerin farkları minimal zıtlıklar (minimal pairs) gibi özel terapi oyunlarıyla kavratılır. Seslerin kelime içindeki anlam ayırt edici özelliği öğretilerek anlaşılırlık artırılır."
  }
};

// BURASI DEĞİŞTİ: async eklendi ve params bir Promise olarak tanımlandı
export default async function HizmetDetay({ params }: { params: Promise<{ slug: string }> }) {
  // BURASI DEĞİŞTİ: params verisi await ile bekleniyor
  const { slug } = await params;
  const icerik = hizmetIcerikleri[slug];

  // Eğer URL'de geçersiz bir hizmet adı yazılırsa 404 sayfasına yönlendirir.
  if (!icerik) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#FAFBFC] pt-16 pb-24 px-6">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        
        {/* Üst Kısım: Geri Dön ve Başlık */}
        <div className="mb-12">
          <Link href="/#hizmetler" className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-rose-500 transition-colors mb-6 group">
            <span className="mr-2 transform group-hover:-translate-x-1 transition-transform">←</span>
            Tüm Hizmetlere Dön
          </Link>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight">
            {icerik.baslik}
          </h1>
          <div className="w-20 h-1.5 bg-rose-400 mt-6 rounded-md"></div>
        </div>

        {/* İçerik Kartları */}
        <div className="space-y-10">
          
          {/* Nedir Kartı */}
          <section className="bg-white p-8 md:p-12 rounded-xl shadow-[8px_8px_0_0_rgba(226,232,240,0.8)] border border-slate-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-rose-100 rounded-md flex items-center justify-center text-2xl">
                ❓
              </div>
              <h2 className="text-2xl font-bold text-slate-700">Nedir?</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {icerik.nedir}
            </p>
          </section>

          {/* Nasıl Tedavi Uygulanır Kartı */}
          <section className="bg-white p-8 md:p-12 rounded-xl shadow-[8px_8px_0_0_rgba(251,113,133,0.2)] border-2 border-rose-50">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-rose-400 text-white rounded-md flex items-center justify-center text-2xl">
                ✨
              </div>
              <h2 className="text-2xl font-bold text-slate-700">Nasıl Tedavi Uygulanır?</h2>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              {icerik.tedavi}
            </p>
          </section>

        </div>

        {/* Aksiyon Alanı (Randevu) */}
        <div className="mt-16 text-center bg-slate-800 rounded-xl p-10 shadow-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Erken Müdahale Önemlidir</h3>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Bu konuda endişeleriniz varsa veya profesyonel bir değerlendirme talep ediyorsanız, hemen bir ön görüşme planlayabiliriz.
          </p>
          <Link href="/iletisim" className="inline-block bg-rose-400 text-white px-8 py-4 rounded-md font-bold shadow-[4px_4px_0_0_rgba(244,63,94,0.5)] hover:bg-rose-500 hover:shadow-[6px_6px_0_0_rgba(244,63,94,0.6)] transition-all transform hover:-translate-y-1 active:translate-y-1 active:shadow-none">
            Randevu Al veya Danış
          </Link>
        </div>

      </div>
    </main>
  );
}