import styled from 'styled-components';

const MainHeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${props => props.theme.spacing.xl} 6.25rem;

  a {
    height: ${props => props.theme.spacing.l};
  }

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

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: ${props => props.theme.spacing.xl} ${props => props.theme.spacing.m};
  }
`;

export default MainHeaderStyled;
