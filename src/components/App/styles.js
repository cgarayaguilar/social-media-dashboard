import styled from 'styled-components'

export const Container = styled.section`
  background: ${({ theme }) => theme.downBackground};
  display: grid;
  grid-template-rows: 200px min-content min-content;
  min-height: 100vh;
  min-width: 200px;
`
