import React from 'react';
import img_3 from '/img_3.jpg';
import img_4 from '/img_4.jpg';
import img_5 from '/img_5.jpg';

const PopularCategories = () => {
	return (
		<div className="bg-[#151920]">
			<div className="custom-container">
				<div className="py-32">
					<h1 className="text-4xl md:text-5xl text-center text-white uppercase">
						Who we are
					</h1>
					<hr className="mx-auto text-orange-900 w-10 border-2 border-orange-400 font-bold mt-6 mb-4" />
					<h3 className="text-4xl md:text-5xl text-white font-mono text-center italic">
						Everything You Want to Know
					</h3>

					<div className="md:flex align-middle justify-between mx-3 md:mx-20 mt-20">
						<div className="text-center md:text-left md:w-80">
							<img src={img_3} alt="" />
							<h4 className="text-2xl text-white uppercase mt-8">
								Fresh Taste
							</h4>
							<p className="mt-4 text-gray-400">
								We make our food from fresh material. So, it's
								been an experience of having the most fresh
								taste every time. Be connected with us to get
								fresh taste always. You are welcome to a fresh
								taste world.
							</p>
						</div>
						<div className="text-center md:text-left mt-14 md:mt-0 md:w-80">
							<img src={img_4} alt="" />
							<h4 className="text-2xl text-white uppercase mt-8">
								Made With Love
							</h4>
							<p className="mt-4 text-gray-400">
								We make our food in a loveable way. You just can
								not ignore us if you visit us once. We make our
								food with love and freshness. We love our
								customers and always think great about them.
							</p>
						</div>
						<div className="text-center md:text-left mt-14 md:mt-0 md:w-80">
							<img src={img_5} alt="" />
							<h4 className="text-2xl text-white uppercase mt-8">
								test the difference
							</h4>
							<p className="mt-4 text-gray-400">
								We always try to make you taste the difference.
								We try many different dishes every day and you
								will just love those dishes. Every time you
								visit us, surely you will taste the difference
								every time.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PopularCategories;
