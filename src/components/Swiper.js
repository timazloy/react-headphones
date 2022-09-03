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
            // install Swiper modules
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            autoplay={{
                delay: 5000,
            }}
            speed={1500}
            // navigation
            pagination={{ clickable: true }}
            loop={true}
            // onSwiper={(swiper) => console.log(swiper)}
            // onSlideChange={() => console.log('slide change')}
        >
            <SwiperSlide>
                <img src="img/slider/1.1.png" alt="slide"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/slider/1.2.png" alt="slide"/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="img/slider/1.3.png" alt="slide"/>
            </SwiperSlide>

        </Swiper>
    );
};
