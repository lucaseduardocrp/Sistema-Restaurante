import { useCallback, useEffect, useState } from 'react';
import { FilterMenu } from '../../components/FilterMenu';
import { Product } from '../../components/Product';
import { Title } from '../../components/Title';
import { DataProduct } from '../../types/data-product';
import { Container, Mask, Grid } from './styles';
import { useFetch } from '../../hooks/useFetch';
import { DataCategory } from '../../types/data-category';
import { GET_CATEGORIES } from '../../services/productMenager/getAllCategories';
import { GET_PRODUCTS_BY_CATEGORY_ID } from '../../services/productMenager/getCategoryWithProducts';

export const Menu = () => {
  const [categories, setCategories] = useState<DataCategory[]>([]);
  const [products, setProducts] = useState<DataProduct[]>([]);

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
        <FilterMenu categories={categories} setProducts={(id: string) => getProducts(id)} />

        <Grid>
          <Product products={products} />
        </Grid>
      </section>
    </Container>
  );
};
