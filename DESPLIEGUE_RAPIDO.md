# ⚡ Despliegue Rápido - 5 Minutos

## 🚀 Opción Más Rápida: Vercel

### Paso 1: Preparar proyecto (2 min)

```bash
# Verificar que funciona localmente
npm run build

# Si funciona, continuar. Si no, revisar errores.
```

### Paso 2: Subir a GitHub (1 min)

```bash
# Si no tienes Git inicializado:
git init
git add .
git commit -m "Ready to deploy"

# Crear repositorio en GitHub y luego:
git remote add origin https://github.com/tu-usuario/tu-repo.git
git branch -M main
git push -u origin main
```

### Paso 3: Desplegar en Vercel (2 min)

1. Ve a [vercel.com](https://vercel.com)
2. Click "Sign Up" → Conecta con GitHub
3. Click "Add New Project"
4. Selecciona tu repositorio
5. Click "Deploy" (Vercel detecta Next.js automáticamente)
6. ¡Listo! Tu sitio estará en `https://tu-proyecto.vercel.app`

### Paso 4: Configurar variables (si aplica)

1. En Vercel Dashboard → Settings → Environment Variables
2. Agrega las variables que necesites
3. Redeploy automáticamente

---

## 📝 Checklist Pre-Despliegue

- [ ] `npm run build` funciona sin errores
- [ ] Código está en Git
- [ ] Repositorio está en GitHub/GitLab/Bitbucket

---

## 🎯 URLs después del despliegue

- **Producción**: `https://tu-proyecto.vercel.app`
- **Preview**: Cada push crea un preview automático

---

## 🔧 Comandos Útiles

```bash
# Build local para probar
npm run build
npm start

# Verificar que todo está bien
npm run lint
```

---

**¡Eso es todo! Tu sitio estará en línea en menos de 5 minutos.** 🎉


