import type { Phone } from '../types/phonesTypes';

const phonesMock: Phone[] = [
  {
    id: '1',
    name: 'iPhone 13 Pro Max',
    brand: 'Apple',
    basePrice: 1099,
    imageUrl: 'https://example.com/iphone13promax.jpg',
  },
  {
    id: '2',
    name: 'Galaxy S21 Ultra',
    brand: 'Samsung',
    basePrice: 1199,
    imageUrl: 'https://example.com/galaxys21ultra.jpg',
  },
  {
    id: '3',
    name: 'Pixel 6 Pro',
    brand: 'Google',
    basePrice: 899,
    imageUrl: 'https://example.com/pixel6pro.jpg',
  },
];

export default phonesMock;
