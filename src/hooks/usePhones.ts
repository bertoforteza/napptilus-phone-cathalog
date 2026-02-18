import { useCallback, useContext } from 'react';
import PhonesContext from '../context/phonesContext';
import { getPhoneDetails, getPhones, type GetPhonesParams } from '../services/phonesServices';
import { AxiosError } from 'axios';
import type { PhoneDetails } from '../types/phonesTypes';

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

  const loadPhoneDetails = useCallback(
    async (
      id: string,
      setPhoneDetails: React.Dispatch<React.SetStateAction<PhoneDetails | null>>
    ) => {
      try {
        const response = await getPhoneDetails(id);
        setPhoneDetails(response);
      } catch (error) {
        const errorMessage =
          error instanceof AxiosError ? error.message : 'Error loading phone details';
        console.error(errorMessage);
      }
    },
    []
  );

  return { loadPhones, loadPhoneDetails };
};

export default usePhones;
