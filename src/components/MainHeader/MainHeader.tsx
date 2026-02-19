import MainHeaderStyled from './MainHeaderStyled';
import Logo from '../../assets/svg/main-logo.svg';
import { Link } from 'react-router-dom';
import ChartCounter from '../ChartCounter/ChartCounter';

const MainHeader = () => {
  return (
    <MainHeaderStyled className="main-header">
      <Link to="/">
        <Logo className="main-header__logo" />
      </Link>
      <ChartCounter />
    </MainHeaderStyled>
  );
};

export default MainHeader;
