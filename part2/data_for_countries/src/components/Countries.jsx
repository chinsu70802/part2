const Countries = ({message,countries,onShow}) => {
    if (message === null) {
        if (countries.length > 1) {
            return (
                <div>
                    {countries.map((country) => (
                        <div key = {country.ccn3}>
                        <p key={country.name.common}>{country.name.common}</p>
                        <button key={country.cioc} onClick={() => onShow(country)}>Show</button>
                        </div>
                    ))}
                </div>
            )
        }
        else if (countries.length == 1) {
            return (
                <div>
                    <h1>{countries[0].name.common}</h1>
                    <h2>Capitals</h2>
                    {countries[0].capital.map((capital) => (
                        <p key={capital}>{capital}</p>
                    ))}
                    <p>Area {countries[0].area}</p>
                    <h2>Languages</h2>
                    <ul>
                    {Object.entries(countries[0].languages).map(([key, value]) => (
                        <li key={value}>{value}</li>
                    ))}
                    </ul>
                    <img src={countries[0].flags.png} alt={countries[0].flags.alt} style={{ border: '2px solid black' }}/>

                </div>
            )
        }
        else {
            return null
        }
    }
    else {
        return (
            <div>{message}</div>
        )
    }
}

export default Countries