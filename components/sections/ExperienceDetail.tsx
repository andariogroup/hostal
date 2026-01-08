'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { UtensilsCrossed, Sparkles, Trees, Check, ArrowRight, Clock, Users, Star, MapPin } from 'lucide-react'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'

const experiences = [
  {
    id: 'gastronomia',
    title: 'Gastronomía',
    icon: UtensilsCrossed,
    description: 'Sabores auténticos del Caribe colombiano',
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80',
    duration: 'Todo el día',
    capacity: 'Todos los huéspedes',
    rating: 4.9,
    reviews: 234,
    content: `
      Nuestra cocina celebra los sabores auténticos del Caribe colombiano, 
      utilizando ingredientes frescos y locales. Cada plato cuenta una historia 
      de tradición y pasión culinaria.
      
      Ofrecemos desayunos completos incluidos, almuerzos con menú del día, 
      y cenas especiales bajo las estrellas. Nuestro chef prepara cada comida 
      con ingredientes de la región, creando una experiencia gastronómica única.
    `,
    features: [
      'Desayuno incluido en todas las habitaciones',
      'Menú del día con opciones locales',
      'Cenas especiales bajo las estrellas',
      'Cocina vegetariana y vegana disponible',
      'Ingredientes frescos y locales',
    ],
    highlights: [
      'Ingredientes 100% locales',
      'Chef especializado en cocina caribeña',
      'Menú adaptado a dietas especiales',
    ],
  },
  {
    id: 'spa',
    title: 'Spa & Bienestar',
    icon: Sparkles,
    description: 'Relajación y renovación en el corazón del Caribe',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
    duration: '2-4 horas',
    capacity: 'Hasta 10 personas',
    rating: 4.8,
    reviews: 189,
    content: `
      Sumérgete en una experiencia de bienestar única. Nuestro spa ofrece 
      masajes relajantes, rituales caribeños y tratamientos de belleza 
      natural usando productos locales.
      
      Disfruta de sesiones de yoga al amanecer, meditación junto al río, 
      y tratamientos que combinan técnicas tradicionales con ingredientes 
      naturales del Caribe.
    `,
    features: [
      'Masajes relajantes y terapéuticos',
      'Rituales caribeños de bienestar',
      'Yoga y meditación al aire libre',
      'Tratamientos faciales naturales',
      'Productos locales y orgánicos',
    ],
    highlights: [
      'Terapeutas certificados',
      'Productos 100% naturales',
      'Ambiente relajante junto al río',
    ],
  },
  {
    id: 'naturaleza',
    title: 'Naturaleza',
    icon: Trees,
    description: 'Aventura y conexión con la naturaleza',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    duration: 'Medio día / Día completo',
    capacity: 'Grupos pequeños',
    rating: 5.0,
    reviews: 312,
    content: `
      Rodeados de naturaleza exuberante, ofrecemos experiencias únicas 
      que conectan con el entorno. Desde el río Buritaca hasta las 
      playas del Caribe, cada día es una aventura.
      
      Organizamos caminatas guiadas, excursiones al Parque Nacional Tayrona, 
      visitas a Ciudad Perdida, y actividades acuáticas en el río. 
      Todo diseñado para que vivas el Caribe de manera auténtica.
    `,
    features: [
      'Río Buritaca (5 min caminando)',
      'Caminatas guiadas por la selva',
      'Excursiones al Parque Tayrona',
      'Visitas a Ciudad Perdida',
      'Actividades acuáticas',
    ],
    highlights: [
      'Guías locales certificados',
      'Equipamiento incluido',
      'Grupos pequeños para mejor experiencia',
    ],
  },
]

export function ExperienceDetail() {
  const locale = useLocale()
  const t = useTranslations('experiences')

  return (
    <div className="space-y-16">
      {experiences.map((experience, index) => {
        const Icon = experience.icon
        return (
          <section
            key={experience.id}
            id={experience.id}
            className={`relative overflow-hidden rounded-3xl ${
              index % 2 === 0 
                ? 'bg-white shadow-xl border-2 border-gray-100' 
                : 'bg-gradient-to-br from-arena-light/50 to-white shadow-xl border-2 border-gray-100'
            }`}
          >
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              {/* Imagen Mejorada */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative h-96 lg:h-[600px] ${index % 2 === 1 ? 'lg:order-2' : ''}`}
              >
                <div className="absolute inset-0">
                  <Image
                    src={experience.image}
                    alt={experience.title}
                    fill
                    className="object-cover"
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  
                  {/* Badge Rating en imagen */}
                  <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-xl shadow-lg flex items-center space-x-2 z-10">
                    <Star size={18} className="text-yellow-400 fill-yellow-400" />
                    <span className="font-bold text-gray-900">{experience.rating}</span>
                    <span className="text-sm text-gray-600">({experience.reviews})</span>
                  </div>

                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/95 backdrop-blur-sm rounded-full flex items-center justify-center shadow-xl z-10">
                    <Icon className="text-verde-selva" size={32} />
                  </div>
                </div>
              </motion.div>

              {/* Contenido Mejorado */}
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-verde-selva to-verde-selva-dark rounded-xl flex items-center justify-center shadow-lg">
                      <Icon className="text-white" size={28} />
                    </div>
                    <div>
                      <h2 className="text-3xl md:text-4xl font-display font-bold text-verde-selva">
                        {experience.title}
                      </h2>
                      <p className="text-lg text-gray-600 mt-1">
                        {experience.description}
                      </p>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Clock size={18} className="text-verde-selva" />
                      <span className="text-sm font-medium">{experience.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600">
                      <Users size={18} className="text-verde-selva" />
                      <span className="text-sm font-medium">{experience.capacity}</span>
                    </div>
                  </div>
                </div>

                {/* Contenido */}
                <div className="prose max-w-none mb-8">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {experience.content}
                  </p>
                </div>

                {/* Highlights */}
                {experience.highlights && (
                  <div className="mb-8 p-4 bg-gradient-to-r from-verde-selva/10 to-azul-caribe/10 rounded-xl border border-verde-selva/20">
                    <h3 className="text-sm font-bold text-verde-selva mb-3 uppercase tracking-wide">
                      Lo más destacado
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {experience.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-verde-selva rounded-full" />
                          <span className="text-sm font-medium text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">
                    Incluye
                  </h3>
                  {experience.features.map((feature, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-6 h-6 bg-verde-selva/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check size={14} className="text-verde-selva" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={`/${locale}/reservar?experience=${experience.id}`}
                  className="group inline-flex items-center space-x-2 bg-verde-selva hover:bg-verde-selva-dark text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl mt-auto"
                >
                  <span>Reservar Experiencia</span>
                  <ArrowRight size={20} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </div>
          </section>
        )
      })}
    </div>
  )
}
