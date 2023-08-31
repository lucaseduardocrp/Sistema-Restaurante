import { styled } from 'styled-components';
import { Flex } from '../../styles/mixins';

export const Container = styled.div``;

export const Carousel = styled.div``;

export const Filter = styled.ul`
  ${Flex};
  gap: 1rem;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 48rem) {
    justify-content: start;
  }
`;

export const FilterItem = styled.li`
  ${Flex};
  flex-direction: column;
  gap: 0.6rem;
  flex-shrink: 0;

  h3 {
    font-size: var(--lg);
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  img {
    width: 21.5rem;
    height: 13rem;
    border-radius: 0.8rem;
  }
`;
