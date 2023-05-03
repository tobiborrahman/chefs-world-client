import React from 'react';
// import img_1 from '../../../public/img_1.jpg';

const Banner = () => {
	return (
		<div
			style={{
				backgroundImage: `url('../../../public/food-5.jpg')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '710px',
			}}
		>
			<div className="flex align-middle justify-center text-center pt-56">
				<div>
					<h1 className="text-7xl text-white  font-mono font-bold ">
						Enjoy Delicious & Wonderful <br />
						Eating Experience
					</h1>

					<button className="py-3 px-5 mt-4 bg-orange-600 font-bold hover:bg-orange-700">
						View Full Menu
					</button>
				</div>
			</div>
		</div>
	);
};

export default Banner;
