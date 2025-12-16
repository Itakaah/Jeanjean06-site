import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
                <h5 className="text-white text-lg font-bold mb-4">Jeanjean06</h5>
                <p className="text-sm leading-relaxed">
                    Plombier chauffagiste à Nice. <br/>
                    13 ans d'expérience.<br/>
                    Intervention rapide et soignée.
                </p>
            </div>
            <div>
                <h5 className="text-white text-lg font-bold mb-4">Services</h5>
                <ul className="text-sm space-y-2">
                    <li><a href="#services" className="hover:text-white transition">Urgence</a></li>
                    <li><a href="#services" className="hover:text-white transition">Rénovation</a></li>
                    <li><a href="#services" className="hover:text-white transition">Recherche de fuite</a></li>
                </ul>
            </div>
            <div>
                <h5 className="text-white text-lg font-bold mb-4">Zone d'intervention</h5>
                <p className="text-sm leading-relaxed">
                    Nice Centre<br/>
                    Nice Nord<br/>
                    Collines Niçoises<br/>
                    Et alentours proche
                </p>
            </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
            <p>&copy; {new Date().getFullYear()} Jeanjean06. Tous droits réservés.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Mentions Légales</a>
                <a href="#" className="hover:text-white">Politique de confidentialité</a>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;