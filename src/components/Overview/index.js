import React, { useContext } from 'react'
import { Cardview } from '../Cardview/index'
import { Container, Wrapper, TitleContainer, Title } from './styles'
import { ThemeContext } from 'styled-components'
import { metrics } from '../../data/metrics'

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
