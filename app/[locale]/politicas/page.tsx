import { getTranslations } from 'next-intl/server'
import Link from 'next/link'
import { FileText, Shield, CreditCard, XCircle, Lock } from 'lucide-react'

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'policies' })
  return {
    title: `${t('title')} - Hostal Boutique Buritaca`,
    description: t('description'),
  }
}

export default async function PoliticasPage({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'policies' })
  
  const policies = [
    {
      id: 'cancelacion',
      title: t('items.cancelacion'),
      icon: XCircle,
      href: '/politicas/cancelacion',
    },
    {
      id: 'privacidad',
      title: t('items.privacidad'),
      icon: Lock,
      href: '/politicas/privacidad',
    },
    {
      id: 'terminos',
      title: t('items.terminos'),
      icon: FileText,
      href: '/politicas/terminos',
    },
  ]

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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {policies.map((policy) => {
            const Icon = policy.icon
            return (
              <Link
                key={policy.id}
                href={`/${locale}${policy.href}`}
                className="card p-6 hover:shadow-large transition-all group"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-verde-selva/10 rounded-lg flex items-center justify-center group-hover:bg-verde-selva transition-colors">
                    <Icon className="text-verde-selva group-hover:text-white transition-colors" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-verde-selva mb-2 group-hover:text-azul-caribe transition-colors">
                      {policy.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {t('viewDetails')} →
                    </p>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        <div className="bg-arena-light p-6 rounded-xl">
          <h2 className="text-xl font-semibold text-verde-selva mb-4">
            {t('questionsTitle')}
          </h2>
          <p className="text-gray-700 mb-4">
            {t('questionsText')}
          </p>
          <Link href={`/${locale}/contacto`} className="btn-primary inline-block">
            {t('contactButton')}
          </Link>
        </div>
      </div>
    </div>
  )
}
