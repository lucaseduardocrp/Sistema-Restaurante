import styled from 'styled-components';

export const Container = styled.h2`
  font-size: var(--4xl);
  font-family: ${({ theme }) => theme.FONTS.RAMPART_ONE};
  color: ${({ theme }) => theme.COLORS.PRIMARY};
  text-align: center;
  text-transform: uppercase;
`;
