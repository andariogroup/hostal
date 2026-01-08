import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Paleta profesional extraída del logo - Optimizada para UI/UX
        // Color Primario - Turquesa vibrante del logo (#108890)
        'verde-selva': {
          DEFAULT: '#108890', // Color principal - excelente contraste
          light: '#46ced8',   // Para fondos claros y hover suave
          dark: '#044449',    // Para textos sobre fondos claros
          lighter: '#23bcc7', // Hover states
          darker: '#012e32',  // Active/pressed states
          50: '#e8f8f8',      // Tint muy claro para fondos
          100: '#d0f1f1',
          200: '#a0e3e3',
          300: '#70d5d5',
          400: '#40c7c7',
          500: '#108890',     // Base
          600: '#0d6e73',
          700: '#0a5456',
          800: '#073a3a',
          900: '#04201d',
        },
        // Color Secundario - Verde oliva del logo (#608038)
        'azul-caribe': {
          DEFAULT: '#608038', // Color secundario - excelente contraste
          light: '#9eb384',   // Para fondos claros
          dark: '#2b3d15',    // Para textos sobre fondos claros
          lighter: '#86a65e', // Hover states
          darker: '#1b270c',  // Active/pressed states
          50: '#f5f7f0',
          100: '#ebefe1',
          200: '#d7dfc3',
          300: '#c3cfa5',
          400: '#afbf87',
          500: '#608038',     // Base
          600: '#4d6629',
          700: '#3a4d1f',
          800: '#273315',
          900: '#141a0a',
        },
        // Color de Acento - Turquesa alternativo (#108888)
        'accent': {
          DEFAULT: '#108888',
          light: '#43d6d6',
          dark: '#044848',
        },
        // Colores neutros mejorados para hostales
        'arena': {
          DEFAULT: '#F5E6D3', // Beige cálido - perfecto para fondos
          light: '#FAF0E6',    // Muy claro
          dark: '#E8D4B8',     // Más oscuro
          text: '#D4B896',     // Para textos sobre arena
        },
        // Dorado/Amarillo del logo para acentos especiales
        'dorado': {
          DEFAULT: '#F8D000', // Amarillo vibrante del logo
          light: '#FFE033',
          dark: '#C4A500',
          muted: '#F5C842',    // Versión más suave
        },
        // Grises profesionales mejorados
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
        // Colores semánticos para feedback
        'success': {
          DEFAULT: '#10B981',
          light: '#34D399',
          dark: '#059669',
        },
        'warning': {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        'error': {
          DEFAULT: '#EF4444',
          light: '#F87171',
          dark: '#DC2626',
        },
        'info': {
          DEFAULT: '#108890', // Usa el color primario
          light: '#23bcc7',
          dark: '#044449',
        },
      },
      fontFamily: {
        'display': ['Playfair Display', 'serif'],
        'body': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'h1': ['2.5rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'h2': ['1.875rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-5px)' },
        },
      },
      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.12)',
        'large': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'premium': '0 12px 32px rgba(0, 0, 0, 0.18)',
        'colored': '0 4px 16px rgba(16, 136, 144, 0.25)', // Sombra con color primario
        'colored-lg': '0 8px 24px rgba(16, 136, 144, 0.3)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
export default config
