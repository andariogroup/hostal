'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'

export function CTA() {
  return (
    <section className="section-padding gradient-nature text-white relative overflow-hidden">
      {/* Patrón decorativo sutil */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
            <Calendar className="text-white" size={40} />
          </div>
          <h2 className="text-h1 font-display mb-6 text-white">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-xl text-white/95 mb-10 leading-relaxed">
            Reserva directamente y obtén el mejor precio garantizado, 
            cancelación flexible y confirmación instantánea
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/reservar" 
              className="btn-primary bg-white text-verde-selva-dark hover:bg-verde-selva-50 hover:text-verde-selva-dark shadow-colored-lg hover:shadow-colored-lg"
            >
              Reservar Ahora
              <ArrowRight className="inline ml-2" size={20} />
            </Link>
            <Link 
              href="/alojamiento" 
              className="btn-secondary border-2 border-white text-white hover:bg-white hover:text-verde-selva-dark shadow-soft"
            >
              Ver Habitaciones
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

