import MainHeaderStyled from './MainHeaderStyled';
import Logo from '../../assets/svg/main-logo.svg';
import { Link } from 'react-router-dom';
import CartCounter from '../CartCounter/CartCounter';

const MainHeader = () => {
  return (
    <MainHeaderStyled className="main-header">
      <Link to="/">
        <Logo className="main-header__logo" />
      </Link>
      <CartCounter />
    </MainHeaderStyled>
  );
};

export default MainHeader;
