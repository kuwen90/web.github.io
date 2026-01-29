import { Activity, Certification, ProfileConfig } from '../types';

// In a real app, this would be your Supabase or Firebase client instance
// import { createClient } from '@supabase/supabase-js';

const MOCK_PROFILE: ProfileConfig = {
  name: "NamaMu",
  title: "Jabatan/Pekerjaan",
  phone: "NomorMU",
  email: "EmailMu",
  whatsappMessage: "Pesan kepada diri saya dari client",
  instagramUrl: "https://instagram.com/UsernamMu"
};

const MOCK_ACTIVITIES: Activity[] = [
  {
    id: '1',
    title: 'Penyerahan Klaim Nasabah',
    date: '12 Oktober 2023',
    description: 'Membantu proses pencairan klaim kesehatan nasabah prioritas di RS Pondok Indah.',
    category: 'Client Meeting',
    imageUrl: 'https://picsum.photos/seed/activity1/600/400'
  },
  {
    id: '2',
    title: 'Seminar Literasi Keuangan',
    date: '25 September 2023',
    description: 'Berbagi ilmu mengenai pentingnya dana darurat dan proteksi aset untuk keluarga muda.',
    category: 'Seminar',
    imageUrl: 'https://picsum.photos/seed/activity2/600/400'
  },
  {
    id: '3',
    title: 'Annual Awarding Night',
    date: '10 Agustus 2023',
    description: 'Menerima penghargaan Top 10 Producer of the Year.',
    category: 'Award',
    imageUrl: 'https://picsum.photos/seed/activity3/600/400'
  },
  {
    id: '4',
    title: 'Konsultasi Perencanaan Waris',
    date: '5 November 2023',
    description: 'Diskusi mendalam mengenai wakaf asuransi dan perencanaan waris syariah.',
    category: 'Client Meeting',
    imageUrl: 'https://picsum.photos/seed/activity4/600/400'
  }
];

const MOCK_CERTS: Certification[] = [
  {
    id: '1',
    title: 'Lisensi Penuh AAJI',
    issuer: 'Asosiasi Asuransi Jiwa Indonesia',
    year: '2018',
    iconType: 'shield'
  },
  {
    id: '2',
    title: 'Certified Financial Planner',
    issuer: 'FPSB Indonesia',
    year: '2020',
    iconType: 'file'
  },
  {
    id: '3',
    title: 'Top Agent Award 2022',
    issuer: 'National Insurance Corp',
    year: '2022',
    iconType: 'award'
  }
];

// Simulating Async Database Calls
export const fetchProfile = async (): Promise<ProfileConfig> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_PROFILE), 100);
  });
};

export const fetchActivities = async (): Promise<Activity[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_ACTIVITIES), 300);
  });
};

export const fetchCertifications = async (): Promise<Certification[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(MOCK_CERTS), 200);
  });
};