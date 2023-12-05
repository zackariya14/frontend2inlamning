import './App.css';
import { useState, useEffect } from 'react';
import ContinentSelect from './Continentselect.jsx';
import CountryInfo from './countryinfo.jsx';

function App() {
  const [selectedContinent, setSelectedContinent] = useState('');
  const [countries, setCountries] = useState([]);
  const [showCountryInfo, setShowCountryInfo] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    if (selectedContinent) {
      fetch(`https://restcountries.com/v3.1/region/${selectedContinent}`)
        .then((res) => res.json())
        .then((data) => setCountries(data));
        console.log((selectedContinent)+ " "  + 'visas nu!' )
    }
  }, [selectedContinent]);

  const handleContinentSelect = (continent) => {
    setSelectedContinent(continent);
    setCountries([]);
    setShowCountryInfo(false);
  };

  const handleToggleInfo = (country) => {
    setShowCountryInfo(!showCountryInfo);
    setSelectedCountry(country);
  };

  return (
    <div className="App">
      <ContinentSelect onSelectContinent={handleContinentSelect} />
      <div className='flag-grid'>
        {countries.map((country) => (
          <CountryInfo
          style={{cursor: 'pointer'}}
          key={country.cca2}
            country={country}
            showInfo={showCountryInfo && selectedCountry === country}
            onToggleInfo={() => handleToggleInfo(country)}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
