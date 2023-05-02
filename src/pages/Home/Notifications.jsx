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
			className="mt-10"
		>
			<h2 className="text-2xl font-bold text-orange-400 pt-10">
				This is notification
			</h2>
		</div>
	);
};

export default Notifications;
