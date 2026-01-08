import Link from 'next/link'
import { useTranslations } from 'next-intl'

export default function NotFound() {
  const t = useTranslations('common')
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-arena-light">
      <div className="text-center">
        <h1 className="text-6xl font-display text-verde-selva mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link href="/" className="btn-primary">
          {t('back')} to home
        </Link>
      </div>
    </div>
  )
}


