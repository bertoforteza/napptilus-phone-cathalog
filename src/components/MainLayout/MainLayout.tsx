import { Route, Routes } from 'react-router-dom';
import PhoneListPage from '../../pages/ProheListPage/PhoneListPage';

const MainLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<PhoneListPage />} />
    </Routes>
  );
};

export default MainLayout;
