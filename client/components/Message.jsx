import React from 'react'

import data from '../../data/data'

export default class Message extends React.Component {
  render() {
    const condition = this.props.main?.toLowerCase() || 'clear'
    console.log(condition)
    const message = data[condition].message
    const img = data[condition].img
    return (
      <div className='container'>
        <p>{message}</p>
        <img src={`http://openweathermap.org/img/wn/${img}d@2x.png`} alt="" />


      </div>
    )
  }
}
