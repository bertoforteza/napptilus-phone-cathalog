import { Route, Routes } from 'react-router-dom';
import PhoneListPage from '../../pages/ProheListPage/PhoneListPage';
import PhoneDetailsPage from '../../pages/PhoneDetailsPage/PhoneDetailsPage';

const MainLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<PhoneListPage />} />
      <Route path="/phone/:id" element={<PhoneDetailsPage />} />
    </Routes>
  );
};

export default MainLayout;
