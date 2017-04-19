import React from 'react';

import './SearchBar.css';

const SearchBar = ({ isOpen, onClick, additionalStyles }) => {
  let inputClass = isOpen ? "isOpen" : "isClosed"
  return (
  <div className={"searchBar searchBar-" + inputClass}>
    <i className={"fa fa-search fa-lg searchBar-icon searchBar-icon-" + inputClass} onClick={() => onClick()} style={additionalStyles}></i>
    <input
      type="text"
      className={"searchBar-input searchBar-input-" + inputClass}
      placeholder="Search"
      id="search-input"
      style={additionalStyles}
      />
  </div>
)};

SearchBar.propTypes = {

};

export default SearchBar
