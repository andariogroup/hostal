# 📦 Instrucciones de Instalación

## Requisitos Previos

- Node.js 18+ instalado
- npm o yarn instalado
- Git (opcional)

## Pasos de Instalación

### 1. Instalar Dependencias

```bash
npm install
```

O con yarn:

```bash
yarn install
```

### 2. Ejecutar en Desarrollo

```bash
npm run dev
```

El sitio estará disponible en: `http://localhost:3000`

### 3. Construir para Producción

```bash
npm run build
npm start
```

## 🔧 Configuración Adicional

### Variables de Entorno

Crear archivo `.env.local` en la raíz del proyecto:

```env
# Cloudbeds API (cuando se integre)
NEXT_PUBLIC_CLOUDBEDS_API_KEY=tu_api_key_aqui

# WhatsApp
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_aqui

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_META_PIXEL_ID=tu_pixel_id
```

### Personalizar Contenido

1. **WhatsApp**: Editar `components/ui/WhatsAppFloat.tsx` con el número real
2. **Mapa**: Actualizar coordenadas en `components/sections/Location.tsx`
3. **Habitaciones**: Modificar datos en `components/sections/RoomGrid.tsx`
4. **Experiencias**: Actualizar contenido en `components/sections/ExperienceDetail.tsx`

## 🚀 Deploy a Vercel

### Opción 1: Desde GitHub

1. Subir código a GitHub
2. Conectar repositorio en Vercel
3. Deploy automático

### Opción 2: Desde CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel
```

## 📝 Notas Importantes

- Las imágenes están usando Unsplash como placeholder. Reemplazar con imágenes reales del hostal.
- El sistema de reservas está preparado para integrarse con Cloudbeds.
- El WhatsApp flotante necesita el número real configurado.
- El mapa necesita API key de Google Maps para funcionar completamente.

## 🐛 Solución de Problemas

### Error: Module not found
```bash
# Limpiar e instalar de nuevo
rm -rf node_modules package-lock.json
npm install
```

### Error: Port already in use
```bash
# Usar otro puerto
npm run dev -- -p 3001
```

### Error: TypeScript errors
```bash
# Verificar tipos
npm run build
```

## ✅ Checklist Pre-Deploy

- [ ] Variables de entorno configuradas
- [ ] Número de WhatsApp actualizado
- [ ] Coordenadas del mapa correctas
- [ ] Imágenes reemplazadas con fotos reales
- [ ] Contenido revisado y actualizado
- [ ] Pruebas en móvil realizadas
- [ ] Performance optimizado
- [ ] SEO configurado

---

¿Problemas? Revisar la documentación de Next.js: https://nextjs.org/docs


