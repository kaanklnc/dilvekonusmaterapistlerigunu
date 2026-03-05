import Image from "next/image";
import { Caveat } from "next/font/google"; 
import Specialties from "@/components/Specialties";
import Hakkimda from "./hakkimda/page";
import Iletisim from "./iletisim/page";

const caveat = Caveat({ subsets: ["latin"], weight: ["700"] });

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* 1. BÖLÜM: ANA SAYFA (HERO) */}
      <section id="ana-sayfa" className="min-h-screen pt-10 pb-20 flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-white to-rose-50/30">
        <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-16 px-6">
          <div className="relative w-full md:w-1/2 flex justify-center animate-fade-in-up">
            <div className="absolute -top-10 md:-top-16 left-[5%] md:left-[10%] z-30 animate-bounce">
              <div className="bg-white border-[3px] border-rose-200 px-6 py-3 rounded-md shadow-[4px_4px_0_0_rgba(251,113,133,0.2)] relative flex items-center justify-center rotate-[-4deg]">
                <span className={`${caveat.className} text-4xl text-rose-400`}>Ben Kimim?</span>
              </div>
            </div>
            
            <div className="relative w-72 h-96 md:w-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-[12px_12px_0_0_rgba(251,113,133,0.3)] border-4 border-white transition-transform duration-700 hover:scale-[1.02]">
              <Image src="/sema-aydin.jpg" alt="Sema Aydın" fill className="object-cover" priority />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6">
            <h2 className="animate-fade-in-up text-rose-400 font-bold tracking-widest uppercase text-xs bg-rose-50 px-4 py-2 rounded-md border border-rose-100 inline-block">
              Stj. Dkt. Sema Aydın | Anadolu Üniversitesi
            </h2>
            <h1 className="animate-fade-in-up animate-delay-100 text-4xl md:text-6xl font-extrabold text-slate-700 leading-tight">
              Dil ve <br />Konuşma<br /><span className="text-rose-400">Bozuklukları</span>
            </h1>
            <p className="animate-fade-in-up animate-delay-200 text-lg text-slate-500 leading-relaxed max-w-lg font-medium">
              Her kelimede güven, her adımda daha güçlü bir iletişim için randevu alabilirsiniz.
            </p>
            <div className="animate-fade-in-up animate-delay-300">
              <a href="#hakkimda" className="inline-block bg-rose-400 text-white px-8 py-4 rounded-lg font-bold shadow-[6px_6px_0_0_rgba(251,113,133,0.3)] hover:bg-rose-500 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-[8px_8px_0_0_rgba(251,113,133,0.4)] active:translate-y-1 active:shadow-none">
                Hakkımda Daha Fazla
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DİĞER BÖLÜMLER BURADA ÇAĞRILIYOR */}
      <Specialties />
      <Hakkimda />
      <Iletisim />
    </main>
  );
}