import React from 'react';
import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { ProfileConfig } from '../types';

interface FooterProps {
  profile: ProfileConfig;
}

const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold tracking-tight text-white">
              {profile.name}
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Mitra terpercaya untuk perlindungan finansial dan asuransi masa depan Anda dan keluarga.
            </p>
            <div className="flex gap-4">
              <a 
                href={profile.instagramUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand transition-colors group"
              >
                <Instagram size={20} className="text-gray-400 group-hover:text-white" />
              </a>
              <a 
                href={`mailto:${profile.email}`}
                className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand transition-colors group"
              >
                <Mail size={20} className="text-gray-400 group-hover:text-white" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <h4 className="text-lg font-semibold mb-6 text-white">Hubungi Saya</h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <a href={`tel:${profile.phone}`} className="flex items-start gap-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-800/80 transition-colors group">
                <Phone className="text-brand group-hover:text-white transition-colors" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Telepon / WhatsApp</p>
                  <p className="text-white font-medium">{profile.phone}</p>
                </div>
              </a>
              
              <a href={`mailto:${profile.email}`} className="flex items-start gap-4 p-4 rounded-xl bg-gray-800 hover:bg-gray-800/80 transition-colors group">
                <Mail className="text-brand group-hover:text-white transition-colors" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Email</p>
                  <p className="text-white font-medium">{profile.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-gray-800 sm:col-span-2">
                <MapPin className="text-brand shrink-0" />
                <div>
                  <p className="text-xs text-gray-500 uppercase font-semibold mb-1">Area Layanan</p>
                  <p className="text-white font-medium">Jakarta, Bogor, Depok, Tangerang, Bekasi (Jabodetabek) & Konsultasi Online Seluruh Indonesia</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
          <p>Professional Insurance Partner.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;