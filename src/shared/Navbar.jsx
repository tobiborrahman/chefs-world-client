import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="flex align-middle justify-between bg-gray-300 py-5 px-20">
			<div>
				<h2 className="text-2xl text-indigo-500">
					Cuisine <span className="text-red-700">Hub</span>
				</h2>
			</div>
			<div>
				<nav>
					<Link className="mr-4" to="/">
						Home
					</Link>
					<Link to="/blog">Blog</Link>
				</nav>
			</div>
			<div>
				<button className="p-3 text-bold bg-orange-500">Log In</button>
				<button className="p-3 text-bold bg-orange-500">
					Register
				</button>
			</div>
		</div>
	);
};

export default Navbar;
