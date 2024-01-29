import React from 'react';

const Banner = () => {
	return (
		<div
			style={{
				backgroundImage: `url('https://i.ibb.co/34fzQCd/food-5.jpg')`,
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
				width: '100%',
				backgroundPosition: 'center',
				height: '710px',
			}}
		>
			<div className="custom-container">
				<div className="flex align-middle justify-center text-center pt-56">
					<div>
						<h1 className="md:text-7xl text-white  font-mono font-bold ">
							Enjoy Delicious & Wonderful <br />
							Eating Experience
						</h1>

						<button className="py-3 px-5 mt-4 text-white bg-orange-600 font-bold hover:bg-orange-700 duration-300">
							View Full Menu
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Banner;
