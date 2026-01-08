import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function TerminosPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'policies.terminos' })
  const tPolicies = await getTranslations({ locale, namespace: 'policies' })
  
  return (
    <div className="pt-24 pb-16">
      <div className="container-custom max-w-4xl">
        <Link href={`/${locale}/politicas`} className="text-azul-caribe hover:underline mb-6 inline-block">
          {tPolicies('back')}
        </Link>
        
        <h1 className="text-hero font-display text-verde-selva mb-8">
          {t('title')}
        </h1>

        <div className="prose prose-lg max-w-none space-y-6">
          <section>
            <p className="text-gray-700">
              {t('intro')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-verde-selva mb-4">{t('reservasTitle')}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {[0, 1, 2, 3].map((idx) => (
                <li key={idx}>{t(`reservasItems.${idx}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-verde-selva mb-4">{t('checkinTitle')}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li><strong>{t('checkin')}</strong> {t('checkinTime')}</li>
              <li><strong>{t('checkout')}</strong> {t('checkoutTime')}</li>
              <li>{t('checkinNote')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-verde-selva mb-4">{t('reglasTitle')}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {[0, 1, 2, 3].map((idx) => (
                <li key={idx}>{t(`reglasItems.${idx}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-verde-selva mb-4">{t('responsabilidadTitle')}</h2>
            <p className="text-gray-700">
              {t('responsabilidadText')}
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
