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

      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        padding: ${props => props.theme.spacing.l} 2.5rem;
      }

      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        padding: 0.75rem 0;
      }
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

      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        gap: 4rem;
        padding-bottom: 4rem;
      }

      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        gap: 2rem;
        padding-bottom: 2rem;
      }
    }

    &__info-container {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-between;
      padding-top: 6.875rem;

      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        grid-template-columns: 1fr;
        gap: 3rem;
        padding-top: 2rem;
      }

      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        grid-template-columns: 1fr;
        gap: 0;
        padding-top: 0;
        display: flex;
        flex-direction: column;
      }
    }

    &__image-wrapper {
      display: flex;
      align-items: center;
      justify-content: center;

      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.m};
        order: 1;
      }
    }

    &__image {
      width: 100%;
      max-width: 31.875rem;
      max-height: 39.375rem;
      aspect-ratio: 1/1;
      object-fit: contain;

      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        max-width: 20rem;
        max-height: 25rem;
      }

      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        max-width: 15rem;
        max-height: 18rem;
      }
    }

    &__info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      max-width: 23.75rem;
      padding-right: ${props => props.theme.spacing.m};
      color: ${props => props.theme.colors.text.primary};
      font-weight: ${props => props.theme.typography.fontWeight.light};

      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        max-width: 100%;
        gap: ${props => props.theme.spacing.m};
        padding: 0;
      }

      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        order: 2;
        padding: 0;
        gap: ${props => props.theme.spacing.xxl};
        max-width: 100%;
      }
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

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2.5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export default PhoneDetailsPageStyled;
