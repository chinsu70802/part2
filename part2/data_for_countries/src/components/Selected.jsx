const Selected = ({country,weather}) => {
    if (country != null) {
            return (
                    <div>
                        <h1>{country.name.common}</h1>
                        <h2>Capitals</h2>
                        {country.capital.map((capital) => (
                            <p key={capital}>{capital}</p>
                        ))}
                        <p>Area {country.area}</p>
                        <h2>Languages</h2>
                        <ul>
                        {Object.entries(country.languages).map(([key, value]) => (
                            <li key={value}>{value}</li>
                        ))}
                        </ul>
                        <img src={country.flags.png} alt={country.flags.alt} style={{ border: '2px solid black' }}/>
                        <h2>Weather in {country.name.common}</h2>
                        <p>Temperature : {weather.temp}</p>
                        <img src={`https://openweathermap.org/payload/api/media/file/${weather.icon}.png`} alt={weather.desc}/>
                        <p>Wind : {weather.wind}</p>

                    </div>
                )
    }
    else {
        return null
    }

}

export default Selected