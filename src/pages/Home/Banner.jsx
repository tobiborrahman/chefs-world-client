import React from 'react';
// import Swipe from './Swiper';
import img_1 from '../../../public/img_1.jpg';

const Banner = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${img_1})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '710px',
			}}
		>
			<div className="flex align-middle justify-center text-center pt-72">
				<div>
					<h1 className="text-7xl font-bold text-orange-600">
						This is the main banner
					</h1>
					<p className="text-red-400 font-semibold">
						Lorem ipsum dolor sit, amet consectetur adipisicing
						elit.
					</p>
					<button className="p-3 bg-orange-600 font-bold">
						Order Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
