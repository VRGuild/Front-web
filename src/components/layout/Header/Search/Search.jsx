import React from 'react';
import { SearchContainer, SearchBox, SearchIcon } from './style';

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon src="../src/assets/svgs/search_button.svg" />
      <SearchBox placeholder="Search..." />
    </SearchContainer>
  );
};

export default Search;
