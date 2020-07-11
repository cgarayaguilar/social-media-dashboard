import React, { useContext } from 'react'
import { ToggleButton } from '../ToggleButton'
import {
  Container,
  SubTitle,
  Title,
  TitleContainer,
  ToggleContainer,
  Wrapper
} from './styles'
import { Context } from '../../helpers/Context'
import { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'

export const Header = ({ totalFollowers }) => {
  const theme = useContext(ThemeContext)
  const { isDarkMode, activateDarkMode, disableDarkMode } = useContext(Context)

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

Header.propTypes = {
  totalFollowers: PropTypes.number.isRequired
}
