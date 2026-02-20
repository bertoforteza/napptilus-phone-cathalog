import { useContext } from 'react';
import MainHeader from './components/MainHeader/MainHeader';
import MainLayout from './components/MainLayout/MainLayout';
import PhonesContext from './context/phonesContext';
import Loader from './components/Loader/Loader';

const App = () => {
  const { isLoading } = useContext(PhonesContext);

  return (
    <>
      {isLoading && <Loader />}
      <MainHeader />
      <MainLayout />
    </>
  );
};

export default App;
