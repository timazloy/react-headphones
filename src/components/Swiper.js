import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default () => {
    return (
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img src="/slide.png" alt="slide"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/slide.png" alt="slide"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/slide.png" alt="slide"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="/slide.png" alt="slide"/>
            </SwiperSlide>

        </Swiper>
    );
};
