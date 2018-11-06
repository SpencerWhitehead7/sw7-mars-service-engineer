import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import Main from './components'

ReactDOM.render(
  <div id="main-container">
    <h1 id="title">Welcome to the Mars Mining Project!</h1>
    <Main/>
  </div>,
  document.getElementById(`root`)
)
