import './index.css'

import React from 'react'
import ReactDOM from 'react-dom'

import Main from './components'

ReactDOM.render(
  <div id="main-container">
    <h1 id="title">Welcome to the Mars Mining Project!</h1>
    <h3>Bots: Red</h3>
    <h3>Nodes: Blue</h3>
    <h3>Both: Purple</h3>
    <Main/>
  </div>,
  document.getElementById(`root`)
)
