'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BASE_PATH } from '@/lib/constants';

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-accent-beige via-white to-wood-light/10"
      style={{
        backgroundImage: `url(${BASE_PATH}/images/Page-accueil-v21nov-page5.png)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="container mx-auto px-4 py-20 text-center relative z-10 bg-white/80 backdrop-blur-sm rounded-lg mx-4 md:mx-auto max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold text-wood-dark mb-6"
        >
          Bois & Saveurs
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-wood-medium mb-8 max-w-2xl mx-auto"
        >
          Découvrez l'artisanat français à travers nos planches en bois d'exception
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/decouvrez-nos-planches"
            className="px-8 py-4 bg-wood-dark text-white rounded-lg font-semibold hover:bg-wood-medium transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
          >
            Découvrir nos planches
          </Link>
          <Link
            href="/explorez-les-usages"
            className="px-8 py-4 bg-white text-wood-dark border-2 border-wood-dark rounded-lg font-semibold hover:bg-wood-dark hover:text-white transition-colors"
          >
            Explorer les usages
          </Link>
        </motion.div>
      </div>

      {/* Overlay pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-black/20" />
    </section>
  );
}

