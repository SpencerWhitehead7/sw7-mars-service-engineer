import React from 'react'

const Cell = props => {
  const {row, col, bots, nodes} = props
  const hasBot = bots[row] ? Boolean(bots[row][col]) : false
  const hasNode = nodes[row] ? Boolean(nodes[row][col]) : false
  const hasBoth = hasBot && hasNode
  let occupationStatus = ``
  let displayText = ``
  if(hasBoth){
    occupationStatus = ` both`
    displayText = bots[row][col][0].Score
  }else if(hasBot){
    occupationStatus = ` bot`
    displayText = bots[row][col][0].Score
  }else if(hasNode){
    occupationStatus = ` node`
    displayText = nodes[row][col].length > 1 ? nodes[row][col].reduce((acc, curr) => acc.Value + curr.Value) : nodes[row][col][0].Value

    nodes[row][col].reduce((acc, curr) => acc.Value + curr.Value, 0)
  }
  return (
    <div
      className={`cell${occupationStatus}`}
    >
      {displayText}
    </div>
  )
}

export default Cell
