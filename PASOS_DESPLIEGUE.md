# 🎯 Pasos para Desplegar - Guía Visual

## Método Más Simple: Vercel

### Paso 1: Verificar que funciona localmente ✅

```bash
# En la terminal, ejecuta:
npm run build

# Si no hay errores, continúa. Si hay errores, revísalos primero.
```

### Paso 2: Subir código a GitHub 📤

#### Si NO tienes Git inicializado:

```bash
# Inicializar Git
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Ready to deploy"

# Crear repositorio en GitHub.com (ve al sitio web)
# Luego conecta:
git remote add origin https://github.com/TU-USUARIO/TU-REPO.git
git branch -M main
git push -u origin main
```

#### Si YA tienes Git:

```bash
git add .
git commit -m "Ready to deploy"
git push
```

### Paso 3: Desplegar en Vercel 🚀

1. **Ve a vercel.com**
   - Abre tu navegador
   - Ve a https://vercel.com

2. **Regístrate**
   - Click en "Sign Up"
   - Selecciona "Continue with GitHub"
   - Autoriza Vercel

3. **Crear proyecto**
   - Click en "Add New Project"
   - Selecciona tu repositorio de GitHub
   - Click en "Import"

4. **Configurar proyecto**
   - Vercel detectará Next.js automáticamente
   - No necesitas cambiar nada
   - Click en "Deploy"

5. **Esperar despliegue**
   - Verás el progreso en tiempo real
   - Tarda 1-2 minutos

6. **¡Listo!**
   - Tu sitio estará en: `https://tu-proyecto.vercel.app`
   - Cada vez que hagas `git push`, se desplegará automáticamente

### Paso 4: Configurar dominio personalizado (Opcional) 🌐

1. En Vercel Dashboard → Settings → Domains
2. Agrega tu dominio (ej: `hostalburitaca.com`)
3. Sigue las instrucciones para configurar DNS
4. Espera unos minutos para que se active

---

## 🔧 Configurar Variables de Entorno (Si aplica)

Si usas Cloudbeds, Newsletter, etc.:

1. En Vercel Dashboard → Settings → Environment Variables
2. Agrega cada variable:
   - **Name**: `NEXT_PUBLIC_CLOUDBEDS_PROPERTY_ID`
   - **Value**: `tu_valor_aqui`
   - **Environment**: Production, Preview, Development
3. Click "Save"
4. Vercel redeployará automáticamente

---

## ✅ Verificar que funciona

Después del despliegue, verifica:

- [ ] El sitio carga correctamente
- [ ] Todas las páginas funcionan (`/`, `/alojamiento`, `/experiencias`, etc.)
- [ ] El cambio de idioma funciona
- [ ] Las imágenes cargan
- [ ] Los formularios funcionan

---

## 🆘 Si algo sale mal

### Error: Build falla

```bash
# Prueba localmente primero:
npm run build

# Si falla, revisa los errores y corrígelos
```

### Error: Variables no funcionan

- Verifica que empiecen con `NEXT_PUBLIC_` si son públicas
- Reinicia el despliegue después de agregar variables
- Verifica que no haya espacios en los valores

### Error: Rutas 404

- Verifica que `middleware.ts` esté presente
- Verifica que las rutas estén en `app/[locale]/`

---

## 📞 Soporte

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment

---

**¡Tu sitio estará en línea en menos de 5 minutos!** 🎉


