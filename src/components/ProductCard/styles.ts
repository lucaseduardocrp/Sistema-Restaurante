import styled from 'styled-components';
import { Flex } from '../../styles/mixins';

export const Container = styled.div`
  ${Flex};
  align-items: start;
  gap: 5.6rem;

  img {
    width: 51.8rem;
    height: 45.8rem;
  }

  @media (max-width: 48rem) {
    flex-wrap: wrap;
    gap: 2rem;

    img {
      width: 34rem;
      height: 34rem;
    }
  }
`;
export const DescriptionContainer = styled.div`
  ${Flex};
  flex-direction: column;
  align-items: start;
  max-width: 40rem;

  h2 {
    margin-bottom: 3.2rem !important;
  }

  p {
    font-size: var(--sm);
    font-weight: 500;
    line-height: 1.6;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
`;

export const Igredient = styled.div`
  ${Flex};
  justify-content: start;
  gap: 1.6rem;
  height: 8rem;
  margin: 2rem 0;

  img {
    width: 7rem;
    object-fit: contain;
  }
`;
