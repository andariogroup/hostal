import { RoomGrid } from '@/components/sections/RoomGrid'
import { RoomFilters } from '@/components/sections/RoomFilters'

export const metadata = {
  title: 'Alojamiento - Hostal Boutique Buritaca',
  description: 'Descubre nuestras habitaciones premium diseñadas para tu comodidad y descanso.',
}

export default function AlojamientoPage() {
  return (
    <div className="pt-24">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-hero font-display text-verde-selva mb-4">
            Nuestro Alojamiento
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Cada habitación está diseñada para ofrecerte una experiencia única 
            entre la naturaleza y el confort.
          </p>
        </div>
        <RoomFilters />
        <RoomGrid />
      </div>
    </div>
  )
}


