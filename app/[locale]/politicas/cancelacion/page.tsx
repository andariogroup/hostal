import { getTranslations } from 'next-intl/server'
import Link from 'next/link'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  return {
    title: 'Política de Cancelación - Hostal Boutique Buritaca',
    description: 'Política de cancelación flexible para tu tranquilidad',
  }
}

export default async function CancelacionPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'policies.cancelacion' })
  const tCommon = await getTranslations({ locale, namespace: 'common' })
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
            <h2 className="text-2xl font-display text-verde-selva mb-4">{t('flexible')}</h2>
            <p className="text-gray-700 mb-4">
              {t('intro')}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-display text-verde-selva mb-4">{t('terms')}</h2>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border-l-4 border-azul-caribe">
                <h3 className="font-semibold text-lg mb-2">{t('free')}</h3>
                <p className="text-gray-700">
                  {t('freeText')}
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-dorado">
                <h3 className="font-semibold text-lg mb-2">{t('partial')}</h3>
                <p className="text-gray-700">
                  {t('partialText')}
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-lg mb-2">{t('noRefund')}</h3>
                <p className="text-gray-700">
                  {t('noRefundText')}
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-display text-verde-selva mb-4">{t('howToCancel')}</h2>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              {[1, 2, 3, 4].map((num) => (
                <li key={num}>{t(`howToCancelSteps.${num - 1}`)}</li>
              ))}
            </ol>
          </section>

          <section>
            <h2 className="text-2xl font-display text-verde-selva mb-4">{t('specialCases')}</h2>
            <p className="text-gray-700 mb-4">
              {t('specialCasesText')}
            </p>
          </section>

          <section className="bg-arena-light p-6 rounded-xl">
            <h2 className="text-xl font-semibold text-verde-selva mb-4">
              {t('helpTitle')}
            </h2>
            <p className="text-gray-700 mb-4">
              {t('helpText')}
            </p>
            <Link href={`/${locale}/contacto`} className="btn-primary inline-block">
              {t('supportButton')}
            </Link>
          </section>
        </div>
      </div>
    </div>
  )
}
