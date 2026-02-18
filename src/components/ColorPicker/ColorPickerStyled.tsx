import styled from 'styled-components';

const ColorPickerStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.s};

  .color-picker {
    &__title {
      font-size: ${props => props.theme.typography.fontSize.s};
      text-transform: uppercase;
      font-weight: ${props => props.theme.typography.fontWeight.light};
    }

    &__options {
      display: flex;
      gap: ${props => props.theme.spacing.m};
      margin-top: ${props => props.theme.spacing.m};
    }

    &__option {
      position: relative;
      width: ${props => props.theme.spacing.l};
      height: ${props => props.theme.spacing.l};
      border: 1px solid ${({ theme }) => theme.colors.disabled};
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border-color 300ms ease;
      cursor: pointer;

      input {
        position: absolute;
        opacity: 0;
        pointer-events: none;
      }

      &--selected {
        border-color: ${({ theme }) => theme.colors.border};
      }
    }

    &__box {
      width: 1.25rem;
      height: 1.25rem;
    }

    &__color-name {
      font-size: ${props => props.theme.typography.fontSize.xs};
      font-weight: ${props => props.theme.typography.fontWeight.light};
    }
  }
`;

export default ColorPickerStyled;
