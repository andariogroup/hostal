# 🔧 Guía de Configuración
## Características Implementadas - Pasos para Activar

---

## 1. 📅 CLOUDBEDS - Sistema de Reservas

### Pasos:
1. Crear cuenta en [Cloudbeds.com](https://www.cloudbeds.com)
2. Completar configuración de tu propiedad
3. Obtener tu **Property ID** desde el dashboard
4. Editar `components/booking/CloudbedsIntegration.tsx`:
   ```typescript
   // Línea ~20, reemplazar:
   const cloudbedsWidgetUrl = `https://hotels.cloudbeds.com/reservation/TU-PROPERTY-ID-AQUI`
   ```

### Alternativa con Variables de Entorno:
```env
# .env.local
NEXT_PUBLIC_CLOUDBEDS_PROPERTY_ID=tu_property_id
```

Luego en el componente:
```typescript
const propertyId = process.env.NEXT_PUBLIC_CLOUDBEDS_PROPERTY_ID || 'your-property-id'
```

---

## 2. 📧 NEWSLETTER - Mailchimp/SendGrid

### Opción A: Mailchimp
1. Crear cuenta en [Mailchimp.com](https://mailchimp.com)
2. Crear lista de suscriptores
3. Obtener API Key
4. Instalar: `npm install @mailchimp/mailchimp_marketing`
5. Editar `components/ui/NewsletterPopup.tsx` y `NewsletterForm.tsx`:

```typescript
import mailchimp from '@mailchimp/mailchimp_marketing'

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER_PREFIX, // ej: 'us1'
})

const onSubmit = async (data: NewsletterForm) => {
  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_LIST_ID!, {
      email_address: data.email,
      status: 'subscribed',
    })
    // ... éxito
  } catch (error) {
    // ... error
  }
}
```

### Opción B: SendGrid
1. Crear cuenta en [SendGrid.com](https://sendgrid.com)
2. Obtener API Key
3. Instalar: `npm install @sendgrid/mail`
4. Similar implementación

### Variables de Entorno:
```env
MAILCHIMP_API_KEY=tu_api_key
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_LIST_ID=tu_list_id
```

---

## 3. ⭐ REVIEWS - Google Reviews

### Método 1: Widget Embebido (Más Simple)
1. Ir a [Google Business Profile](https://business.google.com)
2. Obtener código del widget de reviews
3. Agregar en `components/sections/ReviewsSection.tsx`

### Método 2: Google Places API
1. Crear proyecto en [Google Cloud Console](https://console.cloud.google.com)
2. Habilitar Places API
3. Obtener API Key
4. Instalar: `npm install @googlemaps/js-api-loader`
5. Implementar en `ReviewsSection.tsx`

```typescript
import { Loader } from '@googlemaps/js-api-loader'

const loader = new Loader({
  apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY!,
  version: 'weekly',
})

// Cargar reviews de Google Places
```

### Variables de Entorno:
```env
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=tu_api_key
NEXT_PUBLIC_GOOGLE_PLACE_ID=tu_place_id
```

---

## 4. 📸 GALERÍA - Fotos Reales

### Reemplazar Imágenes:
1. Subir fotos reales del hostal a un servicio (Cloudinary, AWS S3, o carpeta `public/`)
2. Editar `app/[locale]/galeria/page.tsx`:
   ```typescript
   const galleryImages = [
     {
       id: 1,
       src: '/images/habitaciones/suite-premium.jpg', // Ruta local
       // O
       src: 'https://tu-cdn.com/images/suite-premium.jpg', // CDN
       alt: 'Suite Premium',
       category: 'habitaciones',
       title: 'Suite Premium',
     },
     // ... más imágenes
   ]
   ```

### Optimizar Imágenes:
- Usar formato WebP
- Tamaño recomendado: 1200x800px
- Comprimir antes de subir

---

## 5. 🗺️ MAPA - Google Maps Real

### Configurar:
1. Obtener coordenadas reales del hostal
2. Editar `components/sections/Location.tsx`:
   ```typescript
   <iframe
     src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&q=TU-DIRECCION-AQUI`}
     // ...
   />
   ```

### O usar Google Maps API:
```typescript
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const mapContainerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 11.2, // Tu latitud
  lng: -73.5 // Tu longitud
}
```

---

## 6. 📱 WHATSAPP - Número Real

### Configurar:
1. Editar `components/ui/WhatsAppFloat.tsx`:
   ```typescript
   const phoneNumber = '573001234567' // Tu número real (sin + ni espacios)
   ```

2. Formato: código país + número (ej: 57 para Colombia)

---

## 7. 📧 EMAIL - Contacto Real

### Configurar:
1. Editar `components/layout/Footer.tsx`:
   ```typescript
   <span>info@hostalburitaca.com</span> // Tu email real
   ```

2. Configurar formulario de contacto (si lo agregas)

---

## 8. 🔗 REDES SOCIALES - Links Reales

### Configurar:
1. Editar `components/layout/Footer.tsx`:
   ```typescript
   <a href="https://facebook.com/tu-pagina" ...>
   <a href="https://instagram.com/tu-cuenta" ...>
   ```

---

## 📋 CHECKLIST DE CONFIGURACIÓN

### Crítico:
- [ ] Cloudbeds Property ID configurado
- [ ] WhatsApp número real
- [ ] Email de contacto real
- [ ] Redes sociales links reales

### Importante:
- [ ] Newsletter API configurada (Mailchimp/SendGrid)
- [ ] Google Reviews conectado
- [ ] Mapa con ubicación real
- [ ] Fotos reales en galería

### Opcional:
- [ ] Google Analytics configurado
- [ ] Meta Pixel configurado
- [ ] Dominio personalizado
- [ ] SSL certificado

---

## 🚀 DESPUÉS DE CONFIGURAR

1. **Probar todas las funcionalidades**
2. **Verificar que los links funcionan**
3. **Probar formularios**
4. **Revisar en móvil**
5. **Hacer deploy a producción**

---

**¿Necesitas ayuda con alguna configuración específica?** 🛠️


