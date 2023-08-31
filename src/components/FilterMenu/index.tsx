import { Container, Filter, FilterItem, Carousel } from './styles';

export const FilterMenu = () => {
  return (
    <Container>
      <Carousel>
        <Filter>
          <FilterItem>
            <img src="https://i.pinimg.com/564x/ce/4e/68/ce4e6892298ce665e4af40221fa4974c.jpg" alt="Filter Item" />
            <h3>Menu principal</h3>
          </FilterItem>
          <FilterItem>
            <img src="https://i.pinimg.com/564x/ce/4e/68/ce4e6892298ce665e4af40221fa4974c.jpg" alt="Filter Item" />
            <h3>Combos Menu</h3>
          </FilterItem>
          <FilterItem>
            <img src="https://i.pinimg.com/564x/ce/4e/68/ce4e6892298ce665e4af40221fa4974c.jpg" alt="Filter Item" />
            <h3>Happy Hour</h3>
          </FilterItem>
          <FilterItem>
            <img src="https://i.pinimg.com/564x/ce/4e/68/ce4e6892298ce665e4af40221fa4974c.jpg" alt="Filter Item" />
            <h3>Para a Criançada</h3>
          </FilterItem>
          <FilterItem>
            <img src="https://i.pinimg.com/564x/ce/4e/68/ce4e6892298ce665e4af40221fa4974c.jpg" alt="Filter Item" />
            <h3>Bebidas</h3>
          </FilterItem>
        </Filter>
      </Carousel>
    </Container>
  );
};
