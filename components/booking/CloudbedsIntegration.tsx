'use client'

import { useState } from 'react'
import { Calendar, Users, CreditCard, CheckCircle } from 'lucide-react'
import { useTranslations } from 'next-intl'

interface CloudbedsBookingProps {
  propertyId?: string
}

export function CloudbedsIntegration({ propertyId }: CloudbedsBookingProps) {
  const t = useTranslations('cloudbeds')
  const [checkIn, setCheckIn] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const [guests, setGuests] = useState(2)

  const cloudbedsWidgetUrl = propertyId 
    ? `https://hotels.cloudbeds.com/reservation/${propertyId}`
    : 'https://hotels.cloudbeds.com/reservation/your-property-id'

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-xl shadow-large p-8 mb-8">
        <h2 className="text-2xl font-display text-verde-selva mb-6">
          {t('title')}
        </h2>
        
        {/* Widget Embebido */}
        <div className="mb-8">
          <iframe
            src={cloudbedsWidgetUrl}
            width="100%"
            height="600"
            frameBorder="0"
            className="rounded-lg"
            title="Cloudbeds Booking Widget"
          />
        </div>

        {/* Alternativa: Formulario Custom */}
        <div className="border-t pt-8">
          <h3 className="text-xl font-semibold mb-4">{t('alternative')}</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline mr-2" size={16} />
                {t('checkIn')}
              </label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-caribe"
                min={new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="inline mr-2" size={16} />
                {t('checkOut')}
              </label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-caribe"
                min={checkIn || new Date().toISOString().split('T')[0]}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                <Users className="inline mr-2" size={16} />
                {t('guests')}
              </label>
              <select
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-azul-caribe"
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? t('guest') : t('guestsPlural')}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={() => {
              if (checkIn && checkOut) {
                const url = new URL(cloudbedsWidgetUrl)
                url.searchParams.set('checkin', checkIn)
                url.searchParams.set('checkout', checkOut)
                url.searchParams.set('adults', guests.toString())
                window.open(url.toString(), '_blank')
              } else {
                alert(t('completeDates'))
              }
            }}
            className="btn-primary w-full md:w-auto"
            disabled={!checkIn || !checkOut}
          >
            {t('viewAvailability')}
          </button>
        </div>

        {/* Información de Confianza */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <CheckCircle className="text-green-500" size={24} />
            <div>
              <div className="font-semibold">{t('bestPrice')}</div>
              <div className="text-sm text-gray-600">{t('bestPriceText')}</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <CreditCard className="text-blue-500" size={24} />
            <div>
              <div className="font-semibold">{t('securePayment')}</div>
              <div className="text-sm text-gray-600">{t('securePaymentText')}</div>
            </div>
          </div>
          <div className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
            <CheckCircle className="text-green-500" size={24} />
            <div>
              <div className="font-semibold">{t('confirmation')}</div>
              <div className="text-sm text-gray-600">{t('confirmationText')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Instrucciones */}
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
        <h3 className="font-semibold text-yellow-800 mb-2">
          {t('configTitle')}
        </h3>
        <p className="text-sm text-yellow-700 mb-4">
          {t('configText')}
        </p>
        <ol className="list-decimal list-inside text-sm text-yellow-700 space-y-2">
          {[0, 1, 2, 3].map((idx) => (
            <li key={idx}>{t(`configSteps.${idx}`)}</li>
          ))}
        </ol>
      </div>
    </div>
  )
}
