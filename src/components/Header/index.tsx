/* eslint-disable react-hooks/exhaustive-deps */
import { HeaderContainer, Navbar, MobileMenu, TableIcon, TableButton } from './styles';

import { useEffect, useState } from 'react';

import { Logo } from '../Logo';
import { Link } from 'react-router-dom';

import { FiMenu } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import { AiTwotoneAppstore } from 'react-icons/ai';
import { Button } from '../Button';

const Header = () => {
  const [active, setActive] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  useEffect(() => {
    const closeMenu = () => {
      setActive(false);
    };

    window.addEventListener('scroll', closeMenu);

    return () => {
      window.removeEventListener('scroll', closeMenu);
    };
  }, []);

  return (
    <HeaderContainer id="header">
      <Navbar>
        <Logo />

        <ul className={active ? 'navlinks' : 'navlinks close'}>
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
        </ul>

        <TableButton>
          <a href="https://tables-restaurant.vercel.app/" target="_blank">
            <Button>Ver mesas</Button>
          </a>
        </TableButton>

        <MobileMenu onClick={handleActive}>
          <TableIcon>
            <a href="https://tables-restaurant.vercel.app/" target="_blank">
              <AiTwotoneAppstore size={18} color="#fff" />
            </a>
          </TableIcon>
          {active ? <IoClose size={30} /> : <FiMenu size={30} />}
        </MobileMenu>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
