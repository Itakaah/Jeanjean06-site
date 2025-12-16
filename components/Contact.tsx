import React from 'react';
import { PhoneIcon, MailIcon, MessageCircleIcon } from './Icons';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-orange-400 font-bold tracking-wide uppercase text-sm mb-2">Contactez-moi</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Besoin d'un dépannage ou d'un devis ?</h3>
            <p className="text-blue-200 mb-10 text-lg">
              N'hésitez pas à m'appeler, à m'écrire par email ou à m'envoyer un sms pour toutes informations supplémentaires ! 
              Réponse rapide garantie.
            </p>

            <div className="space-y-6">
              <a href="tel:+33600000000" className="flex items-center gap-6 p-6 bg-blue-800/50 rounded-xl hover:bg-blue-800 transition border border-blue-700">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
                  <PhoneIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold">Téléphone / SMS</p>
                  <p className="text-2xl font-bold">06 XX XX XX XX</p>
                </div>
              </a>

              <a href="mailto:contact@jeanjean06.com" className="flex items-center gap-6 p-6 bg-blue-800/50 rounded-xl hover:bg-blue-800 transition border border-blue-700">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <MailIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-sm text-blue-200 uppercase tracking-wider font-semibold">Email</p>
                  <p className="text-xl font-bold">contact@jeanjean06.com</p>
                </div>
              </a>
            </div>
            
            <div className="mt-12 p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/10">
                <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                    <MessageCircleIcon className="w-5 h-5 text-orange-400"/>
                    Le saviez-vous ?
                </h4>
                <p className="text-sm text-blue-100">
                    Vous pouvez utiliser l'assistant virtuel (bulle bleue en bas à droite) pour me poser des questions préliminaires avant de m'appeler !
                </p>
            </div>
          </div>

          <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-2xl">
            <h4 className="text-2xl font-bold mb-6">Envoyer un message</h4>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600">Nom</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50" placeholder="Votre nom" />
                </div>
                <div className="space-y-1">
                  <label className="text-sm font-semibold text-gray-600">Téléphone</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50" placeholder="06..." />
                </div>
              </div>
              
              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600">Email</label>
                <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50" placeholder="votre@email.com" />
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600">Type de demande</label>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50">
                    <option>Urgence Fuite</option>
                    <option>Demande de Devis</option>
                    <option>Rénovation Salle de Bain</option>
                    <option>Problème Chauffage</option>
                    <option>Autre</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-sm font-semibold text-gray-600">Message</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition bg-gray-50" placeholder="Décrivez votre besoin..."></textarea>
              </div>

              <button type="button" className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-lg shadow-lg transition transform hover:-translate-y-1">
                Envoyer ma demande
              </button>
              <p className="text-xs text-gray-500 text-center mt-4">
                Jeanjean06 s'engage à vous répondre sous 24h ouvrées.
              </p>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;