import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const PhoneListPage = lazy(() => import('../../pages/ProheListPage/PhoneListPage'));
const PhoneDetailsPage = lazy(() => import('../../pages/PhoneDetailsPage/PhoneDetailsPage'));
const CartPage = lazy(() => import('../../pages/CartPage/CartPage'));

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
