import { Route, Routes } from 'react-router-dom';
import PhoneListPage from '../../pages/ProheListPage/PhoneListPage';
import PhoneDetailsPage from '../../pages/PhoneDetailsPage/PhoneDetailsPage';
import CartPage from '../../pages/CartPage/CartPage';

const MainLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<PhoneListPage />} />
      <Route path="/phone/:id" element={<PhoneDetailsPage />} />
      <Route path="/cart" element={<CartPage />} />
    </Routes>
  );
};

export default MainLayout;
