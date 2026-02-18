import styled from 'styled-components';

const SimilarProductsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.m};
  margin-bottom: 6.5rem;
  width: 100%;

  .similar-products {
    &__title {
      font-size: 1.25rem;
      text-transform: uppercase;
      font-weight: ${props => props.theme.typography.fontWeight.light};
      padding-left: calc((100vw - 75rem) / 2);
      padding-right: calc((100vw - 75rem) / 2);
    }

    &__list {
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-behavior: smooth;
      flex-wrap: nowrap;
      scroll-snap-type: x mandatory;
      padding-bottom: 2.5rem;

      &::-webkit-scrollbar {
        height: 1px;
      }

      &::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.disabled};
        margin-left: calc((100vw - 75rem) / 2);
        margin-right: calc((100vw - 75rem) / 2);
      }

      &::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.secondary};
        border-radius: 0;
      }
    }

    &__spacer {
      flex: 0 0 auto;
      width: calc((100vw - 75rem) / 2);
      scroll-snap-align: start;
      pointer-events: none;
    }

    &__item {
      flex: 0 0 auto;
      scroll-snap-align: start;
      border-top: 0.5px solid ${props => props.theme.colors.border};
      border-bottom: 0.5px solid ${props => props.theme.colors.border};
      border-right: 0.5px solid ${props => props.theme.colors.border};
      cursor: pointer;

      &:nth-child(2) {
        border-left: 0.5px solid ${props => props.theme.colors.border};
      }
    }
  }
`;

export default SimilarProductsStyled;
