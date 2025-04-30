export const theme = {
  colors: {
    // Core brand colors from Seed to Oaks
    primary: '#2C5282', // Deep blue from their logo/buttons
    secondary: '#718096', // Muted blue-gray
    accent: '#48BB78', // Green from their success indicators
    
    // Dark mode background colors
    background: {
      primary: '#1A202C', // Dark blue-gray
      secondary: '#2D3748', // Slightly lighter blue-gray
      tertiary: '#4A5568', // Mid blue-gray
    },
    
    // Dark mode text colors
    text: {
      primary: '#FFFFFF',
      secondary: '#E2E8F0',
      muted: '#A0AEC0',
    },
    
    // Status colors
    status: {
      success: '#48BB78', // Green
      warning: '#ECC94B', // Yellow
      error: '#F56565', // Red
      info: '#4299E1', // Blue
    },
    
    // Border colors
    border: {
      primary: '#4A5568',
      secondary: '#2D3748',
    }
  },
  
  // You can add more theme properties here
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
  },
  
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  },
};

export type Theme = typeof theme; 