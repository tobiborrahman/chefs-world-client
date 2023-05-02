import React, { createContext, useEffect, useState } from 'react';
import {
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	getAuth,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
} from 'firebase/auth';
import app from '../firebase/firebase.config';

export const AuthContext = createContext('');
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const provider = new GoogleAuthProvider();

	const createUser = (email, password) => {
		return createUserWithEmailAndPassword(auth, email, password);
	};

	const logInUser = (email, password) => {
		return signInWithEmailAndPassword(auth, email, password);
	};

	const handleGoogleSignIn = () => {
		return signInWithPopup(auth, provider);
	};

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
			setUser(loggedUser);
		});
		return () => {
			unsubscribe();
		};
	}, []);

	const logOut = () => {
		return signOut(auth);
	};

	const authInfo = {
		user,
		logOut,
		createUser,
		logInUser,
		handleGoogleSignIn,
	};
	return (
		<div>
			<AuthContext.Provider value={authInfo}>
				{children}
			</AuthContext.Provider>
		</div>
	);
};

export default AuthProvider;
