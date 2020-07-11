import * as serviceWorker from './serviceWorker'
import Context from './helpers/Context'
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './components/App'

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider>
      <App />
    </Context.Provider>
  </React.StrictMode>,
  document.getElementById('root')
)

serviceWorker.unregister()
