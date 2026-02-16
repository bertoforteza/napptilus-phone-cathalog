import { useContext, useEffect, useState } from 'react';
import PhoneListPageStyled from './PhoneListPageStyled';
import PhonesContext from '../../context/phonesContext';
import PhoneCard from '../../components/PhoneCard/PhoneCard';
import usePhones from '../../hooks/usePhones';
import type { GetPhonesParams } from '../../services/phonesServices';
import SearchBar from '../../components/SearchBar/SearchBar';

const PhoneListPage = () => {
  const [requestParams, setRequestParams] = useState<GetPhonesParams>({ limit: 20 });

  const { phones } = useContext(PhonesContext);

  const { loadPhones } = usePhones();

  useEffect(() => {
    loadPhones(requestParams);
  }, [loadPhones, requestParams]);

  return (
    <PhoneListPageStyled>
      <div className="phone-list__searchbar">
        <SearchBar
          searchText={requestParams.search ?? ''}
          onSearchTextChange={value =>
            setRequestParams(previousParams => ({ ...previousParams, search: value }))
          }
        />

        <span className="phone-list__count" aria-label={`Number of results: ${phones.length}`}>
          {phones.length} {phones.length === 1 ? 'result' : 'results'}
        </span>
      </div>

      {phones.length > 0 && (
        <ul className="phone-list__results">
          {phones.map(phone => (
            <PhoneCard phone={phone} key={phone.id} />
          ))}
        </ul>
      )}
    </PhoneListPageStyled>
  );
};

export default PhoneListPage;
