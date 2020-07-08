import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'
import * as serviceWorker from './serviceWorker'
import { ThemeProvider } from 'styled-components'

const darkTheme = {
  topBackground: 'hsl(232, 19%, 15%)',
  downBackground: 'hsl(230, 17%, 14%)',
  cardBackground: 'hsl(228, 28%, 20%)',
  secondaryText: 'hsl(228, 34%, 66%)',
  primaryText: 'hsl(0, 0%, 100%)',
  limeGreen: 'hsl(163, 72%, 41%)',
  brightRed: 'hsl(356, 69%, 56%)'
}

const lightTheme = {
  topBackground: 'hsl(225, 100%, 98%)',
  downBackground: 'hsl(0, 0%, 100%)',
  cardBackground: 'hsl(227, 47%, 96%)',
  secondaryText: 'hsl(228, 12%, 44%)',
  primaryText: 'hsl(230, 17%, 14%)',
  limeGreen: 'hsl(163, 72%, 41%)',
  brightRed: 'hsl(356, 69%, 56%)'
}

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
