// Script para extraer colores dominantes del logo
// Requiere: npm install sharp
// Uso: node scripts/extract-colors.js

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function extractColors() {
  try {
    const imagePath = path.join(__dirname, '../public/logo_hostal.jpeg');
    
    // Redimensionar y obtener datos de píxeles
    const { data, info } = await sharp(imagePath)
      .resize(200, 200, { fit: 'inside' })
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Contar colores más frecuentes
    const colorMap = new Map();
    
    for (let i = 0; i < data.length; i += info.channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      
      // Agrupar colores similares (reducir precisión)
      const key = `${Math.floor(r / 10) * 10},${Math.floor(g / 10) * 10},${Math.floor(b / 10) * 10}`;
      colorMap.set(key, (colorMap.get(key) || 0) + 1);
    }

    // Ordenar por frecuencia
    const sortedColors = Array.from(colorMap.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 10);

    console.log('\n🎨 Colores dominantes del logo:\n');
    
    sortedColors.forEach(([color, count], index) => {
      const [r, g, b] = color.split(',');
      const hex = `#${parseInt(r).toString(16).padStart(2, '0')}${parseInt(g).toString(16).padStart(2, '0')}${parseInt(b).toString(16).padStart(2, '0')}`;
      console.log(`${index + 1}. RGB(${r}, ${g}, ${b}) = ${hex} (${count} píxeles)`);
    });

    // Sugerir colores primario y secundario
    const primary = sortedColors[0][0].split(',');
    const secondary = sortedColors[1] ? sortedColors[1][0].split(',') : sortedColors[0][0].split(',');
    
    const primaryHex = `#${parseInt(primary[0]).toString(16).padStart(2, '0')}${parseInt(primary[1]).toString(16).padStart(2, '0')}${parseInt(primary[2]).toString(16).padStart(2, '0')}`;
    const secondaryHex = `#${parseInt(secondary[0]).toString(16).padStart(2, '0')}${parseInt(secondary[1]).toString(16).padStart(2, '0')}${parseInt(secondary[2]).toString(16).padStart(2, '0')}`;

    console.log('\n📋 Colores sugeridos para tailwind.config.ts:\n');
    console.log(`Primario: ${primaryHex}`);
    console.log(`Secundario: ${secondaryHex}\n`);

    // Generar código para tailwind.config.ts
    const configCode = `
// Colores extraídos del logo
'primary': {
  DEFAULT: '${primaryHex}',
  light: '${adjustBrightness(primaryHex, 1.2)}',
  dark: '${adjustBrightness(primaryHex, 0.8)}',
},
'secondary': {
  DEFAULT: '${secondaryHex}',
  light: '${adjustBrightness(secondaryHex, 1.2)}',
  dark: '${adjustBrightness(secondaryHex, 0.8)}',
},
`;

    console.log('Código para agregar a tailwind.config.ts:');
    console.log(configCode);

  } catch (error) {
    console.error('Error:', error.message);
    console.log('\n💡 Alternativa: Usa una herramienta online como:');
    console.log('   - https://imagecolorpicker.com/');
    console.log('   - https://html-color-codes.info/colors-from-image/');
    console.log('   - https://coolors.co/image-picker');
  }
}

function adjustBrightness(hex, factor) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  
  const newR = Math.min(255, Math.floor(r * factor));
  const newG = Math.min(255, Math.floor(g * factor));
  const newB = Math.min(255, Math.floor(b * factor));
  
  return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}

extractColors();


