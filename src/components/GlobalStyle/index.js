import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    min-height:100vh;
    max-width: 100vw;
    background-color: ${props =>
      props.darkBackground ? 'hsl(230, 17%, 14%)' : 'hsl(0, 0%, 100%)'};
  }
`
