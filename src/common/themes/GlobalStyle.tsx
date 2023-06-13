import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    background-color: ${props => props.theme.bodyColor};
    color: ${props => props.theme.textColor};
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
    height: 100vh;
    font-family: Inter sans-serif;

    &.isModalOpen {
      overflow: hidden;
    }
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    -webkit-text-fill-color: ${props => props.theme.textColor};
    -webkit-box-shadow: 0 0 0 40rem ${props => props.theme.palette.dark['500']} inset;
  }

  //https://css-tricks.com/almanac/selectors/a/autofill/
`