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
		<div className=" sm:text-center md:flex align-middle justify-between bg-[#0E1317] py-7 px-10">
			<div className="pt-1">
				<h2 className="text-4xl text-white font-bold">
					Chefs
					<span className="text-orange-600 font-bold">World</span>
				</h2>
			</div>
			<div>
				<nav className="md:flex no-underline list-none pt-2">
					<li className="md:mr-5 text-2xl text-orange-600">
						<Link
							className={
								location.pathname === '/' ? 'active' : ''
							}
							to="/"
						>
							Home
						</Link>
					</li>
					<li className="text-2xl text-orange-600 ">
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
			<div className="sm:pl-7 md:flex">
				<p className=" mr-3">
					<span
						className="mr-3 tooltip tooltip-top"
						data-tip={user?.displayName}
					>
						{user && (
							<img
								className="w-10 rounded-[50%] pt-1"
								src={user?.photoURL}
								alt=""
							/>
						)}
					</span>
				</p>
				<p>
					{user ? (
						<button
							onClick={handleLogOut}
							className="py-3 px-7 text-1xl text-white font-bold bg-orange-600 mr-6 hover:bg-orange-700 duration-300"
						>
							<Link to="/login">Log Out</Link>
						</button>
					) : (
						<button className="py-3 px-7 text-1xl font-bold hover:bg-orange-700 bg-orange-600 duration-300 mr-6">
							<Link to="/login">Log In</Link>
						</button>
					)}
				</p>
			</div>
		</div>
	);
};

export default Navbar;
