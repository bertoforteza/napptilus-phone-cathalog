import styled from 'styled-components';

const SimilarProductsStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.m};
  margin-bottom: 6.5rem;
  width: 100%;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    margin-bottom: 4rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-bottom: 2rem;
  }

  .similar-products {
    &__title {
      font-size: 1.25rem;
      text-transform: uppercase;
      font-weight: ${props => props.theme.typography.fontWeight.light};
      padding-left: calc((100vw - 75rem) / 2);
      padding-right: calc((100vw - 75rem) / 2);

      @media (max-width: 75rem) {
        padding-left: 6.25rem;
        padding-right: 6.25rem;
      }

      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        padding-left: 2.5rem;
        padding-right: 2.5rem;
        font-size: 1rem;
      }

      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        padding-left: 1rem;
        padding-right: 1rem;
        font-size: 0.875rem;
      }
    }

    &__list {
      display: flex;
      overflow-x: auto;
      overflow-y: hidden;
      scroll-behavior: smooth;
      flex-wrap: nowrap;
      scroll-snap-type: x mandatory;
      padding-bottom: 2.5rem;

      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        padding-bottom: 1.5rem;
      }

      &::-webkit-scrollbar {
        height: 1px;
      }

      &::-webkit-scrollbar-track {
        background: ${props => props.theme.colors.disabled};
        margin-left: calc((100vw - 75rem) / 2);
        margin-right: calc((100vw - 75rem) / 2);

        @media (max-width: ${props => props.theme.breakpoints.tablet}) {
          margin-left: 0;
          margin-right: 0;
        }

        @media (max-width: ${props => props.theme.breakpoints.mobile}) {
          margin-left: 0;
          margin-right: 0;
        }
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

      @media (max-width: 75rem) {
        width: 6.25rem;
      }

      @media (max-width: ${props => props.theme.breakpoints.tablet}) {
        width: 0;
      }

      @media (max-width: ${props => props.theme.breakpoints.mobile}) {
        width: 0;
      }
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
