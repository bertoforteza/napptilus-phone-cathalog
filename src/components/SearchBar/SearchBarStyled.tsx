import styled from 'styled-components';

const SearchBarStyled = styled.div`
  position: relative;

  .search-bar__field {
    width: 100%;
    border-bottom: 0.5px solid ${props => props.theme.colors.border};
    padding-bottom: ${props => props.theme.spacing.s};
    color: ${props => props.theme.colors.text.primary};
    font-size: ${props => props.theme.typography.fontSize.m};
    font-weight: ${props => props.theme.typography.fontWeight.light};

    &::placeholder {
      color: ${props => props.theme.colors.text.placeholder};
    }
  }

  .clear-button {
    position: absolute;
    right: 0;
    background-color: transparent;
    border: none;
    cursor: pointer;

    &__icon {
      width: ${props => props.theme.spacing.s};
      height: ${props => props.theme.spacing.s};
    }
  }
`;

export default SearchBarStyled;
