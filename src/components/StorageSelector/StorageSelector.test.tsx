import { render, screen } from '../../test/test-utils';
import StorageSelector from './StorageSelector';

describe('Given a StorageSelector component', () => {
  describe('When it receives a list of storage options and a selected price', () => {
    test('Then it should render the title and a radio button for each storage option', () => {
      const storageOptions = [
        { capacity: '64GB', price: 699 },
        { capacity: '128GB', price: 799 },
        { capacity: '256GB', price: 899 },
      ];
      const selectedPrice = 799;
      const setSelectedPrice = vi.fn();

      render(
        <StorageSelector
          storageOptions={storageOptions}
          selectedPrice={selectedPrice}
          setSelectedPrice={setSelectedPrice}
        />
      );

      const title = screen.getByText('Storage ¿How much space do you need?');
      expect(title).toBeVisible();
      const radioGroup = screen.getByRole('radiogroup');
      expect(radioGroup).toBeVisible();

      storageOptions.forEach(option => {
        const radioButton = screen.getByRole('radio', { name: option.capacity });
        expect(radioButton).toHaveAttribute('value', option.price.toString());
        if (option.price === selectedPrice) {
          expect(radioButton).toBeChecked();
        } else {
          expect(radioButton).not.toBeChecked();
        }
      });
    });
  });
});
