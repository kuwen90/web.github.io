export interface Activity {
  id: string;
  title: string;
  date: string;
  description: string;
  imageUrl: string;
  category: 'Seminar' | 'Client Meeting' | 'Community' | 'Award';
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  iconType: 'award' | 'file' | 'shield';
}

export interface ProfileConfig {
  name: string;
  title: string;
  phone: string;
  email: string;
  whatsappMessage: string;
  instagramUrl: string;
}