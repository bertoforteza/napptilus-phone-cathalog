import { createContext, useMemo, useState, type ReactNode } from 'react';
import type { Phone, PhoneDetails } from '../types/phonesTypes';

export interface PhonesContextType {
  phones: Phone[];
  setPhones: React.Dispatch<React.SetStateAction<Phone[]>>;
  phonesCart: PhoneDetails[];
  setPhonesCart: React.Dispatch<React.SetStateAction<PhoneDetails[]>>;
}

const PhonesContext = createContext<PhonesContextType>({
  phones: [],
  setPhones: () => {},
  phonesCart: [],
  setPhonesCart: () => {},
});

export const PhonesProvider = ({ children }: { children: ReactNode }) => {
  const [phones, setPhones] = useState<Phone[]>([]);
  const [phonesCart, setPhonesCart] = useState<PhoneDetails[]>([]);

  const contextValue: PhonesContextType = useMemo(
    () => ({ phones, setPhones, phonesCart, setPhonesCart }),
    [phones, setPhones, phonesCart, setPhonesCart]
  );

  return <PhonesContext.Provider value={contextValue}>{children}</PhonesContext.Provider>;
};

export default PhonesContext;
