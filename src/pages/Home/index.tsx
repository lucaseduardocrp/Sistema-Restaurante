import { useEffect, useState } from 'react';
import { FilterMenu } from '../../components/FilterMenu';
import { Title } from '../../components/Title';
import { promotionsImages } from '../../modules/promotions-images';
import { sliderImages } from '../../modules/slider-images';
import { Container, SliderContainer, Mask, PromotionsContainer } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';

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

      <section>
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
      </section>
    </Container>
  );
};
