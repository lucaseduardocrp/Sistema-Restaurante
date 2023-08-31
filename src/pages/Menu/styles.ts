import styled from 'styled-components';

export const Container = styled.div`
  section {
    h2 {
      margin-bottom: 7rem;
    }
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

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  place-items: center;
  gap: 2rem;
  margin-top: 7rem;
`;
