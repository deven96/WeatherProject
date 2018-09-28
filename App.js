import React from 'react';
import { Text, View, Animated } from 'react-native';
import { Appstyle } from './styles/main.js';
import Weather from './components/Weather.js';
import { weathermap } from './utils/WeatherConditions.js';
import { fetchWeatherAsync } from './utils/api.js'

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
      const result  = await fetchWeatherAsync(position.coords.latitude, position.coords.longitude);
      this.setState({result})
    },
    (error) => this.setState({ error: error.message }),
  );
  //get random coordinates
  // coords = this.randomCoords()
  // this.fetchWeather(coords.latitude, coords.longitude)
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
