'use client'

import { useState } from 'react'
import { Calendar, Users, Filter, X, SlidersHorizontal, Search, Sparkles } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export function RoomFilters() {
  const [showFilters, setShowFilters] = useState(false)
  const [activeFilters, setActiveFilters] = useState<string[]>([])
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState('1')

  const toggleFilter = (filter: string) => {
    setActiveFilters(prev =>
      prev.includes(filter)
        ? prev.filter(f => f !== filter)
        : [...prev, filter]
    )
  }

  const clearFilters = () => {
    setActiveFilters([])
    setCheckIn('')
    setCheckOut('')
    setGuests('1')
  }

  const hasActiveFilters = activeFilters.length > 0 || checkIn || checkOut || guests !== '1'

  return (
    <div className="mb-12">
      {/* Quick Search Bar - Estándares Hotelería */}
      <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-100 p-6 mb-6">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Check-in */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Fecha de entrada
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-verde-selva" size={20} />
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-verde-selva focus:border-verde-selva transition-all duration-200 bg-white hover:border-gray-300 text-gray-700"
                placeholder="Seleccionar fecha"
              />
            </div>
          </div>
          
          {/* Check-out */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Fecha de salida
            </label>
            <div className="relative">
              <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-verde-selva" size={20} />
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || undefined}
                className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-verde-selva focus:border-verde-selva transition-all duration-200 bg-white hover:border-gray-300 text-gray-700"
                placeholder="Seleccionar fecha"
              />
            </div>
          </div>
          
          {/* Huéspedes */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Huéspedes
            </label>
            <div className="relative">
              <Users className="absolute left-4 top-1/2 transform -translate-y-1/2 text-verde-selva" size={20} />
              <select 
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="w-full pl-12 pr-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-verde-selva focus:border-verde-selva transition-all duration-200 bg-white hover:border-gray-300 appearance-none cursor-pointer text-gray-700"
              >
                <option value="1">1 huésped</option>
                <option value="2">2 huéspedes</option>
                <option value="3">3 huéspedes</option>
                <option value="4">4 huéspedes</option>
                <option value="5">5+ huéspedes</option>
              </select>
            </div>
          </div>

          {/* Botón Buscar */}
          <div className="flex items-end">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full lg:w-auto px-8 py-3.5 bg-verde-selva hover:bg-verde-selva-dark text-white rounded-xl font-bold shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center space-x-2 min-w-[140px]"
            >
              <Search size={20} />
              <span>Buscar</span>
            </motion.button>
          </div>
        </div>

        {/* Filtros Activos - Mejorado */}
        {hasActiveFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-wrap items-center gap-2 mt-4 pt-4 border-t border-gray-200"
          >
            <span className="text-sm font-semibold text-gray-700">Filtros activos:</span>
            {checkIn && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setCheckIn('')}
                className="inline-flex items-center space-x-1.5 bg-verde-selva/10 text-verde-selva-dark px-3 py-1.5 rounded-full text-sm font-medium hover:bg-verde-selva/20 transition-colors"
              >
                <span>Entrada: {new Date(checkIn).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
                <X size={14} />
              </motion.button>
            )}
            {checkOut && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setCheckOut('')}
                className="inline-flex items-center space-x-1.5 bg-verde-selva/10 text-verde-selva-dark px-3 py-1.5 rounded-full text-sm font-medium hover:bg-verde-selva/20 transition-colors"
              >
                <span>Salida: {new Date(checkOut).toLocaleDateString('es-ES', { day: 'numeric', month: 'short' })}</span>
                <X size={14} />
              </motion.button>
            )}
            {guests !== '1' && (
              <motion.button
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => setGuests('1')}
                className="inline-flex items-center space-x-1.5 bg-verde-selva/10 text-verde-selva-dark px-3 py-1.5 rounded-full text-sm font-medium hover:bg-verde-selva/20 transition-colors"
              >
                <span>{guests} huéspedes</span>
                <X size={14} />
              </motion.button>
            )}
            {activeFilters.map((filter) => (
              <motion.button
                key={filter}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                onClick={() => toggleFilter(filter)}
                className="inline-flex items-center space-x-1.5 bg-verde-selva/10 text-verde-selva-dark px-3 py-1.5 rounded-full text-sm font-medium hover:bg-verde-selva/20 transition-colors"
              >
                <span>{filter}</span>
                <X size={14} />
              </motion.button>
            ))}
            <button
              onClick={clearFilters}
              className="text-sm text-gray-600 hover:text-verde-selva font-semibold underline transition-colors"
            >
              Limpiar todo
            </button>
          </motion.div>
        )}
      </div>

      {/* Advanced Filters - Mejorados */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg border-2 border-gray-200 p-6 mb-6 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-bold text-gray-900 flex items-center space-x-2">
                <Sparkles size={20} className="text-verde-selva" />
                <span>Filtros Avanzados</span>
              </h3>
              <button
                onClick={() => setShowFilters(false)}
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Precio */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Precio máximo por noche
                </label>
                <div className="space-y-3">
                  <input
                    type="range"
                    min="50"
                    max="300"
                    step="10"
                    defaultValue="300"
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-verde-selva"
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-gray-600">$50</span>
                    <span className="text-lg font-bold text-verde-selva">$300</span>
                    <span className="text-xs text-gray-600">$300+</span>
                  </div>
                </div>
              </div>

              {/* Servicios */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Servicios incluidos
                </label>
                <div className="space-y-2">
                  {['Aire acondicionado', 'Jacuzzi', 'Balcón privado', 'WiFi gratuito'].map((service) => (
                    <label
                      key={service}
                      className="flex items-center space-x-2 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => toggleFilter(service)}
                    >
                      <input
                        type="checkbox"
                        checked={activeFilters.includes(service)}
                        onChange={() => {}}
                        className="w-4 h-4 text-verde-selva border-gray-300 rounded focus:ring-verde-selva cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-verde-selva transition-colors font-medium">
                        {service}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Vista */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Tipo de vista
                </label>
                <div className="space-y-2">
                  {['Vista al río', 'Vista a la selva', 'Vista panorámica'].map((view) => (
                    <label
                      key={view}
                      className="flex items-center space-x-2 cursor-pointer group p-2 rounded-lg hover:bg-gray-50 transition-colors"
                      onClick={() => toggleFilter(view)}
                    >
                      <input
                        type="checkbox"
                        checked={activeFilters.includes(view)}
                        onChange={() => {}}
                        className="w-4 h-4 text-verde-selva border-gray-300 rounded focus:ring-verde-selva cursor-pointer"
                      />
                      <span className="text-sm text-gray-700 group-hover:text-verde-selva transition-colors font-medium">
                        {view}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Ordenar */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Ordenar por
                </label>
                <select className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-verde-selva focus:border-verde-selva transition-all duration-200 bg-white hover:border-gray-300 cursor-pointer text-gray-700">
                  <option>Precio: menor a mayor</option>
                  <option>Precio: mayor a menor</option>
                  <option>Más popular</option>
                  <option>Mejor valoración</option>
                  <option>Más recientes</option>
                </select>
              </div>
            </div>

            {/* Botones de acción */}
            <div className="flex justify-end gap-3 mt-6 pt-6 border-t border-gray-200">
              <button
                onClick={clearFilters}
                className="px-6 py-2.5 text-gray-700 hover:text-gray-900 font-semibold transition-colors"
              >
                Limpiar
              </button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowFilters(false)}
                className="px-6 py-2.5 bg-verde-selva text-white rounded-xl font-semibold hover:bg-verde-selva-dark transition-colors shadow-md"
              >
                Aplicar Filtros
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Botón Toggle Filtros Avanzados */}
      {!showFilters && (
        <div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowFilters(true)}
            className="px-6 py-3 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:border-verde-selva hover:text-verde-selva transition-all duration-200 flex items-center space-x-2 shadow-sm hover:shadow-md"
          >
            <SlidersHorizontal size={20} />
            <span>Mostrar filtros avanzados</span>
            {activeFilters.length > 0 && (
              <span className="bg-verde-selva text-white px-2 py-0.5 rounded-full text-xs font-bold">
                {activeFilters.length}
              </span>
            )}
          </motion.button>
        </div>
      )}
    </div>
  )
}
