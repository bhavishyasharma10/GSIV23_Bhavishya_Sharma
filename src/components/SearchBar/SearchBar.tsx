import React from 'react';
import './SearchBar.scss';

interface SearchBarProps {
  search?: string;
  setSearch?: (search: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ search, setSearch }) => {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch && setSearch(e.target.value)}
      />
    </div>
  );
}

SearchBar.displayName = 'SearchBar';

export default SearchBar;
