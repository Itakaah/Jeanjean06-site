import React from 'react';
import { AwardIcon } from './Icons';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          <div className="lg:w-1/2 relative">
            <div className="absolute top-4 left-4 w-full h-full border-4 border-blue-100 rounded-2xl -z-10 transform translate-x-4 translate-y-4"></div>
            <img 
              src="https://images.unsplash.com/photo-1581578731117-10452b7cc5f2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
              alt="Quentin Jeanjean Plombier" 
              className="w-full rounded-2xl shadow-xl object-cover h-[500px]"
            />
            <div className="absolute bottom-8 right-8 bg-white p-6 rounded-xl shadow-lg max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-orange-100 rounded-full text-orange-600">
                        <AwardIcon className="w-6 h-6" />
                    </div>
                    <div>
                        <p className="font-bold text-gray-900 text-lg">13 Ans</p>
                        <p className="text-sm text-gray-500">d'expérience</p>
                    </div>
                </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-2">À Propos de moi</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Votre artisan de confiance à Nice
            </h3>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              <p>
                Bonjour ! Je suis <span className="font-bold text-gray-800">Quentin Jeanjean</span>, le fondateur de Jeanjean06.
              </p>
              <p>
                Vous recherchez un plombier chauffagiste diplômé, sérieux et disponible ? 
                Je mets mes 13 années d'expérience à votre service pour tous vos besoins en plomberie et chauffage.
              </p>
              <p>
                Mon engagement est simple : fournir un travail de qualité, durable, avec des tarifs raisonnables et transparents. 
                Je suis couvert par une assurance décennale pour votre tranquillité d'esprit.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                {[
                  "Disponible et à l'écoute",
                  "Entreprise sérieuse",
                  "Diplômé d'État",
                  "Assurance Décennale"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span className="font-medium text-gray-800">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8">
                <p className="font-handwriting text-2xl text-blue-800 transform -rotate-2">
                  "Au plaisir de vous voir !"
                </p>
                <p className="font-bold text-gray-900 mt-2">Quentin Jeanjean</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;