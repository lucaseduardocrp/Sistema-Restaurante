import styled from 'styled-components';
import { Flex } from '../../styles/mixins';

export const Container = styled.section``;

export const Text = styled.div`
  max-width: 55rem;

  h2 {
    margin-bottom: 3.2rem;
    text-align: start;
  }

  p {
    font-size: var(--base);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.DARK_200};
  }
`;

export const Box = styled.div`
  ${Flex};
  flex-wrap: wrap;
  gap: 9.6rem;
  margin-bottom: 10rem;

  &:nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 48rem) {
    gap: 4rem;
    margin-bottom: 4rem;

    img {
      min-width: 34rem;
      max-width: 48rem;
    }
  }
`;

export const Banner = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;
