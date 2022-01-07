import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetails = () => {
    const [country, setCountry] = useState({});
    const {countryName} = useParams();

    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(res => res.json())
        .then(data => setCountry(data[0]))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    const {flags} = country;
    console.log(flags)
    return (
        <div className="container mt-4">
            <div className="row">
                <div className="col-md-3">
                    {/* <img src={flags.png} alt="" className="w-100" /> */}
                </div>
               <div className="col-md-6">
               <h1>{countryName}</h1>
               </div>
            </div>
        </div>
    );
};

export default CountryDetails;