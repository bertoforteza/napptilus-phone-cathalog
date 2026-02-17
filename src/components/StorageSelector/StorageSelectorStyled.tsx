import styled from 'styled-components';

const StorageSelectorStyled = styled.div<{ numberOfOptions: number }>`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.l};

  .storage {
    &__title {
      font-size: ${props => props.theme.typography.fontSize.s};
      text-transform: uppercase;
      font-weight: ${({ theme }) => theme.typography.fontWeight.light};
      color: ${({ theme }) => theme.colors.text.primary};
    }

    &__options {
      display: grid;
      grid-template-columns: repeat(${({ numberOfOptions }) => numberOfOptions}, minmax(6rem, 1fr));
      border: 1px solid ${({ theme }) => theme.colors.disabled};
    }

    &__option {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 4rem;
      border: 1px solid ${({ theme }) => theme.colors.disabled};
      transition: border-color 300ms ease-in-out;
      cursor: pointer;

      input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }

      span {
        font-size: ${props => props.theme.typography.fontSize.s};
        font-weight: ${props => props.theme.typography.fontWeight.light};
      }

      &--selected {
        border-color: ${({ theme }) => theme.colors.border};
      }
    }
  }
`;

export default StorageSelectorStyled;
