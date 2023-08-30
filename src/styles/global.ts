import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root{
    --xs: 1.2rem;
    --sm: 1.4rem;
    --base: 1.6rem;
    --lg: 1.8rem;
    --xl: 2rem;
    --2xl: 2.4rem;
    --3xl: 3.2rem;
    --4xl: 3.6rem;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  html{
    font-size: 62.5%;
    font-family: ${({ theme }) => theme.FONTS.ROBOTO};
    scroll-behavior: smooth;
    overflow-x: hidden;
  }

  body{
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    background: ${({ theme }) => theme.COLORS.LIGHT_100};
    margin-top: 7rem;
  }

  section{
    width: 100%;
    height: 100%;
    padding: 10rem max(calc((100% - 144rem) / 2), 2rem);
  }

  a{
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
  }

  @media (max-width: 48rem) {
    section{
      padding: 4rem max(calc((100% - 144rem) / 2), 2rem);
    }
  }
`;

export default GlobalStyles;
