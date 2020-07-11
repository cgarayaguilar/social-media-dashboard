import PropTypes from 'prop-types'
import React from 'react'
import iconDown from '../../images/icon-down.svg'
import iconUp from '../../images/icon-up.svg'
import { ThemeContext } from 'styled-components'
import { kFormatter } from '../../helpers/kFormatter'
import { useContext } from 'react'
import {
  Container,
  Figure,
  IncreaseFollowers,
  Label,
  NumFollowers,
  TopLine,
  UserContainer
} from './styles'

export const CardFollower = ({
  icon,
  increase,
  label,
  lineColor,
  numComparison,
  numFollowers,
  username
}) => {
  const arrowIcon = increase ? iconUp : iconDown
  const theme = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <TopLine lineColor={lineColor} />
      <UserContainer theme={theme}>
        <img src={icon} alt='social icon' />
        <span>{username}</span>
      </UserContainer>

      <NumFollowers theme={theme}>{kFormatter(numFollowers)}</NumFollowers>

      <Label theme={theme}>{label}</Label>

      <Figure>
        <IncreaseFollowers increase={increase} theme={theme}>
          <img src={arrowIcon} alt='arrow icon' />
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
