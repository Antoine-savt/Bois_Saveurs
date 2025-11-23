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
      icon: '🪵',
    },
    {
      title: 'Qualité premium',
      description: 'Sélection rigoureuse des meilleurs bois pour une durabilité exceptionnelle',
      icon: '⭐',
    },
    {
      title: 'Écologique',
      description: 'Matériaux naturels et durables, respectueux de l\'environnement',
      icon: '🌱',
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
            <p className="text-xl text-wood-brown max-w-3xl mx-auto">
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
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-wood-dark mb-2">
                  {feature.title}
                </h3>
                <p className="text-wood-brown">{feature.description}</p>
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
              src={getImagePath("/images/produit-fini.jpg")}
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
            <div className="absolute inset-0 bg-wood-dark/80 flex items-end p-8">
              <div className="text-white">
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
              <p className="text-lg text-wood-brown mb-6">
                Nos planches en bois ne sont pas seulement esthétiques, elles sont aussi 
                incroyablement polyvalentes. Découvrez toutes les façons créatives d'utiliser 
                vos planches en cuisine et au-delà.
              </p>
              <Link
                href="/explorez-les-usages"
                className="inline-block px-6 py-3 bg-wood-dark text-white rounded-lg font-semibold hover:bg-wood-brown transition-colors"
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
              <p className="text-lg text-wood-brown mb-6">
                Un bon entretien garantit la longévité de votre planche. Apprenez les 
                meilleures pratiques pour préserver la beauté et la fonctionnalité de 
                vos planches en bois.
              </p>
              <Link
                href="/entretenez-votre-planche"
                className="inline-block px-6 py-3 bg-wood-dark text-white rounded-lg font-semibold hover:bg-wood-brown transition-colors"
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
