'use client'

import { useLocale } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { Globe, ChevronDown } from 'lucide-react'
import { locales, type Locale } from '@/i18n'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const languageNames: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
}

export function LanguageSwitcher() {
  const locale = useLocale() as Locale
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const switchLanguage = (newLocale: Locale) => {
    // Remove current locale from pathname
    const pathWithoutLocale = pathname.replace(`/${locale}`, '') || '/'
    // Navigate to new locale
    router.push(`/${newLocale}${pathWithoutLocale}`)
    router.refresh()
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-50 hover:text-verde-selva transition-all duration-300 group"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe size={18} className="group-hover:rotate-12 transition-transform duration-300" />
        <span className="font-medium text-sm">{languageNames[locale]}</span>
        <ChevronDown 
          size={16} 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-40"
            />
            
            {/* Dropdown */}
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute right-0 top-full mt-2 bg-white rounded-xl shadow-large border border-gray-100 min-w-[120px] z-50 overflow-hidden"
            >
              {locales.map((loc) => (
                <button
                  key={loc}
                  onClick={() => switchLanguage(loc)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-all duration-200 hover:bg-verde-selva/5 ${
                    locale === loc 
                      ? 'bg-verde-selva/10 text-verde-selva font-semibold' 
                      : 'text-gray-700 hover:text-verde-selva'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span>{languageNames[loc]}</span>
                    {locale === loc && (
                      <div className="w-1.5 h-1.5 bg-verde-selva rounded-full" />
                    )}
                  </div>
                </button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
