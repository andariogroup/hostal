'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { Users, Bed, Heart, GitCompare, Star, ArrowRight, Check, Sparkles, Clock, Shield } from 'lucide-react'
import { RoomGallery } from './RoomGallery'

const allRooms = [
  {
    id: 1,
    name: 'Suite Premium',
    description: 'Amplia suite con vista al río y jacuzzi privado. Perfecta para una escapada romántica o descanso de lujo.',
    price: 150,
    originalPrice: 180,
    discount: 17,
    images: [
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
      'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80',
    ],
    capacity: '2-4',
    beds: '1 cama king',
    features: ['Vista al río', 'Jacuzzi privado', 'Desayuno incluido', 'Aire acondicionado', 'WiFi gratuito', 'Estacionamiento'],
    popular: true,
    available: true,
    rating: 4.9,
    reviews: 127,
    lastBooked: 'Hace 2 horas',
  },
  {
    id: 2,
    name: 'Deluxe Room',
    description: 'Habitación elegante con balcón privado y vista panorámica a la selva. Ambiente acogedor y moderno.',
    price: 120,
    originalPrice: null,
    discount: null,
    images: [
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80',
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
    ],
    capacity: '2',
    beds: '1 cama queen',
    features: ['Balcón privado', 'Vista a la selva', 'Desayuno incluido', 'Ventilador', 'WiFi gratuito'],
    popular: false,
    available: true,
    rating: 4.7,
    reviews: 89,
    lastBooked: 'Hace 5 horas',
  },
  {
    id: 3,
    name: 'Eco Lodge',
    description: 'Cabaña ecológica rodeada de naturaleza virgen. Experiencia única de conexión con el entorno natural.',
    price: 90,
    originalPrice: null,
    discount: null,
    images: [
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
    ],
    capacity: '2',
    beds: '1 cama doble',
    features: ['Ecológica', 'Vista panorámica', 'Desayuno incluido', 'Ventilador', 'WiFi gratuito'],
    popular: false,
    available: true,
    rating: 4.8,
    reviews: 156,
    lastBooked: 'Hace 1 día',
  },
  {
    id: 4,
    name: 'Family Suite',
    description: 'Suite familiar espaciosa perfecta para grupos. Incluye cocina pequeña y área de estar separada.',
    price: 180,
    originalPrice: null,
    discount: null,
    images: [
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
      'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80',
      'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
      'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80',
    ],
    capacity: '4-6',
    beds: '2 camas queen',
    features: ['Espaciosa', 'Cocina pequeña', 'Desayuno incluido', 'Aire acondicionado', 'WiFi gratuito', 'Estacionamiento'],
    popular: false,
    available: true,
    rating: 4.9,
    reviews: 94,
    lastBooked: 'Hace 3 horas',
  },
]

