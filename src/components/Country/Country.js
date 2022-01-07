import React, { useEffect, useState } from 'react';
import SingleCountry from './SingleCountry/SingleCountry';

const Country = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <div className='container'>
            <h1>This is country</h1>
            {
                countries.map(country => <SingleCountry key={country.name} country={country}></SingleCountry>)
            }
            
        </div>
    );
};

export default Country;