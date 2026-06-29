import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden">
      
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
          'url("https://images.unsplash.com/photo-1542314831-c6a4d14d4c57?auto=format&fit=crop&q=80")',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}>
        
        <div className="absolute inset-0 bg-slate-900/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-900/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            duration: 0.8,
            ease: 'easeOut'
          }}>
          
          <span className="text-brand-300 font-medium tracking-[0.2em] uppercase text-sm md:text-base mb-4 block">
            Nouvelle pépite de l'hôtellerie à Bangui
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white font-bold mb-6 leading-tight">
            L'Élégance & Le Confort <br className="hidden md:block" />
            <span className="italic font-light text-brand-100">
              au cœur de la capitale
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl mx-auto font-light">
            Découvrez un boutique hôtel 3 étoiles au design raffiné, offrant un
            accueil chaleureux et des services de standing international.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-brand-600 text-white font-medium tracking-wide hover:bg-brand-700 transition-colors w-full sm:w-auto text-center">
              
              Réserver votre séjour
            </a>
            <a
              href="#about"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium tracking-wide border border-white/30 hover:bg-white/20 transition-colors w-full sm:w-auto text-center">
              
              Découvrir l'hôtel
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/70"
        animate={{
          y: [0, 10, 0]
        }}
        transition={{
          repeat: Infinity,
          duration: 2
        }}>
        
        <ChevronDown className="w-8 h-8" />
      </motion.div>
    </section>);

}