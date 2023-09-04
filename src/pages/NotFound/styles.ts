import styled from 'styled-components';
import { Flex } from '../../styles/mixins';

export const Container = styled.div`
  ${Flex};
  flex-direction: column;
  width: 100%;
  min-height: 90vh;
  text-align: center;
  position: relative;

  .text {
    ${Flex};
    flex-direction: column;
    gap: 2rem;
    z-index: 20;

    h1 {
      font-size: var(--4xl);
      font-family: ${({ theme }) => theme.FONTS.RAMPART_ONE};
      color: ${({ theme }) => theme.COLORS.PRIMARY};
      margin-bottom: 2rem;
    }

    h2 {
      font-size: var(--xl);
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.DARK_200};
    }
  }

  p {
    font-size: 22rem;
    font-weight: 900;
    color: ${({ theme }) => theme.COLORS.DARK_100};
    opacity: 0.06;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
  }
`;
