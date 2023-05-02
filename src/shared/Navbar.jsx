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
				<h2>User</h2>
			</div>
		</div>
	);
};

export default Navbar;
