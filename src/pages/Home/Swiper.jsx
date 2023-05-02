import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Swipe = () => {
	return (
		<Swiper
			slidesPerView={1}
			onSlideChange={() => console.log('slide change')}
			onSwiper={(swiper) => console.log(swiper)}
		>
			<SwiperSlide>
				<img src="../../../public/img_1.jpg" alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="../../../public/img_2.jpg" alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="../../../public/img_3.jpg" alt="" />
			</SwiperSlide>
			<SwiperSlide>
				<img src="../../../public/img_4.jpg" alt="" />
			</SwiperSlide>
			...
		</Swiper>
	);
};

export default Swipe;
