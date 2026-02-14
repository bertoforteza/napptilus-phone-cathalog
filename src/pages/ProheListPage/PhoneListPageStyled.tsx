import styled from 'styled-components';

const PhoneListPageStyled = styled.main`
  h1 {
    font-size: ${props => props.theme.typography.fontSize.xl};
    font-weight: ${props => props.theme.typography.fontWeight.bold};
  }
`;

export default PhoneListPageStyled;
