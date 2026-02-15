import styled from 'styled-components';

const PhoneListPageStyled = styled.main`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 3rem 6.25rem;

  .phone-list {
    &__results {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(21.5rem, 1fr));

      border-top: 0.5px solid ${props => props.theme.colors.border};
      border-left: 0.5px solid ${props => props.theme.colors.border};

      > li {
        border-right: 0.5px solid ${props => props.theme.colors.border};
        border-bottom: 0.5px solid ${props => props.theme.colors.border};
      }
    }
  }
`;

export default PhoneListPageStyled;
