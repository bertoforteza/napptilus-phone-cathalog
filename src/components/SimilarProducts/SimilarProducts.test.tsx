import phonesMock from '../../mocks/phonesMock';
import { render, screen } from '../../test/test-utils';
import SimilarProducts from './SimilarProducts';

const mockUseNavigate = vi.fn();
vi.mock('react-router-dom', () => ({
  ...vi.importActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Given a SimilarProducts component', () => {
  describe('When it receives a list of phone objects', () => {
    test("Then it should display a list of phones with the phone's brand, name, price and image", () => {
      const products = phonesMock;

      render(<SimilarProducts products={products} />);

      const similarProductsTitle = screen.getByLabelText('Similar items section');
      const phoneCards = screen.getAllByRole('button');

      expect(similarProductsTitle).toBeVisible();
      expect(phoneCards).toHaveLength(products.length);

      products.forEach(product => {
        const phoneCard = screen.getByRole('button', {
          name: `Phone ${product.brand} model ${product.name}, price ${product.basePrice} euros`,
        });
        const brandValue = screen.getByText(product.brand);
        const nameValue = screen.getByText(product.name);
        const priceValue = screen.getByText(`${product.basePrice} EUR`);
        const image = screen.getByAltText(
          `Image of the phone ${product.brand} model ${product.name}`
        );

        expect(phoneCard).toBeVisible();
        expect(brandValue).toBeVisible();
        expect(nameValue).toBeVisible();
        expect(priceValue).toBeVisible();
        expect(image).toBeVisible();
        expect(image).toHaveAttribute('src', product.imageUrl);
      });
    });
  });
});
