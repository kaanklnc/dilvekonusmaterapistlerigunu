"use client";
import { Caveat } from "next/font/google";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });

export default function Hakkimda() {
  const haberler = [
    { id: 1, baslik: "Yutma Bozukluklarında Yeni Terapi Yaklaşımları", kaynak: "DKT Güncel", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800" },
    { id: 2, baslik: "Dil ve Konuşma Terapisinde Teknolojik Çözümler", kaynak: "Sağlık Haber", img: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?q=80&w=800" },
    { id: 3, baslik: "Anadolu Üniversitesi'nden Yeni Klinik Çalışmalar", kaynak: "Akademik Bülten", img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800" },
  ];

  const egitimTimeline = [
    {
      yil: "2024 - 2026",
      baslik: "Anadolu Üniversitesi",
      altBaslik: "Dil ve Konuşma Terapisi (Lisans)",
      detay: "Yatay Geçiş ile eğitimime devam etmekteyim.",
      ikon: "🎓",
      renk: "border-rose-400"
    },
    {
      yil: "2022 - 2023",
      baslik: "İstinye Üniversitesi",
      altBaslik: "Dil ve Konuşma Terapisi (Lisans)",
      detay: "",
      ikon: "🏛️",
      renk: "border-blue-300"
    },
    {
      yil: "2022 - 2023",
      baslik: "İstinye Üniversitesi",
      altBaslik: "Yazılım Mühendisliği (Yandal)",
      detay: "",
      ikon: "💻",
      renk: "border-slate-400"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FAFBFC] pt-12 pb-24 px-6 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        
        <section className="mb-20">
          <h2 className="text-2xl font-bold text-slate-700 mb-8 flex items-center gap-3">
            <span className="w-3 h-8 bg-rose-400 rounded-sm"></span>
            Sektörel Gelişmeler
          </h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 3500 }}
            pagination={{ clickable: true }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 }
            }}
            className="pb-12"
          >
            {haberler.map((haber) => (
              <SwiperSlide key={haber.id}>
                <div className="bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200 h-full hover:shadow-[8px_8px_0_0_rgba(226,232,240,1)] transition-all">
                  <div className="relative h-44">
                    <img src={haber.img} alt={haber.baslik} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-md text-xs font-bold text-rose-500 shadow-sm">
                      {haber.kaynak}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-slate-700 leading-tight">{haber.baslik}</h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

       

      {/* 3. DETAYLI HAKKIMDA (BÜYÜTÜLMÜŞ) */}
        {/* BURAYA id="hakkimda" ve scroll-mt-32 EKLENDİ */}
        <div id="hakkimda" className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start scroll-mt-32">
          <div className="lg:col-span-4 sticky top-32">
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-[12px_12px_0_0_rgba(251,113,133,0.3)] border-[8px] border-white rotate-[-2deg] transition-transform hover:rotate-0">
              <Image src="/sema-aydin.jpg" alt="Sema Aydın" fill className="object-cover" />
            </div>
          </div>

          <div className="lg:col-span-8 space-y-8">
            <div className="bg-white p-10 md:p-14 rounded-xl shadow-lg border border-slate-100 relative">
              <span className={`${caveat.className} text-9xl text-rose-500/10 absolute top-4 left-6`}>"</span>
              <div className="relative z-10 space-y-6 text-xl text-slate-600 leading-relaxed">
                <p>
                  Merhaba, ben <strong className="text-slate-800">Sema Aydın</strong>. Akademik yolculuğuma İstinye Üniversitesi'nde başlayıp, şu an Türkiye'nin köklü kurumlarından <strong className="text-rose-400">Anadolu Üniversitesi</strong>'nde Dil ve Konuşma Terapisi eğitimime devam ediyorum.
                </p>
                <p>
                  Eğitim hayatım boyunca aldığım <span className="font-bold border-b-2 border-rose-200">Yüksek Onur ve Onur belgeleri</span>, bu mesleğe olan bağlılığımın ve disiplinimin bir göstergesidir. Özellikle hayat kalitesini derinden etkileyen <strong>Yutma Bozuklukları (Disfaji)</strong> üzerine uzmanlaşmayı hedefliyorum.
                </p>
                <p>
                  Beni diğer adaylardan ayıran en önemli özelliklerden biri de <strong>Yazılım Mühendisliği yandal</strong> geçmişimdir. Bu sayede konuşma terapisini sadece klinik bir süreç olarak değil, teknoloji ile desteklenen modern bir iyileşme süreci olarak görüyorum.
                </p>
              </div>
            </div>
          </div>
        </div>
         <section className="mb-24">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-800">Eğitim Yolculuğum</h2>
            <div className="w-20 h-1.5 bg-rose-400 mx-auto mt-4 rounded-sm"></div>
          </div>

          <div className="relative max-w-4xl mx-auto px-4">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-slate-200 md:-translate-x-1/2"></div>
            {egitimTimeline.map((item, index) => (
              <div key={index} className="relative mb-12 flex flex-col md:flex-row items-center group">
                <div className="absolute left-[-10px] md:left-1/2 md:-translate-x-1/2 w-6 h-6 bg-white border-4 border-rose-400 z-10 shadow-sm transform rotate-45 transition-transform duration-300 group-hover:scale-125 group-hover:bg-rose-50"></div>
                
                <div className={`ml-10 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:ml-auto md:text-left'}`}>
                  <div className={`bg-white p-8 rounded-xl shadow-sm border-l-8 ${item.renk} hover:-translate-y-1 hover:shadow-lg transition-all`}>
                    <span className="text-rose-500 font-bold text-sm tracking-widest">{item.yil}</span>
                    <div className="text-2xl mt-1 mb-2">{item.ikon}</div>
                    <h3 className="text-xl font-extrabold text-slate-800">{item.baslik}</h3>
                    <p className="text-slate-600 font-semibold">{item.altBaslik}</p>
                    <p className="text-slate-400 text-sm mt-3 leading-relaxed">{item.detay}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section id="sertifikalar" className="py-24 bg-rose-50/30 px-6 mt-16 rounded-xl border border-rose-100/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-extrabold text-slate-800 text-center mb-16">Eğitim & Sertifikalar</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center group">
                <div className="relative w-full aspect-[4/3] bg-white border-[10px] border-white shadow-[8px_8px_0_0_rgba(226,232,240,1)] transition-all group-hover:scale-105 group-hover:rotate-1 group-hover:shadow-[12px_12px_0_0_rgba(251,113,133,0.3)]">
                  <Image src="/sertifika-1.jpg" alt="Sertifika" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
              <div className="flex flex-col items-center group">
                <div className="relative w-full aspect-[4/3] bg-white border-[10px] border-white shadow-[8px_8px_0_0_rgba(226,232,240,1)] transition-all group-hover:scale-105 group-hover:-rotate-1 group-hover:shadow-[12px_12px_0_0_rgba(251,113,133,0.3)]">
                  <Image src="/sertifika-1.jpg" alt="Sertifika" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
              </div>
            </div>
          </div>
        </section>
         <section id="randevu" className="py-24 bg-white px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-800 mb-4">Uygun Bir Zaman Seç ve Randevu Al</h2>
            <div className="w-24 h-1 bg-rose-300 mx-auto rounded-sm"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-7 border-2 border-slate-100 rounded-xl overflow-hidden shadow-xl bg-white animate-fade-in-up animate-delay-100">
            {[
              { day: "Pazartesi", date: "02.03", slots: ["10:20", "12:20", "13:00", "17:20"], active: false },
              { day: "Salı", date: "03.03", slots: [], active: false },
              { day: "Çarşamba", date: "04.03", slots: ["11:00", "14:30"], active: true },
              { day: "Perşembe", date: "05.03", slots: ["09:00", "13:00", "16:00"], active: false },
              { day: "Cuma", date: "06.03", slots: ["10:00", "15:00"], active: false },
              { day: "Cumartesi", date: "07.03", slots: ["12:00"], active: false },
              { day: "Pazar", date: "08.03", slots: [], active: false },
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex flex-col border-r border-slate-100 last:border-0 min-h-[300px] transition-colors ${item.active ? 'bg-rose-50/50' : 'hover:bg-slate-50'}`}
              >
                <div className={`p-4 text-center border-b border-slate-100 ${item.active ? 'bg-rose-400 text-white' : 'text-slate-600'}`}>
                  <span className="block font-bold text-sm uppercase tracking-wider">{item.day}</span>
                  <span className="text-xs opacity-80">{item.date}</span>
                </div>
                <div className="p-4 flex flex-col gap-3">
                  {item.slots.length > 0 ? (
                    item.slots.map((slot, sIndex) => (
                      <button 
                        key={sIndex}
                        className="w-full py-2 px-1 text-xs font-bold rounded-md bg-white border-2 border-rose-100 text-slate-700 hover:bg-rose-400 hover:text-white hover:border-rose-400 transition-all shadow-sm"
                      >
                        {slot}
                      </button>
                    ))
                  ) : (
                    <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase text-center mt-10">Dolu / Kapalı</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center animate-fade-in-up animate-delay-200">
            <button className="inline-flex items-center gap-2 bg-rose-400 text-white px-10 py-4 rounded-lg font-bold shadow-[6px_6px_0_0_rgba(251,113,133,0.3)] hover:bg-rose-500 transition-all transform hover:-translate-y-1 active:translate-y-1 active:shadow-none">
              <span>📅</span> Tümünü Göster ve Randevu Al
            </button>
          </div>
        </div>
      </section>      
      </div>
    </main>
  );
}