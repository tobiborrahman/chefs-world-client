import React, { useContext, useState } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Login = () => {
	const { logInUser, handleGoogleSignIn, handleGithubLogin } =
		useContext(AuthContext);

	const [error, setError] = useState('');

	const navigate = useNavigate();
	const location = useLocation();
	const from = location?.state?.from?.pathname || '/';

	const handleLogin = (event) => {
		event.preventDefault();
		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		if (password.length < 6) {
			setError('Password must be at least 6 characters');
			return;
		} else {
			setError('');
		}

		logInUser(email, password)
			.then((signedUser) => {
				const loggedUser = signedUser.user;
				console.log(loggedUser);
				form.reset('');
				navigate(from, { replace: true });
			})
			.catch((err) => {
				setError(err.message);
			});
	};

	const handleGooglePopUp = () => {
		handleGoogleSignIn()
			.then((result) => {
				const popUp = result.user;
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleGithubSignIn = () => {
		handleGithubLogin()
			.then((gitUser) => {
				const githubUser = gitUser.user;
				navigate(from, { replace: true });
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className="hero h-[700px] bg-[#191d24]">
			<div className="hero-content w-full flex-col lg:flex-row-reverse">
				<div className="card flex-shrink-0 w-full bg-base-300 max-w-sm shadow-2xl ">
					<h1 className="text-black text-5xl text-center mt-5 font-semibold">
						Login Now!
					</h1>
					<form onSubmit={handleLogin} className="card-body">
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
									Don't have an Account?{' '}
									<Link
										className="link link-hover"
										to="/register"
									>
										Register
									</Link>
								</p>
							</label>
						</div>

						<div className="form-control mt-3">
							<button className="btn btn-primary"> Login</button>
						</div>
						<p className="text-red-600">{error}</p>
						<p className="text-center">or</p>
						<div className="form-control">
							<button
								onClick={handleGooglePopUp}
								className="btn btn-outline btn-ghost"
							>
								{' '}
								<FaGoogle className="mr-3 text-2xl"></FaGoogle>{' '}
								Sign In With Google
							</button>
						</div>
						<div className="form-control">
							<button
								onClick={handleGithubSignIn}
								className="btn btn-outline btn-ghost"
							>
								{' '}
								<FaGithub className="mr-3 text-2xl"></FaGithub>{' '}
								Sign In With Github
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Login;
