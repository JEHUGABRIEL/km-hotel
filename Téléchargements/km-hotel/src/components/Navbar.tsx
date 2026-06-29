import React, { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
  {
    name: 'Accueil',
    href: '/'
  },
  {
    name: 'À Propos',
    href: isHomePage ? '#about' : '/#about'
  },
  {
    name: 'Chambres',
    href: '/chambres'
  },
  {
    name: 'Services',
    href: isHomePage ? '#services' : '/#services'
  },
  {
    name: 'Restaurant & Bar',
    href: '/restaurant-bar'
  }];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-4' : 'bg-transparent py-6'}`}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link
              to="/"
              className={`font-serif text-2xl font-bold tracking-wider ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              KM HOTEL
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) =>
              link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-sm font-medium uppercase tracking-wider hover:text-brand-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium uppercase tracking-wider hover:text-brand-500 transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
                  {link.name}
                </a>
              )
            )}
            <Link
              to="/contact"
              className={`flex items-center px-5 py-2.5 rounded-none border transition-all ${isScrolled ? 'border-brand-600 text-brand-600 hover:bg-brand-600 hover:text-white' : 'border-white text-white hover:bg-white hover:text-slate-900'}`}>
              <Phone className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Réserver</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              
              {isMobileMenuOpen ?
              <X className="w-6 h-6" /> :

              <Menu className="w-6 h-6" />
              }
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen &&
      <div className="md:hidden bg-white absolute top-full left-0 w-full shadow-lg border-t border-slate-100">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) =>
            link.href.startsWith('/') && !link.href.startsWith('/#') ? (
              <Link
                key={link.name}
                to={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-brand-600 hover:bg-slate-50">
                {link.name}
              </Link>
            ) : (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-3 text-base font-medium text-slate-800 hover:text-brand-600 hover:bg-slate-50">
                {link.name}
              </a>
            )
          )}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 flex items-center justify-center w-full px-5 py-3 border border-brand-600 text-brand-600 font-medium hover:bg-brand-50">
              <Phone className="w-4 h-4 mr-2" />
              Réserver au +236 75 49 49 69
            </Link>
          </div>
        </div>
      }
    </nav>);

}