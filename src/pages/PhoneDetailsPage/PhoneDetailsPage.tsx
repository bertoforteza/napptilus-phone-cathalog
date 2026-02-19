import { useContext, useEffect, useState } from 'react';
import type { PhoneDetails, SelectedPhoneDetails } from '../../types/phonesTypes';
import PhoneDetailsPageStyled from './PhoneDetailsPageStyled';
import { Link, useNavigate, useParams } from 'react-router-dom';
import usePhones from '../../hooks/usePhones';
import BackIcon from '../../assets/svg/back-icon.svg';
import StorageSelector from '../../components/StorageSelector/StorageSelector';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import Button from '../../components/Button/Button';
import SimilarProducts from '../../components/SimilarProducts/SimilarProducts';
import Specifications from '../../components/Specifications/Specifications';
import PhonesContext from '../../context/phonesContext';

const PhoneDetailsPage = () => {
  const [phoneDetails, setPhoneDetails] = useState<PhoneDetails | null>(null);
  const [selectedColorOption, setSelectedColorOption] = useState<number>(0);
  const [selectedPrice, setSelectedPrice] = useState<number | null>(null);

  const { id } = useParams();
  const { loadPhoneDetails } = usePhones();
  const { setPhonesCart } = useContext(PhonesContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      loadPhoneDetails(id, setPhoneDetails);
    }
  }, [id, loadPhoneDetails]);

  return (
    <PhoneDetailsPageStyled>
      <div className="phone-details__navigation">
        <Link to="/" className="phone-details__back-link">
          <BackIcon /> <span>Back</span>
        </Link>
      </div>

      {phoneDetails ? (
        <>
          <div className="phone-details__content">
            <section className="phone-details__info-container">
              <div className="phone-details__image-wrapper">
                <img
                  src={phoneDetails.colorOptions[selectedColorOption].imageUrl}
                  alt={`Image of the phone ${phoneDetails.brand} model ${phoneDetails.name}`}
                  className="phone-details__image"
                />
              </div>

              <div className="phone-details__info">
                <h1 className="phone-details__name">{phoneDetails.name.toUpperCase()}</h1>
                <p className="phone-details__price">From {phoneDetails.basePrice} EUR</p>

                <StorageSelector
                  selectedPrice={selectedPrice}
                  setSelectedPrice={setSelectedPrice}
                  storageOptions={phoneDetails.storageOptions}
                />

                <ColorPicker
                  phoneDetails={phoneDetails}
                  selectedColorOption={selectedColorOption}
                  setSelectedColorOption={setSelectedColorOption}
                />

                <Button
                  text="AÑADIR"
                  onClick={() => {
                    const selectedPhoneDetails: SelectedPhoneDetails = {
                      ...phoneDetails,
                      selectedColor: phoneDetails.colorOptions[selectedColorOption],
                      selectedStorage:
                        phoneDetails.storageOptions.find(
                          option => option.price === selectedPrice
                        ) || phoneDetails.storageOptions[0],
                    };
                    setPhonesCart(previousPhones => [...previousPhones, selectedPhoneDetails]);
                    navigate('/cart');
                  }}
                  disabled={selectedPrice === null}
                />
              </div>
            </section>

            <Specifications phone={phoneDetails} />
          </div>

          <SimilarProducts products={phoneDetails.similarProducts} />
        </>
      ) : (
        <div className="phone-details__loading">
          <p>Loading phone details...</p>
        </div>
      )}
    </PhoneDetailsPageStyled>
  );
};

export default PhoneDetailsPage;
