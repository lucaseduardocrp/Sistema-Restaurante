import { useCallback, useEffect, useState } from 'react';
import { FilterMenu } from '../../components/FilterMenu';
import { Title } from '../../components/Title';
import { promotionsImages } from '../../modules/promotions-images';
import { sliderImages } from '../../modules/slider-images';
import { Container, SliderContainer, Mask, PromotionsContainer, MenuContainer, SocialContainer, Grid } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { socialImages } from '../../modules/social-images';
import { DataCategory } from '../../types/data-category';
import { DataProduct } from '../../types/data-product';
import { useFetch } from '../../hooks/useFetch';
import { GET_PRODUCTS_BY_CATEGORY_ID } from '../../services/productMenager/getCategoryWithProducts';
import { GET_CATEGORIES } from '../../services/productMenager/getAllCategories';

import { Pagination } from 'swiper/modules';

export const Home = () => {
  const [slidePerView, setSlidePerView] = useState(3);

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

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1440 && window.innerWidth > 768) {
        setSlidePerView(2);
      } else if (window.innerWidth < 768) {
        setSlidePerView(1);
      } else {
        setSlidePerView(3);
      }
    }

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Container>
      <SliderContainer>
        <Swiper autoplay>
          {sliderImages.map((item) => (
            <SwiperSlide>
              <img src={item.image} alt="Promotion banner" className="slide-image" />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderContainer>
      <Mask></Mask>

      <MenuContainer>
        <Title>Explore o seu #MOMENTBRAVUS</Title>
        <FilterMenu categories={categories} setProducts={(id: string) => getProducts(id)} />

        <PromotionsContainer>
          <Swiper modules={[Pagination]} slidesPerView={slidePerView} className="slide" pagination={true}>
            {promotionsImages.map((item) => (
              <SwiperSlide>
                <img src={item.image} alt="Promotion banner" className="promotions-slide" />
              </SwiperSlide>
            ))}
          </Swiper>
        </PromotionsContainer>
      </MenuContainer>

      <SocialContainer>
        <h2>
          Bom mesmo é curtir um <b>#MOMENTBRAVUS</b> com quem a gente gosta. <b>Poste usando nossa hashtag.</b>
        </h2>

        <Grid>
          {socialImages.map((item) => (
            <img src={item.image} alt="Posts on instagram" key={item.id} />
          ))}
        </Grid>
      </SocialContainer>
    </Container>
  );
};
