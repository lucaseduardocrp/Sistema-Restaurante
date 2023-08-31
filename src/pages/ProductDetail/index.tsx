import { FilterMenu } from '../../components/FilterMenu';
import { ProductCard } from '../../components/ProductCard';
import { Title } from '../../components/Title';
import { Container, Mask, CardContainer } from './styles';

export const ProductDetail = () => {
  return (
    <Container>
      <Mask></Mask>

      <section>
        <Title>MENU COMPLETO BRAVUSBURGER</Title>
        <FilterMenu />

        <CardContainer>
          <ProductCard />
        </CardContainer>
      </section>
    </Container>
  );
};
