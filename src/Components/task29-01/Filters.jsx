import React from "react";

const Filters = ({ filters, setFilters }) => {
  return (
    <div className="filters">
      <label>
        Vegetarian
        <select
          value={filters.isVegetarian}
          onChange={(e) => setFilters({ ...filters, isVegetarian: e.target.value === "all" ? null : e.target.value === "true" })}
        >
          <option value="all">All</option>
          <option value="true">Vegetarian</option>
          <option value="false">Non-Vegetarian</option>
        </select>
      </label>
      <label>
        Max Preparation Time (mins)
        <input
          type="number"
          value={filters.maxTime}
          onChange={(e) => setFilters({ ...filters, maxTime: e.target.value })}
        />
      </label>
    </div>
  );
};

export default Filters;
