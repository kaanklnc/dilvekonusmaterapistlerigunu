export default function Iletisim() {
  return (
    <div className="py-20 px-6 bg-[#FAFBFC] min-h-screen flex items-center">
      <div className="max-w-4xl mx-auto w-full animate-fade-in-up">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-slate-800 mb-4">İletişime Geçin</h1>
          <p className="text-slate-500 font-medium text-lg">
            Sorularınız veya danışmanlık talepleriniz için aşağıdaki formu kullanabilirsiniz.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-[12px_12px_0_0_rgba(226,232,240,0.8)] p-8 md:p-12 border border-slate-200">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Ad Soyad</label>
                <input 
                  type="text" 
                  required
                  className="w-full px-6 py-4 rounded-md bg-slate-50 border border-slate-200 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100/50 outline-none transition-all duration-300 font-medium hover:border-rose-300" 
                  placeholder="Sema Aydın" 
                />
              </div>
              <div className="space-y-3">
                <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">E-Posta Adresi</label>
                <input 
                  type="email" 
                  required
                  className="w-full px-6 py-4 rounded-md bg-slate-50 border border-slate-200 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100/50 outline-none transition-all duration-300 font-medium hover:border-rose-300" 
                  placeholder="örnek@mail.com" 
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Konu</label>
              <input 
                type="text" 
                required
                className="w-full px-6 py-4 rounded-md bg-slate-50 border border-slate-200 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100/50 outline-none transition-all duration-300 font-medium hover:border-rose-300" 
                placeholder="Randevu veya Bilgi Talebi" 
              />
            </div>

            <div className="space-y-3">
              <label className="text-sm font-bold text-slate-700 ml-1 uppercase tracking-wider">Mesajınız</label>
              <textarea 
                rows={6} 
                required
                className="w-full px-6 py-4 rounded-md bg-slate-50 border border-slate-200 focus:border-rose-400 focus:bg-white focus:ring-4 focus:ring-rose-100/50 outline-none transition-all duration-300 font-medium resize-none hover:border-rose-300" 
                placeholder="Nasıl yardımcı olabilirim?"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="w-full bg-rose-400 text-white font-bold py-5 rounded-md hover:bg-rose-500 transition-all shadow-[6px_6px_0_0_rgba(251,113,133,0.3)] hover:shadow-[8px_8px_0_0_rgba(251,113,133,0.4)] transform hover:-translate-y-1 active:translate-y-1 active:shadow-none"
            >
              Mesajı Gönder
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}