import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { ProfileConfig } from '../types';

interface HeroProps {
  profile: ProfileConfig;
}

const HeroSection: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="about" className="relative pt-28 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-br from-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-50 text-brand text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand"></span>
              </span>
              Siap Melayani Anda
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Halo, Saya {profile.name}, <br />
              <span className="text-brand">Mitra Perencana</span> Perlindungan Anda.
            </h1>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto md:mx-0">
              Membantu individu dan keluarga Indonesia merencanakan masa depan yang aman dan terjamin melalui solusi asuransi syariah dan konvensional yang transparan dan terpercaya.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <button 
                onClick={() => document.getElementById('activities')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-gray-200 hover:border-brand text-gray-700 hover:text-brand rounded-xl font-semibold transition-all"
              >
                Lihat Kegiatan
              </button>
            </div>

            <div className="mt-10 flex flex-wrap justify-center md:justify-start gap-4 md:gap-8 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand" />
                <span>Terlisensi Resmi</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand" />
                <span>Klaim Terbantu 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-brand" />
                <span>500+ Nasabah</span>
              </div>
            </div>
          </motion.div>

          {/* Image Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 relative"
          >
             <div className="relative w-full aspect-[4/5] md:aspect-square max-w-md mx-auto">
                <div className="absolute inset-0 bg-brand rounded-3xl rotate-6 opacity-10"></div>
                <div className="absolute inset-0 bg-gray-900 rounded-3xl -rotate-3 opacity-5"></div>
                <img 
                  src="https://picsum.photos/seed/insurance_pro/800/1000" 
                  alt="Professional Portrait" 
                  className="relative w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-white"
                />
                
                {/* Floating Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl border border-gray-100 flex items-center gap-3">
                  <div className="bg-brand/10 p-3 rounded-full text-brand">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase font-semibold">Pengalaman</p>
                    <p className="text-xl font-bold text-gray-900">7+ Tahun</p>
                  </div>
                </div>
             </div>
          </motion.div>
        </div>
      </div>

      {/* Background Decor */}
      <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-brand-50 rounded-full blur-3xl opacity-50 z-0"></div>
    </section>
  );
};

export default HeroSection;