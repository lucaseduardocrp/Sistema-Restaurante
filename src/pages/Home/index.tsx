import { useEffect, useState } from 'react';
import { FilterMenu } from '../../components/FilterMenu';
import { Title } from '../../components/Title';
import { promotionsImages } from '../../modules/promotions-images';
import { sliderImages } from '../../modules/slider-images';
import { Container, SliderContainer, Mask, PromotionsContainer, MenuContainer, SocialContainer, Grid } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';
import { socialImages } from '../../modules/social-images';

export const Home = () => {
  const [slidePerView, setSlidePerView] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 1440 && window.innerWidth > 986) {
        setSlidePerView(2);
      } else if (window.innerWidth < 986) {
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
        <FilterMenu />

        <PromotionsContainer>
          <Swiper slidesPerView={slidePerView}>
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
