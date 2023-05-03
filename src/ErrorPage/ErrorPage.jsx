import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
	const error = useRouteError();
	return (
		<div>
			<img src="../../public/error-image.webp" alt="" />
			{/* <h2>This is error page</h2>
			<h1 className="text-center text-7xl text-red-600">
				<i>{error.statusText || error.message}</i>
			</h1> */}
		</div>
	);
};

export default ErrorPage;
