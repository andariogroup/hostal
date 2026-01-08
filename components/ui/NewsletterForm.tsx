'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Mail, Send, CheckCircle, Loader2 } from 'lucide-react'
import { useTranslations } from 'next-intl'
import toast from 'react-hot-toast'
import { motion, AnimatePresence } from 'framer-motion'

interface NewsletterForm {
  email: string
}

export function NewsletterForm() {
  const t = useTranslations('newsletter')
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<NewsletterForm>()
  const [isSuccess, setIsSuccess] = useState(false)

  const onSubmit = async (data: NewsletterForm) => {
    try {
      await new Promise(resolve => setTimeout(resolve, 1500))
      toast.success(t('success'), {
        icon: '🎉',
        duration: 4000,
      })
      setIsSuccess(true)
      reset()
      
      setTimeout(() => {
        setIsSuccess(false)
      }, 3000)
    } catch (error) {
      toast.error(t('error'), {
        duration: 4000,
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <AnimatePresence mode="wait">
        {!isSuccess ? (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex flex-col sm:flex-row gap-2"
          >
            {/* Input Compacto */}
            <div className="flex-1 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10" size={18} />
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
                disabled={isSubmitting}
                className={`w-full pl-10 pr-4 py-2.5 text-sm border-2 rounded-lg transition-all duration-200 ${
                  errors.email
                    ? 'border-red-400 focus:ring-2 focus:ring-red-400 focus:border-red-400'
                    : 'border-white/30 focus:ring-2 focus:ring-white/50 focus:border-white/50'
                } bg-white/10 backdrop-blur-sm text-white placeholder-gray-300 disabled:opacity-50 disabled:cursor-not-allowed`}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-red-300 text-xs mt-1 ml-1"
                >
                  {errors.email.message}
                </motion.p>
              )}
            </div>

            {/* Submit Button Compacto */}
            <motion.button
              type="submit"
              disabled={isSubmitting}
              whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
              className={`bg-arena hover:bg-arena-dark text-verde-selva-dark font-semibold px-4 py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 text-sm whitespace-nowrap ${
                isSubmitting ? 'cursor-wait' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={16} className="animate-spin" />
                  <span className="hidden sm:inline">Enviando...</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span className="hidden sm:inline">{t('subscribe')}</span>
                  <span className="sm:hidden">OK</span>
                </>
              )}
            </motion.button>
          </motion.div>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-green-500/20 border border-green-400/30 rounded-lg p-3 text-center"
          >
            <div className="flex items-center justify-center space-x-2">
              <CheckCircle size={18} className="text-green-400" />
              <p className="text-green-300 text-sm font-medium">
                ¡Suscrito!
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </form>
  )
}
