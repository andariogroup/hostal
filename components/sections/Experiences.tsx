'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { UtensilsCrossed, Sparkles, Trees } from 'lucide-react'

export function Experiences() {
  const locale = useLocale()
  const t = useTranslations('experiences')
  const tCommon = useTranslations('common')

  const experiences = [
    {
      id: 1,
      icon: UtensilsCrossed,
      title: t('gastronomy.title'),
      description: t('gastronomy.description'),
      image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
      href: `/${locale}/experiencias#gastronomia`,
      color: 'from-orange-500 to-red-500',
    },
    {
      id: 2,
      icon: Sparkles,
      title: t('spa.title'),
      description: t('spa.description'),
      image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80',
      href: `/${locale}/experiencias#spa`,
      color: 'from-pink-500 to-purple-500',
    },
    {
      id: 3,
      icon: Trees,
      title: t('nature.title'),
      description: t('nature.description'),
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
      href: `/${locale}/experiencias#naturaleza`,
      color: 'from-green-500 to-teal-500',
    },
  ]

  return (
    <section className="section-padding bg-arena-light">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-display text-verde-selva mb-4">
            {t('title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((experience, index) => {
            const Icon = experience.icon
            return (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Link href={experience.href} className="group">
                  <div className="card h-full">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={experience.image}
                        alt={experience.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        quality={80}
                      />
                      <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                      
                      {/* Icon */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-medium">
                        <Icon className="text-verde-selva" size={24} />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-display font-semibold text-verde-selva mb-2">
                        {experience.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {experience.description}
                      </p>
                      <span className="text-azul-caribe font-medium group-hover:underline">
                        {tCommon('learnMore')} →
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
