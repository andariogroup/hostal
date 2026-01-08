'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLocale, useTranslations } from 'next-intl'
import { 
  Facebook, 
  Instagram, 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Shield, 
  Award,
  Star,
  ArrowRight,
  MessageCircle,
  Calendar,
  Users,
  Heart,
  CheckCircle
} from 'lucide-react'
import { NewsletterForm } from '@/components/ui/NewsletterForm'
import { motion } from 'framer-motion'

export function Footer() {
  const locale = useLocale()
  const t = useTranslations('footer')
  const tNewsletter = useTranslations('newsletter')
  const tNav = useTranslations('nav')
  const tGallery = useTranslations('gallery')
  const tFAQ = useTranslations('faq')
  const tPolicies = useTranslations('policies')
  const tReviews = useTranslations('reviews')
  const tCommon = useTranslations('common')
  
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-verde-selva via-verde-selva-dark to-[#012e32] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="container-custom section-padding relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* About Section - Mejorado */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <Link href={`/${locale}`} className="inline-block group">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative overflow-hidden rounded-full ring-4 ring-white/20 shadow-xl w-20 h-20 mb-4"
                >
                  <Image
                    src="/logo_hostal.jpeg"
                    alt={tCommon('hostalName')}
                    width={80}
                    height={80}
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
                </motion.div>
              </Link>
              <h3 className="text-2xl font-display font-bold mb-3">
                {tCommon('hostalName')}
              </h3>
            </div>
            <p className="text-gray-200 text-sm leading-relaxed mb-6 max-w-md">
              {t('aboutText')}
            </p>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                <Star size={16} className="text-yellow-300 fill-yellow-300" />
                <span className="text-xs font-semibold">4.9/5</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                <Shield size={16} className="text-green-300" />
                <span className="text-xs font-semibold">Certificado</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                <Award size={16} className="text-yellow-300" />
                <span className="text-xs font-semibold">Mejor Precio</span>
              </div>
            </div>

            {/* Social Media Mejorado */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold mb-3 text-white/90">{t('followUs')}</h4>
              <div className="flex space-x-3 mb-6">
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40 shadow-lg"
                  aria-label="Facebook"
                >
                  <Facebook size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40 shadow-lg"
                  aria-label="Instagram"
                >
                  <Instagram size={20} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  href="#"
                  className="w-11 h-11 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-200 border border-white/20 hover:border-white/40 shadow-lg"
                  aria-label="WhatsApp"
                >
                  <MessageCircle size={20} />
                </motion.a>
              </div>

              {/* Newsletter Compacto Integrado */}
              <div className="pt-4 border-t border-white/20">
                <div className="flex items-center space-x-2 mb-2">
                  <Mail size={16} className="text-arena" />
                  <h5 className="font-semibold text-sm text-white">{tNewsletter('footerTitle')}</h5>
                </div>
                <p className="text-xs text-gray-300 mb-3">
                  {tNewsletter('footerText')}
                </p>
                <NewsletterForm />
              </div>
            </div>
          </div>

          {/* Quick Links - Mejorado */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center space-x-2">
              <ArrowRight size={18} className="text-arena" />
              <span>{t('quickLinks')}</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href={`/${locale}`} 
                  className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
                >
                  <div className="w-1.5 h-1.5 bg-arena rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{tNav('home')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/alojamiento`} 
                  className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
                >
                  <div className="w-1.5 h-1.5 bg-arena rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{tNav('accommodation')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/experiencias`} 
                  className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
                >
                  <div className="w-1.5 h-1.5 bg-arena rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{tNav('experiences')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/galeria`} 
                  className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
                >
                  <div className="w-1.5 h-1.5 bg-arena rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{tGallery('title')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/reservar`} 
                  className="flex items-center space-x-2 text-arena font-semibold hover:text-white transition-colors group"
                >
                  <Calendar size={16} className="text-arena" />
                  <span>{tNav('book')}</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Info - Mejorado */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center space-x-2">
              <Shield size={18} className="text-arena" />
              <span>Información</span>
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href={`/${locale}/faq`} 
                  className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
                >
                  <div className="w-1.5 h-1.5 bg-arena rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{tFAQ('title')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/politicas`} 
                  className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
                >
                  <div className="w-1.5 h-1.5 bg-arena rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{tPolicies('title')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/reviews`} 
                  className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
                >
                  <div className="w-1.5 h-1.5 bg-arena rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>{tReviews('title')}</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/politicas/privacidad`} 
                  className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
                >
                  <div className="w-1.5 h-1.5 bg-arena rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Privacidad</span>
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/politicas/terminos`} 
                  className="flex items-center space-x-2 text-gray-200 hover:text-white transition-colors group"
                >
                  <div className="w-1.5 h-1.5 bg-arena rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span>Términos</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter - Mejorado */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center space-x-2">
              <MessageCircle size={18} className="text-arena" />
              <span>{t('contact')}</span>
            </h4>
            
            {/* Contact Info */}
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Phone size={18} className="text-arena" />
                </div>
                <div>
                  <div className="text-xs text-gray-300 mb-1">Teléfono</div>
                  <a href="tel:+573001234567" className="text-white hover:text-arena transition-colors font-medium">
                    +57 300 123 4567
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Mail size={18} className="text-arena" />
                </div>
                <div>
                  <div className="text-xs text-gray-300 mb-1">Email</div>
                  <a href="mailto:info@hostalburitaca.com" className="text-white hover:text-arena transition-colors font-medium break-all">
                    info@hostalburitaca.com
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                  <MapPin size={18} className="text-arena" />
                </div>
                <div>
                  <div className="text-xs text-gray-300 mb-1">Ubicación</div>
                  <span className="text-white font-medium">
                    Buritaca, Magdalena<br />
                    Colombia
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center flex-shrink-0 border border-white/20">
                  <Clock size={18} className="text-arena" />
                </div>
                <div>
                  <div className="text-xs text-gray-300 mb-1">Horario</div>
                  <span className="text-white font-medium">
                    24/7 Disponible
                  </span>
                </div>
              </li>
            </ul>

          </div>
        </div>

        {/* Bottom Bar Mejorado */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Copyright */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-300">
              <p>
                &copy; {currentYear} {tCommon('hostalName')}. {t('rights')}.
              </p>
              <div className="flex items-center space-x-1 text-xs">
                <span>Hecho con</span>
                <Heart size={14} className="text-red-400 fill-red-400" />
                <span>en Colombia</span>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-300 mr-2">Aceptamos:</span>
              <div className="flex items-center space-x-2">
                <div className="w-10 h-6 bg-white/10 rounded border border-white/20 flex items-center justify-center text-xs font-bold">
                  VISA
                </div>
                <div className="w-10 h-6 bg-white/10 rounded border border-white/20 flex items-center justify-center text-xs font-bold">
                  MC
                </div>
                <div className="w-10 h-6 bg-white/10 rounded border border-white/20 flex items-center justify-center text-xs font-bold">
                  PSE
                </div>
              </div>
            </div>

            {/* Back to Top */}
            <motion.button
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center space-x-2 text-sm text-gray-300 hover:text-white transition-colors"
              aria-label="Volver arriba"
            >
              <span>Volver arriba</span>
              <ArrowRight size={16} className="rotate-[-90deg]" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  )
}
