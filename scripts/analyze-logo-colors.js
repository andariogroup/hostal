// Análisis avanzado de colores del logo para UI/UX profesional
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Función para calcular luminancia (para contraste WCAG)
function getLuminance(r, g, b) {
  const [rs, gs, bs] = [r, g, b].map(val => {
    val = val / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rs + 0.7152 * gs + 0.0722 * bs;
}

// Función para calcular contraste
function getContrast(rgb1, rgb2) {
  const lum1 = getLuminance(rgb1[0], rgb1[1], rgb1[2]);
  const lum2 = getLuminance(rgb2[0], rgb2[1], rgb2[2]);
  const lighter = Math.max(lum1, lum2);
  const darker = Math.min(lum1, lum2);
  return (lighter + 0.05) / (darker + 0.05);
}

// Función para convertir RGB a HSL
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }
  return [Math.round(h * 360), Math.round(s * 100), Math.round(l * 100)];
}

async function analyzeLogoColors() {
  try {
    const imagePath = path.join(__dirname, '../public/logo_hostal.jpeg');
    
    const { data, info } = await sharp(imagePath)
      .resize(300, 300, { fit: 'inside' })
      .raw()
      .toBuffer({ resolveWithObject: true });

    const colorMap = new Map();
    
    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Filtrar blancos y grises muy claros (probablemente fondo)
      if (r > 240 && g > 240 && b > 240) continue;
      
      const key = `${Math.floor(r / 8) * 8},${Math.floor(g / 8) * 8},${Math.floor(b / 8) * 8}`;
      colorMap.set(key, (colorMap.get(key) || 0) + 1);
    }

    const sortedColors = Array.from(colorMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 15)
      .map(([color, count]) => {
        const [r, g, b] = color.split(',').map(Number);
        const hex = `#${r.toString(16).padStart(2, '0')}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
        const [h, s, l] = rgbToHsl(r, g, b);
        const lum = getLuminance(r, g, b);
        return { r, g, b, hex, h, s, l, lum, count };
      })
      .filter(color => color.s > 10 && color.l < 95 && color.l > 5); // Filtrar colores saturados y no extremos

    console.log('\n🎨 Análisis Profesional de Colores del Logo\n');
    console.log('Colores principales identificados:\n');
    
    sortedColors.forEach((color, index) => {
      const contrastWhite = getContrast([color.r, color.g, color.b], [255, 255, 255]);
      const contrastBlack = getContrast([color.r, color.g, color.b], [0, 0, 0]);
      const wcagAA = contrastWhite >= 4.5 || contrastBlack >= 4.5 ? '✅' : '⚠️';
      
      console.log(`${index + 1}. ${color.hex}`);
      console.log(`   RGB(${color.r}, ${color.g}, ${color.b}) | HSL(${color.h}°, ${color.s}%, ${color.l}%)`);
      console.log(`   Luminancia: ${color.lum.toFixed(3)} | Contraste blanco: ${contrastWhite.toFixed(2)} | Contraste negro: ${contrastBlack.toFixed(2)} ${wcagAA}`);
      console.log(`   Uso sugerido: ${color.l > 50 ? 'Fondo claro' : color.s > 50 ? 'Color de acento' : 'Color neutro'}\n`);
    });

    // Identificar colores primarios y secundarios
    const primary = sortedColors.find(c => c.s > 40 && c.l < 60 && c.l > 20) || sortedColors[0];
    const secondary = sortedColors.find(c => c !== primary && c.s > 30) || sortedColors[1] || sortedColors[0];
    const accent = sortedColors.find(c => c.s > 50 && c !== primary && c !== secondary) || sortedColors[2] || primary;

    console.log('\n📋 Paleta Recomendada para UI/UX Profesional:\n');
    
    // Generar variaciones
    function generateVariations(baseColor) {
      const { r, g, b, h, s, l } = baseColor;
      
      // Light (aumentar luminosidad, reducir saturación)
      const lightL = Math.min(95, l + 25);
      const lightS = Math.max(20, s - 15);
      const lightHex = hslToHex(h, lightS, lightL);
      
      // Dark (reducir luminosidad)
      const darkL = Math.max(15, l - 20);
      const darkS = Math.min(100, s + 10);
      const darkHex = hslToHex(h, darkS, darkL);
      
      // Lighter (para hover)
      const lighterL = Math.min(98, l + 15);
      const lighterS = Math.max(15, s - 10);
      const lighterHex = hslToHex(h, lighterS, lighterL);
      
      // Darker (para active)
      const darkerL = Math.max(10, l - 30);
      const darkerS = Math.min(100, s + 15);
      const darkerHex = hslToHex(h, darkerS, darkerL);
      
      return { light: lightHex, dark: darkHex, lighter: lighterHex, darker: darkerHex };
    }

    function hslToHex(h, s, l) {
      l /= 100;
      const a = s * Math.min(l, 1 - l) / 100;
      const f = n => {
        const k = (n + h / 30) % 12;
        const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
        return Math.round(255 * color).toString(16).padStart(2, '0');
      };
      return `#${f(0)}${f(8)}${f(4)}`;
    }

    const primaryVars = generateVariations(primary);
    const secondaryVars = generateVariations(secondary);
    const accentVars = generateVariations(accent);

    console.log('PRIMARIO (verde-selva):');
    console.log(`  DEFAULT: '${primary.hex}',`);
    console.log(`  light: '${primaryVars.light}',`);
    console.log(`  dark: '${primaryVars.dark}',`);
    console.log(`  lighter: '${primaryVars.lighter}', // hover`);
    console.log(`  darker: '${primaryVars.darker}', // active`);
    
    console.log('\nSECUNDARIO (azul-caribe):');
    console.log(`  DEFAULT: '${secondary.hex}',`);
    console.log(`  light: '${secondaryVars.light}',`);
    console.log(`  dark: '${secondaryVars.dark}',`);
    console.log(`  lighter: '${secondaryVars.lighter}', // hover`);
    console.log(`  darker: '${secondaryVars.darker}', // active`);

    console.log('\nACENTO (para destacar):');
    console.log(`  DEFAULT: '${accent.hex}',`);

    // Generar código completo para tailwind.config.ts
    const configCode = `
// Paleta profesional extraída del logo - Optimizada para UI/UX
colors: {
  // Color Primario - Turquesa del logo
  'verde-selva': {
    DEFAULT: '${primary.hex}',
    light: '${primaryVars.light}',
    dark: '${primaryVars.dark}',
    lighter: '${primaryVars.lighter}',
    darker: '${primaryVars.darker}',
  },
  // Color Secundario - Verde oliva del logo  
  'azul-caribe': {
    DEFAULT: '${secondary.hex}',
    light: '${secondaryVars.light}',
    dark: '${secondaryVars.dark}',
    lighter: '${secondaryVars.lighter}',
    darker: '${secondaryVars.darker}',
  },
  // Color de Acento
  'accent': {
    DEFAULT: '${accent.hex}',
    light: '${accentVars.light}',
    dark: '${accentVars.dark}',
  },
  // Colores neutros mejorados
  'arena': {
    DEFAULT: '#F5E6D3',
    light: '#FAF0E6',
    dark: '#E8D4B8',
    text: '#D4B896',
  },
  'dorado': {
    DEFAULT: '#D4AF37',
    light: '#E5C158',
    dark: '#B8941F',
  },
  // Grises profesionales
  'gray': {
    50: '#FAFAFA',
    100: '#F5F5F5',
    200: '#EEEEEE',
    300: '#E0E0E0',
    400: '#BDBDBD',
    500: '#9E9E9E',
    600: '#757575',
    700: '#616161',
    800: '#424242',
    900: '#212121',
  },
  'negro-suave': '#2C2C2C',
},
`;

    console.log('\n\n📄 Código completo para tailwind.config.ts:');
    console.log(configCode);

    // Verificar contraste para accesibilidad
    console.log('\n✅ Verificación de Contraste WCAG:');
    const whiteContrast = getContrast([primary.r, primary.g, primary.b], [255, 255, 255]);
    const blackContrast = getContrast([primary.r, primary.g, primary.b], [0, 0, 0]);
    console.log(`Primario sobre blanco: ${whiteContrast.toFixed(2)} ${whiteContrast >= 4.5 ? '✅ AA' : whiteContrast >= 3 ? '⚠️ AA Large' : '❌ No cumple'}`);
    console.log(`Primario sobre negro: ${blackContrast.toFixed(2)} ${blackContrast >= 4.5 ? '✅ AA' : blackContrast >= 3 ? '⚠️ AA Large' : '❌ No cumple'}`);

  } catch (error) {
    console.error('Error:', error.message);
  }
}

analyzeLogoColors();


