import React from 'react';
import img_3 from '../../../public/img_3.jpg';
import img_4 from '../../../public/img_4.jpg';
import img_5 from '../../../public/img_5.jpg';

const PopularCategories = () => {
	return (
		<div className="py-32 bg-[#151920]">
			<h1 className="text-5xl text-center text-white uppercase">
				Who we are
			</h1>
			<hr className="mx-auto text-orange-900 w-10 border-2 border-orange-400 font-bold mt-6 mb-4" />
			<h3 className="text-5xl text-white font-mono text-center italic">
				Everything You Want to Know
			</h3>

			<div className="md:flex align-middle justify-between mx-20 mt-20">
				<div className="md:w-80">
					<img src={img_3} alt="" />
					<h4 className="text-2xl text-white uppercase mt-8">
						Fresh Taste
					</h4>
					<p className="mt-4 text-gray-400">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Optio culpa rem nobis perferendis quos quod magni
						aliquam placeat nesciunt magnam.
					</p>
				</div>
				<div className="md:w-80">
					<img src={img_4} alt="" />
					<h4 className="text-2xl text-white uppercase mt-8">
						Made With Love
					</h4>
					<p className="mt-4 text-gray-400">
						Lorem ipsum dolor sit amet consectetur, adipisicing
						elit. Optio culpa rem nobis perferendis quos quod magni
						aliquam placeat nesciunt magnam.
					</p>
				</div>
				<div className="md:w-80">
					<img src={img_5} alt="" />
					<h4 className="text-2xl text-white uppercase mt-8">
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
