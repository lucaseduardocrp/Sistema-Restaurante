import { Link } from 'react-router-dom';
import { Container } from './styles';
import { DataProduct } from '../../types/data-product';
import { BASE_URL } from '../../services/api';

interface Props {
  products: DataProduct[];
}

export const Product = ({ products }: Props) => {
  return (
    <>
      {products.map((product) => (
        <Container key={product.id}>
          <Link to={`${product.id}`}>
            <img src={`${BASE_URL}/files/${product.banner}`} alt={product.name} />
            <h4>{product.name}</h4>
            <span>
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL'
              })}
            </span>
          </Link>
        </Container>
      ))}
    </>
  );
};
