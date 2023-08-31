import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    overflow-y: scroll;

  }

  body {
    scroll-behavior: smooth;

    height: 100vh;
    margin: 0;

    font-family: 'Inter Variable', sans-serif;
    color: ${({ theme }) => theme.textColor['100']};
    text-rendering: optimizespeed;

    background-color: ${({ theme }) => theme.bodyColor['700']};

    &.isModalOpen {
      overflow: hidden;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }

  img {
    width: 100%;
    height: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
  }

  //~~~~-autofills for inputs
  //https://css-tricks.com/almanac/selectors/a/autofill/
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    box-shadow: 0 0 0 40rem ${({ theme }) => theme.bodyColor['500']} inset;

    -webkit-text-fill-color: ${({ theme }) => theme.textColor['100']};
  }


  //~~~~ScrollBar
  //https://codepen.io/devstreak/pen/dMYgeO
  &::-webkit-scrollbar-track {
    background-color: #CCC;
    box-shadow: inset 0 0 6px rgb(0 0 0 / 60%);
  }

  &::-webkit-scrollbar {
    display: none;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #FFF;
    background-image: linear-gradient(90deg,
    rgb(0 0 0 / 100%) 0%,
    rgb(0 0 0 / 100%) 25%,
    transparent 100%,
    rgb(0 0 0 / 100%) 75%,
    transparent)
  }
`
