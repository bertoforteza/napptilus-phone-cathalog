import CartInactive from '../../assets/svg/chart-inactive.svg';
import CartActive from '../../assets/svg/chart-active.svg';
import CartCounterStyled from './CartCounterStyled';
import { useContext } from 'react';
import PhonesContext from '../../context/phonesContext';
import { useNavigate } from 'react-router-dom';

const CartCounter = () => {
  const { phonesCart } = useContext(PhonesContext);
  const navigate = useNavigate();

  const cartItemsText = phonesCart.length === 1 ? 'article' : 'articles';
  const ariaLabel = `Your cart contains ${phonesCart.length} ${cartItemsText}`;

  return (
    <CartCounterStyled
      tabIndex={0}
      aria-label={ariaLabel}
      aria-live="polite"
      aria-atomic="true"
      onClick={() => navigate('/cart')}
    >
      {phonesCart.length > 0 ? (
        <CartActive className="cart-counter__icon" aria-hidden="true" />
      ) : (
        <CartInactive className="cart-counter__icon" aria-hidden="true" />
      )}
      <span className="cart-counter__value" aria-label={`Cantidad: ${phonesCart.length}`}>
        {phonesCart.length}
      </span>
    </CartCounterStyled>
  );
};

export default CartCounter;
