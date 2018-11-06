import React from 'react'

import Map from './Map'

const Main = () => (
  <div id="main-container">
    <h1 id="title">Welcome to the Mars Mining Project!</h1>
    <div id="legend">
      <span id="legend-bots">Bots: Red</span>
      <span id="legend-nodes">Nodes: Blue</span>
      <span id="legend-bot-on-node">Bot-on-Node: Purple</span>
    </div>
    <Map/>
  </div>
)

export default Main
