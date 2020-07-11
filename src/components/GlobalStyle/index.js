import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
  body {
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    max-width: 100vw;
    background-color: ${props =>
      props.darkBackground ? 'hsl(230, 17%, 14%)' : 'hsl(0, 0%, 100%)'};
  }
`
