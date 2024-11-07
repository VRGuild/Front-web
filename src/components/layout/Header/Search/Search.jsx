import React from 'react';
import { SearchContainer, SearchBox, SearchIcon } from './style';
import searchIcon from '../../../../assets/svgs/search_button.svg';

const Search = () => {
  return (
    <SearchContainer>
      <SearchIcon src={searchIcon} />
      <SearchBox placeholder="Search..." />
    </SearchContainer>
  );
};

export default Search;
