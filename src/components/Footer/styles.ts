import styled from 'styled-components';
import { Flex } from '../../styles/mixins';

export const HeaderContainer = styled.section`
  padding: 6rem max(calc((100% - 144rem) / 2), 2rem);
  background: ${({ theme }) => theme.COLORS.PRIMARY};

  h2,
  h3 {
    font-size: var(--xl);
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.LIGHT_100};
    text-align: center;
    margin-bottom: 2.4rem;
  }

  h2 a {
    text-decoration: underline;
  }

  h3 strong {
    font-size: var(--sm);
    font-weight: 500;
  }
`;

export const Container = styled.footer`
  padding: 2rem max(calc((100% - 144rem) / 2), 2rem);
`;

export const Navalinks = styled.ul`
  ${Flex};
  gap: 2rem;

  li a {
    font-size: var(--base);
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.DARK_200};
  }

  @media (max-width: 48rem) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const FlexContainer = styled.div`
  ${Flex};
  justify-content: space-between;
  gap: 2.4rem;

  @media (max-width: 48rem) {
    justify-content: center;
    flex-direction: column;
  }
`;

export const SocialIcons = styled.div`
  ${Flex};
  gap: 2rem;

  .icon {
    width: 3rem;
    height: 3rem;
    color: ${({ theme }) => theme.COLORS.PRIMARY};
  }
`;

export const MaskContainer = styled.div`
  ${Flex};
  padding: 6rem max(calc((100% - 144rem) / 2), 2rem);
  position: relative;

  p {
    max-width: 56rem;
    font-size: var(--sm);
    font-weight: 500;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.DARK_200};
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 3.2rem;
    background: url('/Mask2.svg');
    background-repeat: no-repeat;
  }

  &::after {
    top: 0;
    left: 0;
  }

  &::before {
    bottom: 0;
    left: 0;
  }
`;
