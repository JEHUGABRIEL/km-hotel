import React from 'react';
import { Link } from 'react-router-dom';
export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 py-12 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h5 className="font-serif text-2xl text-white mb-4 tracking-wider">
              KM HOTEL
            </h5>
            <p className="text-sm font-light leading-relaxed text-slate-400 max-w-xs">
              La nouvelle pépite de l'hôtellerie à Bangui. Un boutique hôtel 3
              étoiles offrant confort, élégance et autonomie totale au cœur de
              la capitale centrafricaine.
            </p>
          </div>

          <div>
            <h6 className="text-white font-medium uppercase tracking-wider text-sm mb-4">
              Liens Rapides
            </h6>
            <ul className="space-y-2 text-sm font-light">
              <li>
                <Link
                  to="/"
                  className="hover:text-brand-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/#about"
                  className="hover:text-brand-400 transition-colors">
                  À Propos
                </Link>
              </li>
              <li>
                <Link
                  to="/chambres"
                  className="hover:text-brand-400 transition-colors">
                  Chambres & Suites
                </Link>
              </li>
              <li>
                <Link
                  to="/#services"
                  className="hover:text-brand-400 transition-colors">
                  Services & Équipements
                </Link>
              </li>
              <li>
                <Link
                  to="/restaurant-bar"
                  className="hover:text-brand-400 transition-colors">
                  Restaurant & Bar Lounge
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h6 className="text-white font-medium uppercase tracking-wider text-sm mb-4">
              Contact
            </h6>
            <ul className="space-y-2 text-sm font-light">
              <li>Ancien Hôtel Somba, Centre-ville</li>
              <li>Bangui, République Centrafricaine</li>
              <li className="pt-2">
                <a
                  href="tel:+23675494969"
                  className="text-brand-400 hover:text-brand-300 text-lg font-medium">
                  
                  +236 75 49 49 69
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-sm font-light text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>
            &copy; {new Date().getFullYear()} KM Hotel Bangui. Tous droits
            réservés.
          </p>
          <p className="mt-2 md:mt-0">Fondé par Francis Kopaye</p>
        </div>
      </div>
    </footer>);

}