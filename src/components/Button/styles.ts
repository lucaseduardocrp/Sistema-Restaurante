import styled, { css } from 'styled-components';
import { Flex } from '../../styles/mixins';

export type ButtonTypes = {
  rounded?: 'rounded';
  text?: 'sm' | 'base' | 'lg';
  width?: 'full';
};

export const Container = styled.button<ButtonTypes>`
  ${({ theme, rounded, text, width }) => css`
    ${Flex};
    gap: 0.4rem;
    width: ${width === 'full' && '100%'};
    padding: 1rem 2.4rem;
    font-size: ${text === 'sm' ? 'var(--sm)' : text === 'base' ? 'var(--base)' : text === 'lg' && 'var(--lg)'};
    font-weight: 700;
    color: ${theme.COLORS.LIGHT_100};
    text-transform: uppercase;

    background: ${theme.COLORS.PRIMARY};
    border-radius: ${rounded === 'rounded' && '0.6rem'};
    border: none;

    cursor: pointer;

    &:active {
      opacity: 0.8;
    }
  `}
`;
