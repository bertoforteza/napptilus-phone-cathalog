import styled from 'styled-components';

const MainHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.m};

  .main-header {
    &__logo {
      width: 4.625rem;
      height: ${props => props.theme.spacing.l};
    }

    &__chart {
      width: ${props => props.theme.spacing.l};
      height: ${props => props.theme.spacing.l};
    }
  }
`;

export default MainHeaderStyled;
