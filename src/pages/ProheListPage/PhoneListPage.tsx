import { useContext, useEffect } from 'react';
import PhoneListPageStyled from './PhoneListPageStyled';
import PhonesContext from '../../context/phonesContext';
import PhoneCard from '../../components/PhoneCard/PhoneCard';
import usePhones from '../../hooks/usePhones';

const PhoneListPage = () => {
  const { phones } = useContext(PhonesContext);

  const { loadPhones } = usePhones();

  useEffect(() => {
    loadPhones({ limit: 20 });
  }, [loadPhones]);

  return (
    <PhoneListPageStyled>
      <ul className="phone-list__results">
        {phones.map(phone => (
          <PhoneCard phone={phone} key={phone.id} />
        ))}
      </ul>
    </PhoneListPageStyled>
  );
};

export default PhoneListPage;
