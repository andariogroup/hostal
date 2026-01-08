# 🎨 Guía de Colores UI/UX Profesional

## Paleta de Colores Optimizada

### Color Primario - Turquesa (#108890)
**Uso Principal:**
- Títulos y encabezados principales
- Enlaces y elementos interactivos importantes
- Iconos y acentos decorativos
- Estados de hover en elementos secundarios

**Variaciones:**
- `verde-selva-50` (#e8f8f8) - Fondos muy claros
- `verde-selva-light` (#46ced8) - Fondos claros
- `verde-selva` (#108890) - **Base** - Textos sobre fondo claro
- `verde-selva-lighter` (#23bcc7) - Estados hover
- `verde-selva-dark` (#044449) - Textos sobre fondo claro (mejor contraste)
- `verde-selva-darker` (#012e32) - Estados active/pressed

**Contraste WCAG:**
- ✅ Sobre blanco: 4.25 (AA Large)
- ✅ Sobre negro: 4.95 (AA)

---

### Color Secundario - Verde Oliva (#608038)
**Uso Principal:**
- Botones principales (CTA)
- Elementos de acción importantes
- Badges y etiquetas destacadas
- Estados activos

**Variaciones:**
- `azul-caribe-50` (#f5f7f0) - Fondos muy claros
- `azul-caribe-light` (#9eb384) - Fondos claros
- `azul-caribe` (#608038) - **Base** - Botones principales
- `azul-caribe-lighter` (#86a65e) - Estados hover
- `azul-caribe-dark` (#2b3d15) - Textos sobre fondo claro
- `azul-caribe-darker` (#1b270c) - Estados active/pressed

**Contraste WCAG:**
- ✅ Sobre blanco: 4.52 (AA)
- ✅ Sobre negro: 4.64 (AA)

---

## Principios de Diseño Aplicados

### 1. Jerarquía Visual
- **Títulos**: `text-verde-selva` (turquesa) - Crea jerarquía clara
- **Botones principales**: `bg-azul-caribe` (verde oliva) - Destacan acciones importantes
- **Botones secundarios**: `border-azul-caribe` - Menos prominentes pero visibles
- **Textos**: `text-gray-800` - Excelente legibilidad

### 2. Contraste y Accesibilidad
- Todos los colores cumplen WCAG AA mínimo
- Textos sobre fondos claros usan versiones `dark`
- Textos sobre fondos oscuros usan versiones `light`
- Focus states visibles con `ring-2`

### 3. Estados Interactivos
- **Hover**: Versiones `lighter` - Feedback visual claro
- **Active**: Versiones `darker` - Confirmación de acción
- **Disabled**: `opacity-50` - Indica estado no disponible
- **Focus**: Ring con color del elemento

### 4. Consistencia
- Mismo color para mismo tipo de elemento
- Variaciones predecibles (light/dark/lighter/darker)
- Espaciado y tamaños consistentes

---

## Uso por Componente

### Botones
```tsx
// Botón principal (acción principal)
<button className="btn-primary">Reservar</button>

// Botón secundario (acción alternativa)
<button className="btn-secondary">Ver más</button>

// Botón con acento (destacar)
<button className="btn-accent">Destacar</button>

// Botón ghost (menos prominente)
<button className="btn-ghost">Cancelar</button>
```

### Cards
```tsx
// Card estándar
<div className="card">...</div>

// Card con hover mejorado
<div className="card-hover">...</div>
```

### Badges
```tsx
<span className="badge-primary">Nuevo</span>
<span className="badge-secondary">Popular</span>
<span className="badge-success">Disponible</span>
```

### Inputs
```tsx
<input className="input" type="text" placeholder="Email" />
```

### Links
```tsx
<a href="#" className="link">Ver más información</a>
```

---

## Gradientes

### Gradiente Principal (Naturaleza)
```tsx
<div className="gradient-nature">
  // Turquesa → Turquesa claro → Verde oliva
</div>
```

### Gradiente Reverso
```tsx
<div className="gradient-nature-reverse">
  // Verde oliva → Verde claro → Turquesa
</div>
```

### Gradiente Sunset
```tsx
<div className="gradient-sunset">
  // Dorado → Dorado claro → Arena
</div>
```

---

## Sombras con Color

Las sombras ahora incluyen el color primario para mayor cohesión:

```tsx
<div className="shadow-colored">...</div>
<div className="shadow-colored-lg">...</div>
```

---

## Mejoras de Accesibilidad

1. **Focus Visible**: Todos los elementos interactivos tienen focus visible
2. **Contraste**: Todos los textos cumplen WCAG AA
3. **Selección de texto**: Color de selección usa el color primario
4. **Estados disabled**: Claramente diferenciados

---

## Colores Semánticos

Para feedback y estados:

- **Success**: `#10B981` - Operaciones exitosas
- **Warning**: `#F59E0B` - Advertencias
- **Error**: `#EF4444` - Errores
- **Info**: Usa el color primario (`verde-selva`)

---

## Mejores Prácticas

1. ✅ Usa `verde-selva` para títulos y elementos destacados
2. ✅ Usa `azul-caribe` para botones principales y CTAs
3. ✅ Usa variaciones `light` para fondos
4. ✅ Usa variaciones `dark` para textos sobre fondos claros
5. ✅ Siempre verifica contraste antes de usar colores personalizados
6. ✅ Usa las clases de utilidad predefinidas cuando sea posible
7. ✅ Mantén consistencia en el uso de colores

---

## Ejemplos de Uso

### Hero Section
```tsx
<h1 className="text-verde-selva">Título Principal</h1>
<button className="btn-primary">CTA Principal</button>
```

### Card con Hover
```tsx
<div className="card-hover">
  <h3 className="text-verde-selva-dark">Título</h3>
  <p className="text-gray-700">Descripción</p>
  <button className="btn-secondary">Acción</button>
</div>
```

### Sección con Gradiente
```tsx
<section className="gradient-nature text-white">
  <h2 className="text-white">Título</h2>
  <button className="bg-white text-verde-selva-dark">Acción</button>
</section>
```

---

**Nota**: Esta paleta está optimizada específicamente para sitios de hostales/hoteles, creando una sensación de naturaleza, tranquilidad y profesionalismo.


