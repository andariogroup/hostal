# 🖼️ Imagen Hero - Optimización de Contraste

## Cambio Realizado

### Imagen Anterior
- **URL**: `photo-1540541338287-41700207dee6`
- **Problema**: Tonos azules/verdes que competían con los colores del logo

### Imagen Nueva
- **URL**: `photo-1506905925346-21bda4d32df4`
- **Características**:
  - ✅ Tonos cálidos (dorados, naranjas, beiges)
  - ✅ Contraste perfecto con logo turquesa (#108890) y verde oliva (#608038)
  - ✅ Representa naturaleza tropical/Caribe
  - ✅ Funciona excelente con texto blanco encima

## Mejoras Adicionales

### Overlays Mejorados
1. **Overlay oscuro base**: `from-black/50 via-black/30 to-black/60`
   - Mejor contraste para texto blanco
   - Gradiente más pronunciado

2. **Overlay cálido**: `from-amber-900/20`
   - Añade tonos cálidos sutiles
   - Complementa los colores del logo
   - Crea profundidad visual

### Badge Mejorado
- Mayor opacidad del fondo (`bg-white/25`)
- Backdrop blur mejorado (`backdrop-blur-md`)
- Borde sutil (`border-white/30`)
- Sombra para profundidad (`shadow-lg`)

## Teoría del Color Aplicada

### Colores Complementarios
- **Logo**: Turquesa (#108890) y Verde oliva (#608038) - Colores fríos
- **Hero**: Tonos cálidos (dorado, naranja, beige) - Colores cálidos
- **Resultado**: Contraste perfecto y armonía visual

### Rueda de Colores
```
Logo (Turquesa/Verde) ←→ Hero (Dorado/Naranja)
     Colores Fríos    ←→    Colores Cálidos
```

## Beneficios

1. ✅ **Mejor contraste visual** entre logo y fondo
2. ✅ **Logo más visible** sobre fondo cálido
3. ✅ **Texto más legible** con overlays mejorados
4. ✅ **Cohesión visual** manteniendo temática tropical
5. ✅ **Profesionalismo** con gradientes sutiles

## Alternativas de Imágenes

Si necesitas cambiar la imagen, busca en Unsplash:
- Palabras clave: "tropical beach sunset", "jungle golden hour", "caribbean warm tones"
- Colores: Tonos cálidos (naranja, dorado, beige, crema)
- Evitar: Azules y verdes intensos que compitan con el logo

## Cómo Cambiar la Imagen

1. Busca una imagen en Unsplash con tonos cálidos
2. Copia el ID de la foto (ej: `photo-1506905925346-21bda4d32df4`)
3. Reemplaza en `Hero.tsx`:
```tsx
src="https://images.unsplash.com/photo-[ID]?w=1920&q=80&auto=format&fit=crop"
```

---

**La imagen ahora contrasta perfectamente con el logo y el menú, creando una experiencia visual profesional y armoniosa.**


