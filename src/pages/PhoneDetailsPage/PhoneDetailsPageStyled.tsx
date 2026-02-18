import styled from 'styled-components';

const PhoneDetailsPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 2.688rem;

  .phone-details {
    &__navigation {
      display: flex;
      align-items: center;
      width: 100%;
      padding: ${props => props.theme.spacing.l} 6.25rem;
    }

    &__back-link {
      display: flex;
      align-items: center;
      gap: ${props => props.theme.spacing.xs};
      font-size: ${props => props.theme.typography.fontSize.xs};
      color: ${props => props.theme.colors.text.primary};
      font-weight: ${props => props.theme.typography.fontWeight.light};
      text-transform: uppercase;

      svg {
        height: 1rem;
        width: 1rem;
      }
    }

    &__content {
      width: 100%;
      max-width: 75rem;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 9.625rem;
      padding-bottom: 9.625rem;
    }

    &__info-container {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-between;
      padding-top: 6.875rem;
    }

    &__image-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    &__image {
      width: 100%;
      max-width: 31.875rem;
      max-height: 39.375rem;
      aspect-ratio: 1/1;
      object-fit: contain;
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 23.75rem;
      color: ${props => props.theme.colors.text.primary};
      font-weight: ${props => props.theme.typography.fontWeight.light};
    }

    &__name {
      font-size: ${props => props.theme.typography.fontSize.xxl};
      font-weight: ${props => props.theme.typography.fontWeight.light};
      margin: 0;
    }

    &__price {
      font-size: ${props => props.theme.typography.fontSize.l};
      font-weight: ${props => props.theme.typography.fontWeight.light};
      color: ${props => props.theme.colors.text.secondary};
      margin: 0;
    }

    &__loading {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 50vh;
      font-size: ${props => props.theme.typography.fontSize.m};
      color: ${props => props.theme.colors.text.secondary};
    }
  }
`;

export default PhoneDetailsPageStyled;
