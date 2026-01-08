'use client'

import { useState, useRef, useEffect, useMemo, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X, Loader2 } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

interface RoomGalleryProps {
  images: string[]
  roomName: string
  className?: string
  disableLightbox?: boolean
}

// Blur placeholder base64 optimizado
const blurDataURL = 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='

// Componente de imagen optimizado sin parpadeo
function OptimizedImage({ 
  src, 
  alt, 
  className = '',
  priority = false
}: { 
  src: string
  alt: string
  className?: string
  priority?: boolean
}) {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    // Precargar imagen inmediatamente
    const img = new window.Image()
    img.onload = () => {
      setIsLoaded(true)
    }
    img.onerror = () => {
      setIsLoaded(true) // Marcar como cargada incluso si falla
    }
    img.fetchPriority = 'high'
    img.src = src
  }, [src])

  return (
    <div 
      className={`relative ${className}`} 
      style={{ 
        minHeight: '288px', 
        height: '100%',
        width: '100%',
        overflow: 'hidden',
      }}
    >
      {/* Placeholder blur siempre visible - fondo */}
      <div 
        className="absolute inset-0 bg-gray-200"
        style={{
          backgroundImage: `url("${blurDataURL}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          filter: 'blur(20px)',
          opacity: isLoaded ? 0 : 1,
          transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 1,
          willChange: 'opacity',
          backfaceVisibility: 'hidden',
        }}
      />
      
      {/* Imagen real - encima del placeholder */}
      <div 
        className="absolute inset-0"
        style={{
          opacity: isLoaded ? 1 : 0,
          transition: 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 2,
          willChange: 'opacity',
          backfaceVisibility: 'hidden',
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={85}
          priority={priority}
          loading={priority ? 'eager' : 'lazy'}
          placeholder="blur"
          blurDataURL={blurDataURL}
          onLoad={() => setIsLoaded(true)}
          style={{
            willChange: 'opacity',
            backfaceVisibility: 'hidden',
            transform: 'translateZ(0)',
            objectFit: 'cover',
          }}
        />
      </div>
    </div>
  )
}

export function RoomGallery({ images, roomName, className = '', disableLightbox = false }: RoomGalleryProps) {
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)
  const [imageLoaded, setImageLoaded] = useState(false)
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set())
  const [swiperReady, setSwiperReady] = useState(false)
  const swiperRef = useRef<SwiperType | null>(null)

  // Precargar TODAS las imágenes inmediatamente al montar
  useEffect(() => {
    if (images.length === 0) return

    const preloadAll = async () => {
      const promises = images.map((src, index) => {
        return new Promise<void>((resolve) => {
          // Crear imagen en memoria
          const img = new window.Image()
          
          img.onload = () => {
            setLoadedImages((prev) => {
              const next = new Set(prev)
              next.add(index)
              return next
            })
            resolve()
          }
          
          img.onerror = () => {
            // Marcar como cargada incluso si falla para evitar esperas infinitas
            setLoadedImages((prev) => {
              const next = new Set(prev)
              next.add(index)
              return next
            })
            resolve()
          }
          
          // Precargar con alta prioridad
          img.fetchPriority = 'high'
          img.src = src
        })
      })

      await Promise.all(promises)
    }

    preloadAll()
  }, [images])

  // Bloquear scroll del body cuando está abierto el lightbox
  useEffect(() => {
    if (lightboxImage !== null) {
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = originalOverflow
      }
    }
  }, [lightboxImage])

  // Resetear estado de carga cuando cambia la imagen en lightbox
  useEffect(() => {
    if (lightboxImage !== null) {
      const isPreloaded = loadedImages.has(lightboxImage)
      
      // Establecer estado inmediatamente sin delays
      setImageLoaded(isPreloaded)
    }
  }, [lightboxImage, loadedImages])

  const thumbImages = useMemo(() => images.slice(0, 4), [images])

  const goToSlide = useCallback((index: number) => {
    if (swiperRef.current && swiperReady) {
      swiperRef.current.slideTo(index, 300)
    }
  }, [swiperReady])

  const openLightbox = useCallback((index: number) => {
    // Prevenir múltiples aperturas
    if (lightboxImage !== null) return
    
    // Verificar si está precargada ANTES de abrir
    const isPreloaded = loadedImages.has(index)
    
    // Si está precargada, marcar como cargada INMEDIATAMENTE
    if (isPreloaded) {
      setImageLoaded(true)
    } else {
      setImageLoaded(false)
    }
    
    // Abrir lightbox después de establecer el estado
    setLightboxImage(index)
  }, [loadedImages, lightboxImage])

  const closeLightbox = useCallback(() => {
    // Prevenir múltiples cierres
    if (lightboxImage === null) return
    
    // Primero ocultar la imagen, luego cerrar el lightbox
    setImageLoaded(false)
    
    // Pequeño delay para permitir que la animación de salida se complete
    setTimeout(() => {
      setLightboxImage(null)
    }, 150) // Mismo tiempo que la animación de salida
  }, [lightboxImage])

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (lightboxImage === null) return
    
    const newIndex = direction === 'prev' 
      ? lightboxImage - 1 
      : lightboxImage + 1

    if (newIndex >= 0 && newIndex < images.length) {
      const isPreloaded = loadedImages.has(newIndex)
      
      // Cambiar a la nueva imagen
      setLightboxImage(newIndex)
      
      // Si está precargada, mostrar inmediatamente
      if (isPreloaded) {
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            setImageLoaded(true)
          })
        })
      } else {
        // Si no está precargada, resetear estado
        setImageLoaded(false)
      }
    }
  }, [lightboxImage, images.length, loadedImages])

  // Manejar navegación por teclado
  useEffect(() => {
    if (lightboxImage === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        navigateImage('prev')
      } else if (e.key === 'ArrowRight') {
        navigateImage('next')
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [lightboxImage, closeLightbox, navigateImage])

  if (!images || images.length === 0) return null

  return (
    <>
      <div className={`relative ${className}`}>
        {/* Galería Principal con Swiper */}
        <div className="relative h-72 overflow-hidden rounded-t-xl bg-gray-200" style={{ minHeight: '288px' }}>
          <Swiper
            modules={[Navigation, Pagination]}
            pagination={{ 
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={images.length > 1}
            className="h-full room-gallery-swiper"
            spaceBetween={0}
            loop={images.length > 1}
            watchSlidesProgress={true}
            onSwiper={(swiper) => {
              swiperRef.current = swiper
              setSwiperReady(true)
            }}
            style={{
              height: '100%',
              minHeight: '288px',
            }}
          >
            {images.map((image, index) => (
              <SwiperSlide key={`${image}-${index}`} style={{ height: '100%', minHeight: '288px' }}>
                <div 
                  className={`relative h-full w-full group/image ${disableLightbox ? 'cursor-default' : 'cursor-pointer'}`}
                  onClick={disableLightbox ? undefined : () => openLightbox(index)}
                  style={{ height: '100%', minHeight: '288px' }}
                >
                  <OptimizedImage
                    src={image}
                    alt={`${roomName} - Imagen ${index + 1}`}
                    className="h-full w-full"
                    priority={index === 0}
                  />
                  {images.length > 1 && (
                    <div className="absolute top-2 right-2 bg-black/60 text-white px-2 py-1 rounded-full text-xs backdrop-blur-sm z-10 pointer-events-none">
                      {index + 1} / {images.length}
                    </div>
                  )}
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Indicador de más imágenes */}
          {images.length > 4 && (
            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm z-10 pointer-events-none">
              +{images.length - 4} más
            </div>
          )}
        </div>

        {/* Thumbnails Grid */}
        {images.length > 1 && (
          <div className="grid grid-cols-4 gap-2 p-2 bg-gray-50 rounded-b-xl">
            {thumbImages.map((image, index) => (
              <button
                key={`thumb-${image}-${index}`}
                onClick={() => goToSlide(index)}
                className="relative h-16 overflow-hidden rounded-lg cursor-pointer hover:opacity-80 transition-opacity focus:outline-none focus:ring-2 focus:ring-verde-selva bg-gray-200"
                style={{ minHeight: '64px' }}
              >
                <OptimizedImage
                  src={image}
                  alt={`${roomName} - Thumbnail ${index + 1}`}
                  className="h-full w-full"
                />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Lightbox Optimizado - Solo mostrar si no está deshabilitado */}
      {!disableLightbox && (
        <AnimatePresence mode="wait">
          {lightboxImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={(e) => {
              // Solo cerrar si se hace clic directamente en el fondo, no en la imagen
              if (e.target === e.currentTarget) {
                closeLightbox()
              }
            }}
            style={{ 
              willChange: 'opacity',
              cursor: 'pointer',
            }}
          >
            {/* Botón Cerrar */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.05 }}
              onClick={(e) => {
                e.stopPropagation()
                closeLightbox()
              }}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70 backdrop-blur-sm"
              aria-label="Cerrar"
            >
              <X size={32} />
            </motion.button>

            {/* Botón Anterior */}
            {lightboxImage > 0 && (
              <motion.button
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70 backdrop-blur-sm"
                aria-label="Imagen anterior"
              >
                <ChevronLeft size={32} />
              </motion.button>
            )}

            {/* Botón Siguiente */}
            {lightboxImage < images.length - 1 && (
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10 bg-black/50 rounded-full p-2 hover:bg-black/70 backdrop-blur-sm"
                aria-label="Imagen siguiente"
              >
                <ChevronRight size={32} />
              </motion.button>
            )}

            {/* Contenedor de Imagen */}
            <motion.div
              key={lightboxImage}
              initial={{ scale: 0.98, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="relative w-full max-w-6xl h-[90vh] flex items-center justify-center"
              onClick={(e) => {
                // Prevenir que el clic en la imagen cierre el lightbox
                e.stopPropagation()
              }}
              onMouseDown={(e) => {
                // Prevenir que el mousedown se propague
                e.stopPropagation()
              }}
              style={{ 
                willChange: 'transform, opacity',
                cursor: 'default',
                pointerEvents: 'auto',
              }}
            >
              {/* Placeholder blur siempre visible mientras carga */}
              {!imageLoaded && (
                <motion.div 
                  className="absolute inset-0 bg-black/30 lightbox-placeholder"
                  initial={{ opacity: 1 }}
                  animate={{ opacity: imageLoaded ? 0 : 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    backgroundImage: `url("${blurDataURL}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'blur(40px)',
                    zIndex: 1,
                  }}
                />
              )}

              {/* Spinner solo si no está precargada */}
              {!imageLoaded && !loadedImages.has(lightboxImage) && (
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <Loader2 className="w-12 h-12 text-white animate-spin" />
                </div>
              )}

              {/* Imagen */}
              <div 
                className="relative w-full h-full lightbox-image-container"
                onClick={(e) => e.stopPropagation()}
                onMouseDown={(e) => e.stopPropagation()}
                style={{ 
                  pointerEvents: 'auto',
                  zIndex: 2,
                }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imageLoaded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={images[lightboxImage]}
                    alt={`${roomName} - Imagen ${lightboxImage + 1}`}
                    fill
                    className="object-contain"
                    quality={95}
                    priority
                    placeholder="blur"
                    blurDataURL={blurDataURL}
                    onLoad={() => {
                      // Marcar como cargada inmediatamente
                      setImageLoaded(true)
                    }}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 80vw"
                    style={{
                      willChange: 'opacity',
                      backfaceVisibility: 'hidden',
                    }}
                  />
                </motion.div>
              </div>
            </motion.div>

            {/* Contador */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-center z-10"
            >
              <p className="text-sm bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">
                {lightboxImage + 1} / {images.length}
              </p>
            </motion.div>
          </motion.div>
          )}
        </AnimatePresence>
      )}
    </>
  )
}
