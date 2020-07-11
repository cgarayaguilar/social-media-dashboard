import React from 'react'
import { Container } from './styles'
import { Context } from '../../helpers/Context'
import { GlobalStyle } from '../GlobalStyle'
import { Header } from '../Header'
import { ListOfFollowers } from '../ListOfFollowers'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from '../../styles/themes'
import { useContext } from 'react'
import { Overview } from '../Overview/index'
import { ThemeContext } from 'styled-components'

export const App = () => {
  const { isDarkMode } = useContext(Context)
  const themeColor = isDarkMode ? darkTheme : lightTheme
  const theme = useContext(ThemeContext)

  return (
    <ThemeProvider theme={themeColor}>
      <Container theme={theme}>
        <GlobalStyle />
        <Header />
        <ListOfFollowers />
        <Overview />
      </Container>
    </ThemeProvider>
  )
}
