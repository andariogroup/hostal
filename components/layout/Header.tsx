'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'

export function Header() {
  const locale = useLocale()
  const pathname = usePathname()
  const t = useTranslations('nav')
  const tCommon = useTranslations('common')
  const tGallery = useTranslations('gallery')
  const tFAQ = useTranslations('faq')
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { href: `/${locale}`, label: t('home'), exact: true },
    { href: `/${locale}/alojamiento`, label: t('accommodation') },
    { href: `/${locale}/experiencias`, label: t('experiences') },
    { href: `/${locale}/galeria`, label: tGallery('title') },
    { href: `/${locale}/faq`, label: tFAQ('title') },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú mobile al hacer scroll
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleScroll = () => setIsMobileMenuOpen(false)
      window.addEventListener('scroll', handleScroll)
      return () => window.removeEventListener('scroll', handleScroll)
    }
  }, [isMobileMenuOpen])

  // Cerrar menú mobile al hacer clic fuera
  useEffect(() => {
    if (isMobileMenuOpen) {
      const handleClickOutside = (e: MouseEvent) => {
        const target = e.target as HTMLElement
        if (!target.closest('nav')) {
          setIsMobileMenuOpen(false)
        }
      }
      document.addEventListener('click', handleClickOutside)
      return () => document.removeEventListener('click', handleClickOutside)
    }
  }, [isMobileMenuOpen])

  // Detectar si un link está activo
  const isActive = (href: string, exact?: boolean) => {
    if (exact) {
      return pathname === href || pathname === `${href}/`
    }
    return pathname.startsWith(href) && href !== `/${locale}`
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-lg shadow-lg border-b border-gray-200/50'
          : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      <nav className="container-custom py-4 md:py-5">
        <div className="flex items-center justify-between">
          {/* Logo Mejorado */}
          <Link 
            href={`/${locale}`} 
            className="flex items-center transition-all duration-300 group relative z-10"
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="relative overflow-hidden rounded-full transition-all duration-300"
              style={{
                width: isScrolled ? 75 : 90,
                height: isScrolled ? 75 : 90,
                boxShadow: isScrolled 
                  ? '0 0 0 3px rgba(16, 136, 144, 0.25), 0 8px 32px rgba(16, 136, 144, 0.25)'
                  : '0 0 0 4px rgba(16, 136, 144, 0.35), 0 12px 40px rgba(16, 136, 144, 0.3)',
              }}
            >
              <Image
                src="/logo_hostal.jpeg"
                alt={tCommon('hostalName')}
                width={isScrolled ? 75 : 90}
                height={isScrolled ? 75 : 90}
                className="object-cover transition-all duration-300"
                priority
              />
              {/* Overlay brillante en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
              {/* Anillo de resplandor */}
              <div className="absolute inset-0 ring-2 ring-verde-selva/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </Link>

          {/* Desktop Navigation Mejorada */}
          <div className="hidden lg:flex items-center space-x-2">
            {navItems.map((item) => {
              const active = isActive(item.href, item.exact)
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group px-5 py-2.5 rounded-xl transition-all duration-300"
                >
                  <motion.span
                    whileHover={{ y: -1 }}
                    className={`relative z-10 font-semibold text-sm transition-colors duration-300 ${
                      active
                        ? 'text-verde-selva'
                        : 'text-gray-700 hover:text-verde-selva'
                    }`}
                  >
                    {item.label}
                  </motion.span>
                  
                  {/* Indicador activo mejorado */}
                  {active && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 bg-gradient-to-r from-verde-selva/15 to-verde-selva/5 rounded-xl"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Hover effect mejorado */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-gray-50 to-gray-50/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    whileHover={{ scale: 1.02 }}
                  />
                  
                  {/* Underline indicator mejorado */}
                  {active && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-verde-selva to-transparent rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  
                  {/* Punto indicador activo */}
                  {active && (
                    <motion.div
                      layoutId="activeDot"
                      className="absolute top-1 right-1 w-2 h-2 bg-verde-selva rounded-full"
                      initial={false}
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
            
            {/* Separador mejorado */}
            <div className="w-px h-8 bg-gradient-to-b from-transparent via-gray-300 to-transparent mx-3" />
            
            {/* Language Switcher */}
            <div className="mx-2">
              <LanguageSwitcher />
            </div>
            
            {/* CTA Button Mejorado */}
            <Link
              href={`/${locale}/reservar`}
              className={`ml-2 relative overflow-hidden group/btn ${
                isActive(`/${locale}/reservar`) 
                  ? 'ring-2 ring-verde-selva ring-offset-2' 
                  : ''
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-sm px-7 py-2.5 font-semibold relative z-10"
              >
                <span className="relative z-10">{tCommon('bookNow')}</span>
                {/* Efecto de brillo en hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.6 }}
                />
              </motion.div>
            </Link>
          </div>

          {/* Mobile Menu Button Mejorado */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="lg:hidden p-3 -mr-2 text-gray-700 hover:text-verde-selva hover:bg-verde-selva/5 rounded-xl transition-all duration-300 relative z-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <AnimatePresence mode="wait">
              {isMobileMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={26} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={26} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Mejorado */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <>
              {/* Backdrop mejorado */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40 top-[89px] lg:hidden"
              />
              
              {/* Menu Panel mejorado */}
              <motion.div
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="lg:hidden mt-6 pb-6 border-t border-gray-200 pt-6 relative z-50 bg-white/98 backdrop-blur-lg rounded-b-2xl shadow-xl"
              >
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => {
                    const active = isActive(item.href, item.exact)
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -30 }}
                        transition={{ delay: index * 0.05, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsMobileMenuOpen(false)}
                          className={`flex items-center justify-between px-5 py-4 rounded-xl transition-all duration-300 group relative overflow-hidden ${
                            active
                              ? 'bg-gradient-to-r from-verde-selva/15 to-verde-selva/5 text-verde-selva font-bold shadow-sm'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-verde-selva'
                          }`}
                        >
                          <span className="text-base relative z-10">{item.label}</span>
                          <div className="flex items-center space-x-2">
                            {active && (
                              <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                className="w-2.5 h-2.5 bg-verde-selva rounded-full shadow-sm"
                              />
                            )}
                            <motion.div
                              className={`w-1.5 h-1.5 rounded-full ${
                                active ? 'bg-verde-selva/30' : 'bg-gray-300 group-hover:bg-verde-selva/30'
                              }`}
                              whileHover={{ scale: 1.5 }}
                            />
                          </div>
                          {/* Indicador de fondo */}
                          {active && (
                            <motion.div
                              layoutId="mobileActiveIndicator"
                              className="absolute left-0 top-0 bottom-0 w-1 bg-verde-selva rounded-r-full"
                              initial={false}
                              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    )
                  })}
                  
                  {/* Separador mejorado */}
                  <div className="my-4 border-t border-gray-200" />
                  
                  {/* Language Switcher Mobile mejorado */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="px-5 py-3 bg-gray-50/50 rounded-xl"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-gray-700">Idioma</span>
                    </div>
                    <LanguageSwitcher />
                  </motion.div>
                  
                  {/* CTA Button Mobile mejorado */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35 }}
                    className="px-5 pt-4"
                  >
                    <Link
                      href={`/${locale}/reservar`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="btn-primary w-full text-center block relative overflow-hidden group/btn"
                    >
                      <span className="relative z-10">{tCommon('bookNow')}</span>
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        initial={{ x: '-100%' }}
                        whileHover={{ x: '100%' }}
                        transition={{ duration: 0.6 }}
                      />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </nav>
    </header>
  )
}
