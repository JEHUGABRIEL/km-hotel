import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
export function Contact() {
  return (
    <section id="contact" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6
            }}>
            
            <h2 className="text-brand-600 font-medium tracking-widest uppercase text-sm mb-3">
              Réservations & Contact
            </h2>
            <h3 className="text-4xl font-serif text-slate-900 mb-6">
              Prêt à séjourner au KM Hotel ?
            </h3>
            <p className="text-slate-600 font-light mb-10">
              Notre équipe est à votre entière disposition pour organiser votre
              séjour, vos événements professionnels ou vos réceptions privées.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm mr-4 text-brand-600">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-slate-900 mb-1">
                    Téléphone
                  </h4>
                  <p className="text-slate-600 font-light">
                    Direction de l'hôtel :
                  </p>
                  <a
                    href="tel:+23675494969"
                    className="text-xl font-medium text-brand-600 hover:text-brand-700 transition-colors">
                    
                    +236 75 49 49 69
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm mr-4 text-brand-600">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-slate-900 mb-1">
                    Adresse
                  </h4>
                  <p className="text-slate-600 font-light">
                    Ancien Hôtel Somba
                    <br />
                    Centre-ville, Bangui
                    <br />
                    République Centrafricaine
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-3 rounded-full shadow-sm mr-4 text-brand-600">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-slate-900 mb-1">
                    Réception
                  </h4>
                  <p className="text-slate-600 font-light">
                    Ouverte 24h/24 et 7j/7
                    <br />
                    Accueil chaleureux garanti
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Visual only for demo) */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.6,
              delay: 0.2
            }}
            className="bg-white p-8 md:p-10 rounded-sm shadow-xl border border-slate-100">
            
            <h4 className="text-2xl font-serif text-slate-900 mb-6">
              Demande de réservation
            </h4>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Prénom & Nom
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="Jean Dupont" />
                  
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Téléphone / Email
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all"
                    placeholder="contact@email.com" />
                  
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Date d'arrivée
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-500" />
                  
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Date de départ
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all text-slate-500" />
                  
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Message ou Demande spéciale
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-200 rounded-sm focus:ring-2 focus:ring-brand-500 focus:border-brand-500 outline-none transition-all resize-none"
                  placeholder="Je souhaiterais réserver une chambre pour...">
                </textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-600 text-white font-medium py-4 rounded-sm hover:bg-brand-700 transition-colors uppercase tracking-wider text-sm">
                
                Envoyer la demande
              </button>
              <p className="text-xs text-center text-slate-500 mt-4">
                Pour une réservation immédiate, privilégiez l'appel téléphonique
                au +236 75 49 49 69.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>);

}