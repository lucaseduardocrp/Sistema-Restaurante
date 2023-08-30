import styled from 'styled-components';

export const Container = styled.section`
  h2 {
    margin-bottom: 7rem;
  }
`;

export const Card = styled.div`
  img {
    width: 34rem;
    height: 44rem;
  }

  h3 {
    font-size: var(--2xl);
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
  h4 {
    font-size: var(--base);
    font-weight: 700;
  }
`;

export const Box = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(34rem, 1fr));
  place-items: center;
  gap: 3.2rem;

  @media (max-width: 48rem) {
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  }
`;

export const Banner = styled.div`
  img {
    width: 100%;
    object-fit: cover;
  }
`;
