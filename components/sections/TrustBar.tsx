'use client'

import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { Shield, Clock, CreditCard, CheckCircle } from 'lucide-react'

export function TrustBar() {
  const t = useTranslations('trust')

  const trustItems = [
    {
      icon: Shield,
      text: t('bestPrice'),
    },
    {
      icon: Clock,
      text: t('flexibleCancellation'),
    },
    {
      icon: CheckCircle,
      text: t('instantConfirmation'),
    },
    {
      icon: CreditCard,
      text: t('securePayment'),
    },
  ]

  return (
    <section className="bg-white py-6 shadow-soft">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {trustItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center justify-center space-x-3 group"
              >
                <div className="w-12 h-12 bg-verde-selva-50 rounded-full flex items-center justify-center group-hover:bg-verde-selva-100 transition-colors duration-300">
                  <Icon className="text-verde-selva group-hover:text-verde-selva-dark transition-colors duration-300" size={22} />
                </div>
                <span className="text-sm md:text-base font-medium text-gray-700 group-hover:text-verde-selva-dark transition-colors duration-300">
                  {item.text}
                </span>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
