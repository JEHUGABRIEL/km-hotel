import React from 'react';
import { motion } from 'framer-motion';
import {
  Wifi,
  Zap,
  Droplets,
  Coffee,
  UtensilsCrossed,
  Users } from
'lucide-react';
const services = [
{
  icon: <Zap className="w-8 h-8" />,
  title: 'Autonomie Électrique',
  description:
  "Profitez d'un séjour sans interruption grâce à notre système d'alimentation électrique 100% autonome et fiable."
},
{
  icon: <Droplets className="w-8 h-8" />,
  title: 'Autonomie Hydraulique',
  description:
  "Une réserve d'eau indépendante garantissant un confort optimal et continu dans toutes nos installations."
},
{
  icon: <Wifi className="w-8 h-8" />,
  title: 'Internet Haut Débit',
  description:
  "Restez connecté avec le monde grâce à notre connexion Wi-Fi rapide et gratuite dans tout l'établissement."
},
{
  icon: <UtensilsCrossed className="w-8 h-8" />,
  title: 'Restaurant Gastronomique',
  description:
  'Une carte soignée mêlant saveurs locales et cuisine internationale pour ravir les palais les plus exigeants.'
},
{
  icon: <Coffee className="w-8 h-8" />,
  title: 'Bar Lounge Cosy',
  description:
  'Détendez-vous avec notre gamme variée de vins, champagnes et spiritueux dans une ambiance élégante.'
},
{
  icon: <Users className="w-8 h-8" />,
  title: 'Salles de Conférence',
  description:
  'Deux espaces modulables parfaitement équipés pour vos réunions professionnelles ou événements privés.'
}];

export function Amenities() {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-brand-600 font-medium tracking-widest uppercase text-sm mb-3">
            Nos Services
          </h2>
          <h3 className="text-4xl font-serif text-slate-900 mb-6">
            Confort absolu & Sérénité
          </h3>
          <p className="text-slate-600 font-light">
            Le KM Hotel a été pensé pour répondre à toutes vos exigences. De
            notre autonomie énergétique totale à nos espaces de détente, chaque
            détail compte.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) =>
          <motion.div
            key={index}
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
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-white p-8 rounded-sm shadow-sm hover:shadow-md transition-shadow border border-slate-100">
            
              <div className="text-brand-500 mb-6 bg-brand-50 w-16 h-16 flex items-center justify-center rounded-full">
                {service.icon}
              </div>
              <h4 className="text-xl font-serif text-slate-900 mb-3">
                {service.title}
              </h4>
              <p className="text-slate-600 font-light text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}