import styled from 'styled-components';

const SimilarProductsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.m};

  .similar-products {
    &__title {
      font-size: 1.25rem;
      text-transform: uppercase;
      font-weight: ${props => props.theme.typography.fontWeight.light};
    }

    &__list {
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      padding-bottom: ${props => props.theme.spacing.s};
      scroll-behavior: smooth;
      flex-wrap: nowrap;
      scroll-snap-type: x mandatory;
      padding-bottom: 2.5rem;

      &::-webkit-scrollbar {
        height: 1px;
      }

      &::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.secondary};
      }

      &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.primary};
        border-radius: 0;
      }
    }

    &__item {
      flex: 0 0 auto;
      scroll-snap-align: start;
      border-top: 0.5px solid ${props => props.theme.colors.border};
      border-bottom: 0.5px solid ${props => props.theme.colors.border};
      border-right: 0.5px solid ${props => props.theme.colors.border};
      cursor: pointer;

      &:first-child {
        border-left: 0.5px solid ${props => props.theme.colors.border};
      }
    }
  }
`;

export default SimilarProductsStyled;
