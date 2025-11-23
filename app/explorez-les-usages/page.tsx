'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImagePath } from '@/lib/constants';

export default function ExplorezLesUsages() {
  const usages = [
    {
      title: 'Charcuterie et fromages',
      description: 'Créez de magnifiques plateaux avec charcuteries, fromages, fruits et salades. La planche en bois met en valeur vos préparations et apporte une touche rustique et élégante à votre table.',
      image: getImagePath('/images/usage-charcuterie.jpg'),
      tips: [
        'Variez les textures et les couleurs pour un rendu visuel attractif',
        'Disposez les fromages du plus doux au plus fort',
        'Ajoutez des fruits frais comme des raisins et des figues',
        'Accompagnez d\'une salade verte pour équilibrer',
        'Utilisez des couteaux différents pour chaque type de fromage',
      ],
    },
    {
      title: 'Présentation de viandes',
      description: 'Votre planche est parfaite pour présenter vos viandes, qu\'elles soient crues ou cuites. Le bois naturel met en valeur la qualité de vos produits et préserve leurs saveurs.',
      image: getImagePath('/images/planche1.png'),
      tips: [
        'Disposez les morceaux de viande avec espacement pour un rendu élégant',
        'Ajoutez des herbes fraîches comme le romarin pour la décoration',
        'Le bois préserve naturellement les saveurs',
        'Idéal pour présenter des steaks, filets ou autres morceaux de qualité',
        'Nettoyez immédiatement après utilisation',
      ],
    },
  ];

  return (
    <>
      <Section className="bg-gradient-to-br from-accent-beige via-white to-wood-light/10 pt-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-wood-dark mb-6">
              Explorez les usages de votre planche
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Découvrez toutes les façons créatives et pratiques d'utiliser vos planches en bois. 
              De la cuisine à la décoration, les possibilités sont infinies.
            </p>
          </motion.div>

          <div className="space-y-16">
            {usages.map((usage, index) => (
              <motion.div
                key={usage.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={usage.image}
                      alt={usage.title}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="w-full h-full bg-wood-light/20 flex items-center justify-center text-wood-medium text-2xl">Image à ajouter</div>';
                        }
                      }}
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-bold text-wood-dark mb-4">
                    {usage.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {usage.description}
                  </p>
                  <div className="bg-accent-beige/30 rounded-lg p-6">
                    <h3 className="font-bold text-wood-dark mb-3">Conseils pratiques :</h3>
                    <ul className="space-y-2">
                      {usage.tips.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start text-gray-700">
                          <span className="text-accent-green mr-2 mt-1">•</span>
                          <span>{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-accent-beige/20 rounded-lg p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold text-wood-dark mb-6">
              Laissez libre cours à votre créativité
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Les planches en bois sont polyvalentes et s'adaptent à tous vos besoins. 
              N'hésitez pas à expérimenter et à trouver vos propres usages !
            </p>
            <p className="text-gray-700">
              Partagez vos créations avec nous sur les réseaux sociaux avec le hashtag 
              <span className="font-semibold text-wood-dark"> #BoisEtSaveurs</span>
            </p>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

