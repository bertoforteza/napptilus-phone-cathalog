import { createContext, useMemo, useState, useEffect, type ReactNode } from 'react';
import type { Phone, SelectedPhoneDetails } from '../types/phonesTypes';

const CART_STORAGE_KEY = 'mbst_phones_cart';

export interface PhonesContextType {
  phones: Phone[];
  setPhones: React.Dispatch<React.SetStateAction<Phone[]>>;
  phonesCart: SelectedPhoneDetails[];
  setPhonesCart: React.Dispatch<React.SetStateAction<SelectedPhoneDetails[]>>;
}

const PhonesContext = createContext<PhonesContextType>({
  phones: [],
  setPhones: () => {},
  phonesCart: [],
  setPhonesCart: () => {},
});

export const PhonesProvider = ({ children }: { children: ReactNode }) => {
  const [phones, setPhones] = useState<Phone[]>([]);

  const getPhonesCartFromLocalStorage = (): SelectedPhoneDetails[] => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY);
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Failed to load cart from localStorage:', error);
      return [];
    }
  };

  const [phonesCart, setPhonesCart] = useState<SelectedPhoneDetails[]>(
    getPhonesCartFromLocalStorage()
  );

  useEffect(() => {
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(phonesCart));
    } catch (error) {
      console.error('Failed to save cart to localStorage:', error);
    }
  }, [phonesCart]);

  const contextValue: PhonesContextType = useMemo(
    () => ({ phones, setPhones, phonesCart, setPhonesCart }),
    [phones, setPhones, phonesCart, setPhonesCart]
  );

  return <PhonesContext.Provider value={contextValue}>{children}</PhonesContext.Provider>;
};

export default PhonesContext;
