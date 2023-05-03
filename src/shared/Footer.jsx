import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
	return (
		<footer className="bg-[#0E1317]">
			<div className="container mx-auto py-8 px-4">
				<div className="flex flex-wrap">
					<div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
						<h4 className="text-white text-lg font-semibold mb-4">
							About Us
						</h4>
						<p className="text-gray-400 leading-loose">
							At ChefsWorld, we are passionate about creating
							delicious and healthy meals that will delight your
							taste buds.
						</p>
					</div>
					<div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
						<h4 className="text-white text-lg font-semibold mb-4">
							Contact Us
						</h4>
						<p className="text-gray-400 leading-loose">
							123 Main St.
							<br />
							Suite 456
							<br />
							Anytown, USA
							<br />
							555-555-5555
							<br />
							info@chefname.com
						</p>
					</div>
					<div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
						<h4 className="text-white text-lg font-semibold mb-4">
							Follow Us
						</h4>
						<div className="flex">
							<a
								href="#"
								className="mr-4 text-3xl text-gray-400 hover:text-white"
							>
								<FaFacebook />
							</a>
							<a
								href="#"
								className="mr-4 text-3xl text-gray-400 hover:text-white"
							>
								<FaInstagram />
							</a>
							<a
								href="#"
								className="mr-4 text-3xl text-gray-400 hover:text-white"
							>
								<FaTwitter />
							</a>
							<a
								href="#"
								className="mr-4 text-3xl text-gray-400 hover:text-white"
							>
								<FaYoutube text-3xl />
							</a>
						</div>
					</div>
					<div className="w-full md:w-1/3 lg:w-1/4 mb-8 md:mb-0">
						<h4 className="text-white text-lg font-semibold mb-4">
							Subscribe
						</h4>
						<form>
							<div className="flex flex-wrap mb-4">
								<div className="w-full">
									<input
										type="email"
										placeholder="Enter your email"
										className="border border-gray-600 px-2 py-1 w-full text-gray-400"
									/>
								</div>
							</div>
							<button className="bg-gray-800 text-white py-2 px-4 rounded">
								Subscribe
							</button>
						</form>
					</div>
				</div>
				<div className="mt-8 text-center">
					<p className="text-gray-400">
						&copy; {new Date().getFullYear()} ChefsWorld. All rights
						reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
