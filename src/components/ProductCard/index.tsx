import { useCallback, useEffect, useState } from 'react';
import { Container, Igredient, DescriptionContainer } from './styles';

import { useParams } from 'react-router-dom';
import { Title } from '../Title';
import { DataProduct } from '../../types/data-product';
import { useFetch } from '../../hooks/useFetch';
import { GET_PRODUCT } from '../../services/productMenager/getProduct';
import { BASE_URL } from '../../services/api';

export const ProductCard = () => {
  const { id } = useParams();
  const [data, setData] = useState<DataProduct>();
  const { request } = useFetch();

  const getProduct = useCallback(async () => {
    if (!id) return;

    const { url, options } = GET_PRODUCT(id);
    const json = await request(url, options);

    if (json) setData(json);
  }, [id, request]);

  useEffect(() => {
    getProduct();
  }, [getProduct]);

  return (
    <>
      {data && (
        <Container>
          <img src={`${BASE_URL}/files/${data.banner}`} alt={data.name} />
          <DescriptionContainer>
            <Title>Vinking Burger</Title>
            <p>{data.description}</p>

            <Igredient>
              {data.observations?.map((item) => (
                <img src={`${BASE_URL}/files/${item.banner}`} alt={item.name} key={item.id} />
              ))}
            </Igredient>
          </DescriptionContainer>
        </Container>
      )}
    </>
  );
};
