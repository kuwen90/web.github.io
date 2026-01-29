import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ActivitiesSection from './components/ActivitiesSection';
import CredentialSection from './components/CredentialSection';
import Footer from './components/Footer';
import FloatingWA from './components/FloatingWA';
import { fetchActivities, fetchCertifications, fetchProfile } from './services/mockDb';
import { Activity, Certification, ProfileConfig } from './types';

const App: React.FC = () => {
  const [profile, setProfile] = useState<ProfileConfig | null>(null);
  const [activities, setActivities] = useState<Activity[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [profileData, activitiesData, certData] = await Promise.all([
          fetchProfile(),
          fetchActivities(),
          fetchCertifications()
        ]);
        
        setProfile(profileData);
        setActivities(activitiesData);
        setCertifications(certData);
      } catch (error) {
        console.error("Failed to load data", error);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading || !profile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-brand border-t-transparent rounded-full animate-spin"></div>
          <p className="text-gray-500 font-medium animate-pulse">Memuat Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-brand selection:text-white">
      <Navbar profile={profile} />
      
      <main>
        <HeroSection profile={profile} />
        <ActivitiesSection activities={activities} />
        <CredentialSection certifications={certifications} />
      </main>

      <Footer profile={profile} />
      
      <FloatingWA 
        phoneNumber={profile.phone} 
        message={profile.whatsappMessage} 
      />
    </div>
  );
};

export default App;