'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Mail, Gift } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'
import toast from 'react-hot-toast'

interface NewsletterForm {
  email: string
}

export function NewsletterPopup() {
  const t = useTranslations('newsletter')
  const [isOpen, setIsOpen] = useState(false)
  const [hasShown, setHasShown] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm<NewsletterForm>()

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenPopup = localStorage.getItem('newsletter-popup-seen')
      if (!hasSeenPopup && !hasShown) {
        setIsOpen(true)
        setHasShown(true)
      }
    }, 30000)

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        const hasSeenPopup = localStorage.getItem('newsletter-popup-seen')
        if (!hasSeenPopup && !hasShown) {
          setIsOpen(true)
          setHasShown(true)
        }
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [hasShown])

  const onSubmit = async (data: NewsletterForm) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      localStorage.setItem('newsletter-popup-seen', 'true')
      setIsOpen(false)
      toast.success(t('success'))
      reset()
    } catch (error) {
      toast.error(t('error'))
    }
  }

  const handleClose = () => {
    localStorage.setItem('newsletter-popup-seen', 'true')
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={handleClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-white rounded-2xl shadow-premium max-w-md w-full p-8 relative">
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-dorado/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Gift className="text-dorado" size={32} />
                </div>
                <h2 className="text-2xl font-display font-bold text-verde-selva mb-2">
                  {t('title')}
                </h2>
                <p className="text-gray-600">
                  {t('subtitle')}
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                    <input
                      {...register('email', {
                        required: 'Email requerido',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Email inválido',
                        },
                      })}
                      type="email"
                      placeholder={t('emailPlaceholder')}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-azul-caribe focus:border-transparent"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  {t('button')}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  {t('disclaimer')}
                </p>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
