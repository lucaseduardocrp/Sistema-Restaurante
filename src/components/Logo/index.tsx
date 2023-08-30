import { Link } from 'react-router-dom';
import Logo_Image from '../../assets/Logo.svg';

import { Container } from './styles';

export const Logo = () => {
  return (
    <Container>
      <Link to="/">
        <h1>
          <img src={Logo_Image} alt="Bravus Burger Logo" />
        </h1>
      </Link>
    </Container>
  );
};
