import React from 'react'
import { CardFollower } from '../CardFollower'
import { followers } from '../../data/followers'
import { Container } from './styles'

export const ListOfFollowers = () => {
  return (
    <Container>
      {followers.map((follower, index) => (
        <CardFollower key={index} {...follower} />
      ))}
    </Container>
  )
}
