import Link from 'next/link'
import { defaultLocale } from '@/i18n'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-arena-light">
      <div className="text-center">
        <h1 className="text-6xl font-display text-verde-selva mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Página no encontrada</p>
        <Link href={`/${defaultLocale}`} className="btn-primary">
          Volver al inicio
        </Link>
      </div>
    </div>
  )
}

