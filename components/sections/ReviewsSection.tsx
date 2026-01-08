'use client'

import { useState } from 'react'
import { Star, Filter } from 'lucide-react'
import { useTranslations } from 'next-intl'

// Datos de ejemplo - En producción vendrían de APIs
const googleReviews = [
  {
    id: 1,
    author: 'María González',
    rating: 5,
    textKey: 'review1',
    dateKey: '2weeks',
    source: 'Google',
  },
  {
    id: 2,
    author: 'Carlos Rodríguez',
    rating: 5,
    textKey: 'review2',
    dateKey: '1month',
    source: 'Google',
  },
  {
    id: 3,
    author: 'Ana Martínez',
    rating: 4,
    textKey: 'review3',
    dateKey: '3weeks',
    source: 'Google',
  },
]

const bookingReviews = [
  {
    id: 4,
    author: 'John Smith',
    rating: 5,
    textKey: 'review4',
    dateKey: '2weeks',
    source: 'Booking.com',
  },
  {
    id: 5,
    author: 'Sarah Johnson',
    rating: 5,
    textKey: 'review5',
    dateKey: '1month',
    source: 'Booking.com',
  },
]

const allReviews = [...googleReviews, ...bookingReviews]

export function ReviewsSection() {
  const t = useTranslations('reviews')
  const [filterRating, setFilterRating] = useState<number | null>(null)
  const [selectedSource, setSelectedSource] = useState<string | null>(null)

  const filteredReviews = allReviews.filter(review => {
    const matchesRating = !filterRating || review.rating === filterRating
    const matchesSource = !selectedSource || review.source === selectedSource
    return matchesRating && matchesSource
  })

  const averageRating = allReviews.reduce((sum, r) => sum + r.rating, 0) / allReviews.length
  const totalReviews = allReviews.length

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-h1 font-display text-verde-selva mb-4">
            {t('title')}
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-4">
            <div className="text-4xl font-bold text-verde-selva">
              {averageRating.toFixed(1)}
            </div>
            <div>
              <div className="flex space-x-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={24}
                    className={`${
                      i < Math.round(averageRating)
                        ? 'text-dorado fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                {t('basedOn')} {totalReviews} {t('reviews')}
              </p>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 justify-center mb-8">
          <div className="flex items-center space-x-2">
            <Filter size={20} className="text-gray-600" />
            <span className="text-gray-700 font-medium">{t('filter')}</span>
          </div>
          
          <button
            onClick={() => setFilterRating(null)}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !filterRating
                ? 'bg-verde-selva text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {t('all')}
          </button>
          
          {[5, 4, 3].map((rating) => (
            <button
              key={rating}
              onClick={() => setFilterRating(rating)}
              className={`px-4 py-2 rounded-lg transition-colors flex items-center space-x-1 ${
                filterRating === rating
                  ? 'bg-verde-selva text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              <Star size={16} className="text-dorado fill-current" />
              <span>{rating}</span>
            </button>
          ))}

          <select
            value={selectedSource || ''}
            onChange={(e) => setSelectedSource(e.target.value || null)}
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-azul-caribe"
          >
            <option value="">{t('allSources')}</option>
            <option value="Google">Google</option>
            <option value="Booking.com">Booking.com</option>
          </select>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="card p-6 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className={`${
                        i < review.rating
                          ? 'text-dorado fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-600">
                  {review.source}
                </span>
              </div>

              <p className="text-gray-700 mb-4 flex-1 italic">
                "{t(`reviewsText.${review.textKey}`)}"
              </p>

              <div className="border-t pt-4">
                <p className="font-semibold text-gray-800">{review.author}</p>
                <p className="text-sm text-gray-500">{t(`reviewsDates.${review.dateKey}`)}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-700 mb-4">
            {t('shareTitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://g.page/r/..."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t('writeGoogle')}
            </a>
            <a
              href="https://www.booking.com/..."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              {t('writeBooking')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
