import { css, createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    min-height: 100%;
    height: min-content;
    font-family: 'Roboto';
    font-size: 24px;
    @media only screen and (max-width: 1000px) {
      font-size: 18px;
    }
  }
  body {
    box-sizing: border-box;
    height: 100%;
    min-height: 100%;
    overflow-y: scroll;
    ${props => props.hideScroll && css`
      position: relative;
      overflow-y: hidden;
    `}
    scroll-behaviour: smooth;
  }
  #root {
    box-sizing: border-box;
    min-height: 100%;
    height: 100%;
  }
  *, *::after, *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    -webkit-touch-callout: none;
    -webkit-tap-highlight-color: transparent;
    outline: none;
  }
  textarea {
    resize: none;
  }
`

export default GlobalStyle
