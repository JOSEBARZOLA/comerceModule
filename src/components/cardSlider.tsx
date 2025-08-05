import '../assets/sass/_cardSlider.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';



// Componente Card
import Card from './card';

function CardSlider() {
  return (
    <section className="section">
      <section className="section">

        <div className="card-wrapper">
          <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop={true}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {/* Renderizamos múltiples Card con SwiperSlide */}
            {[...Array(10)].map((_, index) => (
              <SwiperSlide className='swiper-slide' key={index}>
                <Card />
              </SwiperSlide>
            ))}
            <div className="swiper-slide-button swiper-button-prev"></div>
            <div className="swiper-slide-button swiper-button-next"></div>
          </Swiper>
        </div>  
      </section>
    </section>
  );
}

export default CardSlider;