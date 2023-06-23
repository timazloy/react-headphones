import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


export default () => {
    SwiperCore.use([Autoplay])
    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 4000,
            }}
            speed={1500}
            pagination={{ clickable: true }}
            loop={true}
        >
            <SwiperSlide>
                <img src="img/slider/1.png" alt="slide"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/slider/2.png" alt="slide"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/slider/3.png" alt="slide"/>
            </SwiperSlide>

        </Swiper>
    );
};
