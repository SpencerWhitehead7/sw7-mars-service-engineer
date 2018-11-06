import React from 'react'
import axios from 'axios'

class Map extends React.Component{
  constructor(){
    super()
    this.state = {
      intervalId : 0,
      bots : [],
      nodes : [],
    }
  }

  // LIFECYCLE METHODS START

  componentDidMount = () => {
    const makeCalls = async () => {
      try{
        const bots = await axios.get(`https://headlight-tournament-1.herokuapp.com/bots`)
        const nodes = await axios.get(`https://headlight-tournament-1.herokuapp.com/nodes`)
        this.setState({
          bots : bots.data,
          nodes : nodes.data,
        })
      }catch(err){
        console.log(err)
      }
    }
    const intervalId = setInterval(makeCalls, 10000)
    this.setState(intervalId)
  }

  componentWillUnmount = () => {
    clearInterval(this.state.intervalId)
  }

  // LIFECYCLE METHODS END1

  render(){
    return (
      <div>
        The map
      </div>
    )
  }
}

export default Map
