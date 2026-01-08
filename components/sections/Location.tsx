'use client'

import { motion } from 'framer-motion'
import { MapPin, Navigation, Car } from 'lucide-react'

export function Location() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-h1 font-display text-verde-selva mb-4">
            Ubicación
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En el corazón del Caribe colombiano, donde el río Buritaca 
            se encuentra con el mar
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-96 rounded-xl overflow-hidden shadow-large"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.123456789!2d-73.5!3d11.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDEyJzAwLjAiTiA3M8KwMzAnMDAuMCJX!5e0!3m2!1ses!2sco!4v1234567890123!5m2!1ses!2sco"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-verde-selva/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MapPin className="text-verde-selva" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Dirección</h3>
                <p className="text-gray-600">
                  Buritaca, Magdalena<br />
                  Caribe Colombiano
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-azul-caribe/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Car className="text-azul-caribe" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Cómo llegar</h3>
                <div className="space-y-2 text-gray-600">
                  <p><strong>Desde Santa Marta:</strong> 1.5 horas en carro</p>
                  <p><strong>Desde Aeropuerto:</strong> 2 horas en carro</p>
                  <p><strong>Transporte:</strong> Ofrecemos servicio de recogida</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-dorado/10 rounded-full flex items-center justify-center flex-shrink-0">
                <Navigation className="text-dorado" size={24} />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2">Alrededores</h3>
                <ul className="space-y-1 text-gray-600">
                  <li>• Río Buritaca (5 min caminando)</li>
                  <li>• Playas del Caribe (15 min en carro)</li>
                  <li>• Parque Nacional Tayrona (30 min)</li>
                  <li>• Ciudad Perdida (excursiones disponibles)</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


