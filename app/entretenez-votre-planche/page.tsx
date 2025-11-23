'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImagePath } from '@/lib/constants';

export default function EntretenezVotrePlanche() {
  const etapes = [
    {
      numero: 1,
      titre: 'Nettoyage quotidien',
      description: 'Après chaque utilisation, nettoyez votre planche avec de l\'eau chaude et du savon doux. Évitez le lave-vaisselle qui peut déformer le bois.',
      details: [
        'Utilisez une éponge douce et du savon de Marseille',
        'Rincez abondamment à l\'eau claire',
        'Séchez immédiatement avec un torchon propre',
        'Laissez sécher à l\'air libre, debout si possible',
      ],
    },
    {
      numero: 2,
      titre: 'Désinfection naturelle',
      description: 'Pour éliminer les bactéries, utilisez des méthodes naturelles qui préservent le bois.',
      details: [
        'Frottez avec du citron et du sel pour désinfecter',
        'Vous pouvez aussi utiliser du vinaigre blanc dilué',
        'Rincez et séchez soigneusement après désinfection',
        'Évitez l\'eau de Javel qui abîme le bois',
      ],
    },
    {
      numero: 3,
      titre: 'Hydratation régulière',
      description: 'Le bois a besoin d\'être hydraté régulièrement pour conserver sa beauté et sa durabilité.',
      details: [
        'Appliquez de l\'huile alimentaire (pépins de raisin, lin) une fois par mois',
        'Laissez pénétrer pendant plusieurs heures',
        'Essuyez l\'excédent avec un chiffon propre',
        'Renouvelez plus souvent si la planche est très utilisée',
      ],
    },
    {
      numero: 4,
      titre: 'Entretien des taches',
      description: 'Les taches peuvent apparaître avec le temps. Voici comment les traiter naturellement.',
      details: [
        'Pour les taches légères : frottez avec du citron',
        'Pour les taches tenaces : utilisez du bicarbonate de soude',
        'Laissez agir quelques minutes puis rincez',
        'Appliquez de l\'huile après le traitement',
      ],
    },
    {
      numero: 5,
      titre: 'Stockage',
      description: 'Un bon stockage prolonge la vie de votre planche.',
      details: [
        'Rangez votre planche debout ou suspendue',
        'Assurez-vous qu\'elle soit complètement sèche',
        'Évitez les endroits humides ou exposés à la chaleur',
        'Laissez de l\'espace pour la circulation de l\'air',
      ],
    },
  ];

  const produits = [
    {
      nom: 'Huile de pépins de raisin',
      description: 'Idéale pour l\'entretien régulier, nourrit le bois en profondeur',
    },
    {
      nom: 'Huile de lin',
      description: 'Alternative naturelle, nourrit et protège le bois efficacement',
    },
    {
      nom: 'Savon de Marseille',
      description: 'Nettoyage doux qui respecte le bois',
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
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-wood-dark mb-4">
              Entretenez votre planche
            </h1>
            <p className="text-lg text-wood-medium max-w-3xl mx-auto">
              Un bon entretien est essentiel pour préserver la beauté et la longévité de votre planche en bois. 
              Suivez nos conseils pour garder votre planche en parfait état pendant de nombreuses années.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {etapes.map((etape, index) => (
              <motion.div
                key={etape.numero}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-6 aspect-square flex flex-col"
              >
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-wood-dark text-white rounded-full flex items-center justify-center text-2xl font-bold">
                    {etape.numero}
                  </div>
                </div>
                <h2 className="text-2xl font-bold text-wood-dark mb-3 text-center">
                  {etape.titre}
                </h2>
                <p className="text-base text-wood-medium mb-4 flex-grow text-center">
                  {etape.description}
                </p>
                <div className="bg-accent-beige/30 rounded-lg p-4 flex-grow overflow-y-auto">
                  <h3 className="font-bold text-wood-dark mb-2 text-base">Étapes :</h3>
                  <ul className="space-y-2">
                    {etape.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-wood-medium text-sm">
                        <span className="text-accent-green mr-2 mt-0.5 flex-shrink-0">✓</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-48 md:h-64 rounded-lg overflow-hidden shadow-xl mb-8"
          >
            <Image
              src={getImagePath("/images/53-produit-fini.jpg")}
              alt="Entretien de la planche"
              fill
              className="object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const parent = target.parentElement;
                if (parent) {
                  parent.innerHTML = '<div class="w-full h-full bg-wood-light/20 flex items-center justify-center text-wood-medium text-2xl">Image</div>';
                }
              }}
            />
          </motion.div>
        </div>
      </Section>

      <Section className="bg-accent-beige/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-wood-dark mb-8 text-center">
              Produits recommandés
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {produits.map((produit, index) => (
                <motion.div
                  key={produit.nom}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg p-6 shadow-md"
                >
                  <h3 className="text-2xl font-bold text-wood-dark mb-2">
                    {produit.nom}
                  </h3>
                  <p className="text-wood-medium">{produit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      <Section className="bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-wood-dark text-white rounded-lg p-8 md:p-12"
          >
            <h2 className="text-4xl font-bold mb-6">
              Besoin d'aide ?
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Si vous avez des questions sur l'entretien de votre planche, n'hésitez pas à nous contacter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@bois-et-saveurs.fr"
                className="px-6 py-3 bg-white text-wood-dark rounded-lg font-semibold hover:bg-accent-beige transition-colors"
              >
                contact@bois-et-saveurs.fr
              </a>
              <a
                href="tel:+33765154965"
                className="px-6 py-3 bg-white text-wood-dark rounded-lg font-semibold hover:bg-accent-beige transition-colors"
              >
                +33 7 65 15 49 65
              </a>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}

