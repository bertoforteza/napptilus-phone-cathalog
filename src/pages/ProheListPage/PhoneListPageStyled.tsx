import styled from 'styled-components';

const PhoneListPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 6.25rem;

  .phone-list {
    &__searchbar {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    }

    &__count {
      color: ${props => props.theme.colors.text.primary};
      font-size: ${props => props.theme.typography.fontSize.xs};
      font-weight: ${props => props.theme.typography.fontWeight.light};
      text-transform: uppercase;
    }

    &__results {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));

      border-top: 0.5px solid ${props => props.theme.colors.border};
      border-left: 0.5px solid ${props => props.theme.colors.border};

      > li {
        border-right: 0.5px solid ${props => props.theme.colors.border};
        border-bottom: 0.5px solid ${props => props.theme.colors.border};
      }
    }
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 3rem 2.5rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.5rem 1rem;
  }
`;

export default PhoneListPageStyled;
