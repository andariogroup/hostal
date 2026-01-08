import { BookingFlow } from '@/components/booking/BookingFlow'

export const metadata = {
  title: 'Reservar - Hostal Boutique Buritaca',
  description: 'Reserva tu estadía directamente y obtén el mejor precio garantizado.',
}

export default function ReservarPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-hero font-display text-verde-selva mb-4">
            Reserva tu Experiencia
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Reserva directamente y obtén el mejor precio garantizado, 
            cancelación flexible y confirmación instantánea.
          </p>
        </div>
        <BookingFlow />
      </div>
    </div>
  )
}


