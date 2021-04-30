import React from 'react';
import './SearchBar.css';

function SearchBar(props) {
  return (
    <form className="searchBar" onSubmit={props.onSubmit}>
      <label htmlFor="searchbar">Search:</label>
      <input
        type="text"
        id="searchbar"
        className="searchInput"
        value={props.searchTerm}
        onChange={(e) => props.updateSearchTerm(e.target.value)}
        required
      />
      <input type="submit" value="Search" />
    </form>
  );
}

export default SearchBar;
