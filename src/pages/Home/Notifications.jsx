import React from 'react';
import img_2 from '../../../public/img_2.jpg';

const Notifications = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${img_2})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				height: '300px',
			}}
			className="pl-10 pt-2"
		>
			<div>
				<h2 className="text-2xl font-bold text-orange-400 pt-16">
					Never Miss A Recipe!
				</h2>
				<p className="font-semibold my-1">
					Join thousands of{' '}
					<span className="text-orange-400">Chefs World</span>{' '}
					subscribers and get our best recipes delivered each week!
				</p>
			</div>
			<div className="form-control ">
				<div className="my-3">
					<input
						type="text"
						placeholder="Your Email Address"
						className="rounded-l-full py-2 pl-2 w-[500px] bg-gray-200 text-orange-600"
					/>
					<button className="bg-orange-600 w-40 rounded-l-full rounded-r-full -ml-10 py-2 text-white px-2">
						Subscribe
					</button>
				</div>
				<div className="flex">
					<input
						className="mr-5"
						type="checkbox"
						name="checkbox"
						id=""
					/>{' '}
					<p>
						I have read and agree to the{' '}
						<span className="link hover:no-underline">
							terms & conditions
						</span>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Notifications;
