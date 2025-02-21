import React from 'react';

function FilterSort({ setCategory, setPriceRange, setSortOrder, category, priceRange }) {
  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handlePriceChange = (e) => {
    const value = e.target.value.split(',').map(Number);
    setPriceRange(value);
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div className="filter-sort">
      <select onChange={handleCategoryChange} value={category}>
        <option value="">All Categories</option>
        <option value="Electronics">Electronics</option>
        <option value="Clothing">Clothing</option>
        <option value="Books">Books</option>

      </select>

      <input
        type="text"
        placeholder="Price Range (min,max)"
        value={priceRange.join(',')}
        onChange={handlePriceChange}
      />

      <select onChange={handleSortChange}>
        <option value="">Sort by</option>
        <option value="name">Name</option>
        <option value="price">Price</option>
      </select>
    </div>
  );
}

export default FilterSort;
