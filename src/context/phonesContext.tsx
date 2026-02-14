import { createContext, useEffect, useState, type ReactNode } from 'react';
import type { Phone } from '../types/phonesTypes';
import usePhones from '../hooks/usePhones';

interface PhonesContextType {
  phones: Phone[];
  setPhones: React.Dispatch<React.SetStateAction<Phone[]>>;
}

const PhonesContext = createContext<PhonesContextType>({ phones: [], setPhones: () => {} });

export const PhonesProvider = ({ children }: { children: ReactNode }) => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const { loadPhones } = usePhones();

  useEffect(() => {
    loadPhones({ limit: 20 });
  }, [loadPhones]);

  return <PhonesContext.Provider value={{ phones, setPhones }}>{children}</PhonesContext.Provider>;
};

export default PhonesContext;
