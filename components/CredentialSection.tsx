import React from 'react';
import { motion } from 'framer-motion';
import { Certification } from '../types';
import { Award, Shield, FileCheck } from 'lucide-react';

interface CredentialProps {
  certifications: Certification[];
}

const CredentialSection: React.FC<CredentialProps> = ({ certifications }) => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'award': return <Award className="w-8 h-8 text-yellow-500" />;
      case 'shield': return <Shield className="w-8 h-8 text-brand" />;
      default: return <FileCheck className="w-8 h-8 text-blue-500" />;
    }
  };

  return (
    <section id="credentials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          
          <div className="flex-1 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Kredibilitas & <span className="text-brand">Sertifikasi</span>
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Kepercayaan Anda adalah prioritas utama. Saya terus meningkatkan kompetensi profesional melalui sertifikasi resmi dan pelatihan berkelanjutan untuk memberikan saran terbaik bagi perencanaan keuangan Anda.
              </p>
              
              <div className="grid gap-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-shadow">
                    <div className="p-3 bg-gray-50 rounded-lg">
                      {getIcon(cert.iconType)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{cert.title}</h4>
                      <p className="text-sm text-gray-500">{cert.issuer} • {cert.year}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 flex justify-center"
          >
            <div className="bg-brand text-white p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden text-center max-w-md w-full">
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-black/10 rounded-full -ml-10 -mb-10 blur-xl"></div>
              
              <Shield className="w-16 h-16 mx-auto mb-6 text-white/90" />
              <h3 className="text-2xl font-bold mb-4">Komitmen Profesional</h3>
              <p className="text-brand-50 mb-8">
                "Saya berkomitmen memegang teguh kode etik profesi asuransi Indonesia, memberikan informasi yang transparan, dan mendampingi nasabah dalam jangka panjang."
              </p>
              <div className="w-32 h-1 bg-white/30 mx-auto rounded-full"></div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default CredentialSection;