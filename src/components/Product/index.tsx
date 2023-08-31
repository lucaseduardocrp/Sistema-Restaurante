import { Link } from 'react-router-dom';
import { Container } from './styles';
import { useEffect, useState } from 'react';
import { ProductTypes } from '../../types/products';

export const Product = () => {
  const [data, setData] = useState<ProductTypes[]>([]);

  useEffect(() => {
    async function getData() {
      fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data: ProductTypes[]) => {
          const products = data;

          setData(products);
        });
    }

    getData();
  }, []);

  return (
    <>
      {data.map((item) => (
        <Container key={item.id}>
          <Link to={`${item.id}`}>
            <img src={item.image} alt={item.name} />
            <h4>{item.name}</h4>
            <span>R$ {item.price}</span>
          </Link>
        </Container>
      ))}
    </>
  );
};
