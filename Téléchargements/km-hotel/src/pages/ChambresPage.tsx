import React from 'react';
import { motion } from 'framer-motion';
import {
  Wifi,
  Tv,
  Snowflake,
  Bath,
  Coffee,
  Users,
  Bed,
  Square,
  ChevronDown,
  Shield,
  Zap,
  Droplets,
  Phone
} from 'lucide-react';
import { Link } from 'react-router-dom';

const rooms = [
  {
    name: 'Chambre Confort',
    price: 'À partir de 65 000 XAF',
    size: '25 m²',
    capacity: '1-2 personnes',
    bed: 'Lit Queen Size (160x200)',
    description:
      'Nos chambres Confort allient design contemporain et fonctionnalité. Idéales pour les voyageurs d\'affaires ou les courts séjours, elles offrent un espace de travail ergonomique et tout le nécessaire pour un séjour agréable.',
    features: [
      'Lit Queen Size avec linge de lit haut de gamme',
      'Espace bureau avec lampe de lecture',
      'Climatisation individuelle réversible',
      'Smart TV 43" avec chaînes satellite',
      'Wi-Fi haut débit (fibre optique)',
      'Salle de bain privative avec douche italienne',
      'Nécessaire de courtoisie (peignoir, chaussons)',
      'Mini-bar et coffre-fort'
    ],
    image:
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&q=80',
    badge: 'Populaire'
  },
  {
    name: 'Chambre Deluxe',
    price: 'À partir de 85 000 XAF',
    size: '32 m²',
    capacity: '1-2 personnes',
    bed: 'Lit King Size (180x200)',
    description:
      'Un cran au-dessus, la chambre Deluxe vous offre un espace généreux et des prestations premium. Sa décoration raffinée crée une atmosphère apaisante pour une expérience de séjour exceptionnelle.',
    features: [
      'Lit King Size avec surmatelas en mousse à mémoire',
      'Coin salon avec fauteuil lounge',
      'Grande baie vitrée avec vue sur la ville',
      'Climatisation silencieuse',
      'Smart TV 50"',
      'Wi-Fi haut débit prioritaire',
      'Salle de bain avec baignoire balnéo',
      'Machine à café Nespresso',
      'Plateau de bienvenue offert'
    ],
    image:
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80',
    badge: 'Recommandée'
  },
  {
    name: 'Suite Exécutive',
    price: 'À partir de 120 000 XAF',
    size: '45 m²',
    capacity: '1-3 personnes',
    bed: 'Lit King Size (180x200) + Canapé-lit',
    description:
      'Notre Suite Exécutive est l\'incarnation du luxe discret. Avec son vaste espace de vie séparé, elle convient aussi bien aux séjours d\'affaires de haut niveau qu\'aux couples en quête d\'une expérience inoubliable.',
    features: [
      'Chambre séparée avec Lit King Size',
      'Salon spacieux avec canapé d\'angle convertible',
      'Espace repas avec table pour 4 personnes',
      'Terrasse privative ou balcon panoramique',
      'Climatisation multi-zones',
      'Smart TV 65" (chambre) + 50" (salon)',
      'Salle de bain luxueuse avec douche et baignoire',
      'Prestations VIP (conciergerie, accès prioritaire)',
      'Champagne et fruits frais à l\'arrivée'
    ],
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&q=80',
    badge: 'Premium'
  },
  {
    name: 'Suite Présidentielle',
    price: 'Sur demande',
    size: '70 m²',
    capacity: '1-4 personnes',
    bed: 'Lit King Size (200x200) + Salon séparé',
    description:
      'Le summum de l\'élégance au KM Hotel. La Suite Présidentielle occupe le dernier étage avec une vue imprenable sur Bangui. Chaque détail a été pensé pour offrir une expérience royale à nos hôtes les plus exigeants.',
    features: [
      'Suite d\'angle avec vue panoramique à 180°',
      'Grand salon avec mobilier design',
      'Salle à manger privée',
      'Espace bureau directorial',
      'Terrasse privée avec jacuzzi',
      'Dressing et walk-in closet',
      'Domotique intégrée (éclairage, stores, son)',
      'Service majordome dédié 24h/24',
      'Transfert aéroport privé inclus',
      'Accès au lounge VIP'
    ],
    image:
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&q=80',
    badge: 'Exclusive'
  }
];

