import { FilterMenu } from '../../components/FilterMenu';
import { Product } from '../../components/Product';
import { Title } from '../../components/Title';
import { Container, Mask, Grid } from './styles';

export const Menu = () => {
  return (
    <Container>
      <Mask></Mask>

      <section>
        <Title>MENU COMPLETO BRAVUSBURGER</Title>
        <FilterMenu />

        <Grid>
          <Product />
        </Grid>
      </section>
    </Container>
  );
};
