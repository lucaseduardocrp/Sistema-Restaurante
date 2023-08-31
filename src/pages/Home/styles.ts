import styled from 'styled-components';
import { Flex } from '../../styles/mixins';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  section {
    h2 {
      margin-bottom: 7rem;
    }
  }
`;

export const PromotionsContainer = styled.div`
  margin-top: 7rem;

  img {
    width: 46rem;
    object-fit: cover;
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
