import axios from 'axios'
const baseUrl = 'https://studies.cs.helsinki.fi/restcountries'
const weatherBaseUrl = 'https://api.openweathermap.org/data/2.5'

const getAll = () => {
    return axios
           .get(`${baseUrl}/api/all`)
}

const getSpecific = (country) => {
    return axios
           .get(`${baseUrl}/api/name/${country}`)
}

const getWeather = (country) => {
    const api_key = import.meta.env.VITE_WEATHER_API_KEY
    return axios
           .get(`${weatherBaseUrl}/weather?lat=${country.latlng[0]}&lon=${country.latlng[1]}&units=metric&appid=${api_key}`)
}

export default {
                getAll,
                getSpecific,
                getWeather}