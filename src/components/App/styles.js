import Styled from 'styled-components'

export const Container = Styled.section`
  display: grid;
  grid-template-rows: 200px 1fr;
  height: 100vh;
`

export const ContainerTop = Styled.section`
    background: ${({ theme }) => theme.topBackground};
    width: 100%;
`

export const ContainerDown = Styled.section`
    background: ${({ theme }) => theme.downBackground};
    width: 100%;
`
