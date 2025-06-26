
export const colors = {
  // Primary brand colors - Professional blue-green palette
  primary: {
    50: '#f0fdf9',
    100: '#ccfbef',
    200: '#99f6e0',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6', // Main brand color
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  },
  
  // Secondary colors - Warm accent
  secondary: {
    50: '#fef7ee',
    100: '#fdedd6',
    200: '#fbd7ac',
    300: '#f9ba77',
    400: '#f59540',
    500: '#f2751a', // Secondary accent
    600: '#e35d10',
    700: '#bc4710',
    800: '#963715',
    900: '#793014',
  },
  
  // Neutral grays - For text and backgrounds
  neutral: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
  
  // Status colors
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

export const spacing = {
  xs: '0.5rem',
  sm: '0.75rem',
  md: '1rem',
  lg: '1.5rem',
  xl: '2rem',
  '2xl': '2.5rem',
  '3xl': '3rem',
};

export const typography = {
  fontFamily: {
    sans: ['Inter', 'system-ui', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },
  fontSize: {
    xs: ['0.75rem', { lineHeight: '1rem' }],
    sm: ['0.875rem', { lineHeight: '1.25rem' }],
    base: ['1rem', { lineHeight: '1.5rem' }],
    lg: ['1.125rem', { lineHeight: '1.75rem' }],
    xl: ['1.25rem', { lineHeight: '1.75rem' }],
    '2xl': ['1.5rem', { lineHeight: '2rem' }],
    '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
  },
};
