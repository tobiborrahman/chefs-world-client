import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Navbar.css';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const location = useLocation();

	const handleLogOut = () => [
		logOut()
			.then(() => {})
			.catch((err) => console.log(err)),
	];
	return (
		<div className="flex align-middle justify-between bg-gray-300 py-5 px-20">
			<div>
				<h2 className="text-2xl text-indigo-500">
					Chefs <span className="text-red-700">World</span>
				</h2>
			</div>
			<div>
				<nav className="flex no-underline list-none pt-4">
					<li className="mr-5">
						<Link
							className={
								location.pathname === '/' ? 'active' : ''
							}
							to="/"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							className={
								location.pathname === '/blog' ? 'active' : ''
							}
							to="/blog"
						>
							Blog
						</Link>
					</li>
				</nav>
			</div>
			<div className="flex">
				<p className="flex pt-3 mr-3">
					<span className="mr-3">
						{user && (
							<img
								className="w-10 rounded-[50%] tooltip tooltip-open tooltip-top"
								src={user?.photoURL}
								alt=""
								data-tip="hello"
							/>
						)}
					</span>
					{user ? (
						<button
							onClick={handleLogOut}
							className="btn btn-warning mr-6"
						>
							<Link to="/login">Log Out</Link>
						</button>
					) : (
						<button className="btn btn-warning mr-6">
							<Link to="/login">Log In</Link>
						</button>
					)}
				</p>
			</div>
		</div>
	);
};

export default Navbar;
