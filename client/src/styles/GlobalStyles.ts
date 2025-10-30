import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    scroll-padding-top: 70px;
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  body {
    font-family: ${theme.fonts.body};
    background-color: ${theme.colors.champagne};
    color: ${theme.colors.graphite};
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${theme.fonts.heading};
    font-weight: 400;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
    line-height: 1.2;
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
    line-height: 1.3;
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
    line-height: 1.4;
  }

  p {
    font-size: clamp(1rem, 1.5vw, 1.125rem);
    margin-bottom: 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  button {
    font-family: ${theme.fonts.body};
    cursor: pointer;
    border: none;
    outline: none;
    transition: all 0.3s ease;
  }

  input, textarea, select {
    font-family: ${theme.fonts.body};
    outline: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  section {
    min-height: 100vh;
    padding: ${theme.spacing.xl} ${theme.spacing.md};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: ${theme.breakpoints.mobile}) {
      padding: ${theme.spacing.lg} ${theme.spacing.sm};
    }
  }
`;