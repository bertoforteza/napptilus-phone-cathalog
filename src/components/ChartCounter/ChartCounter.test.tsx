import { BrowserRouter } from 'react-router-dom';
import phoneDetailsMock from '../../mocks/phoneDetailsMock';
import { renderWithMockPhonesProvider, screen } from '../../test/test-utils';
import ChartCounter from './ChartCounter';

describe('Given a ChartCounter component', () => {
  describe('When it receives a phonesChart with 2 phones', () => {
    test('Then it should render the number of phones in the chart and the active chart icon', () => {
      const phonesChart = [phoneDetailsMock];

      renderWithMockPhonesProvider(
        <BrowserRouter>
          <ChartCounter />
        </BrowserRouter>,
        { phonesChart }
      );

      const chartCounterButton = screen.getByRole('button', {
        name: /Your chart contains 1 article/i,
      });
      const chartValue = screen.getByText('1');

      expect(chartCounterButton).toBeVisible();
      expect(chartValue).toBeVisible();
    });
  });
});
