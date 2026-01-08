# 🚀 Guía de Despliegue - Hostal Buritaca

## 📋 Tabla de Contenidos

1. [Preparación Pre-Despliegue](#preparación-pre-despliegue)
2. [Opción 1: Vercel (Recomendado)](#opción-1-vercel-recomendado)
3. [Opción 2: Netlify](#opción-2-netlify)
4. [Opción 3: Railway](#opción-3-railway)
5. [Opción 4: VPS (DigitalOcean, AWS, etc.)](#opción-4-vps)
6. [Configuración Post-Despliegue](#configuración-post-despliegue)
7. [Troubleshooting](#troubleshooting)

---

## 🔧 Preparación Pre-Despliegue

### 1. Verificar que todo funciona localmente

```bash
# Instalar dependencias
npm install

# Ejecutar build de producción
npm run build

# Probar build localmente
npm start
```

### 2. Verificar archivos importantes

- ✅ `package.json` con scripts correctos
- ✅ `next.config.js` configurado
- ✅ Variables de entorno documentadas
- ✅ `.gitignore` incluye `.env.local` y `node_modules`

### 3. Preparar variables de entorno

Crea un archivo `.env.example` con todas las variables necesarias:

```env
# Idioma por defecto
NEXT_PUBLIC_DEFAULT_LOCALE=es

# Cloudbeds (si aplica)
NEXT_PUBLIC_CLOUDBEDS_PROPERTY_ID=tu_property_id

# Newsletter (Mailchimp/SendGrid)
MAILCHIMP_API_KEY=tu_api_key
MAILCHIMP_SERVER_PREFIX=us1
MAILCHIMP_LIST_ID=tu_list_id

# Google Maps (si aplica)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key

# Google Reviews (si aplica)
NEXT_PUBLIC_GOOGLE_PLACES_API_KEY=tu_api_key
NEXT_PUBLIC_GOOGLE_PLACE_ID=tu_place_id

# Analytics (opcional)
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## 🌐 Opción 1: Vercel (Recomendado)

**Vercel es la plataforma oficial de Next.js - La más fácil y rápida**

### Ventajas
- ✅ Despliegue automático desde Git
- ✅ SSL gratuito
- ✅ CDN global
- ✅ Optimizaciones automáticas de Next.js
- ✅ Preview deployments
- ✅ Gratis para proyectos personales

### Pasos

#### 1. Crear cuenta en Vercel
- Ve a [vercel.com](https://vercel.com)
- Regístrate con GitHub, GitLab o Bitbucket

#### 2. Conectar repositorio
```bash
# Si no tienes repositorio Git, créalo:
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/tu-repo.git
git push -u origin main
```

#### 3. Desplegar desde Vercel Dashboard
1. Click en "Add New Project"
2. Importa tu repositorio
3. Vercel detectará automáticamente Next.js
4. Configura las variables de entorno:
   - Click en "Environment Variables"
   - Agrega todas las variables de `.env.example`
5. Click en "Deploy"

#### 4. Desplegar desde CLI (Alternativa)
```bash
# Instalar Vercel CLI
npm i -g vercel

# Login
vercel login

# Desplegar
vercel

# Para producción
vercel --prod
```

### Configuración en Vercel Dashboard

#### Build Settings
- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (automático)
- **Output Directory**: `.next` (automático)
- **Install Command**: `npm install`

#### Environment Variables
Agrega todas las variables de `.env.example` en:
- Production
- Preview
- Development

#### Domains
1. Ve a Settings → Domains
2. Agrega tu dominio personalizado
3. Sigue las instrucciones para configurar DNS

### URLs después del despliegue
- **Producción**: `https://tu-proyecto.vercel.app`
- **Preview**: `https://tu-proyecto-git-branch.vercel.app`

---

## 🌐 Opción 2: Netlify

### Ventajas
- ✅ Despliegue automático desde Git
- ✅ SSL gratuito
- ✅ Formularios integrados
- ✅ Gratis para proyectos personales

### Pasos

#### 1. Crear cuenta en Netlify
- Ve a [netlify.com](https://netlify.com)
- Regístrate con GitHub, GitLab o Bitbucket

#### 2. Crear archivo `netlify.toml`
Crea este archivo en la raíz del proyecto:

```toml
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"

[build.environment]
  NODE_VERSION = "18"
```

#### 3. Desplegar
1. Click en "Add new site" → "Import an existing project"
2. Conecta tu repositorio
3. Configura:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`
4. Agrega variables de entorno en Site settings → Environment variables
5. Click en "Deploy site"

### Configuración de Next.js en Netlify

Asegúrate de tener `@netlify/plugin-nextjs` instalado:

```bash
npm install --save-dev @netlify/plugin-nextjs
```

---

## 🌐 Opción 3: Railway

### Ventajas
- ✅ Muy fácil de usar
- ✅ Base de datos incluida
- ✅ SSL automático
- ✅ $5 crédito gratis al inicio

### Pasos

#### 1. Crear cuenta en Railway
- Ve a [railway.app](https://railway.app)
- Regístrate con GitHub

#### 2. Crear proyecto
1. Click en "New Project"
2. Selecciona "Deploy from GitHub repo"
3. Selecciona tu repositorio

#### 3. Configurar
1. Railway detectará Next.js automáticamente
2. Agrega variables de entorno en Variables
3. Railway desplegará automáticamente

#### 4. Configurar dominio
1. Ve a Settings → Networking
2. Genera dominio o agrega dominio personalizado

---

## 🌐 Opción 4: VPS (DigitalOcean, AWS, etc.)

### Para servidores Linux (Ubuntu/Debian)

#### 1. Preparar servidor
```bash
# Conectar por SSH
ssh usuario@tu-servidor.com

# Actualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Node.js 18
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Instalar PM2 (gestor de procesos)
sudo npm install -g pm2

# Instalar Nginx
sudo apt install -y nginx
```

#### 2. Clonar proyecto
```bash
# Instalar Git
sudo apt install -y git

# Clonar repositorio
cd /var/www
sudo git clone https://github.com/tu-usuario/tu-repo.git hostal
cd hostal

# Instalar dependencias
npm install
```

#### 3. Configurar variables de entorno
```bash
# Crear archivo .env
nano .env

# Agregar todas las variables necesarias
# Guardar con Ctrl+X, luego Y, luego Enter
```

#### 4. Build y ejecutar
```bash
# Build de producción
npm run build

# Iniciar con PM2
pm2 start npm --name "hostal" -- start
pm2 save
pm2 startup
```

#### 5. Configurar Nginx
```bash
sudo nano /etc/nginx/sites-available/hostal
```

Agregar configuración:
```nginx
server {
    listen 80;
    server_name tu-dominio.com www.tu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

```bash
# Habilitar sitio
sudo ln -s /etc/nginx/sites-available/hostal /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

#### 6. Configurar SSL con Let's Encrypt
```bash
# Instalar Certbot
sudo apt install -y certbot python3-certbot-nginx

# Obtener certificado SSL
sudo certbot --nginx -d tu-dominio.com -d www.tu-dominio.com

# Renovación automática (ya está configurada)
```

---

## ⚙️ Configuración Post-Despliegue

### 1. Verificar despliegue
- ✅ Sitio carga correctamente
- ✅ Todas las rutas funcionan
- ✅ Imágenes se cargan
- ✅ Multidioma funciona
- ✅ Formularios funcionan

### 2. Configurar dominio personalizado

#### Vercel
1. Settings → Domains
2. Agrega tu dominio
3. Configura DNS según instrucciones:
   - Tipo: CNAME
   - Nombre: @ o www
   - Valor: cname.vercel-dns.com

#### Netlify
1. Site settings → Domain management
2. Add custom domain
3. Configura DNS según instrucciones

### 3. Configurar Analytics (Opcional)

#### Google Analytics
```bash
# Agregar en .env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

#### Vercel Analytics
```bash
npm install @vercel/analytics
```

Agregar en `app/[locale]/layout.tsx`:
```tsx
import { Analytics } from '@vercel/analytics/react'

// Dentro del componente
<Analytics />
```

### 4. Configurar Webhooks (Opcional)

Para despliegues automáticos cuando haces push a Git:

- **Vercel**: Automático al conectar repo
- **Netlify**: Automático al conectar repo
- **Railway**: Automático al conectar repo

---

## 🔍 Troubleshooting

### Error: Build falla

**Problema**: `npm run build` falla

**Solución**:
```bash
# Limpiar cache
rm -rf .next
rm -rf node_modules
npm install
npm run build
```

### Error: Variables de entorno no funcionan

**Problema**: Variables no se cargan

**Solución**:
- Verifica que las variables empiecen con `NEXT_PUBLIC_` si son públicas
- Reinicia el despliegue después de agregar variables
- Verifica que no haya espacios en los valores

### Error: Rutas 404

**Problema**: Rutas no funcionan en producción

**Solución**:
- Verifica `next.config.js` tiene configuración correcta
- Asegúrate de que `middleware.ts` esté configurado
- Verifica que las rutas estén en `app/[locale]/`

### Error: Imágenes no cargan

**Problema**: Imágenes de Unsplash no aparecen

**Solución**:
- Verifica `next.config.js` tiene `remotePatterns` configurado
- Asegúrate de que las URLs sean HTTPS

### Error: Multidioma no funciona

**Problema**: Cambio de idioma no funciona

**Solución**:
- Verifica que `i18n.ts` esté configurado
- Verifica que `middleware.ts` esté presente
- Verifica que los archivos de traducción existan

---

## 📊 Checklist de Despliegue

### Pre-Despliegue
- [ ] Proyecto funciona localmente (`npm run dev`)
- [ ] Build funciona (`npm run build`)
- [ ] Todas las dependencias están en `package.json`
- [ ] `.env.example` está actualizado
- [ ] `.gitignore` está configurado
- [ ] Código está en Git

### Despliegue
- [ ] Cuenta creada en plataforma elegida
- [ ] Repositorio conectado
- [ ] Variables de entorno configuradas
- [ ] Build exitoso
- [ ] Sitio accesible

### Post-Despliegue
- [ ] Todas las páginas funcionan
- [ ] Multidioma funciona
- [ ] Formularios funcionan
- [ ] Imágenes cargan
- [ ] Dominio personalizado configurado (si aplica)
- [ ] SSL configurado
- [ ] Analytics configurado (si aplica)

---

## 🎯 Recomendación Final

**Para este proyecto, recomiendo Vercel porque:**
1. ✅ Es la plataforma oficial de Next.js
2. ✅ Configuración mínima requerida
3. ✅ Despliegue automático desde Git
4. ✅ SSL y CDN incluidos
5. ✅ Gratis para proyectos personales
6. ✅ Excelente para sitios multidioma

---

## 📚 Recursos Adicionales

- [Documentación Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)
- [Railway Documentation](https://docs.railway.app)

---

**¿Necesitas ayuda con algún paso específico?** 🚀


