import styled from 'styled-components';

const ButtonStyled = styled.button`
  background-color: ${props => props.theme.button.backgroundPrimary};
  color: ${props => props.theme.button.textPrimary};
  font-weight: ${props => props.theme.typography.fontWeight.light};
  font-size: ${props => props.theme.typography.fontSize.xs};
  height: 3rem;
  width: 16.25rem;
  text-transform: uppercase;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.button.backgroundHover};
  }

  &:active {
    background-color: ${props => props.theme.button.backgroundActive};
  }

  &:disabled {
    background-color: ${props => props.theme.button.backgroundDisabled};
    color: ${props => props.theme.button.textDisabled};
  }

  &.outlined {
    background-color: transparent;
    border: 0.5px solid ${props => props.theme.button.borderOutlined};
    color: ${props => props.theme.button.textOutlined};

    &:hover {
      border-color: ${props => props.theme.button.borderOutlinedHover};
      color: ${props => props.theme.button.textOutlinedHover};
    }

    &:active {
      border-color: ${props => props.theme.button.borderOutlinedActive};
    }

    &:disabled {
      border-color: ${props => props.theme.button.borderOutlinedDisabled};
      color: ${props => props.theme.button.textDisabled};
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    width: 100%;
  }
`;

export default ButtonStyled;
