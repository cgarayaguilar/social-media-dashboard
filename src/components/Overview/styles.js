import styled from 'styled-components'

export const Container = styled.section`
  padding: 16px;
  max-width: 100vw;
  width: 100%;
`

export const TitleContainer = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0;
  margin: 16px auto;
`

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  max-width: 1440px;
  width: 100%;
  align-items: start;
  margin: 16px auto;

  @media (min-width: 1080px) {
    grid-template-columns: repeat(4, 1fr);
  }
`

export const Title = styled.div`
  color: ${({ theme }) => theme.primaryText};
  font-size: 24px;
  font-weight: 700;
`
