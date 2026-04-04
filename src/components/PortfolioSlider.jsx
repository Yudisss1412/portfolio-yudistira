import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Keyboard, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import HeroProfile from './HeroProfile';
import ProjectShowcase from './ProjectShowcase';
import DarkModeToggle from './DarkModeToggle';

const PortfolioSlider = () => {
  return (
    <div className="portfolio-slider">
      <DarkModeToggle />
      <Swiper
        modules={[Navigation, Pagination, Keyboard, EffectFade]}
        effect="slide"
        direction="horizontal"
        spaceBetween={0}
        slidesPerView={1}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        pagination={{
          el: '.swiper-pagination',
          clickable: true,
          dynamicBullets: true,
        }}
        keyboard={{
          enabled: true,
        }}
        speed={800}
        className="h-screen"
      >
        {/* Slide 1: Hero & Profile */}
        <SwiperSlide>
          <HeroProfile />
        </SwiperSlide>

        {/* Slide 2: Project Showcase */}
        <SwiperSlide>
          <ProjectShowcase />
        </SwiperSlide>

        {/* Custom Navigation Buttons */}
        <div className="swiper-button-next custom-nav"></div>
        <div className="swiper-button-prev custom-nav"></div>
        
        {/* Custom Pagination */}
        <div className="swiper-pagination"></div>
      </Swiper>

      {/* Custom Styles for Navigation */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          width: 36px !important;
          height: 36px !important;
          background: transparent;
          transition: all 0.3s ease;
        }

        .swiper-button-next svg,
        .swiper-button-prev svg {
          width: 18px !important;
          height: 18px !important;
          stroke: #9ca3af !important;
          stroke-width: 2 !important;
          transition: all 0.3s ease;
        }

        .swiper-button-next:hover svg,
        .swiper-button-prev:hover svg {
          stroke: #f59e0b !important;
        }

        .swiper-button-next {
          right: 16px !important;
        }

        .swiper-button-prev {
          left: 16px !important;
        }

        @media (max-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            display: none !important;
          }
        }

        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: #d1d5db;
          opacity: 1;
          transition: all 0.3s ease;
        }

        .swiper-pagination-bullet-active {
          background: #f59e0b;
          width: 28px;
          border-radius: 5px;
        }

        .swiper-pagination {
          bottom: 24px !important;
        }
      `}</style>
    </div>
  );
};

export default PortfolioSlider;
