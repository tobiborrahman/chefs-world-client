import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
	const { createUser, userNameUrl, logOut } = useContext(AuthContext);
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleRegister = (event) => {
		event.preventDefault();
		const form = event.target;
		const name = form.name.value;
		const photoUrl = form.photoUrl.value;
		const email = form.email.value;
		const password = form.password.value;

		console.log(name, photoUrl, email, password);

		if (password.length < 6) {
			setError('Password must be at least 6 characters');
		} else {
			setError('');
		}

		createUser(email, password)
			.then((createdUser) => {
				const newUser = createdUser.user;
				console.log(newUser);
				form.reset('');
				userNameUrl();
				logOut();
				navigate('/login');
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="hero h-[700px] bg-base-200">
			<div className="hero-content flex-col w-full lg:flex-row-reverse">
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<h1 className="text-black text-5xl text-center mt-5 font-semibold">
						Register Now!
					</h1>
					<form onSubmit={handleRegister} className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="name"
								name="name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo URL</span>
							</label>
							<input
								type="url"
								placeholder="photoUrl"
								name="photoUrl"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="email"
								placeholder="email"
								name="email"
								className="input input-bordered"
								required
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="password"
								placeholder="password"
								name="password"
								className="input input-bordered"
								required
							/>
							<label className="label">
								<p href="#" className="label-text-alt ">
									Already have an Account?{' '}
									<Link
										className="link link-hover"
										to="/login"
									>
										login
									</Link>
								</p>
							</label>
							{error && (
								<p className="text-1xl text-red-700">{error}</p>
							)}
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">
								Register
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Register;
