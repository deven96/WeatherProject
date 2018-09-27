import React from 'react';
import { Text, View, Animated } from 'react-native';
import { Appstyle } from './styles/main.js';
import { API_KEY } from './utils/key.js'
import Weather from './components/Weather.js';
import { weathermap } from './utils/WeatherConditions.js'

export default class App extends React.Component {
    state = {
      isLoading : true,
      temperature: 0,
      weatherCondition: null,
      error: null
    };

randomCoords = () => {
  return {
    longitude : Math.floor(Math.random() * (180 - (-180) + 1)) + (-180),
    latitude : Math.floor(Math.random() * (90 - (-90) + 1)) + (-90)
  } 
}

//mount sequence
componentDidMount() {
  //get true coordinates
  this.watchID = navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position.coords);
      this.fetchWeather(position.coords.latitude, position.coords.longitude);
    },
    (error) => this.setState({ error: error.message }),
  );
  //get random coordinates
  // coords = this.randomCoords()
  // this.fetchWeather(coords.latitude, coords.longitude)
}

fetchWeather = async (lat , lon) => {
  const response = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
  )
  const json_object  = await response.json()
  this.setState({
        temperature: json_object.main.temp,
        weatherCondition: json_object.weather[0].main,
        isLoading: false
    });
}
  

  render() {
    app = {...weathermap[this.state.weatherCondition]}
    style_array = [Appstyle.container, {backgroundColor: app.color}]
    return (
      this.state.isLoading ? (
      <View style={Appstyle.container}>
        <Text>Fetching The Weather</Text>
      </View>
      )
        : 
        <View style={style_array}>
        <View>
          <Weather weather={this.state.weatherCondition} 
                  temperature={this.state.temperature}/>
        </View>
      </View>
    );
  }
}
