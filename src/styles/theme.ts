export const theme = {
  colors: {
    primary: {
      DEFAULT: '#4CAF50', // Seed To Oaks green
      light: '#81C784',
      dark: '#388E3C',
    },
    secondary: {
      DEFAULT: '#2C3E50', // Charcoal
      light: '#34495E',
      dark: '#1A252F',
    },
    background: {
      DEFAULT: '#FFFFFF',
      dark: '#F5F5F5',
    },
    text: {
      DEFAULT: '#2C3E50',
      light: '#7F8C8D',
      dark: '#1A252F',
    },
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
  },
  fontFamily: {
    sans: ['Inter', 'sans-serif'],
    serif: ['Georgia', 'serif'],
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
  },
} as const; 