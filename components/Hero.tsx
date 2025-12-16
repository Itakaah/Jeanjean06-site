import React from 'react';
import { ShieldCheckIcon, ClockIcon, AwardIcon } from './Icons';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 md:pt-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Plomberie et Tuyauterie Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-blue-800/60 mix-blend-multiply"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-white">
        <div className="max-w-3xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-blue-800/50 border border-blue-400/30 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
            <span className="text-sm font-medium tracking-wide uppercase">Disponible 7j/7 sur Nice</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
            Plombier Chauffagiste <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
              Diplômé & Sérieux
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl leading-relaxed">
            13 ans d'expérience à votre service pour vos urgences, rénovations et dépannages. 
            Intervention rapide, prix raisonnable et garantie décennale.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-bold text-lg shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1 text-center"
            >
              Demander un Devis
            </a>
            <a 
              href="tel:+33600000000" 
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/30 rounded-lg font-bold text-lg backdrop-blur-md transition-all text-center"
            >
              Urgence 06.XX.XX.XX.XX
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <ClockIcon className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <p className="font-bold">Intervention Rapide</p>
                <p className="text-sm text-blue-200">Dépannage d'urgence</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <ShieldCheckIcon className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <p className="font-bold">Assurance Décennale</p>
                <p className="text-sm text-blue-200">Travaux garantis</p>
              </div>
            </div>
             <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <AwardIcon className="w-6 h-6 text-blue-300" />
              </div>
              <div>
                <p className="font-bold">13 ans d'Expérience</p>
                <p className="text-sm text-blue-200">Artisan diplômé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;