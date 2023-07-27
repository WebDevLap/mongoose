import React from 'react';
import { SearchEl, SearchLogo, SearchInput } from './Search.styled';

export const Search = () => {
  const [searchInput, setSearchInput] = React.useState('');
  const [searchLogoActive, setSearchLogoActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    if (searchInput.length === 0) {
      setSearchLogoActive(false);
    } else {
      setSearchLogoActive(true);
    }
  }, [searchInput]);

  function onSearchLogoClick() {
    setSearchInput('');
  }

  return (
    <SearchEl>
      <SearchInput
        onChange={(e) => setSearchInput(e.target.value)}
        value={searchInput}
        placeholder="Фильтр"
      />
      <SearchLogo active={searchLogoActive} onClick={onSearchLogoClick} />
    </SearchEl>
  );
};