const roomAmenities = [
  { icon: <Zap className="w-5 h-5" />, label: 'Autonomie électrique' },
  { icon: <Droplets className="w-5 h-5" />, label: 'Autonomie hydraulique' },
  { icon: <Wifi className="w-5 h-5" />, label: 'Wi-Fi fibre haut débit' },
  { icon: <Tv className="w-5 h-5" />, label: 'Smart TV satellite' },
  { icon: <Snowflake className="w-5 h-5" />, label: 'Climatisation réversible' },
  { icon: <Shield className="w-5 h-5" />, label: 'Coffre-fort individuel' },
  { icon: <Coffee className="w-5 h-5" />, label: 'Mini-bar / Nespresso' },
  { icon: <Bath className="w-5 h-5" />, label: 'Salle de bain privative' }
];

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export function ChambresPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* ===== HERO ===== */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        >
          <div className="absolute inset-0 bg-slate-900/60 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/30 to-slate-900/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="text-brand-300 font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4 block">
              Hébergement de luxe
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold mb-6 leading-tight">
              Nos Chambres & Suites
            </h1>
            <p className="text-lg md:text-xl text-slate-200 max-w-2xl mx-auto font-light">
              31 chambres et suites au design raffiné, pensées pour votre confort
              absolu au cœur de Bangui.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/60"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeUp} className="text-center max-w-3xl mx-auto">
            <h2 className="text-brand-600 font-medium tracking-widest uppercase text-sm mb-3">
              Un confort inégalé
            </h2>
            <h3 className="text-4xl font-serif text-slate-900 mb-6">
              L'Art de l'Hospitalité
            </h3>
            <p className="text-slate-600 font-light leading-relaxed">
              Chaque chambre du KM Hotel a été méticuleusement conçue pour offrir
              une expérience de séjour unique. Design contemporain, matériaux
              nobles, literie haut de gamme et technologies modernes se conjuguent
              pour créer une atmosphère élégante et apaisante. Profitez de notre
              autonomie électrique et hydraulique totale, gage de tranquillité
              en toutes circonstances.
            </p>
          </motion.div>

          {/* Amenities bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-16 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4"
          >
            {roomAmenities.map((amenity, i) => (
              <div
                key={i}
                className="flex flex-col items-center text-center p-4 bg-slate-50 rounded-sm border border-slate-100 hover:bg-brand-50 hover:border-brand-200 transition-all duration-300 group"
              >
                <div className="text-brand-500 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {amenity.icon}
                </div>
                <span className="text-xs text-slate-600 font-medium leading-tight">
                  {amenity.label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ===== ROOMS GRID ===== */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24">
            {rooms.map((room, index) => (
              <motion.div
                key={room.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="aspect-[4/3] overflow-hidden rounded-sm shadow-xl">
                    <img
                      src={room.image}
                      alt={room.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10" />
                  </div>

                  {/* Badge */}
                  <span
                    className={`absolute top-4 left-4 px-4 py-1.5 text-xs font-bold uppercase tracking-wider rounded-sm ${
                      index === 3
                        ? 'bg-amber-400 text-slate-900'
                        : 'bg-brand-600 text-white'
                    }`}
                  >
                    {room.badge}
                  </span>
                </div>

                {/* Content */}
                <div
                  className={`${
                    index % 2 === 1 ? 'lg:order-1 lg:text-right' : 'lg:order-2'
                  }`}
                >
                  <h3 className="text-3xl md:text-4xl font-serif text-slate-900 mb-2">
                    {room.name}
                  </h3>

                  <div className="flex flex-wrap gap-4 mt-4 mb-6 text-sm text-slate-500">
                    <span className="flex items-center gap-1.5">
                      <Square className="w-4 h-4 text-brand-500" />
                      {room.size}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4 text-brand-500" />
                      {room.capacity}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Bed className="w-4 h-4 text-brand-500" />
                      {room.bed}
                    </span>
                  </div>

                  <p
                    className={`text-slate-600 font-light leading-relaxed mb-6 ${
                      index % 2 === 1 ? 'lg:ml-auto' : ''
                    }`}
                  >
                    {room.description}
                  </p>

                  <ul
                    className={`space-y-2.5 mb-8 ${
                      index % 2 === 1 ? 'lg:flex lg:flex-col lg:items-end' : ''
                    }`}
                  >
                    {room.features.slice(0, 6).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-sm text-slate-700"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-500 shrink-0" />
                        <span className="font-light">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-4">
                    <span className="text-2xl font-serif text-brand-600">
                      {room.price}
                    </span>
                    <Link
                      to="/contact"
                      className="px-6 py-3 bg-brand-600 text-white font-medium text-sm uppercase tracking-wider hover:bg-brand-700 transition-colors"
                    >
                      Réserver
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER ===== */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80")',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed'
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">
              Vivez l'Expérience KM Hotel
            </h2>
            <p className="text-slate-300 font-light text-lg mb-10 max-w-2xl mx-auto">
              Offrez-vous le meilleur de l'hôtellerie centrafricaine.
              Réservez dès maintenant votre chambre ou suite.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-4 bg-brand-600 text-white font-medium tracking-wide hover:bg-brand-700 transition-colors"
              >
                Réserver maintenant
              </Link>
              <a
                href="tel:+23675494969"
                className="flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/30 hover:bg-white/20 transition-colors"
              >
                <Phone className="w-4 h-4" />
                +236 75 49 49 69
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
