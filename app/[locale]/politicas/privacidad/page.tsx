import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export default async function PrivacidadPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'policies.privacidad' })
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
            <p className="text-gray-700 mb-4">
              <strong>{t('lastUpdate')}:</strong> {new Date().toLocaleDateString(locale === 'en' ? 'en-US' : 'es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            <p className="text-gray-700">
              {t('intro')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-verde-selva mb-4">{t('collectTitle')}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {[0, 1, 2, 3].map((idx) => (
                <li key={idx}>{t(`collectItems.${idx}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-verde-selva mb-4">{t('useTitle')}</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {[0, 1, 2, 3].map((idx) => (
                <li key={idx}>{t(`useItems.${idx}`)}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-display text-verde-selva mb-4">{t('protectionTitle')}</h2>
            <p className="text-gray-700">
              {t('protectionText')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-verde-selva mb-4">{t('rightsTitle')}</h2>
            <p className="text-gray-700 mb-4">{t('rightsText')}</p>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              {[0, 1, 2, 3].map((idx) => (
                <li key={idx}>{t(`rightsItems.${idx}`)}</li>
              ))}
            </ul>
          </section>

          <section className="bg-arena-light p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-verde-selva mb-4">
              {t('contactTitle')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('contactText')}
            </p>
            <p className="text-gray-700">
              <strong>{t('email')}</strong> privacidad@hostalburitaca.com<br />
              <strong>{t('phone')}</strong> +57 300 123 4567
            </p>
          </section>
        </div>
      </div>
    </div>
  )
}
