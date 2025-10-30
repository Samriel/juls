export const theme = {
  colors: {
    black: '#181818',
    graphite: '#23272A',
    white: '#FFFFFF',
    champagne: '#F7E7CE',
    silver: '#C0C0C0',
  },
  fonts: {
    heading: "'Bebas Neue', sans-serif",
    subheading: "'Playfair Display', serif",
    body: "'EB Garamond', serif",
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1440px',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '4rem',
    xl: '6rem',
  },
};

export type Theme = typeof theme;