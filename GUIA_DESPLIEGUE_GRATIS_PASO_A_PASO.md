# 🚀 Guía Completa: Subir tu Sitio Web a la Nube GRATIS

## 📋 Tabla de Contenidos
1. [¿Qué es esto y por qué?](#qué-es-esto-y-por-qué)
2. [Opciones Gratuitas Disponibles](#opciones-gratuitas-disponibles)
3. [Opción Recomendada: Vercel](#opción-recomendada-vercel)
4. [Paso a Paso Detallado](#paso-a-paso-detallado)
5. [Solución de Problemas](#solución-de-problemas)
6. [Alternativa: Netlify](#alternativa-netlify)

---

## ¿Qué es esto y por qué?

Esta guía te enseñará a **subir tu sitio web del hostal a Internet de forma completamente gratuita** para que puedas mostrárselo a tu cliente sin necesidad de conocimientos técnicos avanzados.

**¿Qué significa "subir a la nube"?**
- Es como guardar tu sitio web en un servidor de Internet
- Una vez subido, cualquier persona puede verlo usando una dirección web (URL)
- Es como tener tu sitio en un "almacén" de Internet que está siempre disponible

**¿Por qué hacerlo?**
- ✅ Tu cliente puede ver el sitio desde cualquier lugar
- ✅ No necesitas tener tu computadora encendida
- ✅ Es completamente GRATIS
- ✅ Se actualiza automáticamente cuando haces cambios

---

## Opciones Gratuitas Disponibles

### 🥇 **Vercel** (RECOMENDADO - La más fácil)
- ✅ **Gratis para siempre**
- ✅ Creado por los mismos creadores de Next.js (tu proyecto usa Next.js)
- ✅ Muy fácil de usar
- ✅ Despliegue automático desde GitHub
- ✅ URL personalizada: `tu-proyecto.vercel.app`
- ✅ **Límite**: Ilimitado para proyectos personales

### 🥈 **Netlify** (Alternativa buena)
- ✅ Gratis para siempre
- ✅ Fácil de usar
- ✅ URL personalizada: `tu-proyecto.netlify.app`
- ✅ **Límite**: 100GB de ancho de banda/mes (más que suficiente)

### 🥉 **Railway** (Si necesitas base de datos)
- ✅ Gratis con límites
- ✅ Incluye base de datos gratis
- ⚠️ Requiere tarjeta de crédito (pero no cobra si no pasas los límites)

**Recomendación**: Usa **Vercel** porque es la más fácil y está diseñada específicamente para Next.js.

---

## Opción Recomendada: Vercel

### ¿Qué necesitas antes de empezar?

1. ✅ Tu proyecto funcionando localmente (ya lo tienes)
2. ✅ Una cuenta de **GitHub** (gratis) - Te enseñaré a crearla
3. ✅ Una cuenta de **Vercel** (gratis) - Te enseñaré a crearla
4. ✅ Git instalado en tu computadora (probablemente ya lo tienes)

---

## Paso a Paso Detallado

### 📦 **PASO 1: Preparar tu Proyecto Localmente**

Antes de subir, asegurémonos de que todo funciona bien en tu computadora.

#### 1.1. Abre la Terminal/PowerShell

- Presiona `Windows + R`
- Escribe `powershell` y presiona Enter
- O busca "PowerShell" en el menú de inicio

#### 1.2. Navega a tu carpeta del proyecto

```powershell
cd C:\Users\lucasian\Downloads\hostal
```

#### 1.3. Verifica que tienes todas las dependencias instaladas

```powershell
npm install
```

**¿Qué hace esto?** Descarga todas las librerías que necesita tu proyecto.

**Tiempo estimado**: 2-5 minutos (solo la primera vez)

#### 1.4. Prueba que el proyecto funciona

```powershell
npm run build
```

**¿Qué hace esto?** Construye tu sitio web como si fuera a producción.

**¿Qué deberías ver?**
- Si todo está bien: Verás "✓ Compiled successfully" o similar
- Si hay errores: Te mostrará qué está mal (anótalos para solucionarlos)

**⚠️ IMPORTANTE**: Si hay errores aquí, **NO continúes**. Primero soluciona los errores.

#### 1.5. (Opcional) Prueba localmente

```powershell
npm run dev
```

Luego abre tu navegador en: `http://localhost:3000`

Si ves tu sitio funcionando, ¡perfecto! Cierra esto con `Ctrl + C` en la terminal.

---

### 📤 **PASO 2: Subir tu Código a GitHub**

GitHub es como un "Dropbox" para código. Es donde guardaremos tu proyecto para que Vercel pueda acceder a él.

#### 2.1. Crea una cuenta en GitHub (si no tienes una)

1. Ve a: https://github.com
2. Click en **"Sign up"** (Registrarse)
3. Completa el formulario:
   - Username: Elige un nombre (ejemplo: `lucasian-dev`)
   - Email: Tu email
   - Password: Crea una contraseña segura
4. Verifica tu email cuando te lo pidan
5. Selecciona el plan **FREE** cuando te pregunten

#### 2.2. Instala Git (si no lo tienes)

**¿Cómo saber si ya lo tienes?**

En PowerShell, escribe:
```powershell
git --version
```

- **Si ves un número** (ej: `git version 2.40.0`): ✅ Ya lo tienes, continúa
- **Si dice "no se reconoce"**: Necesitas instalarlo

**Instalar Git:**
1. Ve a: https://git-scm.com/download/win
2. Descarga el instalador
3. Ejecuta el instalador
4. **IMPORTANTE**: Durante la instalación, deja todas las opciones por defecto
5. Reinicia PowerShell después de instalar

#### 2.3. Configura Git (solo la primera vez)

```powershell
git config --global user.name "Tu Nombre"
git config --global user.email "tu-email@ejemplo.com"
```

**Ejemplo:**
```powershell
git config --global user.name "Lucasian"
git config --global user.email "lucasian@ejemplo.com"
```

#### 2.4. Crea un repositorio en GitHub

1. Ve a: https://github.com
2. Click en el botón **"+"** (arriba a la derecha)
3. Click en **"New repository"**
4. Completa:
   - **Repository name**: `hostal-buritaca` (o el nombre que quieras)
   - **Description**: "Sitio web del Hostal Boutique Buritaca" (opcional)
   - **Visibility**: Selecciona **"Public"** (debe ser público para el plan gratis de Vercel)
   - **NO marques** "Add a README file"
   - **NO marques** "Add .gitignore"
   - **NO marques** "Choose a license"
5. Click en **"Create repository"**

#### 2.5. Sube tu código a GitHub

En PowerShell, asegúrate de estar en la carpeta del proyecto:

```powershell
cd C:\Users\lucasian\Downloads\hostal
```

Luego ejecuta estos comandos **uno por uno**:

```powershell
# Inicializa Git (solo si es la primera vez)
git init
```

```powershell
# Agrega todos los archivos
git add .
```

```powershell
# Guarda los cambios con un mensaje
git commit -m "Primera versión del sitio web"
```

```powershell
# Conecta con GitHub (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/hostal-buritaca.git
```

**Ejemplo:**
```powershell
git remote add origin https://github.com/lucasian-dev/hostal-buritaca.git
```

```powershell
# Cambia el nombre de la rama principal
git branch -M main
```

```powershell
# Sube el código a GitHub
git push -u origin main
```

**¿Qué pasa aquí?**
- Te pedirá tu usuario y contraseña de GitHub
- Si te pide un "token" en lugar de contraseña, ve al paso siguiente

#### 2.6. Crear Token de Acceso Personal (si Git te lo pide)

GitHub ya no acepta contraseñas, necesitas un "token":

1. Ve a: https://github.com/settings/tokens
2. Click en **"Generate new token"** → **"Generate new token (classic)"**
3. Completa:
   - **Note**: "Token para Vercel"
   - **Expiration**: Elige "90 days" o "No expiration"
   - **Scopes**: Marca **"repo"** (esto selecciona todo automáticamente)
4. Click en **"Generate token"**
5. **⚠️ IMPORTANTE**: Copia el token inmediatamente (solo lo verás una vez)
6. Cuando Git te pida contraseña, pega este token

**Después de subir**, deberías ver tu código en GitHub cuando visites:
`https://github.com/TU-USUARIO/hostal-buritaca`

---

### 🚀 **PASO 3: Desplegar en Vercel**

Ahora viene la parte fácil: conectar GitHub con Vercel.

#### 3.1. Crea una cuenta en Vercel

1. Ve a: https://vercel.com
2. Click en **"Sign Up"**
3. Selecciona **"Continue with GitHub"**
4. Autoriza a Vercel a acceder a tu GitHub (es seguro)
5. Completa tu perfil si te lo pide

#### 3.2. Importa tu Proyecto

1. En el Dashboard de Vercel, click en **"Add New..."** → **"Project"**
2. Verás una lista de tus repositorios de GitHub
3. Busca `hostal-buritaca` (o el nombre que le pusiste)
4. Click en **"Import"** al lado de tu proyecto

#### 3.3. Configura el Proyecto

Vercel detectará automáticamente que es un proyecto Next.js. Solo necesitas:

1. **Project Name**: Déjalo como está o cámbialo (ej: `hostal-buritaca`)
2. **Framework Preset**: Debe decir "Next.js" (si no, selecciónalo)
3. **Root Directory**: Déjalo en `./` (punto barra)
4. **Build Command**: Debe decir `npm run build` (déjalo así)
5. **Output Directory**: Déjalo vacío o `.next`
6. **Install Command**: Debe decir `npm install` (déjalo así)

**NO cambies nada más por ahora.**

#### 3.4. Despliega

1. Click en el botón **"Deploy"** (abajo a la derecha)
2. Espera 2-5 minutos mientras Vercel:
   - Descarga tu código
   - Instala las dependencias
   - Construye tu sitio
   - Lo sube a Internet

**¿Qué deberías ver?**
- Una barra de progreso
- Mensajes como "Building...", "Installing dependencies..."
- Al final: **"Congratulations! Your project has been deployed"**

#### 3.5. ¡Tu Sitio Está en Línea!

Vercel te dará una URL como:
```
https://hostal-buritaca.vercel.app
```

**¡Esa es la URL de tu sitio!** Compártela con tu cliente.

---

### 🔄 **PASO 4: Actualizar el Sitio (Cuando Hagas Cambios)**

Cada vez que hagas cambios y quieras actualizar el sitio:

#### 4.1. Guarda tus cambios en GitHub

En PowerShell, desde la carpeta del proyecto:

```powershell
git add .
git commit -m "Descripción de los cambios"
git push
```

**Ejemplo:**
```powershell
git commit -m "Actualicé los colores del sitio"
git push
```

#### 4.2. Vercel se Actualiza Automáticamente

- Vercel detecta automáticamente cuando subes cambios a GitHub
- En 1-2 minutos, tu sitio se actualiza solo
- Puedes ver el progreso en el Dashboard de Vercel

**¡No necesitas hacer nada más!**

---

## Solución de Problemas

### ❌ Problema: "npm run build" da errores

**Solución:**
1. Lee el mensaje de error completo
2. Busca qué archivo tiene el problema
3. Revisa la línea que menciona el error
4. Errores comunes:
   - **Importaciones faltantes**: Ejecuta `npm install` de nuevo
   - **Errores de TypeScript**: Revisa los tipos de datos
   - **Archivos faltantes**: Verifica que todos los archivos estén en su lugar

### ❌ Problema: Git dice "fatal: not a git repository"

**Solución:**
```powershell
git init
```
Luego repite los pasos de git add, commit, etc.

### ❌ Problema: "git push" dice "authentication failed"

**Solución:**
1. Verifica que tu token de GitHub sea correcto
2. Crea un nuevo token si es necesario
3. Asegúrate de que el repositorio sea **público** (para plan gratis)

### ❌ Problema: Vercel dice "Build Failed"

**Solución:**
1. Ve al Dashboard de Vercel
2. Click en tu proyecto
3. Click en la pestaña **"Deployments"**
4. Click en el deployment fallido
5. Lee los **"Build Logs"** para ver el error
6. Los errores más comunes:
   - **Dependencias faltantes**: Agrega `package.json` con todas las dependencias
   - **Variables de entorno faltantes**: Configúralas en Vercel (Settings → Environment Variables)
   - **Errores de código**: Soluciónalos localmente primero

### ❌ Problema: El sitio se ve diferente en Vercel que localmente

**Solución:**
1. Verifica que hayas hecho `git push` con todos los cambios
2. Espera 2-3 minutos para que Vercel termine de construir
3. Haz "hard refresh" en el navegador: `Ctrl + Shift + R` (Windows) o `Cmd + Shift + R` (Mac)
4. Limpia la caché del navegador

### ❌ Problema: "Repository not found" en GitHub

**Solución:**
1. Verifica que el nombre del repositorio sea correcto
2. Verifica que el repositorio sea **público**
3. Verifica que tengas acceso al repositorio

---

## Alternativa: Netlify

Si prefieres usar Netlify en lugar de Vercel, aquí está el proceso:

### Paso 1: Crea cuenta en Netlify

1. Ve a: https://www.netlify.com
2. Click en **"Sign up"**
3. Selecciona **"Sign up with GitHub"**
4. Autoriza a Netlify

### Paso 2: Conecta tu Repositorio

1. En el Dashboard, click en **"Add new site"** → **"Import an existing project"**
2. Selecciona **"Deploy with GitHub"**
3. Autoriza a Netlify si es necesario
4. Busca tu repositorio `hostal-buritaca`
5. Click en él

### Paso 3: Configura

Netlify detectará automáticamente Next.js. Solo verifica:

- **Build command**: `npm run build`
- **Publish directory**: `.next`
- **Base directory**: (déjalo vacío)

### Paso 4: Despliega

1. Click en **"Deploy site"**
2. Espera 3-5 minutos
3. Tu sitio estará en: `https://hostal-buritaca.netlify.app`

---

## 📝 Checklist Final

Antes de mostrarle el sitio a tu cliente, verifica:

- [ ] El sitio carga correctamente
- [ ] Todas las imágenes se ven bien
- [ ] Los enlaces funcionan
- [ ] El sitio se ve bien en móvil (abre en tu teléfono)
- [ ] Los formularios funcionan (si los hay)
- [ ] La URL es fácil de compartir

---

## 🎉 ¡Listo!

Tu sitio está en línea y puedes compartirlo con tu cliente. Cada vez que hagas cambios, solo necesitas:

1. `git add .`
2. `git commit -m "Cambios"`
3. `git push`

Y el sitio se actualizará automáticamente en 1-2 minutos.

---

## 📞 ¿Necesitas Ayuda?

Si tienes problemas que no están en esta guía:

1. Revisa los logs de Vercel/Netlify
2. Busca el error en Google
3. Verifica que todos los pasos se hayan seguido correctamente

---

## 🔒 Seguridad y Privacidad

- **Tu código es público**: Si usas GitHub público, cualquiera puede ver tu código
- **Para proyectos privados**: Necesitarías el plan de pago de Vercel/Netlify
- **Para mostrar al cliente**: El plan gratis es perfecto

---

**¡Feliz despliegue! 🚀**


