import MainHeaderStyled from './MainHeaderStyled';
import Logo from '../../assets/svg/main-logo.svg';
import ChartInactive from '../../assets/svg/chart-inactive.svg';
import { Link } from 'react-router-dom';

const MainHeader = () => {
  return (
    <MainHeaderStyled className="main-header">
      <Link to="/">
        <Logo className="main-header__logo" />
      </Link>
      <ChartInactive className="main-header__chart" />
    </MainHeaderStyled>
  );
};

export default MainHeader;
