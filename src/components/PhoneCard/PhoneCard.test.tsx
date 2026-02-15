import phoneMock from '../../mocks/phoneMock';
import { render } from '../../test/test-utils';
import PhoneCard from './PhoneCard';
import { screen } from '@testing-library/react';

describe('Given a PhoneCard component', () => {
  describe('When it receives a phone object as prop', () => {
    test("Then it should render the phone's brand, name, price and image", () => {
      const phone = phoneMock;

      render(<PhoneCard phone={phone} />);

      const phoneCard = screen.getByRole('button', {
        name: `Phone ${phone.brand} model ${phone.name}, price ${phone.basePrice} euros`,
      });
      const brandValue = screen.getByText(phone.brand);
      const nameValue = screen.getByText(phone.name);
      const priceValue = screen.getByText(`${phone.basePrice} EUR`);
      const image = screen.getByAltText(`Image of the phone ${phone.brand} model ${phone.name}`);

      expect(phoneCard).toBeVisible();
      expect(brandValue).toBeVisible();
      expect(nameValue).toBeVisible();
      expect(priceValue).toBeVisible();
      expect(image).toBeVisible();
      expect(image).toHaveAttribute('src', phone.imageUrl);
    });
  });
});
