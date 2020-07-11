import Styled from 'styled-components'

export const Container = Styled.article`
    background-color: ${({ theme }) => theme.cardBackground};
    border-radius: 3px;
    padding: 24px;
    position: relative;
    transition: all .3s;
    &:hover {
      filter: brightness(90%);
      cursor: pointer;
    }
  `
export const TopLine = Styled.div`
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
      position: absolute;
      top:0;
      left:0;
      right: 0;
      height: 3px;
      background: ${({ lineColor }) => lineColor};
  `

export const Figure = Styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    & img{
      margin-right: 8px;
    }
  `
export const UserContainer = Styled(Figure)`
    color: ${({ theme }) => theme.secondaryText};
    font-weight: 700;
`

export const NumFollowers = Styled.h2`
    color: ${({ theme }) => theme.primaryText};
    font-weight: 700;
    text-align: center;
    margin: 8px;
    font-size: 40px;
`

export const Label = Styled.p`
    color: ${({ theme }) => theme.secondaryText};
    text-align: center;
    margin: 8px;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 3px;
`

export const IncreaseFollowers = Styled(Figure)`
    color: ${({ increase, theme }) =>
      increase ? theme.limeGreen : theme.brightRed};
    font-weight: 700;
`
