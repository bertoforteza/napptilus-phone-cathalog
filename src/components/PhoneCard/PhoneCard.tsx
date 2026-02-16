import type { Phone } from '../../types/phonesTypes';
import PhoneCardStyled from './PhoneCardStyled';

interface PhoneCardProps {
  phone: Phone;
}

const PhoneCard: React.FC<PhoneCardProps> = ({ phone }) => {
  const { basePrice, brand, imageUrl, name } = phone;

  return (
    <PhoneCardStyled
      className="phone-card"
      tabIndex={0}
      role={'button'}
      aria-label={`Phone ${brand} model ${name}, price ${basePrice} euros`}
    >
      <img
        src={imageUrl}
        alt={`Image of the phone ${brand} model ${name}`}
        className="phone-card__image"
      />

      <div className="phone-card__info">
        <span className="phone-card__brand">{brand}</span>
        <div className="phone-card__info-row">
          <h3 className="phone-card__name">{name}</h3>
          <p className="phone-card__price">{basePrice} EUR</p>
        </div>
      </div>
    </PhoneCardStyled>
  );
};

export default PhoneCard;
