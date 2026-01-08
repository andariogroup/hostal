'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight, Grid3x3, ZoomIn, Filter, Image as ImageIcon } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

const galleryImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80',
    category: 'habitaciones',
    titleKey: 'suite',
    featured: true,
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
    category: 'habitaciones',
    titleKey: 'deluxe',
    featured: false,
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
    category: 'habitaciones',
    titleKey: 'eco',
    featured: false,
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1540541338287-41700207dee6?w=1200&q=80',
    category: 'areas-comunes',
    titleKey: 'recepcion',
    featured: true,
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1200&q=80',
    category: 'gastronomia',
    titleKey: 'restaurante',
    featured: false,
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1200&q=80',
    category: 'spa',
    titleKey: 'spa',
    featured: true,
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80',
    category: 'naturaleza',
    titleKey: 'naturaleza',
    featured: false,
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
    category: 'naturaleza',
    titleKey: 'vista',
    featured: false,
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
    category: 'areas-comunes',
    titleKey: 'piscina',
    featured: false,
  },
  {
    id: 10,
    src: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=1200&q=80',
    category: 'habitaciones',
    titleKey: 'suite',
    featured: false,
  },
  {
    id: 11,
    src: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1200&q=80',
    category: 'gastronomia',
    titleKey: 'restaurante',
    featured: false,
  },
  {
    id: 12,
    src: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=1200&q=80',
    category: 'naturaleza',
    titleKey: 'naturaleza',
    featured: false,
  },
]

