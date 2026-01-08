import { BookingTabs } from '@/components/booking/BookingTabs'
import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'booking' })
  
  return {
    title: `${t('title')} - Hostal Boutique Buritaca`,
    description: t('subtitle'),
  }
}

export default async function ReservarPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'booking' })
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-hero font-display text-verde-selva mb-4">
            {t('title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <BookingTabs />
      </div>
    </div>
  )
}
