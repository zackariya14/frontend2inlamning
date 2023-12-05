import React from "react";
import './App.css';

function CountryInfo({country, showInfo, onToggleInfo}){
    return(
        <div className="container">
            <img src={country.flags && country.flags.svg} 
            alt={`${country.name.common} Flagga`}
            style={{cursor: 'pointer'}}
            onClick={onToggleInfo} />
            {showInfo && (
                <div>
                    <p>Land: {country.name.common} </p>
                    <p>Huvudstad: {country.capital} </p>
                    <p>Invånare: {country.population}</p>
                </div>
            )}
        </div>
    )
}
export default CountryInfo