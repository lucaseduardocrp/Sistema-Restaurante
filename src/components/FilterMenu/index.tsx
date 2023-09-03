import { BASE_URL } from '../../services/api';
import { DataCategory } from '../../types/data-category';
import { Container, Filter, FilterItem } from './styles';

interface Props {
  categories: DataCategory[];
  setProducts: (id: string) => Promise<void>;
}

export const FilterMenu = ({ categories, setProducts }: Props) => {
  return (
    <Container>
      <Filter>
        {categories.map((category) => (
          <FilterItem key={category.id} onClick={() => setProducts(category.id!)}>
            <img src={`${BASE_URL}/files/${category.banner}`} alt={category.name} />
            <h3>{category.name}</h3>
          </FilterItem>
        ))}
      </Filter>
    </Container>
  );
};
