import React from "react";

function ContinentSelect({ onSelectContinent }) {
  const continents = ['Africa', 'Asia', 'Europe'];

  const handleContinentChange = (event) => {
    const selectedContinent = event.target.value;
    onSelectContinent(selectedContinent);
  };

  return (
    <div>
      <label htmlFor="continent"> Välj ett kontinent: </label>
      <select id="continent" onChange={handleContinentChange}>
        <option value="">Välj</option>
        {continents.map((continent) => (
          <option key={continent} value={continent}>
            {continent}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ContinentSelect;
