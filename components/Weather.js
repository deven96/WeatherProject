import React from 'react';
import { Text, View } from 'react-native';
import {Weatherstyle} from '../styles/main.js';
import {MaterialCommunityIcons} from '@expo/vector-icons';


const Weather = ( { weather, temperature }) => {
    return (
        <View style={Weatherstyle.weatherContainer}>
            <View style={Weatherstyle.headerContainer}>
                <MaterialCommunityIcons size={48} color={'#fff'} name='weather-sunny'/>
                <Text style={Weatherstyle.tempText}>{temperature}</Text>
            </View>
            <View style={Weatherstyle.bodyContainer}>
                <Text style={Weatherstyle.title}>{weather}</Text>
                <Text style={Weatherstyle.subtitle}>It hurts my eyes</Text>
            </View>
        </View>
    );
};




export default Weather;