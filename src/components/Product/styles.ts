import styled from 'styled-components';

export const Container = styled.div`
  img {
    width: 22.4rem;
    height: 22.4rem;
    object-fit: cover;
  }

  h4 {
    font-size: var(--base);
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.DARK_100};
  }

  span {
    font-size: var(--sm);
    font-weight: 500;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }

  @media (max-width: 48rem) {
    img {
      width: 14rem;
      height: 14rem;
    }
  }
`;
