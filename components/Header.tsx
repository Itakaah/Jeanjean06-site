import React, { useState, useEffect } from 'react';
import { MenuIcon, XIcon, PhoneIcon } from './Icons';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Accueil', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'À Propos', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 md:px-8 flex justify-between items-center">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold tracking-tighter flex items-center gap-2 group">
          <div className="w-10 h-10 bg-blue-700 rounded-lg flex items-center justify-center text-white font-extrabold group-hover:bg-orange-500 transition-colors">
            J
          </div>
          <span className={`${isScrolled ? 'text-gray-900' : 'text-gray-900 md:text-white'} transition-colors`}>
            Jeanjean<span className="text-blue-600 font-extrabold">06</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className={`font-medium hover:text-orange-500 transition-colors ${
                isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+33600000000" 
            className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-5 py-2.5 rounded-full font-semibold transition shadow-lg transform hover:-translate-y-0.5"
          >
            <PhoneIcon className="w-4 h-4" />
            <span>Urgence</span>
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <XIcon className={`w-8 h-8 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          ) : (
            <MenuIcon className={`w-8 h-8 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-4 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-800 font-medium py-2 border-b border-gray-50"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="tel:+33600000000" 
            className="flex items-center justify-center gap-2 bg-red-600 text-white px-5 py-3 rounded-lg font-bold"
            onClick={() => setMobileMenuOpen(false)}
          >
            <PhoneIcon className="w-5 h-5" />
            APPELER MAINTENANT
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;