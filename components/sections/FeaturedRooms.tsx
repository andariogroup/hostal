'use client'

import { memo } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import { Users, Bed, Star } from 'lucide-react'

const rooms = [
  {
    id: 1,
    name: 'Suite Premium',
    description: 'Amplia suite con vista al río y jacuzzi privado',
    price: 150,
    image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    capacity: '2-4',
    beds: '1 cama king',
    features: ['Vista al río', 'Jacuzzi privado', 'Desayuno incluido'],
    popular: true,
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description: 'Habitación elegante con balcón y vista a la selva',
    price: 120,
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    capacity: '2',
    beds: '1 cama queen',
    features: ['Balcón privado', 'Vista a la selva', 'Desayuno incluido'],
    popular: false,
  },
  {
    id: 3,
    name: 'Eco Lodge',
    description: 'Cabaña ecológica rodeada de naturaleza',
    price: 90,
    image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    capacity: '2',
    beds: '1 cama doble',
    features: ['Ecológica', 'Vista panorámica', 'Desayuno incluido'],
    popular: false,
  },
]

const RoomCard = memo(({ room, index, locale, t }: { room: typeof rooms[0], index: number, locale: string, t: any }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
  >
    <div className="card h-full">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={room.image}
          alt={room.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading="lazy"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={80}
        />
        
        {/* Badge Popular */}
        {room.popular && (
          <div className="absolute top-4 left-4 bg-dorado text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
            <Star size={14} fill="currentColor" />
            <span>{t('mostPopular')}</span>
          </div>
        )}

        {/* Price */}
        <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-lg">
          <span className="text-xs text-gray-500">{t('from')}</span>
          <div className="text-2xl font-bold text-verde-selva">
            ${room.price}
            <span className="text-sm font-normal">{t('perNight')}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex-1 flex flex-col">
        <h3 className="text-xl font-display font-semibold text-verde-selva mb-2">
          {room.name}
        </h3>
        <p className="text-gray-600 mb-4 flex-1">
          {room.description}
        </p>

        {/* Features */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Users size={16} />
            <span>{room.capacity} personas</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Bed size={16} />
            <span>{room.beds}</span>
          </div>
          {room.features.map((feature, idx) => (
            <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
              <div className="w-1.5 h-1.5 bg-azul-caribe rounded-full" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <Link
          href={`/${locale}/alojamiento#room-${room.id}`}
          className="btn-primary w-full text-center"
        >
          Ver Detalles
        </Link>
      </div>
    </div>
  </motion.div>
))

RoomCard.displayName = 'RoomCard'

export function FeaturedRooms() {
  const locale = useLocale()
  const t = useTranslations('rooms')
  
  return (
    <section className="section-padding bg-white">
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
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {t('subtitle')}
          </p>
          <Link href={`/${locale}/alojamiento`} className="btn-secondary">
            {t('viewAll')}
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} index={index} locale={locale} t={t} />
          ))}
        </div>
      </div>
    </section>
  )
}
