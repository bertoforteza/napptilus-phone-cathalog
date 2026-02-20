import { renderWithMockPhonesProvider, screen } from '../../test/test-utils';
import Loader from './Loader';

describe('Given a Loader component', () => {
  describe('When is rendered', () => {
    test("Then it should show a loading animation with aria label text 'The page is loading'", () => {
      renderWithMockPhonesProvider(<Loader />);

      const loader = screen.getByLabelText('The page is loading');

      expect(loader).toBeInTheDocument();
    });
  });
});
