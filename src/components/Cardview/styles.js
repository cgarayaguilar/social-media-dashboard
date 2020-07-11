import styled from 'styled-components'

export const Container = styled.article`
  background-color: ${({ theme }) => theme.cardBackground};
  border-radius: 3px;
  padding: 24px;
  min-height: 100px;
  transition: all 0.3s;
  &:hover {
    filter: brightness(90%);
    cursor: pointer;
  }
`
export const DimensionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Dimension = styled.h4`
  color: ${({ theme }) => theme.secondaryText};
  font-weight: 700;
  font-size: 12px;
`

export const MetricContainer = styled.div`
  margin-top: 16px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`

export const NumMetric = styled.h3`
  color: ${({ theme }) => theme.primaryText};
  font-weight: 700;
  font-size: 32px;
`
export const Porcentage = styled.div`
  color: ${({ increase, theme }) =>
    increase ? theme.limeGreen : theme.brightRed};
  font-weight: 700;
  font-size: 12px;
  display: flex;
  align-items: center;

  & span {
    margin-left: 4px;
  }
`
