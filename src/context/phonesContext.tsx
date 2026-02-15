import { createContext, useMemo, useState, type ReactNode } from 'react';
import type { Phone } from '../types/phonesTypes';

interface PhonesContextType {
  phones: Phone[];
  setPhones: React.Dispatch<React.SetStateAction<Phone[]>>;
}

const PhonesContext = createContext<PhonesContextType>({ phones: [], setPhones: () => {} });

export const PhonesProvider = ({ children }: { children: ReactNode }) => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const contextValue: PhonesContextType = useMemo(
    () => ({ phones, setPhones }),
    [phones, setPhones]
  );

  return <PhonesContext.Provider value={contextValue}>{children}</PhonesContext.Provider>;
};

export default PhonesContext;
