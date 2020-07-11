import PropTypes from 'prop-types'
import React, { useContext } from 'react'
import iconDown from '../../images/icon-down.svg'
import iconUp from '../../images/icon-up.svg'
import { Container } from './styles'
import { ThemeContext } from 'styled-components'
import { kFormatter } from '../../helpers/kFormatter'
import {
  Dimension,
  DimensionContainer,
  MetricContainer,
  NumMetric,
  Porcentage
} from './styles'

export const Cardview = ({
  dimension,
  icon,
  increase,
  metric,
  porcentageComparison
}) => {
  const theme = useContext(ThemeContext)
  const arrowIcon = increase ? iconUp : iconDown

  return (
    <Container theme={theme}>
      <DimensionContainer theme={theme}>
        <Dimension theme={theme}>{dimension}</Dimension>
        <img src={icon} alt='social icon' />
      </DimensionContainer>

      <MetricContainer>
        <NumMetric theme={theme}>{kFormatter(metric)}</NumMetric>
        <Porcentage increase={increase} theme={theme}>
          <img src={arrowIcon} alt='arrow icon' />
          <span>{porcentageComparison}</span>
        </Porcentage>
      </MetricContainer>
    </Container>
  )
}

Cardview.propTypes = {
  dimension: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  increase: PropTypes.bool.isRequired,
  metric: PropTypes.number.isRequired,
  porcentageComparison: PropTypes.string.isRequired
}
