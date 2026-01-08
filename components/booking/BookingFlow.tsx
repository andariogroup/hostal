'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calendar, Users, CreditCard, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

const steps = [
  { id: 1, name: 'Fechas', icon: Calendar },
  { id: 2, name: 'Habitación', icon: Users },
  { id: 3, name: 'Datos', icon: Users },
  { id: 4, name: 'Pago', icon: CreditCard },
]

const formSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(10, 'Teléfono inválido'),
  comentarios: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

export function BookingFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const [selectedRoom, setSelectedRoom] = useState<number | null>(null)
  const [selectedDates, setSelectedDates] = useState({ checkIn: '', checkOut: '' })
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const onSubmit = (data: FormData) => {
    console.log('Reserva:', { ...data, selectedRoom, selectedDates })
    // Aquí se integraría con Cloudbeds o API de reservas
    nextStep()
  }

  const progress = (currentStep / steps.length) * 100

  return (
    <div className="max-w-4xl mx-auto">
      {/* Progress Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-4">
          {steps.map((step) => {
            const Icon = step.icon
            const isActive = currentStep >= step.id
            return (
              <div
                key={step.id}
                className={`flex flex-col items-center flex-1 ${
                  isActive ? 'text-azul-caribe' : 'text-gray-400'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                    isActive
                      ? 'bg-azul-caribe text-white'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <Icon size={24} />
                </div>
                <span className="text-sm font-medium">{step.name}</span>
              </div>
            )
          })}
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <motion.div
            className="bg-azul-caribe h-2 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      {/* Steps Content */}
      <div className="bg-white rounded-xl shadow-large p-8">
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-display text-verde-selva mb-6">
                Selecciona tus fechas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de llegada
                  </label>
                  <input
                    type="date"
                    value={selectedDates.checkIn}
                    onChange={(e) =>
                      setSelectedDates({ ...selectedDates, checkIn: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-caribe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fecha de salida
                  </label>
                  <input
                    type="date"
                    value={selectedDates.checkOut}
                    onChange={(e) =>
                      setSelectedDates({ ...selectedDates, checkOut: e.target.value })
                    }
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-caribe"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Número de huéspedes
                </label>
                <select className="w-full px-4 py-3 border border-gray-300 rounded-lg">
                  <option>1 huésped</option>
                  <option>2 huéspedes</option>
                  <option>3 huéspedes</option>
                  <option>4+ huéspedes</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button onClick={nextStep} className="btn-primary flex items-center space-x-2">
                  <span>Continuar</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-display text-verde-selva mb-6">
                Selecciona tu habitación
              </h2>
              <div className="space-y-4 mb-8">
                {[1, 2, 3].map((roomId) => (
                  <div
                    key={roomId}
                    onClick={() => setSelectedRoom(roomId)}
                    className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                      selectedRoom === roomId
                        ? 'border-azul-caribe bg-azul-caribe/5'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold text-lg">Suite Premium</h3>
                        <p className="text-gray-600">2-4 personas • 1 cama king</p>
                        <div className="mt-2 space-y-1">
                          <div className="text-sm text-gray-600">✓ Vista al río</div>
                          <div className="text-sm text-gray-600">✓ Jacuzzi privado</div>
                          <div className="text-sm text-gray-600">✓ Desayuno incluido</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-verde-selva">
                          $150
                          <span className="text-sm font-normal">/noche</span>
                        </div>
                        <div className="text-sm text-gray-500">Total: $450</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between">
                <button onClick={prevStep} className="btn-ghost flex items-center space-x-2">
                  <ArrowLeft size={20} />
                  <span>Atrás</span>
                </button>
                <button
                  onClick={nextStep}
                  disabled={!selectedRoom}
                  className="btn-primary flex items-center space-x-2 disabled:opacity-50"
                >
                  <span>Continuar</span>
                  <ArrowRight size={20} />
                </button>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-display text-verde-selva mb-6">
                Información de contacto
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo *
                  </label>
                  <input
                    {...register('nombre')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-caribe"
                  />
                  {errors.nombre && (
                    <p className="text-red-500 text-sm mt-1">{errors.nombre.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-caribe"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono *
                  </label>
                  <input
                    type="tel"
                    {...register('telefono')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-caribe"
                  />
                  {errors.telefono && (
                    <p className="text-red-500 text-sm mt-1">{errors.telefono.message}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Comentarios especiales (opcional)
                  </label>
                  <textarea
                    {...register('comentarios')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-caribe"
                  />
                </div>

                <div className="flex justify-between">
                  <button
                    type="button"
                    onClick={prevStep}
                    className="btn-ghost flex items-center space-x-2"
                  >
                    <ArrowLeft size={20} />
                    <span>Atrás</span>
                  </button>
                  <button type="submit" className="btn-primary flex items-center space-x-2">
                    <span>Continuar al pago</span>
                    <ArrowRight size={20} />
                  </button>
                </div>
              </form>
            </motion.div>
          )}

          {currentStep === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <h2 className="text-2xl font-display text-verde-selva mb-6">
                Método de pago
              </h2>
              
              {/* Summary */}
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <h3 className="font-semibold mb-4">Resumen de reserva</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Suite Premium</span>
                    <span>$150/noche</span>
                  </div>
                  <div className="flex justify-between">
                    <span>3 noches</span>
                    <span>$450</span>
                  </div>
                  <div className="border-t pt-2 flex justify-between font-semibold">
                    <span>Total</span>
                    <span>$450</span>
                  </div>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-azul-caribe transition-colors">
                  <CreditCard size={32} className="mx-auto mb-2" />
                  <div className="text-sm font-medium">Tarjeta</div>
                </button>
                <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-azul-caribe transition-colors">
                  <div className="text-2xl mb-2">🏦</div>
                  <div className="text-sm font-medium">PSE</div>
                </button>
                <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-azul-caribe transition-colors">
                  <div className="text-2xl mb-2">📱</div>
                  <div className="text-sm font-medium">PayPal</div>
                </button>
                <button className="p-4 border-2 border-gray-200 rounded-lg hover:border-azul-caribe transition-colors">
                  <div className="text-2xl mb-2">💰</div>
                  <div className="text-sm font-medium">Efectivo</div>
                </button>
              </div>

              <div className="mb-6">
                <label className="flex items-center space-x-2">
                  <input type="checkbox" className="rounded" required />
                  <span className="text-sm">
                    Acepto los términos y condiciones
                  </span>
                </label>
              </div>

              <div className="bg-green-50 border border-green-200 p-4 rounded-lg mb-6">
                <div className="flex items-center space-x-2 text-green-700">
                  <CheckCircle size={20} />
                  <span className="text-sm font-medium">
                    Pago 100% seguro y encriptado
                  </span>
                </div>
              </div>

              <div className="flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="btn-ghost flex items-center space-x-2"
                >
                  <ArrowLeft size={20} />
                  <span>Atrás</span>
                </button>
                <button className="btn-primary flex items-center space-x-2">
                  <span>Confirmar Reserva</span>
                  <CheckCircle size={20} />
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

