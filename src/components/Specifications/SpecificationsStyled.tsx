import styled from 'styled-components';

const SpecificationsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  padding: 0;

  .specifications {
    &__title {
      font-size: 1.25rem;
      text-transform: uppercase;
    }

    &__table {
      display: flex;
      flex-direction: column;
      border-top: 1px solid ${props => props.theme.colors.border};
    }

    &__row {
      display: grid;
      grid-template-columns: 18.75rem 1fr;
      column-gap: 3rem;
      align-items: start;
      padding: ${props => props.theme.spacing.m} 0;
      border-bottom: 1px solid ${props => props.theme.colors.border};

      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        grid-template-columns: 9.375rem 1fr;
      }
    }

    &__label {
      text-transform: uppercase;
      font-size: ${props => props.theme.typography.fontSize.xs};
      font-weight: ${props => props.theme.typography.fontWeight.light};
    }

    &__value {
      font-size: ${props => props.theme.typography.fontSize.xs};
      font-weight: ${props => props.theme.typography.fontWeight.light};
    }
  }

  @media (max-width: 1250px) {
    padding: 2.5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 0;
  }
`;

export default SpecificationsStyled;
