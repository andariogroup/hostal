# 🌍 Instrucciones Multidioma

## ✅ Implementación Completada

El sitio ahora soporta **Español** e **Inglés** usando `next-intl`.

## 🚀 Cómo Funciona

### URLs
- **Español**: `http://localhost:3000/es` o `http://localhost:3000/es/alojamiento`
- **Inglés**: `http://localhost:3000/en` o `http://localhost:3000/en/accommodation`
- **Raíz**: `/` redirige automáticamente a `/es` (idioma por defecto)

### Selector de Idioma
- Ubicado en el Header (esquina superior derecha)
- Muestra el idioma actual (ES/EN)
- Al hacer clic, muestra opciones para cambiar
- Mantiene la misma página al cambiar de idioma

## 📝 Agregar Traducciones

### 1. Editar Archivos de Traducción

Edita `messages/es.json` y `messages/en.json`:

```json
// messages/es.json
{
  "miSeccion": {
    "titulo": "Mi Título en Español"
  }
}

// messages/en.json
{
  "miSeccion": {
    "titulo": "My Title in English"
  }
}
```

### 2. Usar en Componentes

**Componente Cliente:**
```tsx
'use client'
import { useTranslations } from 'next-intl'

export function MiComponente() {
  const t = useTranslations('miSeccion')
  return <h1>{t('titulo')}</h1>
}
```

**Componente Servidor:**
```tsx
import { getTranslations } from 'next-intl/server'

export default async function MiPagina({ params: { locale } }) {
  const t = await getTranslations({ locale, namespace: 'miSeccion' })
  return <h1>{t('titulo')}</h1>
}
```

## 🔧 Componentes Actualizados

- ✅ Header (con selector de idioma)
- ✅ Hero
- ✅ TrustBar
- ✅ Experiences
- ✅ Páginas principales (alojamiento, reservar, experiencias)

## ⚠️ Notas Importantes

1. **Links**: Siempre incluir el locale en los links:
   ```tsx
   const locale = useLocale()
   <Link href={`/${locale}/reservar`}>Reservar</Link>
   ```

2. **Navegación**: Usar `useLocale()` para obtener el locale actual

3. **Middleware**: Maneja automáticamente las rutas con prefijo de idioma

## 🐛 Solución de Problemas

### Error: "useTranslations can only be used in Client Components"
- Agregar `'use client'` al inicio del archivo
- O usar `getTranslations` en componentes del servidor

### Links no funcionan correctamente
- Asegurarse de incluir el locale: `/${locale}/ruta`
- Usar `useLocale()` para obtener el locale actual

### Idioma no cambia
- Verificar que el middleware esté configurado correctamente
- Limpiar cache del navegador
- Reiniciar el servidor de desarrollo

## 📚 Documentación

- [next-intl Docs](https://next-intl-docs.vercel.app/)
- Ver `MULTIDIOMA.md` para más detalles técnicos

---

**¡El sitio ahora es completamente bilingüe!** 🎉


