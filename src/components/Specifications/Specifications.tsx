import type { PhoneDetails } from '../../types/phonesTypes';
import SpecificationsStyled from './SpecificationsStyled';

interface SpecificationsProps {
  phone: PhoneDetails;
}

const Specifications: React.FC<SpecificationsProps> = ({ phone }) => {
  const { brand, name, description, specs } = phone;

  const specRows = [
    { label: 'Brand', value: brand },
    { label: 'Name', value: name },
    { label: 'Description', value: description },
    { label: 'Screen', value: specs.screen },
    { label: 'Resolution', value: specs.resolution },
    { label: 'Processor', value: specs.processor },
    { label: 'Main camera', value: specs.mainCamera },
    { label: 'Selfie camera', value: specs.selfieCamera },
    { label: 'Battery', value: specs.battery },
    { label: 'OS', value: specs.os },
    { label: 'Screen refresh rate', value: specs.screenRefreshRate },
  ];

  return (
    <SpecificationsStyled>
      <span className="specifications__title">Specifications</span>

      <div className="specifications__table">
        {specRows.map(row => (
          <div key={row.label} className="specifications__row">
            <span className="specifications__label">{row.label}</span>
            <span className="specifications__value">{row.value}</span>
          </div>
        ))}
      </div>
    </SpecificationsStyled>
  );
};

export default Specifications;
