import styled from 'styled-components';
import { Flex } from '../../styles/mixins';

export const Container = styled.section`
  ${Flex}
  flex-direction: column;
  gap: 7rem;
`;

export const Box = styled.div`
  iframe {
    width: 140rem;
    min-width: 34rem;
    height: 40rem;
    border: none;
    filter: grayscale(100%) contrast(50%);
  }
`;

export const Banner = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;
