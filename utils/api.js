import { API_KEY } from './key.js';

export const fetchWeatherAsync = async (lat , lon) => {
  try {
    let response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
    )
    let json_object  = await response.json()
    let  result = {
        temperature: json_object.main.temp,
        weatherCondition: json_object.weather[0].main,
        isLoading: false}
      return result;
} 
catch(error){
  return error
}
}
