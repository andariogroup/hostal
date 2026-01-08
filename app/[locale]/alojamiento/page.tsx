import { RoomGrid } from '@/components/sections/RoomGrid'
import { RoomFilters } from '@/components/sections/RoomFilters'
import { getTranslations } from 'next-intl/server'
import { Star, Shield, MapPin, Award, Users as UsersIcon } from 'lucide-react'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'accommodation' })
  
  return {
    title: `${t('title')} - Hostal Boutique Buritaca`,
    description: t('subtitle'),
  }
}

export default async function AlojamientoPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'accommodation' })
  
  return (
    <div className="pt-28 md:pt-32 pb-20 bg-gradient-to-b from-white via-arena-light/10 to-white min-h-screen">
      <div className="container-custom">
        {/* Hero Section Mejorado */}
        <div className="text-center mb-16 mt-6">
          <div className="animate-slide-up">
            {/* Breadcrumb sutil */}
            <nav className="flex justify-center mb-6" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-2 text-sm text-gray-500">
                <li><a href="/" className="hover:text-verde-selva transition-colors">Inicio</a></li>
                <li className="text-gray-400">/</li>
                <li className="text-verde-selva font-medium">Alojamiento</li>
              </ol>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-verde-selva mb-5 leading-tight">
              {t('title')}
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
              {t('subtitle')}
            </p>
            
            {/* Trust Signals Mejorados - Estándares Hotelería */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-shadow group">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-yellow-100 rounded-full p-3 mb-3 group-hover:scale-110 transition-transform">
                    <Star size={24} className="text-yellow-500 fill-yellow-500" />
                  </div>
                  <div className="text-3xl font-bold text-verde-selva mb-1">4.8</div>
                  <div className="text-xs text-gray-600 font-medium">Calificación promedio</div>
                  <div className="text-xs text-gray-500 mt-1">467 reseñas</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-shadow group">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-verde-selva/10 rounded-full p-3 mb-3 group-hover:scale-110 transition-transform">
                    <Award size={24} className="text-verde-selva" />
                  </div>
                  <div className="text-3xl font-bold text-verde-selva mb-1">4</div>
                  <div className="text-xs text-gray-600 font-medium">Tipos de habitaciones</div>
                  <div className="text-xs text-gray-500 mt-1">Todas disponibles</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-shadow group">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-green-100 rounded-full p-3 mb-3 group-hover:scale-110 transition-transform">
                    <Shield size={24} className="text-green-600" />
                  </div>
                  <div className="text-3xl font-bold text-verde-selva mb-1">100%</div>
                  <div className="text-xs text-gray-600 font-medium">Satisfacción</div>
                  <div className="text-xs text-gray-500 mt-1">Garantizada</div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-lg transition-shadow group">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-azul-caribe/10 rounded-full p-3 mb-3 group-hover:scale-110 transition-transform">
                    <UsersIcon size={24} className="text-azul-caribe" />
                  </div>
                  <div className="text-3xl font-bold text-verde-selva mb-1">24/7</div>
                  <div className="text-xs text-gray-600 font-medium">Soporte</div>
                  <div className="text-xs text-gray-500 mt-1">Siempre disponible</div>
                </div>
              </div>
            </div>

            {/* Badge de garantía */}
            <div className="mt-8 inline-flex items-center space-x-2 bg-gradient-to-r from-verde-selva/10 to-azul-caribe/10 px-6 py-3 rounded-full border border-verde-selva/20">
              <Shield size={18} className="text-verde-selva" />
              <span className="text-sm font-semibold text-gray-700">
                Mejor precio garantizado • Cancelación gratuita hasta 24h antes
              </span>
            </div>
          </div>
        </div>
        
        {/* Filtros Mejorados */}
        <div className="mb-12">
          <RoomFilters />
        </div>
        
        {/* Grid de Habitaciones */}
        <RoomGrid />
      </div>
    </div>
  )
}
