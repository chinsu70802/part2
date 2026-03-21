import { useState,useEffect } from 'react'
import Countries from './components/Countries.jsx'
import Selected from './components/Selected.jsx'
import countryService from './services/countryDir.js'
import axios from 'axios'

const App = () => {
  const [newCountry, setNewCountry] = useState('')
  const [newListCountries, setNewListCountries] = useState([])
  const [newFilteredCountries, setNewFilteredCountries] = useState([])
  const [newDisplayCountry, setNewDisplayCountry] = useState(null)
  const [newMessage, setNewMessage] = useState(null)
  const [newWeather, setNewWeather] = useState(null)

  useEffect(() => {
    countryService
    .getAll()
    .then(response => {
      setNewListCountries(response.data)
    })
    .catch((error) => {
      console.log('Error fetching data!')
    })
  },[])
  
  const filterCountry = (event) => {
    setNewCountry(event.target.value)
    const matches = newListCountries.filter((country) => (event.target.value != '') && (country.name.common.toLowerCase().includes(event.target.value.toLowerCase())))
    if ((matches.length < 10) && (matches.length > 0)) {
      setNewMessage(null)
      setNewFilteredCountries(matches)
    }
    else if (matches.length >= 10){
      setNewMessage('Too many matches, specify another filter')
      setNewFilteredCountries([])
    }
    else {
      setNewMessage(null)
      setNewFilteredCountries([])
    }
  }

  const onShow = (country) => {
    countryService
    .getSpecific(country.name.common)
    .then((response) => {
      setNewDisplayCountry(response.data)
    })
    .catch((error) => {
      console.log('An Error Occured!')
    })

    countryService
    .getWeather(country)
    .then((response) => {
      setNewWeather({
        'temp': response.data.main.temp,
        'icon': response.data.weather[0].icon,
        'desc': response.data.weather[0].description,
        'wind': response.data.wind.speed
      })
    })
    .catch((error) => {
      console.log("An error occured!")
    })
  }

  return (
    <div>
      find countries <input value={newCountry} onChange={filterCountry}/>
      <Countries message={newMessage} countries={newFilteredCountries} onShow={onShow}/>
      <Selected country={newDisplayCountry} weather={newWeather}/>
    </div>
  )
}

export default App
