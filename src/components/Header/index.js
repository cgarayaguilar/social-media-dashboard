import React from 'react'
import { ToggleButton } from '../ToggleButton'
import {
  Container,
  Wrapper,
  TitleContainer,
  ToggleContainer,
  Title,
  SubTitle
} from './styles'
import { Context } from '../../helpers/Context'
import { ThemeContext } from 'styled-components'
import { useContext } from 'react'

export const Header = ({ totalFollowers = 23004 }) => {
  const { isDarkMode, activateDarkMode, disableDarkMode } = useContext(Context)
  const theme = useContext(ThemeContext)

  const handleClickToogle = () => {
    isDarkMode ? disableDarkMode() : activateDarkMode()
  }

  return (
    <Container theme={theme}>
      <Wrapper>
        <TitleContainer>
          <Title theme={theme}>Social Media Dashboard</Title>
          <SubTitle theme={theme}>
            Total Followers: {new Intl.NumberFormat().format(totalFollowers)}
          </SubTitle>
        </TitleContainer>
        <ToggleContainer>
          <ToggleButton onClick={handleClickToogle} />
        </ToggleContainer>
      </Wrapper>
    </Container>
  )
}
