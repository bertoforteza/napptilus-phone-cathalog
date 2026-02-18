import type { PhoneDetails } from '../../types/phonesTypes';
import ColorPickerStyled from './ColorPickerStyled';

interface ColorPickerProps {
  phoneDetails: PhoneDetails;
  selectedColorOption: number;
  setSelectedColorOption: React.Dispatch<React.SetStateAction<number>>;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  phoneDetails,
  selectedColorOption,
  setSelectedColorOption,
}) => {
  const { colorOptions } = phoneDetails;

  return (
    <ColorPickerStyled>
      <span className="color-picker__title">Color. Pick your favourite. </span>

      <div className="color-picker__options" role="radiogroup">
        {colorOptions.map((option, index) => (
          <label
            key={option.name}
            className={`color-picker__option ${selectedColorOption === index ? 'color-picker__option--selected' : ''}`}
          >
            <input
              type="radio"
              name="color"
              value={option.name}
              checked={selectedColorOption === index}
              onChange={() => setSelectedColorOption(index)}
            />

            <span className="color-picker__box" style={{ backgroundColor: option.hexCode }} />
          </label>
        ))}
      </div>

      <span className="color-picker__color-name">{colorOptions[selectedColorOption]?.name}</span>
    </ColorPickerStyled>
  );
};

export default ColorPicker;
