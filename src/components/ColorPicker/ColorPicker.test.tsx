import phoneDetailsMock from '../../mocks/phoneDetailsMock';
import { render, screen } from '../../test/test-utils';
import ColorPicker from './ColorPicker';

describe('Given a ColorPicker component', () => {
  describe('When it receives a phone details object and a selected color option number', () => {
    test('Then it should display the color options of the phone and the name of the selected color', () => {
      const phoneDetails = phoneDetailsMock;
      const selectedColorOption = 0;
      const setSelectedColorOption = vi.fn();

      render(
        <ColorPicker
          phoneDetails={phoneDetails}
          selectedColorOption={selectedColorOption}
          setSelectedColorOption={setSelectedColorOption}
        />
      );

      const colorOptions = screen.getAllByRole('radio');
      const selectedColorName = screen.getByText(
        phoneDetails.colorOptions[selectedColorOption].name
      );

      expect(colorOptions).toHaveLength(phoneDetails.colorOptions.length);
      expect(selectedColorName).toBeVisible();
    });
  });
});
