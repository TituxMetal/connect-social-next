import { createGlobalStyle } from 'styled-components'

export const theme = {
  primaryColor: 'hsl(0, 0%, 26%)',
  secondaryColor: 'hsl(21, 100%, 45%)',
  textColor: 'hsl(34, 78%, 91%)'
}

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 20px;
  }

  *, *:before, *:after {
    box-sizing: inherit;
    outline: none;
  }

  body {
    padding: 0;
    margin: 0;
    font-size: 1rem;
    line-height: 2;
    background-color: ${theme.primaryColor};
    color: ${theme.textColor};
    font-family: Lato, sans-serif;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/static/fonts/Lato-Regular.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: 'Lato';
    src: url('/static/fonts/Lato-Bold.ttf') format('ttf');
    font-weight: 700;
    font-style: normal;
    font-display: fallback;
  }
`
