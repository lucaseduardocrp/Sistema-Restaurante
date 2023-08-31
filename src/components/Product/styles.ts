import styled from 'styled-components';

export const Container = styled.div`
  img {
    width: 16rem;
    height: 16rem;
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
`;
