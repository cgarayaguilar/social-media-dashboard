import styled from 'styled-components'

export const Container = styled.section`
  align-items: center;
  background: ${({ theme }) => theme.topBackground};
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 16px;
  max-width: 100vw;
`

export const TitleContainer = styled.div`
  grid-area: 'title-container';
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.secondaryText};

  @media (min-width: 768px) {
    border: none;
  }
`

export const Title = styled.div`
  color: ${({ theme }) => theme.primaryText};
  font-size: 24px;
  font-weight: 700;
`
export const SubTitle = styled.div`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 14px;
  font-weight: 400;
`

export const ToggleContainer = styled.div`
  grid-area: 'toggle-container';
`
export const Wrapper = styled.div`
  align-items: center;
  display: grid;
  grid-gap: 16px;
  grid-template-columns: 1fr;
  max-width: 1440px;
  width: 100%;
  grid-template-areas:
    'title-container'
    'toogle-button';

  @media (min-width: 768px) {
    grid-template-areas: 'title-container toogle-button';
    grid-template-columns: 1fr 120px;
  }
`