export default function GaleriaPage() {
  const t = useTranslations('gallery')
  const locale = useLocale()
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const galleryCategories = [
    { id: 'all', name: t('categories.all'), icon: Grid3x3 },
    { id: 'habitaciones', name: t('categories.habitaciones'), icon: ImageIcon },
    { id: 'areas-comunes', name: t('categories.areas-comunes'), icon: ImageIcon },
    { id: 'naturaleza', name: t('categories.naturaleza'), icon: ImageIcon },
    { id: 'gastronomia', name: t('categories.gastronomia'), icon: ImageIcon },
    { id: 'spa', name: t('categories.spa'), icon: ImageIcon },
  ]

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === selectedCategory)

  const currentImageIndex = lightboxImage !== null
    ? filteredImages.findIndex(img => img.id === lightboxImage)
    : -1

  const nextImage = () => {
    if (lightboxImage !== null && currentImageIndex < filteredImages.length - 1) {
      setIsLoading(true)
      const nextIndex = currentImageIndex + 1
      setLightboxImage(filteredImages[nextIndex].id)
    }
  }

  const prevImage = () => {
    if (lightboxImage !== null && currentImageIndex > 0) {
      setIsLoading(true)
      const prevIndex = currentImageIndex - 1
      setLightboxImage(filteredImages[prevIndex].id)
    }
  }

  // Reset loading when image changes
  useEffect(() => {
    if (lightboxImage !== null) {
      setIsLoading(true)
    }
  }, [lightboxImage])

  // Keyboard navigation
  useEffect(() => {
    if (lightboxImage === null) return
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setLightboxImage(null)
      } else if (e.key === 'ArrowRight' && currentImageIndex < filteredImages.length - 1) {
        nextImage()
      } else if (e.key === 'ArrowLeft' && currentImageIndex > 0) {
        prevImage()
      }
    }
    
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lightboxImage, currentImageIndex])

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (lightboxImage !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [lightboxImage])

  return (
    <div className="pt-28 md:pt-32 pb-20 bg-gradient-to-b from-white via-arena-light/10 to-white min-h-screen">
      <div className="container-custom">
        {/* Hero Section Mejorado */}
        <div className="text-center mb-16 mt-6">
          <div className="animate-slide-up">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm text-gray-500">
                <li><Link href={`/${locale}`} className="hover:text-verde-selva transition-colors">Inicio</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-verde-selva font-medium">Galería</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-verde-selva mb-5 leading-tight">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {t('subtitle')}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 px-6 py-3">
                <div className="text-2xl font-bold text-verde-selva">{galleryImages.length}</div>
                <div className="text-xs text-gray-600 font-medium">Fotografías</div>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-gray-100 px-6 py-3">
                <div className="text-2xl font-bold text-verde-selva">{galleryCategories.length - 1}</div>
                <div className="text-xs text-gray-600 font-medium">Categorías</div>
              </div>
            </div>
          </div>
        </div>

        {/* Categories Mejoradas */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3">
            {galleryCategories.map((cat) => {
              const Icon = cat.icon
              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-6 py-3.5 rounded-xl transition-all duration-200 flex items-center space-x-2 font-semibold ${
                    selectedCategory === cat.id
                      ? 'bg-verde-selva text-white shadow-lg shadow-verde-selva/30'
                      : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border-2 border-gray-100 hover:border-verde-selva/30'
                  }`}
                >
                  <Icon size={20} />
                  <span>{cat.name}</span>
                  {selectedCategory === cat.id && (
                    <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">
                      {filteredImages.length}
                    </span>
                  )}
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Gallery Grid Mejorado - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => {
            const isFeatured = image.featured
            return (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isFeatured ? 'md:col-span-2 lg:col-span-1 lg:row-span-2' : ''
                }`}
                onClick={() => setLightboxImage(image.id)}
              >
                <div className={`relative overflow-hidden bg-gray-100 ${
                  isFeatured ? 'h-96 lg:h-full' : 'h-64'
                }`}>
                  <Image
                    src={image.src}
                    alt={t(`images.${image.titleKey}`)}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    loading={index < 6 ? 'eager' : 'lazy'}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    quality={90}
                  />
                  
                  {/* Overlay Mejorado */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      <h3 className="text-white font-bold text-lg mb-1">
                        {t(`images.${image.titleKey}`)}
                      </h3>
                      <p className="text-white/80 text-sm capitalize">
                        {t(`categories.${image.category}`)}
                      </p>
                    </div>
                  </div>

                  {/* Zoom Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                    <ZoomIn size={20} className="text-verde-selva" />
                  </div>

                  {/* Featured Badge */}
                  {isFeatured && (
                    <div className="absolute top-4 left-4 bg-gradient-to-r from-dorado to-yellow-400 text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
                      Destacada
                    </div>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <ImageIcon size={64} className="text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              No hay imágenes en esta categoría
            </h3>
            <p className="text-gray-500 mb-6">
              Intenta seleccionar otra categoría
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="btn-primary"
            >
              Ver todas las imágenes
            </button>
          </div>
        )}

        {/* Lightbox Mejorado */}
        <AnimatePresence mode="wait">
          {lightboxImage !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/98 flex items-center justify-center p-4"
              onClick={() => setLightboxImage(null)}
            >
              {/* Close Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
                aria-label="Cerrar"
              >
                <X size={24} />
              </motion.button>

              {/* Navigation Buttons */}
              {currentImageIndex > 0 && (
                <motion.button
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    prevImage()
                  }}
                  className="absolute left-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft size={24} />
                </motion.button>
              )}

              {currentImageIndex < filteredImages.length - 1 && (
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={(e) => {
                    e.stopPropagation()
                    nextImage()
                  }}
                  className="absolute right-6 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 backdrop-blur-sm rounded-full p-3 hover:bg-black/70"
                  aria-label="Imagen siguiente"
                >
                  <ChevronRight size={24} />
                </motion.button>
              )}

              {/* Image Container */}
              <motion.div
                key={lightboxImage}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative max-w-7xl w-full max-h-[90vh] flex items-center justify-center"
                onClick={(e) => e.stopPropagation()}
              >
                {filteredImages[currentImageIndex] && (
                  <>
                    {isLoading && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
                      </div>
                    )}
                    <Image
                      src={filteredImages[currentImageIndex].src}
                      alt={t(`images.${filteredImages[currentImageIndex].titleKey}`)}
                      fill
                      className="object-contain"
                      quality={95}
                      priority
                      onLoad={() => setIsLoading(false)}
                    />
                  </>
                )}
              </motion.div>

              {/* Image Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-center bg-black/50 backdrop-blur-sm px-6 py-4 rounded-xl max-w-2xl"
              >
                <h3 className="text-lg font-bold mb-1">
                  {filteredImages[currentImageIndex] && t(`images.${filteredImages[currentImageIndex].titleKey}`)}
                </h3>
                <p className="text-sm text-gray-300 capitalize mb-2">
                  {filteredImages[currentImageIndex] && t(`categories.${filteredImages[currentImageIndex].category}`)}
                </p>
                <p className="text-xs text-gray-400">
                  {currentImageIndex + 1} {t('of')} {filteredImages.length}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
