import React from 'react'
import shortid from 'shortid'

import Cell from './Cell'

const Row = props => {
  const {COLUMNS, row, bots, nodes} = props
  const columns = new Array(COLUMNS).fill(0)
  return (
    <div className="row">
      {
        columns.map((_, i) => (
          <Cell
            row={row}
            col={i}
            bots={bots}
            nodes={nodes}
            key={shortid.generate()}
          />
        ))
      }
    </div>
  )
}

export default Row
