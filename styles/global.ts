import { createGlobalStyle } from 'styled-components';
import { devices } from './device';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
  }

  @media (prefers-color-scheme: dark) {
    html {
      color-scheme: dark;
    }
    body {
      color: white;
      background: black;
    }
  }
`;

const theme = {
  styles: {
    colors: {
      gray: {
        light: '#cccccc',
        medium: '#adadad',
        bold: '#808080',
      },
      black: {
        normal: '#293241',
        opacity: '#364559',
      },
      white: {
        background: '#f6f5f3',
      },
    },
    font: {
      tiny: '0.7rem',
      small: '0.9rem',
      default: '1.1rem',
      medium: '1.5rem',
      large: '1.8rem',
      xLarge: '2.5rem',
      xxLarge: '3.5rem',
    },
    spacing: {
      shorter: '4px',
      short: '8px',
      base: '16px',
      smaller: '32px',
      tall: '64px',
    },
  },
  devices,
};

export { GlobalStyle, theme };
