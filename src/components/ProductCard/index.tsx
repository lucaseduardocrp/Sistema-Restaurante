import { useEffect, useState } from 'react';
import { Container, Igredient, DescriptionContainer } from './styles';

import { ProductTypes } from '../../types/products';
import { useParams } from 'react-router-dom';
import { Title } from '../Title';

export const ProductCard = () => {
  const [data, setData] = useState<ProductTypes>();
  const { id } = useParams();

  useEffect(() => {
    async function getData() {
      fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data: ProductTypes) => {
          const products = data;

          setData(products);
        });
    }

    getData();
  }, [id]);

  return (
    <>
      {data && (
        <Container>
          <img src={data.image} alt={data.name} />
          <DescriptionContainer>
            <Title>Vinking Burger</Title>
            <p>{data.description}</p>

            <Igredient>
              <img
                src="https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/SELO-Lactose_vermelho.png"
                alt="ingredient"
              />
              <img
                src="https://cdn.outback.com.br/wp-data/wp-content/uploads/2018/10/SELO-Lactose_vermelho.png"
                alt="ingredient"
              />
            </Igredient>
          </DescriptionContainer>
        </Container>
      )}
    </>
  );
};
