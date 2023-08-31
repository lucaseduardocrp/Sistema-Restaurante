import { filterInfo } from '../../modules/filterInfo';
import { Container, Filter, FilterItem, Carousel } from './styles';

export const FilterMenu = () => {
  return (
    <Container>
      <Carousel>
        <Filter>
          {filterInfo.map((item) => (
            <FilterItem key={item.id}>
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
            </FilterItem>
          ))}
        </Filter>
      </Carousel>
    </Container>
  );
};
