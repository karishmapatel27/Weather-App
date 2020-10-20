import React from 'react'
import Message from './Message'
import { getWeather } from '../api'

class WeatherApi extends React.Component {
  state = {
    name: '',
    weather: [],
    main: null,
    wind: null,
    input: ''
  }

  handleChange = (event) => {
    const { name, value } = event.target
    this.setState({
      [name]: value
    })
  }

  capitalFirst = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1)
  }

  handleClick = () => {
    console.log(this.state.input)

    const input = this.state.input

    let finalCity = this.capitalFirst(input)
    console.log(finalCity)
    getWeather(finalCity)
      .then(wth => {
        console.log(wth.weather)
        this.setState({
          name: wth.name,
          weather: wth.weather,
          main: wth.main,
          wind: wth.wind,
          input: ''
        })
      })
  }

  render() {
    const { weather, main, wind, name } = this.state
    return (
      <>
        <div id="div1">
          <h1 id="title">City Weather</h1>
          <h3>Search: <input id="input" name='input'
            value={this.state.input}
            onChange={this.handleChange} />
            <button id="button" onClick={this.handleClick}><span>Show me the Weather</span></button></h3> </div>
        <div id="div2">

          <h2> {this.state.name} </h2>
          <h3>
            How does it look outside? {weather[0]?.description}
          </h3>

          <h3>
            Temperature: {main?.temp}
          </h3>
          <h3>
            Wind Speed & Direction: {wind?.deg} degrees {wind?.speed}m/s
      </h3>

        </div>
      </>
    )
  }
}

export default WeatherApi

/* // < Message main = { weather[0]?.main } />  */