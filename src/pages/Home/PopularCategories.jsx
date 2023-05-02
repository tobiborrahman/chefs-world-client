import React from 'react';

const PopularCategories = () => {
	return (
		<div className="mt-40">
			<h1 className="text-6xl text-center uppercase">Who we are</h1>
			<hr className="mx-auto text-orange-700 w-10 h-2 font-bold mt-10" />
			<h3 className="text-7xl text-center italic">
				Everything You Want to Know
			</h3>

			<div className="flex align-middle justify-between mx-20 mt-20">
				<div className="w-80">
					<img src="../../../public/img_3.jpg" alt="" />
					<h4 className="text-2xl uppercase mt-8">Fresh Taste</h4>
					<p className="mt-4 text-gray-400">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Optio culpa rem nobis perferendis quos quod magni
						aliquam placeat nesciunt magnam.
					</p>
				</div>
				<div className="w-80">
					<img src="../../../public/img_4.jpg" alt="" />
					<h4 className="text-2xl uppercase mt-8">Made With Love</h4>
					<p className="mt-4 text-gray-400">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Optio culpa rem nobis perferendis quos quod magni
						aliquam placeat nesciunt magnam.
					</p>
				</div>
				<div className="w-80">
					<img src="../../../public/img_5.jpg" alt="" />
					<h4 className="text-2xl uppercase mt-8">
						test the difference
					</h4>
					<p className="mt-4 text-gray-400">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Optio culpa rem nobis perferendis quos quod magni
						aliquam placeat nesciunt magnam.
					</p>
				</div>
			</div>
		</div>
	);
};

export default PopularCategories;
