import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';

import { Circles } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
	const { user, loading } = useContext(AuthContext);
	const location = useLocation();
	console.log(location);

	if (loading) {
		return (
			<div>
				<h1 className="text-5xl">Loading...</h1>
				<Circles
					height="80"
					width="80"
					color="#4fa94d"
					ariaLabel="circles-loading"
					wrapperStyle={{}}
					wrapperClass=""
					visible={true}
				/>
			</div>
		);
	}

	if (user) {
		return children;
	}
	return <Navigate state={{ from: location }} to="/login" replace></Navigate>;
};

export default PrivateRoute;
