# 🎨 Actualizar Colores del Logo

## Opción 1: Usar Script Automático (Recomendado)

1. Instala la dependencia:
```bash
npm install sharp
```

2. Ejecuta el script:
```bash
node scripts/extract-colors.js
```

3. El script mostrará los colores dominantes y generará código para `tailwind.config.ts`

---

## Opción 2: Extraer Colores Manualmente

### Herramientas Online:
1. **Image Color Picker**: https://imagecolorpicker.com/
   - Sube `public/logo_hostal.jpeg`
   - Haz clic en los colores principales
   - Copia los códigos HEX

2. **Coolors Image Picker**: https://coolors.co/image-picker
   - Sube la imagen
   - Genera una paleta automáticamente

3. **HTML Color Codes**: https://html-color-codes.info/colors-from-image/
   - Sube la imagen
   - Extrae colores dominantes

### Pasos:
1. Identifica 2-3 colores principales del logo
2. Anota sus códigos HEX (ej: #2D5016, #1E88E5)
3. Actualiza `tailwind.config.ts` con estos colores

---

## Opción 3: Actualizar Manualmente tailwind.config.ts

Edita `tailwind.config.ts` y reemplaza los colores actuales:

```typescript
colors: {
  // Reemplaza 'verde-selva' con tu color primario
  'verde-selva': {
    DEFAULT: '#TU_COLOR_PRIMARIO_AQUI',
    light: '#VERSION_CLARA',
    dark: '#VERSION_OSCURA',
  },
  // Reemplaza 'azul-caribe' con tu color secundario
  'azul-caribe': {
    DEFAULT: '#TU_COLOR_SECUNDARIO_AQUI',
    light: '#VERSION_CLARA',
    dark: '#VERSION_OSCURA',
  },
  // ... otros colores
}
```

### Generar Versiones Claras/Oscuras:
- **Clara**: Aumenta brillo ~20% (multiplica RGB por 1.2)
- **Oscura**: Reduce brillo ~20% (multiplica RGB por 0.8)

O usa herramientas como:
- https://maketintsandshades.com/
- https://coolors.co/contrast-checker

---

## ✅ Después de Actualizar

1. Reinicia el servidor de desarrollo:
```bash
npm run dev
```

2. Verifica que los colores se aplicaron correctamente
3. Ajusta si es necesario

---

## 📝 Notas

- Los colores se usan en toda la aplicación con las clases:
  - `text-verde-selva` → `text-[tu-color-primario]`
  - `bg-azul-caribe` → `bg-[tu-color-secundario]`
  - `border-verde-selva` → `border-[tu-color-primario]`
  - etc.

- Si cambias los nombres de los colores, necesitarás buscar y reemplazar en todos los archivos


