import styled from 'styled-components';

const CartPageStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 6.25rem;
  gap: 3rem;
  width: 100%;
  min-height: calc(100vh - 5rem - 8rem);
  margin-bottom: 8rem;

  .cart-page {
    &__counter {
      padding: 0.75rem 0;
      font-size: ${props => props.theme.typography.fontSize.xl};
      text-transform: uppercase;
      font-weight: ${props => props.theme.typography.fontWeight.light};
    }

    &__list {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      .phone-item {
        display: flex;
        gap: 2.5rem;
        align-items: center;
        width: 100%;
        max-width: 34.25rem;
        height: 20.25rem;

        @media (max-width: ${props => props.theme.breakpoints.tablet}) {
          flex: 1;
        }

        @media (max-width: ${props => props.theme.breakpoints.mobile}) {
          gap: ${props => props.theme.spacing.l};
        }

        &__image {
          width: 16.375rem;
          height: 20.25rem;
          aspect-ratio: 1/1;
          object-fit: contain;

          @media (max-width: ${props => props.theme.breakpoints.mobile}) {
            width: 10rem;
            height: auto;
          }
        }

        &__info {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          padding: 2.5rem 0;
          height: 100%;
          font-size: ${props => props.theme.typography.fontSize.xs};
          font-weight: ${props => props.theme.typography.fontWeight.light};

          &-group {
            display: flex;
            flex-direction: column;
            gap: ${props => props.theme.spacing.xs};
          }

          &__name {
            font-size: ${props => props.theme.typography.fontSize.m};
            font-weight: ${props => props.theme.typography.fontWeight.light};
          }

          &__storage-color {
            font-size: ${props => props.theme.typography.fontSize.xs};
            color: ${props => props.theme.colors.text.secondary};
          }

          &__price {
            font-size: ${props => props.theme.typography.fontSize.s};
            font-weight: ${props => props.theme.typography.fontWeight.light};
          }
        }

        &__remove-button {
          position: absolute;
          bottom: 2.5rem;
          background-color: transparent;
          border: none;
          color: ${props => props.theme.colors.text.negative};
          font-size: ${props => props.theme.typography.fontSize.xs};
          cursor: pointer;

          @media (max-width: ${props => props.theme.breakpoints.tablet}) {
            bottom: 0;
          }

          @media (max-width: ${props => props.theme.breakpoints.mobile}) {
            bottom: 0;
          }
        }
      }
    }

    &__actions {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1.5rem 6.25rem 3.5rem;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100%;
      background-color: ${props => props.theme.colors.primary};

      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        padding: 1.5rem 2.5rem;
      }

      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto auto;
        gap: 0.75rem;
        padding: 1.5rem 1rem;
      }
    }

    &__continue-button {
      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        grid-row: 2;
      }
    }

    &__total {
      display: flex;
      align-items: center;
      gap: ${props => props.theme.spacing.l};
      font-size: ${props => props.theme.typography.fontSize.s};
      font-weight: ${props => props.theme.typography.fontWeight.light};
      text-transform: uppercase;

      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        grid-row: 1;
        grid-column: 1 / 3;
        width: 100%;
        justify-content: space-between;
      }
    }

    &__pay-button {
      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        grid-row: 2;
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2.5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0 1rem;
  }
`;

export default CartPageStyled;
