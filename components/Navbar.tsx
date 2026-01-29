import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { ProfileConfig } from '../types';

interface NavbarProps {
  profile: ProfileConfig;
}

const Navbar: React.FC<NavbarProps> = ({ profile }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#about');

  const navLinks = [
    { name: 'Tentang', href: '#about' },
    { name: 'Kegiatan', href: '#activities' },
    { name: 'Sertifikasi', href: '#credentials' },
    { name: 'Kontak', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background change logic
      setIsScrolled(window.scrollY > 20);

      // ScrollSpy Logic
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      // Loop to find active section
      for (const link of navLinks) {
        const section = document.getElementById(link.href.substring(1));
        if (section) {
          const offsetTop = section.offsetTop;
          const offsetHeight = section.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(link.href);
          }
        }
      }

      // Edge case: Check if we are at the very bottom of the page (activates Contact)
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 20) {
        setActiveSection('#contact');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger once on mount to set initial active state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActiveSection(href); // Immediate feedback
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      // Calculate position with offset for fixed header
      const navHeight = 80; 
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo / Name */}
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setActiveSection('#about');
            }}
          >
            <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">{profile.name.charAt(0)}</span>
            </div>
            <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              {profile.name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`transition-all duration-300 text-sm uppercase tracking-wide cursor-pointer font-medium ${
                    activeSection === link.href 
                    ? 'text-brand font-bold' 
                    : 'text-gray-600 hover:text-brand'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="bg-brand hover:bg-brand-dark text-white px-5 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 shadow-sm hover:shadow-md">
              <Download size={16} />
              <span>Unduh Profil</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-brand"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg animate-in slide-in-from-top-5 fade-in">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`block font-medium py-2 px-3 rounded-lg cursor-pointer ${
                    activeSection === link.href 
                    ? 'text-brand bg-brand-50 font-bold' 
                    : 'text-gray-700 hover:text-brand hover:bg-brand-50'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full mt-4 bg-brand text-white px-5 py-3 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
              <Download size={16} />
              <span>Unduh Profil</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;