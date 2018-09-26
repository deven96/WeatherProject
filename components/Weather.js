import React from 'react';
import { Text, View } from 'react-native';
import {Weatherstyle} from '../styles/main.js';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import PropTypes from 'prop-types'
import { weathermap } from '../utils/WeatherConditions.js'


const Weather = ( { weather, temperature }) => {
    return (
        <View style={[Weatherstyle.weatherContainer, 
                        {backgroundColor: weathermap[weather].color}
                    ]}>
            <View style={Weatherstyle.headerContainer}>
                <MaterialCommunityIcons size={48} 
                                        color={'#fff'}
                                        name={weathermap[weather].icon}/>
                <Text style={Weatherstyle.tempText}>{temperature}°</Text>
            </View>
            <View style={Weatherstyle.bodyContainer}>
                <Text style={Weatherstyle.title}>{weather}</Text>
                <Text style={Weatherstyle.subtitle}>{weathermap[weather].subtitle}</Text>
            </View>
        </View>
    );
};

//proptypes 
Weather.propTypes = {
    temperature: PropTypes.number.isRequired,
    weather: PropTypes.string,
}



export default Weather;