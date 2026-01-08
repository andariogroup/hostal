'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, ChevronDown, HelpCircle, MessageCircle, BookOpen, CheckCircle, X } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export default function FAQPage() {
  const locale = useLocale()
  const t = useTranslations('faq')
  const tCommon = useTranslations('common')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)
  const [openItems, setOpenItems] = useState<number[]>([])

  const faqCategories = [
    { id: 'reservas', title: t('categories.reservas'), icon: '📅', color: 'from-blue-500 to-blue-600' },
    { id: 'habitaciones', title: t('categories.habitaciones'), icon: '🛏️', color: 'from-purple-500 to-purple-600' },
    { id: 'servicios', title: t('categories.servicios'), icon: '✨', color: 'from-pink-500 to-pink-600' },
    { id: 'ubicacion', title: t('categories.ubicacion'), icon: '📍', color: 'from-green-500 to-green-600' },
    { id: 'politicas', title: t('categories.politicas'), icon: '📋', color: 'from-orange-500 to-orange-600' },
  ]

  const faqs = [
    { id: 1, category: 'reservas', question: t('questions.1.question'), answer: t('questions.1.answer') },
    { id: 2, category: 'reservas', question: t('questions.2.question'), answer: t('questions.2.answer') },
    { id: 3, category: 'reservas', question: t('questions.3.question'), answer: t('questions.3.answer') },
    { id: 4, category: 'habitaciones', question: t('questions.4.question'), answer: t('questions.4.answer') },
    { id: 5, category: 'habitaciones', question: t('questions.5.question'), answer: t('questions.5.answer') },
    { id: 6, category: 'habitaciones', question: t('questions.6.question'), answer: t('questions.6.answer') },
    { id: 7, category: 'servicios', question: t('questions.7.question'), answer: t('questions.7.answer') },
    { id: 8, category: 'servicios', question: t('questions.8.question'), answer: t('questions.8.answer') },
    { id: 9, category: 'servicios', question: t('questions.9.question'), answer: t('questions.9.answer') },
    { id: 10, category: 'ubicacion', question: t('questions.10.question'), answer: t('questions.10.answer') },
    { id: 11, category: 'ubicacion', question: t('questions.11.question'), answer: t('questions.11.answer') },
    { id: 12, category: 'politicas', question: t('questions.12.question'), answer: t('questions.12.answer') },
    { id: 13, category: 'politicas', question: t('questions.13.question'), answer: t('questions.13.answer') },
    { id: 14, category: 'politicas', question: t('questions.14.question'), answer: t('questions.14.answer') },
  ]

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  const filteredFaqs = faqs.filter(faq => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = !selectedCategory || faq.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const categoryCounts = faqCategories.map(cat => ({
    ...cat,
    count: faqs.filter(faq => faq.category === cat.id).length
  }))

  return (
    <div className="pt-28 md:pt-32 pb-20 bg-gradient-to-b from-white via-arena-light/10 to-white min-h-screen">
      <div className="container-custom max-w-5xl">
        {/* Hero Section Mejorado */}
        <div className="text-center mb-16 mt-6">
          <div className="animate-slide-up">
            {/* Breadcrumb */}
            <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm text-gray-500">
                <li><Link href={`/${locale}`} className="hover:text-verde-selva transition-colors">Inicio</Link></li>
                <li className="text-gray-400">/</li>
                <li className="text-verde-selva font-medium">Preguntas Frecuentes</li>
              </ol>
            </nav>

            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-gradient-to-br from-verde-selva to-verde-selva-dark rounded-2xl flex items-center justify-center shadow-lg">
                <HelpCircle size={40} className="text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-verde-selva mb-5 leading-tight">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              {t('subtitle')}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="bg-white rounded-xl shadow-md border border-gray-100 px-6 py-3">
                <div className="text-2xl font-bold text-verde-selva">{faqs.length}</div>
                <div className="text-xs text-gray-600 font-medium">Preguntas</div>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-gray-100 px-6 py-3">
                <div className="text-2xl font-bold text-verde-selva">{faqCategories.length}</div>
                <div className="text-xs text-gray-600 font-medium">Categorías</div>
              </div>
              <div className="bg-white rounded-xl shadow-md border border-gray-100 px-6 py-3">
                <div className="text-2xl font-bold text-verde-selva">24/7</div>
                <div className="text-xs text-gray-600 font-medium">Soporte</div>
              </div>
            </div>
          </div>
        </div>

        {/* Search Bar Mejorada */}
        <div className="mb-8">
          <div className="relative">
            <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 text-verde-selva" size={22} />
            <input
              type="text"
              placeholder={t('searchPlaceholder')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-14 pr-12 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-verde-selva focus:border-verde-selva transition-all duration-200 bg-white hover:border-gray-300 text-lg"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            )}
          </div>
          {searchTerm && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-sm text-gray-600 mt-3 ml-2"
            >
              {filteredFaqs.length} {filteredFaqs.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
            </motion.p>
          )}
        </div>

        {/* Categories Mejoradas */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-6 py-3.5 rounded-xl transition-all duration-200 flex items-center space-x-2 font-semibold ${
                !selectedCategory
                  ? 'bg-verde-selva text-white shadow-lg shadow-verde-selva/30'
                  : 'bg-white text-gray-700 hover:bg-gray-50 shadow-md border-2 border-gray-100 hover:border-verde-selva/30'
              }`}
            >
              <BookOpen size={20} />
              <span>{t('all')}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                !selectedCategory ? 'bg-white/20' : 'bg-gray-100'
              }`}>
                {faqs.length}
              </span>
            </motion.button>
            {categoryCounts.map((cat) => (
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
                <span className="text-xl">{cat.icon}</span>
                <span>{cat.title}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  selectedCategory === cat.id ? 'bg-white/20' : 'bg-gray-100'
                }`}>
                  {cat.count}
                </span>
              </motion.button>
            ))}
          </div>
        </div>

        {/* FAQ Items Mejorados */}
        <div className="space-y-4 mb-12">
          <AnimatePresence mode="wait">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, index) => {
                const isOpen = openItems.includes(faq.id)
                const category = faqCategories.find(cat => cat.id === faq.category)
                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className={`card overflow-hidden border-2 transition-all duration-300 ${
                      isOpen 
                        ? 'border-verde-selva shadow-lg shadow-verde-selva/20' 
                        : 'border-gray-100 hover:border-gray-200 hover:shadow-md'
                    }`}
                  >
                    <button
                      onClick={() => toggleItem(faq.id)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors group"
                    >
                      <div className="flex items-start space-x-4 flex-1">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors ${
                          isOpen 
                            ? 'bg-verde-selva text-white' 
                            : 'bg-verde-selva/10 text-verde-selva group-hover:bg-verde-selva/20'
                        }`}>
                          <HelpCircle size={20} />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            {category && (
                              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                                {category.title}
                              </span>
                            )}
                          </div>
                          <span className="font-bold text-lg text-gray-900 block">
                            {faq.question}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`text-gray-400 transition-all duration-300 flex-shrink-0 ml-4 ${
                          isOpen ? 'transform rotate-180 text-verde-selva' : ''
                        }`}
                        size={24}
                      />
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: 'easeInOut' }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-2">
                            <div className="pl-14 border-l-2 border-verde-selva/20">
                              <p className="text-gray-700 leading-relaxed text-base">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                )
              })
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center py-16 bg-white rounded-2xl shadow-md border-2 border-gray-100"
              >
                <HelpCircle size={64} className="text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-700 mb-2">
                  {t('notFound')}
                </h3>
                <p className="text-gray-500 mb-6">
                  Intenta con otros términos de búsqueda o selecciona otra categoría
                </p>
                <div className="flex justify-center gap-3">
                  <button
                    onClick={() => {
                      setSearchTerm('')
                      setSelectedCategory(null)
                    }}
                    className="btn-primary"
                  >
                    Limpiar búsqueda
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Contact CTA Mejorado */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-verde-selva/10 via-azul-caribe/10 to-verde-selva/10 p-8 rounded-2xl border-2 border-verde-selva/20 shadow-lg"
        >
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-verde-selva rounded-full flex items-center justify-center shadow-lg">
                <MessageCircle size={32} className="text-white" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-verde-selva mb-3">
              {t('contactTitle')}
            </h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              {t('contactText')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href={`/${locale}/reservar`} 
                className="btn-primary inline-flex items-center justify-center space-x-2"
              >
                <span>Reservar Ahora</span>
              </Link>
              <Link 
                href={`/${locale}/contacto`} 
                className="btn-secondary inline-flex items-center justify-center space-x-2"
              >
                <span>{t('contactButton')}</span>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Quick Help */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <CheckCircle size={32} className="text-green-500 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Respuestas Rápidas</h3>
            <p className="text-sm text-gray-600">
              Encuentra respuestas instantáneas a las preguntas más comunes
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <BookOpen size={32} className="text-verde-selva mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Información Completa</h3>
            <p className="text-sm text-gray-600">
              Toda la información que necesitas sobre tu estadía
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 text-center">
            <MessageCircle size={32} className="text-azul-caribe mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 mb-2">Soporte 24/7</h3>
            <p className="text-sm text-gray-600">
              Estamos aquí para ayudarte en cualquier momento
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
