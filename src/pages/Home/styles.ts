import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
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
  height: 20rem;
  z-index: 100;
  background: url('/Mask.svg');
  background-size: contain;
  background-repeat: no-repeat;
`;
