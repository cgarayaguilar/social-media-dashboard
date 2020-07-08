import React from 'react'
import { Container, ContainerTop, ContainerDown } from './styles'
import { GlobalStyle } from '../GlobalStyle'
import { ListOfFollowers } from '../ListOfFollowers'
import { ThemeContext } from 'styled-components'
import { useContext } from 'react'

export const App = () => {
  const theme = useContext(ThemeContext)
  return (
    <Container>
      <GlobalStyle />
      <ContainerTop theme={theme} />
      <ContainerDown theme={theme}>
        <ListOfFollowers />
      </ContainerDown>
    </Container>
  )
}
