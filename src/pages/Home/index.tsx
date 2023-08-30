import { sliderImages } from '../../modules/slider-images';
import { Container, SliderContainer, Mask } from './styles';

import { Swiper, SwiperSlide } from 'swiper/react';

export const Home = () => {
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
    </Container>
  );
};
