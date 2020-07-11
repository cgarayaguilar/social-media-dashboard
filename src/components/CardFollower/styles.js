import styled from 'styled-components'

export const Container = styled.article`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 3px;
  padding: 24px;
  position: relative;
  transition: all 0.3s;
  &:hover {
    filter: brightness(90%);
    cursor: pointer;
  }
`
export const TopLine = styled.div`
  background: ${({ lineColor }) => lineColor};
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  height: 3px;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
`

export const Figure = styled.div`
  align-items: center;
  display: flex;
  font-size: 12px;
  justify-content: center;
  & img {
    margin-right: 8px;
  }
`

export const UserContainer = styled(Figure)`
  color: ${({ theme }) => theme.secondaryText};
  font-weight: 700;
`

export const NumFollowers = styled.h2`
  color: ${({ theme }) => theme.primaryText};
  font-size: 40px;
  font-weight: 700;
  margin: 8px 8px 0 8px;
  text-align: center;
`

export const Label = styled.p`
  color: ${({ theme }) => theme.secondaryText};
  font-size: 12px;
  letter-spacing: 3px;
  margin: 0 8px 16px 8px;
  text-align: center;
  text-transform: uppercase;
`

export const IncreaseFollowers = styled(Figure)`
  color: ${({ increase, theme }) =>
    increase ? theme.limeGreen : theme.brightRed};
  font-weight: 700;
`
