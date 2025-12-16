import React from 'react';
import { WrenchIcon, DropletIcon, FlameIcon, SearchIcon, ShieldCheckIcon, AwardIcon } from './Icons';
import { ServiceItem } from '../types';

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "Urgence & Dépannage",
      description: "Intervention rapide pour fuites d'eau, canalisations bouchées ou panne de chauffe-eau. Disponible quand vous en avez besoin.",
      icon: <ClockIcon className="w-8 h-8 text-white" />
    },
    {
      title: "Recherche de Fuite",
      description: "Détection précise des fuites non destructrice. Économisez sur votre facture d'eau et évitez les dégâts des eaux.",
      icon: <SearchIcon className="w-8 h-8 text-white" />
    },
    {
      title: "Installation & Rénovation",
      description: "Rénovation complète de salle de bain, installation de sanitaires, robinetterie et modification de réseaux.",
      icon: <WrenchIcon className="w-8 h-8 text-white" />
    },
    {
      title: "Chauffage",
      description: "Entretien, réparation et installation de radiateurs et systèmes de chauffage. Gardez votre maison au chaud.",
      icon: <FlameIcon className="w-8 h-8 text-white" />
    },
    {
      title: "Soudure & Technique",
      description: "Maîtrise technique pour tous types de soudures (cuivre, acier) garantissant longévité et solidité.",
      icon: <DropletIcon className="w-8 h-8 text-white" />
    },
    {
      title: "Prix Raisonnable",
      description: "Des tarifs clairs et honnêtes. Devis gratuit avant travaux. Pas de mauvaises surprises avec Jeanjean06.",
      icon: <ShieldCheckIcon className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">Mes Compétences</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Services de Plomberie Complète</h3>
          <div className="w-20 h-1 bg-orange-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:bg-orange-500 transition-colors duration-300 transform group-hover:rotate-3">
                {service.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h4>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Helper for the icon within the array
const ClockIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12 6 12 12 16 14"></polyline>
  </svg>
);

export default Services;