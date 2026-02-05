'use client';

import Hero from '@/components/Hero';
import Section from '@/components/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { getImagePath } from '@/lib/constants';

export default function Home() {
  const features = [
    {
      title: 'Artisanat français',
      description: 'Chaque planche est fabriquée à la main avec passion et savoir-faire',
      icon: (
        <svg className="w-12 h-12 text-wood-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
    },
    { 
      title: 'Qualité premium',
      description: 'Sélection rigoureuse des meilleurs bois pour une durabilité exceptionnelle',
      icon: (
        <svg className="w-12 h-12 text-wood-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
    },
    {
      title: 'Écologique',
      description: 'Matériaux naturels et durables, respectueux de l\'environnement',
      icon: (
        <svg className="w-12 h-12 text-wood-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <Hero />

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-wood-dark mb-4">
              Bienvenue chez Bois & Saveurs
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nous créons des planches en bois artisanales qui allient esthétique, 
              fonctionnalité et durabilité. Chaque pièce est unique et raconte une histoire.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-lg bg-accent-beige/30 hover:bg-accent-beige/50 transition-colors"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-wood-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-700">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative h-96 md:h-[500px] rounded-lg overflow-hidden shadow-xl"
          >
            <Image
              src={getImagePath("/images/planche1.png")}
              alt="Planche en bois artisanale"
              fill
              className="object-cover"
              priority
              onError={(e) => {
                // Fallback si l'image n'existe pas
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 flex items-end p-8">
              <div className="text-white drop-shadow-lg">
                <h3 className="text-3xl font-bold mb-2">Découvrez notre collection</h3>
                <Link
                  href="/decouvrez-nos-planches"
                  className="inline-block mt-4 px-6 py-3 bg-white text-wood-dark rounded-lg font-semibold hover:bg-accent-beige transition-colors"
                >
                  Voir toutes nos planches
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-accent-beige/20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-wood-dark mb-6">
                Explorez les multiples usages
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nos planches en bois ne sont pas seulement esthétiques, elles sont aussi 
                incroyablement polyvalentes. Découvrez toutes les façons créatives d'utiliser 
                vos planches en cuisine et au-delà.
              </p>
              <Link
                href="/explorez-les-usages"
                className="inline-block px-6 py-3 bg-wood-dark text-white rounded-lg font-semibold hover:bg-wood-medium transition-colors"
              >
                En savoir plus
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64 md:h-96 rounded-lg overflow-hidden"
            >
              <Image
                src={getImagePath("/images/plusieurs_fromages.png")}
                alt="Usages de la planche"
                fill
                className="object-cover object-top"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            </motion.div>
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 items-center">
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 md:order-2 flex flex-col items-center justify-center text-center"
            >
              <h2 className="text-4xl font-bold text-wood-dark mb-6">
                Entretenez votre planche
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Un bon entretien garantit la longévité de votre planche. Apprenez les 
                meilleures pratiques pour préserver la beauté et la fonctionnalité de 
                vos planches en bois.
              </p>
              <Link
                href="/entretenez-votre-planche"
                className="inline-block px-6 py-3 bg-wood-dark text-white rounded-lg font-semibold hover:bg-wood-medium transition-colors"
              >
                Conseils d'entretien
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
