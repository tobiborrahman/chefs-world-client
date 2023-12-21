import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import './Navbar.css';

import { CiMenuFries } from 'react-icons/ci';
import { TfiClose } from 'react-icons/tfi';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);
	const location = useLocation();

	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleToggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const handleLogOut = () => [
		logOut()
			.then(() => {})
			.catch((err) => console.log(err)),
	];
	return (
		<div className="text-center md:flex md:items-center justify-between bg-[#0E1317] py-7 px-4 md:px-10">
			<div className="flex justify-between items-center mb-4 md:mb-0">
				<h2 className="text-4xl text-white font-bold mr-4">
					Chefs
					<span className="text-orange-600 font-bold">World</span>
				</h2>
				<button
					onClick={handleToggleMenu}
					className="text-3xl md:hidden text-white focus:outline-none"
				>
					{isMenuOpen ? (
						<TfiClose />
					) : (
						<CiMenuFries className="text-4xl" />
					)}
				</button>
			</div>
			<div className={`md:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
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
					<li className="text-2xl text-orange-600">
						<Link
							className={
								location.pathname === '/blog' ? 'active' : ''
							}
							to="/blog"
						>
							Blog
						</Link>
					</li>
					<li className="text-2xl md:hidden text-orange-600">
						<Link
							className={
								location.pathname === '/login' ? 'active' : ''
							}
							to="/login"
						>
							{user ? 'Log Out' : 'Log In'}
						</Link>
					</li>
				</nav>
			</div>
			<div className="hidden md:flex flex-col md:flex-row items-center">
				<p className="md:mr-3 mb-3 md:mb-0">
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
				{user ? (
					<button
						onClick={handleLogOut}
						className="py-3 px-4 md:px-7 text-1xl text-white font-bold bg-orange-600 mr-2 md:mr-6 hover:bg-orange-700 duration-300"
					>
						<Link to="/login">Log Out</Link>
					</button>
				) : (
					<button className="py-3 px-4 md:px-7 text-1xl font-bold hover:bg-orange-700 bg-orange-600 duration-300 mr-2 md:mr-6">
						<Link to="/login">Log In</Link>
					</button>
				)}
			</div>
		</div>
	);
};

export default Navbar;
