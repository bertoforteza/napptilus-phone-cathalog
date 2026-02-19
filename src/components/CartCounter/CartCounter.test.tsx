import { BrowserRouter } from 'react-router-dom';
import phoneDetailsMock from '../../mocks/phoneDetailsMock';
import { renderWithMockPhonesProvider, screen } from '../../test/test-utils';
import CartCounter from './CartCounter';
import type { SelectedPhoneDetails } from '../../types/phonesTypes';

describe('Given a CartCounter component', () => {
  describe('When it receives a phonesCart with 2 phones', () => {
    test('Then it should render the number of phones in the cart and the active cart icon', () => {
      const selectedPhoneDetails: SelectedPhoneDetails = {
        ...phoneDetailsMock,
        selectedColor: { ...phoneDetailsMock.colorOptions[0] },
        selectedStorage: { ...phoneDetailsMock.storageOptions[0] },
      };
      const phonesCart = [selectedPhoneDetails];

      renderWithMockPhonesProvider(
        <BrowserRouter>
          <CartCounter />
        </BrowserRouter>,
        { phonesCart }
      );

      const cartCounterButton = screen.getByRole('button', {
        name: /Your cart contains 1 article/i,
      });
      const cartValue = screen.getByText('1');

      expect(cartCounterButton).toBeVisible();
      expect(cartValue).toBeVisible();
    });
  });
});
