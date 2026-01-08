# 🏨 Hostal Boutique Buritaca - Sitio Web Oficial

Sitio web premium desarrollado con Next.js 14, TypeScript y Tailwind CSS, diseñado para generar reservas directas y vender experiencias completas.

## 🚀 Tecnologías Utilizadas

- **Next.js 14** - Framework React con App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Estilos utility-first
- **Framer Motion** - Animaciones fluidas
- **React Hook Form + Zod** - Formularios y validación
- **Swiper** - Carousels premium
- **Headless UI** - Componentes accesibles
- **Lucide React** - Iconos modernos

## 📦 Instalación

```bash
# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Construir para producción
npm run build

# Iniciar producción
npm start
```

## 🎨 Características Principales

### ✅ Implementado

- ✅ Hero section premium con animaciones
- ✅ Trust bar con indicadores de confianza
- ✅ Sección de experiencias (Gastronomía, Spa, Naturaleza)
- ✅ Grid de habitaciones destacadas
- ✅ Testimonios con carousel
- ✅ Ubicación con mapa integrado
- ✅ WhatsApp flotante inteligente
- ✅ Sistema de reservas paso a paso
- ✅ Página de alojamiento con filtros
- ✅ Diseño mobile-first responsive
- ✅ Animaciones suaves con Framer Motion
- ✅ SEO optimizado

### 🔄 Pendiente de Integración

- ⏳ Cloudbeds API (motor de reservas)
- ⏳ Google Analytics y Meta Pixel
- ⏳ Pop-up inteligente con ofertas
- ⏳ Sistema de reviews integrado
- ⏳ Comparador de habitaciones avanzado

## 📁 Estructura del Proyecto

```
hostal/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Home page
│   ├── alojamiento/       # Página de alojamiento
│   ├── experiencias/     # Página de experiencias
│   └── reservar/          # Sistema de reservas
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Secciones principales
│   ├── booking/           # Componentes de reserva
│   └── ui/                # Componentes UI reutilizables
├── public/                # Assets estáticos
└── tailwind.config.ts     # Configuración de Tailwind
```

## 🎨 Paleta de Colores

- **Verde Selva**: `#2D5016` (principal)
- **Arena**: `#F5E6D3` (fondos)
- **Azul Caribe**: `#1E88E5` (CTAs)
- **Dorado**: `#D4AF37` (acentos premium)

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: mobile (< 768px), tablet (768-1024px), desktop (> 1024px)
- Touch-friendly en móvil
- Navegación optimizada para cada dispositivo

## 🔧 Configuración

### Variables de Entorno

Crear archivo `.env.local`:

```env
NEXT_PUBLIC_CLOUDBEDS_API_KEY=tu_api_key
NEXT_PUBLIC_WHATSAPP_NUMBER=573001234567
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key
```

### Integración Cloudbeds

1. Obtener API key de Cloudbeds
2. Configurar en variables de entorno
3. Integrar widget en componente de reservas

## 📈 Performance

- Optimización de imágenes con Next.js Image
- Code splitting automático
- Lazy loading de componentes
- CSS optimizado con Tailwind

## 🚀 Despliegue

### ⚡ Despliegue Rápido (5 minutos)

Ver **[DESPLIEGUE_RAPIDO.md](./DESPLIEGUE_RAPIDO.md)** para instrucciones paso a paso.

### 📚 Guía Completa

Ver **[GUIA_DESPLIEGUE.md](./GUIA_DESPLIEGUE.md)** para todas las opciones de despliegue.

### Opciones Disponibles

1. **Vercel** (Recomendado) - Plataforma oficial de Next.js
2. **Netlify** - Alternativa popular
3. **Railway** - Con base de datos incluida
4. **VPS** - Para control total

### Despliegue con Vercel CLI

```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Deploy a producción
vercel --prod
```

## 📝 Próximos Pasos

1. Integrar Cloudbeds API
2. Configurar Google Analytics
3. Agregar más contenido real
4. Optimizar imágenes con fotos reales
5. Implementar A/B testing
6. Agregar blog (opcional)

## 📄 Licencia

Privado - Hostal Boutique Buritaca

---

Desarrollado con ❤️ para Hostal Boutique Buritaca

