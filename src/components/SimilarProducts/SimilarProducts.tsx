import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import type { Phone } from '../../types/phonesTypes';
import SimilarProductsStyled from './SimilarProductsStyled';
import PhoneCard from '../PhoneCard/PhoneCard';

interface SimilarProductsProps {
  products: Phone[];
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ products }) => {
  const navigate = useNavigate();
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollLeft = 0;
    }
  }, [products]);

  const handleProductClick = (phone: Phone) => {
    navigate(`/phone/${phone.id}`);
  };

  return (
    <SimilarProductsStyled>
      <span className="similar-products__title" aria-label="Similar items section">
        Similar items
      </span>

      <ul ref={listRef} className="similar-products__list">
        <li className="similar-products__spacer" aria-hidden="true" />

        {products.map(product => (
          <li
            key={product.id}
            className="similar-products__item"
            onClick={() => handleProductClick(product)}
          >
            <PhoneCard phone={product} />
          </li>
        ))}

        <li className="similar-products__spacer" aria-hidden="true" />
      </ul>
    </SimilarProductsStyled>
  );
};

export default SimilarProducts;
