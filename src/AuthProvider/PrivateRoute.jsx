import React, { createContext } from 'react';
import { getAuth } from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const PrivateRoute = () => {
	return (
		<div>
			<h2>This is pri</h2>
		</div>
	);
};

export default PrivateRoute;
