import React from "react";

function Search({ searchTerm, onSearchChange }) {
  return (
    <input
      type="text"
      placeholder="Search plants"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
    />
  );
}

export default Search;
