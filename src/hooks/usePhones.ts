import { useCallback, useContext } from 'react';
import PhonesContext from '../context/phonesContext';
import { getPhones, type GetPhonesParams } from '../services/phonesServices';
import { AxiosError } from 'axios';

const usePhones = () => {
  const { setPhones } = useContext(PhonesContext);

  const loadPhones = useCallback(
    async (params?: GetPhonesParams) => {
      try {
        const response = await getPhones(params);
        setPhones(response);
      } catch (error) {
        const errorMessage = error instanceof AxiosError ? error.message : 'Error loading phones';
        console.error(errorMessage);
        setPhones([]);
      }
    },
    [setPhones]
  );

  return { loadPhones };
};

export default usePhones;
