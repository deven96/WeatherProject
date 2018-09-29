import React from 'react';
import { Text, View } from 'react-native';
import Expo from 'expo';

import Weather from './components/Weather.js';
import { Appstyle } from './styles/main.js';
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


getLocationPermissionAsync = async () => {
  let {status} = await Expo.Permissions.askAsync(Expo.Permissions.LOCATION)
  if (status !== 'granted'){
    console.error("Location Error not granted");
    return;
  }
}


//mount sequence
async componentDidMount() {

  //check if permission exists , else ask
  // this.getLocationPermissionAsync()

  //get true coordinates
  // navigator.geolocation.getCurrentPosition(
  //   async (position) => {
  //     let result  = await fetchWeatherAsync(position.coords.latitude, position.coords.longitude);

  //     this.setState({
  //       isLoading: result.isLoading,
  //       temperature: result.temperature,
  //       weatherCondition: result.weatherCondition})
  //   },
  //   (error) => this.setState({ error: error.message }),
  // );
  //get random coordinates
  coords = this.randomCoords()
  const result = await fetchWeatherAsync(coords.latitude, coords.longitude)
      this.setState({
        isLoading: result.isLoading,
        temperature: result.temperature,
        weatherCondition: result.weatherCondition})
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
