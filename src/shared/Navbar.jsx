import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
	return (
		<div className="flex align-middle justify-between bg-gray-300 py-5 px-20">
			<div>
				<h2 className="text-2xl text-indigo-500">
					Chefs <span className="text-red-700">World</span>
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
				<button className="btn btn-warning mr-6">
					<Link to="/login">Log In</Link>
				</button>
			</div>
		</div>
	);
};

export default Navbar;
