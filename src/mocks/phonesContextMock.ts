import type { PhonesContextType } from '../context/phonesContext';

const phonesContextMock: PhonesContextType = {
  phones: [],
  setPhones: () => {},
  phonesCart: [],
  setPhonesCart: () => {},
  isLoading: false,
  setIsLoading: () => {},
};

export default phonesContextMock;
