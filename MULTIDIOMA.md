# 🌍 Configuración Multidioma

El sitio está configurado para soportar **Español** e **Inglés** usando `next-intl`.

## 📁 Estructura

```
hostal/
├── messages/
│   ├── es.json      # Traducciones en español
│   └── en.json      # Traducciones en inglés
├── i18n.ts          # Configuración de idiomas
├── middleware.ts    # Manejo de rutas con locale
└── app/
    └── [locale]/    # Rutas con prefijo de idioma
```

## 🔗 URLs

- **Español**: `http://localhost:3000/es`
- **Inglés**: `http://localhost:3000/en`
- **Redirección**: `/` → `/es` (idioma por defecto)

## 🎯 Uso en Componentes

### Componentes del Cliente (Client Components)

```tsx
'use client'

import { useTranslations, useLocale } from 'next-intl'
import Link from 'next/link'

export function MyComponent() {
  const t = useTranslations('hero')
  const locale = useLocale()
  
  return (
    <div>
      <h1>{t('title')}</h1>
      <Link href={`/${locale}/reservar`}>
        {t('ctaPrimary')}
      </Link>
    </div>
  )
}
```

### Componentes del Servidor (Server Components)

```tsx
import { getTranslations } from 'next-intl/server'

export async function MyServerComponent({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'hero' })
  
  return <h1>{t('title')}</h1>
}
```

## 📝 Agregar Nuevas Traducciones

1. Editar `messages/es.json` y `messages/en.json`
2. Agregar la clave en ambos archivos
3. Usar `useTranslations('namespace')` en componentes

Ejemplo:

```json
// messages/es.json
{
  "newSection": {
    "title": "Título en español"
  }
}

// messages/en.json
{
  "newSection": {
    "title": "Title in English"
  }
}
```

## 🔄 Cambiar Idioma

El selector de idioma está en el Header. Los usuarios pueden cambiar entre ES/EN y la navegación se mantiene en la misma página.

## ✅ Componentes Actualizados

- ✅ Header (con selector de idioma)
- ✅ Hero
- ✅ TrustBar
- ✅ Experiences
- ✅ Footer (pendiente)
- ✅ BookingFlow (pendiente)
- ✅ RoomGrid (pendiente)
- ✅ Otros componentes (pendiente)

## 🚀 Próximos Pasos

1. Completar traducciones de todos los componentes
2. Agregar más idiomas si es necesario
3. Configurar detección automática de idioma del navegador
4. Optimizar SEO por idioma


