import React from 'react';
import { Text, View, Animated } from 'react-native';
import { Appstyle } from './styles/main.js';
import { API_KEY } from './utils/key.js'
import Weather from './components/Weather.js'

export default class App extends React.Component {
  constructor (props){
    super(props);
    this.state = {
      isLoading : true,
      temperature: 0,
      weatherCondition: null,
      error: null
    };
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => {
        console.debug(position);
        this.fetchWeather(position.coords.latitude, position.coords.longitude);
      },
      error => {
        this.setState({
          error: 'Error Getting Weather Condtions'
        });
      },
    );
}

fetchWeather(lat , lon) {
  fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
  )
    .then(res => res.json())
    .then(json => {
      this.setState({
        temperature: json.main.temp,
        weatherCondition: json.weather[0].main,
        isLoading: false
      });
    });
}
  

  render() {
    return (
      <View style={Appstyle.container}>
      {this.state.isLoading ? (<Text>Fetching The Weather</Text>)
        : <View>
          <Weather weather={weatherCondition} temperature={temperature}/>
        </View>}
      </View>
    );
  }
}
