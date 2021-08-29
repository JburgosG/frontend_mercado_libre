import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App'
import { GlobalStyle } from './styles'

ReactDOM.render((
  <div>
    <GlobalStyle />
    <App />
  </div>
), document.getElementById('app'))
