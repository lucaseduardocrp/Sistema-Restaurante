import styled from 'styled-components';
import { Flex } from '../../styles/mixins';

export const HeaderContainer = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  padding: 1rem max(calc((100% - 144rem) / 2), 2rem);
  background: ${({ theme }) => theme.COLORS.LIGHT_100};
  z-index: 1000;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const Navbar = styled.nav`
  ${Flex};
  justify-content: space-between;

  .navlinks {
    ${Flex};
    gap: 2rem;

    li a {
      font-size: var(--base);
      font-weight: 700;
      color: ${({ theme }) => theme.COLORS.DARK_200};
    }
  }

  @media (max-width: 48rem) {
    .navlinks {
      position: absolute;
      width: 100%;
      flex-direction: column;
      align-items: center;
      gap: 4rem;
      top: 7rem;
      left: 0;
      padding: 4rem;
      background: ${({ theme }) => theme.COLORS.LIGHT_100};
      border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.DARK_200};
      z-index: 1000;
    }
    .close {
      display: none;
    }
  }
`;

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 48rem) {
    ${Flex};
    gap: 2rem;
  }
`;

export const TableIcon = styled.div`
  display: none;

  a {
    ${Flex};
    width: 3rem;
    height: 3rem;
    background: ${({ theme }) => theme.COLORS.PRIMARY};
    border-radius: 50%;
  }

  @media (max-width: 48rem) {
    display: block;
  }
`;

export const TableButton = styled.div`
  @media (max-width: 48rem) {
    display: none;
  }
`;
