import type { StorageOption } from '../../types/phonesTypes';
import StorageSelectorStyled from './StorageSelectorStyled';

interface StorageSelectorProps {
  storageOptions: StorageOption[];
  selectedPrice: number | null;
  setSelectedPrice: React.Dispatch<React.SetStateAction<number | null>>;
}

const StorageSelector: React.FC<StorageSelectorProps> = ({
  storageOptions,
  selectedPrice,
  setSelectedPrice,
}) => {
  return (
    <StorageSelectorStyled numberOfOptions={storageOptions.length}>
      <span className="storage__title">Storage ¿How much space do you need?</span>

      <div className="storage__options" role="radiogroup">
        {storageOptions.map(option => (
          <label
            key={option.price}
            className={`storage__option ${selectedPrice === option.price ? 'storage__option--selected' : ''}`}
          >
            <input
              type="radio"
              name="storage"
              value={option.price}
              checked={selectedPrice === option.price}
              onChange={() => setSelectedPrice(option.price)}
            />
            <span>{option.capacity}</span>
          </label>
        ))}
      </div>
    </StorageSelectorStyled>
  );
};

export default StorageSelector;
