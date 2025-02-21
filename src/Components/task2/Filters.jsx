import React from 'react';

function Filters({ filterOptions, setFilterOptions }) {
  const handleTypeChange = (e) => {
    setFilterOptions(prev => ({ ...prev, type: e.target.value }));
  };

  const handlePrepTimeChange = (e) => {
    setFilterOptions(prev => ({ ...prev, prepTime: e.target.value }));
  };

  return (
    <div className="filter-bar">
      <select value={filterOptions.type} onChange={handleTypeChange}>
        <option value="">All Types</option>
        <option value="veg-materials">Veg Items</option>
        <option value="nonveg-materials">Non-Veg Items</option>
        <option value="Deserts & Waffels">Deserts & Waffels</option>
        <option value="Icecreams">Ice-Creams</option>
      </select>
      
      <select value={filterOptions.prepTime} onChange={handlePrepTimeChange}>
        <option value="">All Times</option>
        <option value="20">Under 20 minutes</option>
        <option value="30">Under 30 minutes</option>
        <option value="50">Under 50 minutes</option>
        <option value="60">Under 1 hour</option>
      </select>
    </div>
  );
}

export default Filters;
