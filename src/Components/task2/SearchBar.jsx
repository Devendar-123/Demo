import React from 'react';

function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search recipes..."
      className='search-bar'
    />
  );
}

export default SearchBar;
