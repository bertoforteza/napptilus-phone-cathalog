import MainHeaderStyled from './MainHeaderStyled';
import Logo from '../../assets/svg/main-logo.svg';
import ChartInactive from '../../assets/svg/chart-inactive.svg';

const MainHeader = () => {
  return (
    <MainHeaderStyled className="main-header">
      <Logo className="main-header__logo" />
      <ChartInactive className="main-header__chart" />
    </MainHeaderStyled>
  );
};

export default MainHeader;
