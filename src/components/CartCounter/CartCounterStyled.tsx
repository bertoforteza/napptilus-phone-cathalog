import styled from 'styled-components';

const CartCounterStyled = styled.button`
  display: flex;
  align-items: center;
  gap: 0.375rem;
  background-color: transparent;
  border: none;
  cursor: pointer;

  .cart-counter {
    &__icon {
      width: ${props => props.theme.spacing.l};
      height: ${props => props.theme.spacing.l};
    }

    &__value {
      font-size: ${props => props.theme.typography.fontSize.m};
      font-weight: ${props => props.theme.typography.fontWeight.light};
      color: ${props => props.theme.colors.text.primary};
    }
  }
`;

export default CartCounterStyled;
