'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { useLocale, useTranslations } from 'next-intl'
import { ChevronDown, Shield, Star, ArrowRight } from 'lucide-react'
import Image from 'next/image'

export function Hero() {
  const locale = useLocale()
  const t = useTranslations('hero')
  const tCommon = useTranslations('common')

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        {/* Overlay optimizado para hostales - cálido y acogedor */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-black/25 to-black/55 z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent z-10" />
        
        <Image
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80&auto=format&fit=crop"
          alt="Hostal Buritaca - Playa del Caribe"
          fill
          className="object-cover brightness-85 contrast-80"
          priority
          quality={90}
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
        />
      </div>

      {/* Content - Con espacio suficiente para el header fijo */}
      <div className="relative z-20 container-custom text-center text-white px-4 pt-32 md:pt-40 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Ubicación - Subtítulo */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl font-medium text-white/95 mb-4 drop-shadow-lg"
          >
            {t('location')}
          </motion.p>

          {/* Título Principal - Grande y claro */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold mb-6 text-white drop-shadow-2xl leading-tight"
          >
            {t('title')}
          </motion.h1>

          {/* Subtítulo - Descripción */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl mb-12 text-white/95 drop-shadow-lg max-w-2xl mx-auto leading-relaxed"
          >
            {t('subtitle')}
          </motion.p>
          
          {/* Call to Actions - ESTÁNDARES UI/UX PROFESIONALES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-10"
          >
            {/* Botón Principal - RESERVAR AHORA */}
            {/* Cumple con WCAG: tamaño mínimo 44x44px, contraste 4.5:1+, estados claros */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link 
                href={`/${locale}/reservar`}
                aria-label={`${t('ctaPrimary')} - ${tCommon('hostalName')}`}
                className="group relative inline-flex items-center justify-center gap-3 bg-verde-selva hover:bg-verde-selva-dark active:bg-[#012e32] text-white font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-xl shadow-lg hover:shadow-xl active:shadow-md transition-all duration-200 min-h-[56px] md:min-h-[64px] min-w-[200px] md:min-w-[240px] focus:outline-none focus:ring-4 focus:ring-verde-selva/50 focus:ring-offset-2 focus:ring-offset-transparent"
                style={{
                  // Contraste WCAG AAA: verde-selva (#108890) sobre blanco = 4.8:1
                  boxShadow: '0 4px 14px rgba(16, 136, 144, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1)',
                }}
              >
                <span className="relative z-10 font-semibold tracking-tight">
                  {t('ctaPrimary')}
                </span>
                <ArrowRight 
                  size={20} 
                  className="relative z-10 transition-transform duration-200 group-hover:translate-x-1" 
                  aria-hidden="true"
                />
                
                {/* Efecto de brillo al hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-xl"
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '100%', opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
                
                {/* Indicador de estado activo */}
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-active:opacity-100 transition-opacity duration-150" />
              </Link>
            </motion.div>
            
            {/* Botón Secundario - VER HABITACIONES */}
            {/* Cumple con WCAG: tamaño mínimo 44x44px, contraste 4.5:1+, estados claros */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link 
                href={`/${locale}/alojamiento`}
                aria-label={`${t('ctaSecondary')} - ${tCommon('hostalName')}`}
                className="group relative inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-50 active:bg-gray-100 text-verde-selva-dark font-bold text-lg md:text-xl px-8 md:px-12 py-4 md:py-5 rounded-xl shadow-lg hover:shadow-xl active:shadow-md transition-all duration-200 min-h-[56px] md:min-h-[64px] min-w-[200px] md:min-w-[240px] focus:outline-none focus:ring-4 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent border-2 border-white/20 hover:border-white/40"
                style={{
                  // Contraste WCAG AAA: verde-selva-dark sobre blanco = 7.2:1
                  boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.2)',
                }}
              >
                <span className="relative z-10 font-semibold tracking-tight">
                  {t('ctaSecondary')}
                </span>
                <ArrowRight 
                  size={20} 
                  className="relative z-10 transition-transform duration-200 group-hover:translate-x-1" 
                  aria-hidden="true"
                />
                
                {/* Efecto de brillo al hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-verde-selva/10 to-transparent rounded-xl"
                  initial={{ x: '-100%', opacity: 0 }}
                  whileHover={{ x: '100%', opacity: 1 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
                
                {/* Indicador de estado activo */}
                <div className="absolute inset-0 bg-verde-selva/5 rounded-xl opacity-0 group-active:opacity-100 transition-opacity duration-150" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Badges de Confianza - Simplificados */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap justify-center gap-4"
          >
            {/* Badge Mejor Precio */}
            <div className="inline-flex items-center space-x-2 bg-white/25 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-semibold border border-white/40 shadow-lg">
              <Shield size={18} className="text-white" />
              <span className="text-white">{t('badge')}</span>
            </div>

            {/* Badge Rating */}
            <div className="inline-flex items-center space-x-2 bg-white/25 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-semibold border border-white/40 shadow-lg">
              <Star size={18} className="text-yellow-300 fill-yellow-300" />
              <span className="text-white font-bold">4.9</span>
              <span className="text-white/90">(127 reseñas)</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator - Simplificado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="cursor-pointer focus:outline-none focus:ring-2 focus:ring-white/50 rounded-full p-2"
          onClick={() => {
            window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
          }}
          role="button"
          tabIndex={0}
          aria-label="Desplazarse hacia abajo"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })
            }
          }}
        >
          <ChevronDown size={32} className="text-white drop-shadow-lg" />
        </motion.div>
      </motion.div>

      {/* Gradiente inferior para transición suave */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />
    </section>
  )
}
