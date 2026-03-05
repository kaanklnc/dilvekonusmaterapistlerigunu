"use client";
import { Caveat } from "next/font/google";
import Link from "next/link";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });

// slug değerleri eklendi (URL'de görünecek isimler)
const alanlar = [
  { id: 1, baslik: "KONUŞMA BOZUKLUKLARI", slug: "konusma-bozukluklari", renk: "bg-rose-100/50", bant: "bg-yellow-200/60" },
  { id: 2, baslik: "DİL VE KONUŞMA TERAPİSİ", slug: "dil-ve-konusma-terapisi", renk: "bg-blue-100/50", bant: "bg-blue-200/60" },
  { id: 3, baslik: "GECİKMİŞ KONUŞMA", slug: "gecikmis-konusma", renk: "bg-orange-100/50", bant: "bg-orange-200/60" },
  { id: 4, baslik: "KEKEMELİK TERAPİSİ", slug: "kekemelik-terapisi", renk: "bg-green-100/50", bant: "bg-green-200/60" },
  { id: 5, baslik: "ARTİKÜLASYON", slug: "artikulasyon", renk: "bg-purple-100/50", bant: "bg-purple-200/60" },
  { id: 6, baslik: "FONOLOJİK BOZUKLUK", slug: "fonolojik-bozukluk", renk: "bg-slate-100", bant: "bg-slate-300/60" },
];

export default function Specialties() {
  return (
    <section className="py-24 bg-[#FAFBFC]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-slate-800 tracking-tighter uppercase">
            HİZMETLER
          </h2>
          <div className="w-24 h-1.5 bg-rose-400 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {alanlar.map((alan) => (
            <Link href={`/hizmetler/${alan.slug}`} key={alan.id} className="group relative block cursor-pointer">
              {/* Bant Efekti */}
              <div className={`absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-10 ${alan.bant} shadow-sm z-20 rotate-[-3deg] group-hover:rotate-[5deg] transition-transform duration-500`}></div>
              
              {/* Not Kağıdı */}
              <div className={`
                ${alan.renk} 
                aspect-square flex flex-col items-center justify-center p-10
                rounded-md shadow-[8px_8px_0_0_rgba(226,232,240,0.8)] border-2 border-slate-100
                transition-all duration-500 ease-in-out transform 
                group-hover:-rotate-2 group-hover:scale-105 group-hover:shadow-[12px_12px_0_0_rgba(251,113,133,0.2)] group-hover:border-rose-200
                relative overflow-hidden
              `}>
                <h3 className="text-2xl font-black text-slate-700 text-center leading-tight uppercase z-10">
                  {alan.baslik}
                </h3>
                
                <div className="mt-8 px-6 py-2.5 border-2 border-slate-800 text-slate-800 font-bold text-xs rounded-md group-hover:bg-slate-800 group-hover:text-white transition-colors z-10">
                  DETAYLI BİLGİ
                </div>

                {/* Arka plan deseni */}
                <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'linear-gradient(#000 1.5px, transparent 1.5px)', backgroundSize: '100% 2.5rem' }}></div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}