import { Link } from 'react-router-dom';
import { Container, HeaderContainer, Navalinks, FlexContainer, SocialIcons, MaskContainer } from './styles';
import { Logo } from '../Logo';

import { FaYoutube, FaInstagram, FaTiktok, FaFacebookSquare, FaTwitter } from 'react-icons/fa';

export const Footer = () => {
  return (
    <>
      <HeaderContainer>
        <h2>
          Procurando um Restaurante por perto? <Link to="/location">Consulte aqui</Link>
        </h2>
        <h3>
          SE BEBER, NÃO DIRIJA. <br /> <strong>VENDA E CONSUMO PROIBIDO PARA MENORES DE 18 ANOS</strong>
        </h3>
      </HeaderContainer>
      <Container>
        <FlexContainer>
          <Logo />

          <Navalinks>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/product">Menu</Link>
            </li>
            <li>
              <Link to="/chefs">Chefes</Link>
            </li>
            <li>
              <Link to="/about">Sobre nós</Link>
            </li>
            <li>
              <Link to="/location">Localidades</Link>
            </li>
          </Navalinks>
          <SocialIcons>
            <a href="https://www.instagram.com/" target="_blank">
              <FaInstagram className="icon" />
            </a>
            <a href="https://linktr.ee/tiktok" target="_blank">
              <FaTiktok className="icon" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <FaFacebookSquare className="icon" />
            </a>
            <a href="https://twitter.com/?lang=en" target="_blank">
              <FaTwitter className="icon" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <FaYoutube className="icon" />
            </a>
          </SocialIcons>
        </FlexContainer>
      </Container>
      <MaskContainer>
        <p>
          Copyright © 2023 Lucas Eduardo & Alexandre Retamero Todos os direitos reservados. Todas as marcas registradas
          são propriedade dos seus respectivos donos
        </p>
      </MaskContainer>
    </>
  );
};
