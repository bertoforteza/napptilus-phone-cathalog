import { useState } from 'react';
import { render, screen, userEvent } from '../../test/test-utils';
import SearchBar from './SearchBar';

describe('Given a SearchBar component', () => {
  describe('When it receives an empty searchText and an onSearchTextChange function as props', () => {
    test("Then it should render an input field with the receivedsearchText as value and the placeholder 'Search for a smartphone...'", () => {
      const searchText = '';
      const expectedPlaceholder = 'Search for a smartphone...';
      const onSearchTextChange = vi.fn();

      render(<SearchBar searchText={searchText} onSearchTextChange={onSearchTextChange} />);

      const inputField = screen.getByRole('textbox');

      expect(inputField).toBeVisible();
      expect(inputField).toHaveValue(searchText);
      expect(inputField).toHaveAttribute('placeholder', expectedPlaceholder);
    });
  });

  describe("When a user types 'iPhone' in the input field", () => {
    test("Then it should call the onSearchTextChange function with 'iPhone' as argument", async () => {
      const SearchBarWrapper = () => {
        const [searchText, setSearchText] = useState('');

        return (
          <SearchBar searchText={searchText} onSearchTextChange={text => setSearchText(text)} />
        );
      };

      render(<SearchBarWrapper />);

      const inputField = screen.getByRole('textbox');
      expect(inputField).toBeVisible();
      expect(inputField).toHaveValue('');
      await userEvent.type(inputField, 'iPhone');

      expect(inputField).toHaveValue('iPhone');
    });
  });

  describe('When the input field has a value and the user clicks the clear button', () => {
    test('Then it should clear the input field and call the onSearchTextChange function with an empty string as argument', async () => {
      const SearchBarWrapper = () => {
        const [searchText, setSearchText] = useState('iPhone');

        return (
          <SearchBar searchText={searchText} onSearchTextChange={text => setSearchText(text)} />
        );
      };

      render(<SearchBarWrapper />);

      const inputField = screen.getByRole('textbox');
      expect(inputField).toBeVisible();
      expect(inputField).toHaveValue('iPhone');

      const clearButton = screen.getByRole('button', { name: 'Clear search input' });
      expect(clearButton).toBeVisible();
      await userEvent.click(clearButton);

      expect(inputField).toHaveValue('');
    });
  });
});
