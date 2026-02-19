import ChartInactive from '../../assets/svg/chart-inactive.svg';
import ChartActive from '../../assets/svg/chart-active.svg';
import ChartCounterStyled from './ChartCounterStyled';
import { useContext } from 'react';
import PhonesContext from '../../context/phonesContext';
import { useNavigate } from 'react-router-dom';

const ChartCounter = () => {
  const { phonesChart } = useContext(PhonesContext);
  const navigate = useNavigate();

  const cartItemsText = phonesChart.length === 1 ? 'article' : 'articles';
  const ariaLabel = `Your chart contains ${phonesChart.length} ${cartItemsText}`;

  return (
    <ChartCounterStyled
      tabIndex={0}
      aria-label={ariaLabel}
      aria-live="polite"
      aria-atomic="true"
      onClick={() => navigate('/chart')}
    >
      {phonesChart.length > 0 ? (
        <ChartActive className="chart-counter__icon" aria-hidden="true" />
      ) : (
        <ChartInactive className="chart-counter__icon" aria-hidden="true" />
      )}
      <span className="chart-counter__value" aria-label={`Cantidad: ${phonesChart.length}`}>
        {phonesChart.length}
      </span>
    </ChartCounterStyled>
  );
};

export default ChartCounter;
