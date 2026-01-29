import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from '../types';
import { Calendar, Tag } from 'lucide-react';

interface ActivitiesProps {
  activities: Activity[];
}

const ActivitiesSection: React.FC<ActivitiesProps> = ({ activities }) => {
  return (
    <section id="activities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-brand font-semibold tracking-wider uppercase text-sm"
          >
            Jurnal Profesional
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-2 text-3xl md:text-4xl font-bold text-gray-900"
          >
            Kegiatan & Aktivitas Saya
          </motion.h2>
          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Dokumentasi nyata dedikasi saya dalam melayani nasabah dan berkontribusi untuk literasi keuangan masyarakat.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl border border-gray-100 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-sm text-white text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
                  <Tag size={12} />
                  {activity.category}
                </div>
                <img 
                  src={activity.imageUrl} 
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                  <Calendar size={14} />
                  <span>{activity.date}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand transition-colors">
                  {activity.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {activity.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
            <button className="text-brand font-medium hover:text-brand-dark transition-colors border-b-2 border-transparent hover:border-brand pb-1">
                Lihat Semua Dokumentasi
            </button>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;