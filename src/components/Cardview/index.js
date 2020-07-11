import React, { useContext } from 'react'
import { Container } from './styles'
import { ThemeContext } from 'styled-components'
import PropTypes from 'prop-types'
import { kFormatter } from '../../helpers/kFormatter'
import iconDown from '../../images/icon-down.svg'
import iconUp from '../../images/icon-up.svg'
import {
  DimensionContainer,
  Dimension,
  MetricContainer,
  NumMetric,
  Porcentage
} from './styles'

export const Cardview = ({
  icon,
  dimension,
  metric,
  porcentageComparison,
  increase
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
  icon: PropTypes.string.isRequired,
  dimension: PropTypes.string.isRequired,
  metric: PropTypes.number.isRequired,
  porcentageComparison: PropTypes.string.isRequired,
  increase: PropTypes.bool.isRequired
}