export function RoomGrid() {
  const locale = useLocale()
  const t = useTranslations('rooms')
  const [favorites, setFavorites] = useState<number[]>([])
  const [compare, setCompare] = useState<number[]>([])
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const toggleFavorite = (id: number) => {
    setFavorites(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    )
  }

  const toggleCompare = (id: number) => {
    setCompare(prev => 
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    )
  }

  return (
    <div>
      {/* Header con Contador y Vista */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            {allRooms.length} {allRooms.length === 1 ? 'habitación disponible' : 'habitaciones disponibles'}
          </h2>
          <p className="text-gray-600 text-sm">
            Encuentra el alojamiento perfecto para tu estadía en Buritaca
          </p>
        </div>
        
        {/* Vista Toggle (opcional para futuro) */}
        <div className="hidden md:flex items-center space-x-2 bg-white rounded-xl p-1 shadow-sm border border-gray-200">
          <button
            onClick={() => setViewMode('grid')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              viewMode === 'grid' 
                ? 'bg-verde-selva text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Cuadrícula
          </button>
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              viewMode === 'list' 
                ? 'bg-verde-selva text-white' 
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Lista
          </button>
        </div>
      </div>

      {/* Grid de Habitaciones - Estándares Hotelería */}
      <div className={`grid gap-6 ${
        viewMode === 'grid' 
          ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
          : 'grid-cols-1'
      }`}>
        {allRooms.map((room, index) => (
          <motion.div
            key={room.id}
            id={`room-${room.id}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="group"
          >
            <div className="card h-full flex flex-col hover:shadow-premium transition-all duration-300 overflow-hidden bg-white border-2 border-gray-100 hover:border-verde-selva/40 hover:-translate-y-1">
              {/* Galería de Imágenes Mejorada */}
              <div className="relative h-72 overflow-hidden bg-gray-100">
                <RoomGallery images={room.images} roomName={room.name} disableLightbox={true} />
                
                {/* Overlay gradient mejorado */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />
                
                {/* Badges Mejorados - Estándares Hotelería */}
                <div className="absolute top-4 left-4 z-30 flex flex-col space-y-2">
                  {room.popular && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="bg-gradient-to-r from-dorado via-yellow-400 to-dorado text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl flex items-center space-x-1.5"
                    >
                      <Sparkles size={12} fill="currentColor" />
                      <span>MÁS POPULAR</span>
                    </motion.div>
                  )}
                  {room.discount && (
                    <div className="bg-red-500 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-xl">
                      -{room.discount}% OFF
                    </div>
                  )}
                  {!room.available && (
                    <div className="bg-gray-800 text-white px-3 py-1.5 rounded-full text-xs font-semibold shadow-xl">
                      No Disponible
                    </div>
                  )}
                </div>

                {/* Rating Badge Mejorado */}
                <div className="absolute top-4 right-16 z-30 bg-white/98 backdrop-blur-md px-3 py-2 rounded-xl shadow-xl flex items-center space-x-1.5 border border-white/80">
                  <Star size={16} className="text-yellow-400 fill-yellow-400" />
                  <span className="text-sm font-bold text-gray-900">{room.rating}</span>
                  <span className="text-xs text-gray-500">({room.reviews})</span>
                </div>

                {/* Actions Mejorados */}
                <div className="absolute top-4 right-4 z-30 flex flex-col space-y-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleFavorite(room.id)}
                    className={`w-11 h-11 rounded-full backdrop-blur-md flex items-center justify-center transition-all shadow-xl border-2 ${
                      favorites.includes(room.id)
                        ? 'bg-red-500 text-white border-red-400'
                        : 'bg-white/95 text-gray-700 hover:bg-white border-white/60'
                    }`}
                    aria-label="Agregar a favoritos"
                  >
                    <Heart 
                      size={18} 
                      fill={favorites.includes(room.id) ? 'currentColor' : 'none'}
                      className="transition-all"
                    />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => toggleCompare(room.id)}
                    className={`w-11 h-11 rounded-full backdrop-blur-md flex items-center justify-center transition-all shadow-xl border-2 ${
                      compare.includes(room.id)
                        ? 'bg-azul-caribe text-white border-azul-caribe-light'
                        : 'bg-white/95 text-gray-700 hover:bg-white border-white/60'
                    }`}
                    aria-label="Comparar"
                  >
                    <GitCompare size={18} />
                  </motion.button>
                </div>

                {/* Price Badge Mejorado - Estándares Hotelería */}
                <motion.div
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="absolute bottom-4 left-4 z-30 bg-white/98 backdrop-blur-md px-5 py-3 rounded-xl shadow-xl border-2 border-white/80"
                >
                  {room.originalPrice && (
                    <div className="flex items-center space-x-2 mb-1">
                      <span className="text-xs text-gray-500 line-through">${room.originalPrice}</span>
                      <span className="text-xs bg-red-100 text-red-600 px-2 py-0.5 rounded font-bold">
                        Ahorra ${room.originalPrice - room.price}
                      </span>
                    </div>
                  )}
                  <span className="text-xs text-gray-500 font-medium block mb-1">Desde</span>
                  <div className="flex items-baseline space-x-1">
                    <span className="text-3xl font-bold text-verde-selva">${room.price}</span>
                    <span className="text-sm font-normal text-gray-600">/noche</span>
                  </div>
                </motion.div>

                {/* Última reserva - Urgencia */}
                {room.lastBooked && (
                  <div className="absolute bottom-4 right-4 z-30 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-lg shadow-lg flex items-center space-x-1.5 text-xs text-gray-600">
                    <Clock size={12} />
                    <span className="font-medium">{room.lastBooked}</span>
                  </div>
                )}
              </div>

              {/* Content Mejorado */}
              <div className="p-6 flex-1 flex flex-col">
                {/* Título y Descripción */}
                <div className="mb-4">
                  <h3 className="text-2xl font-display font-bold text-verde-selva mb-2 group-hover:text-verde-selva-dark transition-colors">
                    {room.name}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed" style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}>
                    {room.description}
                  </p>
                </div>

                {/* Capacidad y Camas - Mejorado */}
                <div className="flex items-center space-x-6 mb-4 pb-4 border-b border-gray-100">
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="bg-verde-selva/10 p-1.5 rounded-lg">
                      <Users size={16} className="text-verde-selva" />
                    </div>
                    <span className="text-sm font-semibold">{room.capacity} personas</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-700">
                    <div className="bg-azul-caribe/10 p-1.5 rounded-lg">
                      <Bed size={16} className="text-azul-caribe" />
                    </div>
                    <span className="text-sm font-semibold">{room.beds}</span>
                  </div>
                </div>

                {/* Features Mejorados */}
                <div className="mb-6 flex-1">
                  <div className="flex flex-wrap gap-2">
                    {room.features.slice(0, 4).map((feature, idx) => (
                      <motion.span
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * idx }}
                        className="inline-flex items-center space-x-1.5 text-xs bg-verde-selva/10 text-verde-selva-dark px-3 py-1.5 rounded-full font-medium border border-verde-selva/20"
                      >
                        <Check size={12} className="text-verde-selva" />
                        <span>{feature}</span>
                      </motion.span>
                    ))}
                    {room.features.length > 4 && (
                      <span className="inline-flex items-center text-xs bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full font-medium">
                        +{room.features.length - 4} más
                      </span>
                    )}
                  </div>
                </div>

                {/* Trust Badge */}
                <div className="mb-4 flex items-center space-x-2 text-xs text-gray-600">
                  <Shield size={14} className="text-green-600" />
                  <span>Cancelación gratuita hasta 24h antes</span>
                </div>

                {/* CTA Button Mejorado - Estándares Hotelería */}
                <Link
                  href={`/${locale}/reservar?room=${room.id}`}
                  className="group/btn relative inline-flex items-center justify-center w-full bg-verde-selva hover:bg-verde-selva-dark text-white font-bold px-6 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl overflow-hidden"
                >
                  <span className="relative z-10 flex items-center space-x-2">
                    <span>Reservar Ahora</span>
                    <ArrowRight size={18} className="transition-transform duration-200 group-hover/btn:translate-x-1" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-verde-selva-dark"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Comparar Seleccionados */}
      {compare.length > 0 && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Link
            href={`/${locale}/reservar?compare=${compare.join(',')}`}
            className="bg-azul-caribe text-white px-6 py-4 rounded-xl shadow-2xl font-semibold flex items-center space-x-2 hover:bg-azul-caribe-dark transition-colors"
          >
            <GitCompare size={20} />
            <span>Comparar {compare.length} habitaciones</span>
          </Link>
        </motion.div>
      )}
    </div>
  )
}
