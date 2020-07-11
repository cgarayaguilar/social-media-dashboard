import React, { useContext } from 'react'
import { Container } from './styles'
import { Context } from '../../helpers/Context'
import { GlobalStyle } from '../GlobalStyle'
import { Header } from '../Header'
import { ListOfFollowers } from '../ListOfFollowers'
import { Overview } from '../Overview/index'
import { ThemeContext, ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../../styles/themes'

export const App = () => {
  const theme = useContext(ThemeContext)
  const { isDarkMode } = useContext(Context)
  const themeColor = isDarkMode ? darkTheme : lightTheme

  return (
    <ThemeProvider theme={themeColor}>
      <Container theme={theme}>
        <GlobalStyle />
        <Header totalFollowers={23004} />
        <ListOfFollowers />
        <Overview />
      </Container>
    </ThemeProvider>
  )
}
