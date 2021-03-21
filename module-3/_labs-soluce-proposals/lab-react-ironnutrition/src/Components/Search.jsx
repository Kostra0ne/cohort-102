import React from 'react';

const Search = (props) => {
  const { searchValue, handleSearch } = props;

  return (
    <input
      className="input mb-5"
      type="text"
      placeholder="Search"
      value={searchValue}
      onChange={(event) => handleSearch(event, event.target.value)}
    />
  );
};

export default Search;
