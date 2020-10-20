import request from 'superagent'

let city = ''

export function getWeather(finalCity) {
  return request
    .get('https://api.openweathermap.org/data/2.5/weather')
    .query({ q: finalCity })
    .query({ appid: '981cdb40f64b3db85d7ff026a5d84c86' })
    .query({ units: 'metric' })
    .then(response => response.body)
}

function getCity(input) {
  city = input
  capitalFirst(city)
}
function capitalFirst(input) {
  return input.charAt(0).toUpperCase() + input.slice(1)
}

