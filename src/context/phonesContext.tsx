import { createContext, useMemo, useState, type ReactNode } from 'react';
import type { Phone, PhoneDetails } from '../types/phonesTypes';

export interface PhonesContextType {
  phones: Phone[];
  setPhones: React.Dispatch<React.SetStateAction<Phone[]>>;
  phonesChart: PhoneDetails[];
  setPhonesChart: React.Dispatch<React.SetStateAction<PhoneDetails[]>>;
}

const PhonesContext = createContext<PhonesContextType>({
  phones: [],
  setPhones: () => {},
  phonesChart: [],
  setPhonesChart: () => {},
});

export const PhonesProvider = ({ children }: { children: ReactNode }) => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesChart, setPhonesChart] = useState<PhoneDetails[]>([]);

  const contextValue: PhonesContextType = useMemo(
    () => ({ phones, setPhones, phonesChart, setPhonesChart }),
    [phones, setPhones, phonesChart, setPhonesChart]
  );

  return <PhonesContext.Provider value={contextValue}>{children}</PhonesContext.Provider>;
};

export default PhonesContext;
