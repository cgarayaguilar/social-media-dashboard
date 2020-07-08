import React from 'react'
import PropTypes from 'prop-types'
import iconDown from '../../images/icon-down.svg'
import iconUp from '../../images/icon-up.svg'
import { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { kFormatter } from '../../helpers/kFormatter'
import {
  Container,
  TopLine,
  Figure,
  UserContainer,
  Label,
  NumFollowers,
  IncreaseFollowers
} from './styles'

export const CardFollower = ({
  icon,
  lineColor,
  username,
  numFollowers,
  label,
  numComparison,
  increase
}) => {
  const arrowIcon = increase ? iconUp : iconDown
  const theme = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <TopLine lineColor={lineColor} />
      <UserContainer theme={theme}>
        <img src={icon} alt='social icon' />
        <figcaption>{username}</figcaption>
      </UserContainer>

      <NumFollowers theme={theme}>{kFormatter(numFollowers)}</NumFollowers>

      <Label theme={theme}>{label}</Label>

      <Figure>
        <img src={arrowIcon} alt='arrow icon' />
        <IncreaseFollowers increase={increase} theme={theme}>
          {numComparison} Today
        </IncreaseFollowers>
      </Figure>
    </Container>
  )
}

CardFollower.propTypes = {
  icon: PropTypes.string.isRequired,
  lineColor: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  numFollowers: PropTypes.number.isRequired,
  label: PropTypes.string.isRequired,
  numComparison: PropTypes.number.isRequired,
  increase: PropTypes.bool.isRequired
}
