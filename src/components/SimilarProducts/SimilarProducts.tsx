import { useNavigate } from 'react-router-dom';
import type { Phone } from '../../types/phonesTypes';
import SimilarProductsStyled from './SimilarProductsStyled';
import PhoneCard from '../PhoneCard/PhoneCard';

interface SimilarProductsProps {
  products: Phone[];
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ products }) => {
  const navigate = useNavigate();

  const handleProductClick = (phone: Phone) => {
    navigate(`/phone/${phone.id}`);
  };

  return (
    <SimilarProductsStyled>
      <span className="similar-products__title" aria-label="Similar items section">
        Similar items
      </span>

      <ul className="similar-products__list">
        {products.map(product => (
          <li
            key={product.id}
            className="similar-products__item"
            onClick={() => handleProductClick(product)}
          >
            <PhoneCard phone={product} />
          </li>
        ))}
      </ul>
    </SimilarProductsStyled>
  );
};

export default SimilarProducts;
