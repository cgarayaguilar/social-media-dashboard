import React, { useContext } from 'react'
import { CardFollower } from '../CardFollower'
import { followers } from '../../data/followers'
import { Container, Wrapper } from './styles'
import { ThemeContext } from 'styled-components'

export const ListOfFollowers = () => {
  const theme = useContext(ThemeContext)

  return (
    <Container theme={theme}>
      <Wrapper>
        {followers.map((follower, index) => (
          <CardFollower key={index} {...follower} />
        ))}
      </Wrapper>
    </Container>
  )
}
