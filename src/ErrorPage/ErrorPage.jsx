import React from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
	const navigate = useNavigate();
	const handleNavigate = () => {
		navigate('/');
	};
	return (
		<div className="relative">
			<img src="https://i.ibb.co/TgP4DpF/error-image.webp" alt="" />
			<button
				onClick={handleNavigate}
				className="absolute top-[68%] z-10 text-white font-bold left-[43%] bg-orange-600 hover:bg-orange-800 duration-300 py-3 px-7"
			>
				Go to Homepage
			</button>
		</div>
	);
};

export default ErrorPage;
