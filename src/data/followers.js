import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'
import instagram from '../images/icon-instagram.svg'
import youtube from '../images/icon-youtube.svg'

export const followers = [
  {
    icon: facebook,
    lineColor: 'hsl(208, 92%, 53%)',
    username: '@nathanf',
    numFollowers: 1987,
    label: 'Followers',
    numComparison: 12,
    increase: true
  },
  {
    icon: twitter,
    lineColor: 'hsl(203, 89%, 53%)',
    username: '@nathanf',
    numFollowers: 1044,
    label: 'Followers',
    numComparison: 99,
    increase: true
  },
  {
    icon: instagram,
    lineColor:
      'linear-gradient(90deg, rgba(253,196,104,1) 0%, rgba(223,73,150,1) 70%)',
    username: '@realnathanf',
    numFollowers: 11000,
    label: 'Followers',
    numComparison: 1099,
    increase: true
  },
  {
    icon: youtube,
    lineColor: 'hsl(348, 97%, 39%)',
    username: 'Nathan F.',
    numFollowers: 8239,
    label: 'Subscribers',
    numComparison: 144,
    increase: false
  }
]
