import { useContext } from 'react';
import CartPageStyled from './CartPageStyled';
import PhonesContext from '../../context/phonesContext';
import Button from '../../components/Button/Button';
import { useNavigate } from 'react-router-dom';

const CartPage = () => {
  const { phonesCart, setPhonesCart } = useContext(PhonesContext);
  const navigate = useNavigate();

  const handleRemoveFromCart = (id: string) => {
    const updatedCart = phonesCart.filter(phone => phone.id !== id);
    setPhonesCart(updatedCart);
  };

  const totalPrice = phonesCart.reduce((total, phone) => total + phone.selectedStorage.price, 0);
  const isEmpty = phonesCart.length === 0;

  return (
    <CartPageStyled>
      <span className="cart-page__counter">{`Cart (${phonesCart.length})`}</span>
      <ul className="cart-page__list">
        {phonesCart.map(phone => (
          <li key={phone.id} className="phone-item">
            <img
              src={phone.colorOptions[0].imageUrl}
              alt={phone.name}
              className="phone-item__image"
            />
            <div className="phone-item__info">
              <div className="phone-item__info-group">
                <span className="phone-item__name">{phone.name}</span>
                <span className="phone-item__storage-color">
                  {phone.selectedStorage.capacity} GB | {phone.selectedColor.name}
                </span>
              </div>
              <span className="phone-item__price">{phone.selectedStorage.price} EUR</span>
              <button
                className="phone-item__remove-button"
                onClick={() => handleRemoveFromCart(phone.id)}
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>

      <div className="cart-page__actions">
        <Button variant="outlined" text="continue shopping" onClick={() => navigate('/')} />
        {totalPrice > 0 && !isEmpty && (
          <div className="cart-page__actions-group">
            <div className="cart-page__total">
              <span className="cart-page__total-value">Total</span>
              <span className="cart-page__total-value">{`${totalPrice} EUR`}</span>
            </div>
            <Button text="pay" onClick={() => {}} />
          </div>
        )}
      </div>
    </CartPageStyled>
  );
};

export default CartPage;
