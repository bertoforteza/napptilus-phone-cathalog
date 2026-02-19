import { BrowserRouter } from 'react-router-dom';
import phoneDetailsMock from '../../mocks/phoneDetailsMock';
import { renderWithMockPhonesProvider, screen } from '../../test/test-utils';
import CartCounter from './CartCounter';

describe('Given a CartCounter component', () => {
  describe('When it receives a phonesCart with 2 phones', () => {
    test('Then it should render the number of phones in the cart and the active cart icon', () => {
      const phonesCart = [phoneDetailsMock];

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
