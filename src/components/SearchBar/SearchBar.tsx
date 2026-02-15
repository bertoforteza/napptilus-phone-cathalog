import { useEffect, useState } from 'react';
import useDebounce from '../../hooks/useDebounce/useDebounce';
import SearchBarStyled from './SearchBarStyled';
import ClearIcon from '../../assets/svg/clear-icon.svg';

interface SearchBarProps {
  searchText: string;
  onSearchTextChange: (text: string) => void;
  placeholder?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchText, onSearchTextChange, placeholder }) => {
  const [inputValue, setInputValue] = useState<string>(searchText);

  const debouncedSearchText = useDebounce(inputValue, 300);

  useEffect(() => {
    onSearchTextChange(debouncedSearchText);
  }, [debouncedSearchText]);

  return (
    <SearchBarStyled className="search-bar">
      <input
        type="text"
        placeholder={placeholder ?? 'Search for a smartphone...'}
        value={inputValue}
        onChange={event => setInputValue(event.target.value)}
        className="search-bar__field"
      />

      {inputValue && (
        <button
          className="clear-button"
          onClick={() => {
            setInputValue('');
            onSearchTextChange('');
          }}
          aria-label="Clear search input"
        >
          <ClearIcon className="clear-button__icon" />
        </button>
      )}
    </SearchBarStyled>
  );
};

export default SearchBar;
