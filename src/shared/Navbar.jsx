import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Navbar = () => {
	const { user, logOut } = useContext(AuthContext);

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
				<nav>
					<Link className="mr-4" to="/">
						Home
					</Link>
					<Link to="/blog">Blog</Link>
				</nav>
			</div>
			<div className="flex">
				<p className="flex pt-3 mr-3">
					<span className="mr-3">
						{user && (
							// <FaUserCircle
							// 	style={{
							// 		fontSize: '2rem',
							// 		marginTop: '2.5px',
							// 	}}
							// ></FaUserCircle>
							// <img src={user?.photoUrl} alt="" />
							<img
								className="w-10 rounded-[50%] tooltip"
								src={user?.photoURL}
								alt=""
								data-tip={user.displayName}
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
