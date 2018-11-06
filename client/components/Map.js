import React from 'react'
import axios from 'axios'
import shortid from 'shortid'

import Row from './Row'

class Map extends React.Component{
  constructor(){
    super()
    this.state = {
      intervalId : 0,
      bots : {},
      nodes : {},
    }
  }

  // CONSTANTS START

  ROWS = 20

  COLUMNS = 20

  // CONSTANTS END

  // LIFECYCLE METHODS START

  componentDidMount = () => {
    const makeCalls = async () => {
      const processApiData = apiData => {
        const newStateField = {}
        apiData.forEach(item => {
          const row = item.Location.Y
          const col = item.Location.X
          if(newStateField[row]){
            if(newStateField[row][col]){
              newStateField[row][col].push(item)
            }else{
              newStateField[row][col] = [item]
            }
          }else{
            newStateField[row] = {[col] : [item]}
          }
        })
        return newStateField
      }

      try{
        const botsRes = await axios.get(`https://headlight-tournament-3.herokuapp.com/bots`)
        const nodesRes = await axios.get(`https://headlight-tournament-3.herokuapp.com/nodes`)
        const botsData = botsRes.data.Bots
        const nodesData = nodesRes.data.Nodes
        const bots = processApiData(botsData)
        const nodes = processApiData(nodesData)
        this.setState({bots, nodes})
      }catch(err){
        console.log(err)
      }
    }
    const intervalId = setInterval(makeCalls, 1000)
    this.setState({intervalId})
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId)
  }

  // LIFECYCLE METHODS END1

  render(){
    const rows = new Array(this.ROWS).fill(0)
    const {bots, nodes} = this.state
    // console.log(bots)
    // console.log(nodes)
    return (
      <div id="map">
        {
          rows.map((_, i) => (
            <Row
              COLUMNS={this.COLUMNS}
              row={i}
              bots={bots}
              nodes={nodes}
              key={shortid.generate()}
            />
          ))
        }
      </div>
    )
  }
}

export default Map
