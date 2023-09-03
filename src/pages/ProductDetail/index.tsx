import { useCallback, useEffect, useState } from 'react';
import { FilterMenu } from '../../components/FilterMenu';
import { ProductCard } from '../../components/ProductCard';
import { Title } from '../../components/Title';
import { Container, Mask, CardContainer } from './styles';
import { DataCategory } from '../../types/data-category';
import { DataProduct } from '../../types/data-product';
import { useFetch } from '../../hooks/useFetch';
import { GET_PRODUCTS_BY_CATEGORY_ID } from '../../services/productMenager/getCategoryWithProducts';
import { GET_CATEGORIES } from '../../services/productMenager/getAllCategories';

export const ProductDetail = () => {
  const [categories, setCategories] = useState<DataCategory[]>([]);
  const [, setProducts] = useState<DataProduct[]>([]);

  const { request: requestGetCategories } = useFetch();

  const { request: requestGetProducts } = useFetch();

  const getProducts = useCallback(
    async (categoryId: string) => {
      const { url, options } = GET_PRODUCTS_BY_CATEGORY_ID(categoryId);
      const json = await requestGetProducts(url, options);

      if (json) setProducts([...json]);
    },
    [requestGetProducts]
  );

  const getCategories = useCallback(async () => {
    const { url, options } = GET_CATEGORIES();
    const json = await requestGetCategories(url, options);

    if (json) {
      setCategories([...json]);
      const [category] = json;

      if (category) await getProducts(category.id);
    }
  }, [requestGetCategories, getProducts]);

  useEffect(() => {
    getCategories();
  }, [getCategories]);

  return (
    <Container>
      <Mask></Mask>

      <section>
        <Title>MENU COMPLETO BRAVUSBURGER</Title>
        <FilterMenu categories={categories} setProducts={(id) => getProducts(id)} />

        <CardContainer>
          <ProductCard />
        </CardContainer>
      </section>
    </Container>
  );
};
