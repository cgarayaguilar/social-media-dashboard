import styled from 'styled-components'

export const Container = styled.section`
  background: ${({ theme }) => theme.downBackground};
  display: flex;
  justify-content: center;
  max-width: 100vw;
  padding: 16px;
  width: 100%;
`

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  justify-content: center;
  align-items: start;
  margin-top: -40px;
  max-width: 1440px;
  width: 100%;

  @media (min-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
  }
`
