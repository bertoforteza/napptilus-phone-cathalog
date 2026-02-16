import { render, screen, userEvent, waitFor } from '../../test/test-utils';
import PhoneListPage from './PhoneListPage';

describe('Given a PhoneListPage component', () => {
  describe("When it's rendered", () => {
    test('Then it should render a SearchBar component, a text with the number of results and a list of phone cards', async () => {
      render(<PhoneListPage />);

      const searchBar = screen.getByRole('textbox');
      const resultsCount = screen.getByLabelText(/Number of results:/i);
      const phoneList = await screen.findByRole('list');

      expect(searchBar).toBeVisible();
      expect(resultsCount).toBeVisible();
      expect(phoneList).toBeVisible();
    });
  });

  describe('When it receives a search text in the SearchBar component', () => {
    test('Then it should update the number of results and the list of phone cards', async () => {
      render(<PhoneListPage />);

      const searchBar = screen.getByRole('textbox');
      const resultsCount = await screen.findByLabelText(/Number of results:/i);

      expect(resultsCount).toHaveAccessibleName('Number of results: 3');

      searchBar.focus();
      await userEvent.type(searchBar, 'iPhone');

      await waitFor(() => expect(resultsCount).toHaveAccessibleName('Number of results: 1'), {
        timeout: 600,
      });
    });
  });
});
