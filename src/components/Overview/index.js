import React, { useContext } from 'react'
import { metrics } from '../../data/metrics'
import { Container, Wrapper, TitleContainer, Title } from './styles'
import { ThemeContext } from 'styled-components'
import { Cardview } from '../Cardview/index'

export const Overview = () => {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <TitleContainer theme={theme}>
        <Title theme={theme}>Overview - Today</Title>
      </TitleContainer>
      <Wrapper>
        {metrics.map((metric, index) => (
          <Cardview key={index} {...metric} />
        ))}
      </Wrapper>
    </Container>
  )
}
