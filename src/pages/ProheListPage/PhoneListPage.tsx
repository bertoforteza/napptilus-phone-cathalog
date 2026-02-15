import { useEffect } from 'react';
import PhoneListPageStyled from './PhoneListPageStyled';
import usePhones from '../../hooks/usePhones';

const PhoneListPage = () => {
  const { loadPhones } = usePhones();

  useEffect(() => {
    loadPhones({ limit: 20 });
  }, [loadPhones]);

  return (
    <PhoneListPageStyled>
      <h1>Phone List Page</h1>
    </PhoneListPageStyled>
  );
};

export default PhoneListPage;
