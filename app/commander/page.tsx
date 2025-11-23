'use client';

import Section from '@/components/Section';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getImagePath } from '@/lib/constants';
import { useState } from 'react';

export default function Commander() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    planche: '',
    quantite: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const planches = [
    {
      id: 1,
      name: 'Planche 120cm',
      dimensions: '120cm x 25cm',
      poignees: '1 poignée',
      epaisseur: '2,5cm',
      image: getImagePath('/images/Planche_120cm_1.jpeg'),
    },
    {
      id: 2,
      name: 'Planche 100cm',
      dimensions: '100cm x 40cm',
      poignees: '2 poignées',
      epaisseur: '2,5cm',
      image: getImagePath('/images/Planche_100cm_1.jpeg'),
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Créer le lien mailto avec les informations du formulaire
    const subject = encodeURIComponent(`Commande de planche${formData.planche ? ` - ${formData.planche}` : ''}`);
    const body = encodeURIComponent(
      `Bonjour,\n\n` +
      `Je souhaite commander une planche.\n\n` +
      `Nom: ${formData.nom}\n` +
      `Email: ${formData.email}\n` +
      `Téléphone: ${formData.telephone}\n` +
      `Planche: ${formData.planche || 'Non spécifiée'}\n` +
      `Quantité: ${formData.quantite || 'Non spécifiée'}\n\n` +
      `Message:\n${formData.message || 'Aucun message'}`
    );

    window.location.href = `mailto:contact@bois-et-saveurs.fr?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        nom: '',
        email: '',
        telephone: '',
        planche: '',
        quantite: '',
        message: '',
      });
    }, 1000);
  };

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
              Commandez votre planche
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Nos planches sont disponibles en boutique et sur commande. 
              Remplissez le formulaire ci-dessous pour nous faire part de votre demande.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulaire */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h2 className="text-3xl font-bold text-wood-dark mb-6">
                Formulaire de commande
              </h2>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                  <p className="font-semibold">Demande envoyée !</p>
                  <p className="text-sm mt-1">Votre client mail s'ouvrira avec votre demande pré-remplie.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-wood-dark mb-2">
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    required
                    value={formData.nom}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-dark focus:border-transparent transition-all"
                    placeholder="Votre nom"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-wood-dark mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-dark focus:border-transparent transition-all"
                    placeholder="votre@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="telephone" className="block text-sm font-semibold text-wood-dark mb-2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-dark focus:border-transparent transition-all"
                    placeholder="+33 7 65 15 49 65"
                  />
                </div>

                <div>
                  <label htmlFor="planche" className="block text-sm font-semibold text-wood-dark mb-2">
                    Modèle de planche *
                  </label>
                  <select
                    id="planche"
                    name="planche"
                    required
                    value={formData.planche}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-dark focus:border-transparent transition-all"
                  >
                    <option value="">Sélectionnez un modèle</option>
                    <option value="Planche 120cm">Planche 120cm (120cm x 25cm, 1 poignée)</option>
                    <option value="Planche 100cm">Planche 100cm (100cm x 40cm, 2 poignées)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="quantite" className="block text-sm font-semibold text-wood-dark mb-2">
                    Quantité
                  </label>
                  <input
                    type="number"
                    id="quantite"
                    name="quantite"
                    min="1"
                    value={formData.quantite}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-dark focus:border-transparent transition-all"
                    placeholder="1"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-wood-dark mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-wood-dark focus:border-transparent transition-all resize-none"
                    placeholder="Vos questions ou demandes particulières..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-wood-dark text-white rounded-lg font-semibold hover:bg-wood-dark/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Envoi en cours...' : 'Envoyer la demande'}
                </button>
              </form>
            </motion.div>

            {/* Informations sur les planches */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-wood-dark mb-6">
                  Nos modèles disponibles
                </h2>
                <p className="text-gray-700 mb-6">
                  <strong>2 modèles de planches</strong> sont commercialisés en boutique et sont disponibles en nous envoyant une demande à :{' '}
                  <a href="mailto:contact@bois-et-saveurs.fr" className="text-wood-dark underline font-semibold hover:text-wood-dark/80">
                    contact@bois-et-saveurs.fr
                  </a>
                </p>

                <div className="space-y-6">
                  {planches.map((planche, index) => (
                    <motion.div
                      key={planche.id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start gap-4">
                        <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden bg-accent-beige/20">
                          <Image
                            src={planche.image}
                            alt={planche.name}
                            fill
                            className="object-contain p-2"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                            }}
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-wood-dark mb-2">
                            {planche.name}
                          </h3>
                          <div className="space-y-1 text-sm text-gray-700">
                            <p><strong>Dimensions:</strong> {planche.dimensions}</p>
                            <p><strong>Poignées:</strong> {planche.poignees}</p>
                            <p><strong>Épaisseur:</strong> {planche.epaisseur}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="bg-accent-beige/30 rounded-lg p-6">
                <h3 className="text-xl font-bold text-wood-dark mb-4">
                  Caractéristiques communes
                </h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2 mt-1">✓</span>
                    <span>Bois de hêtre français</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2 mt-1">✓</span>
                    <span>Fabrication artisanale en Charente</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2 mt-1">✓</span>
                    <span>Finition à l'huile de pépins de raisin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2 mt-1">✓</span>
                    <span>Food contact compliance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-accent-green mr-2 mt-1">✓</span>
                    <span>Rainure pour évacuer le jus</span>
                  </li>
                </ul>
              </div>
            </motion.div>
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
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-wood-dark mb-6">
              Besoin d'aide ?
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Pour toute question concernant votre commande, n'hésitez pas à nous contacter directement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contact@bois-et-saveurs.fr"
                className="px-6 py-3 bg-wood-dark text-white rounded-lg font-semibold hover:bg-wood-dark/90 transition-colors"
              >
                contact@bois-et-saveurs.fr
              </a>
              <a
                href="tel:+33765154965"
                className="px-6 py-3 bg-white text-wood-dark border-2 border-wood-dark rounded-lg font-semibold hover:bg-wood-dark hover:text-white transition-colors"
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

