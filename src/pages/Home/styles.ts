import styled from 'styled-components';
import { Flex } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const MenuContainer = styled.section`
  position: relative;

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 4rem;
    background: url('/axemask.svg');
    z-index: 10;
  }

  h2 {
    margin-bottom: 7rem;
  }
`;

export const PromotionsContainer = styled.div`
  margin-top: 7rem;

  .slide {
    ${Flex};
  }

  img {
    width: 46rem;
    height: 34.4rem;
    object-fit: cover;
  }

  @media (max-width: 26.6rem) {
    .slide {
      img {
        width: 34rem;
        height: 24.4rem;
      }
    }
  }
`;

export const FilterMenu = styled.div`
  ${Flex}
`;

export const SliderContainer = styled.div`
  background: ${({ theme }) => theme.COLORS.PRIMARY};
  overflow: hidden;

  .slide-image {
    position: relative;
    width: 100%;
    height: 100%;
    max-height: 70rem;
    object-fit: contain;
  }
`;

export const Mask = styled.div`
  width: 100%;
  height: 4.2rem;
  z-index: 100;
  background: url('/Mask.svg');
  background-size: cover;
  background-repeat: no-repeat;
`;

export const SocialContainer = styled.section`
  ${Flex};
  flex-direction: column;

  h2,
  b {
    font-size: var(--4xl);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.DARK_200};
    text-align: center;
    max-width: 82rem;
    margin-bottom: 7rem;
  }

  b {
    color: ${({ theme }) => theme.COLORS.PRIMARY};

    &:nth-child(1) {
      font-family: ${({ theme }) => theme.FONTS.RAMPART_ONE};
      font-size: var(--3xl);
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.8rem;

  @media (max-width: 64rem) {
    grid-template-columns: repeat(4, 1fr);

    img {
      width: 14rem;
      height: 14rem;
      object-fit: cover;
    }
  }

  @media (max-width: 40.125rem) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
