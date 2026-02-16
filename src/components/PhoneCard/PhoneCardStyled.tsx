import styled from 'styled-components';

const PhoneCardStyled = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.l};
  height: 21.5rem;
  width: 100%;
  padding: ${props => props.theme.spacing.m};
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: ${props => props.theme.colors.secondary};
    transform: scaleY(0);
    transform-origin: bottom;
    transition: transform 1000ms cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 0;
  }

  &:hover::after {
    transform: scaleY(1);
  }

  .phone-card {
    &__image,
    &__info {
      position: relative;
      z-index: 1;
    }

    &__image {
      width: 100%;
      aspect-ratio: 1/1;
      object-fit: contain;
      max-height: calc(100% - (1.875rem + ${props => props.theme.spacing.l}));
    }

    &__info {
      display: flex;
      flex-direction: column;
      gap: ${props => props.theme.spacing.xs};
      height: 1.875rem;
      transition: color 300ms ease-in;
    }

    &__info-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    &__brand {
      color: ${props => props.theme.colors.text.secondary};
      font-size: ${props => props.theme.typography.fontSize.xxs};
      font-weight: ${props => props.theme.typography.fontWeight.light};
      text-transform: uppercase;
      transition: color 300ms ease;
    }

    &__name,
    &__price {
      color: ${props => props.theme.colors.text.primary};
      font-size: ${props => props.theme.typography.fontSize.xs};
      font-weight: ${props => props.theme.typography.fontWeight.light};
      text-transform: uppercase;
      transition: color 300ms ease;
    }
  }

  &:hover {
    .phone-card__brand {
      color: ${props => props.theme.colors.text.secondaryHover};
    }

    .phone-card__name,
    .phone-card__price {
      color: ${props => props.theme.colors.text.primaryHover};
    }
  }

  @media (min-width: 834px) and (max-width: 1023px) {
    height: 23.563rem;
  }

  @media (max-width: 833px) {
    height: 21.5rem;
  }
`;

export default PhoneCardStyled;
