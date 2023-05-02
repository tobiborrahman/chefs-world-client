import React from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
	return (
		<div className="hero h-[700px] bg-base-200">
			<div className="hero-content w-full flex-col lg:flex-row-reverse">
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<h1 className="text-black text-5xl text-center mt-5 font-semibold">
						Login Now!
					</h1>
					<div className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Email</span>
							</label>
							<input
								type="text"
								placeholder="email"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Password</span>
							</label>
							<input
								type="text"
								placeholder="password"
								className="input input-bordered"
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
						<div className="form-control mt-6">
							<button className="btn btn-primary"> Login</button>
						</div>
						<p className="text-center">or</p>
						<div className="form-control">
							<button className="btn btn-outline btn-ghost">
								{' '}
								<FaGoogle className="mr-3 text-2xl"></FaGoogle>{' '}
								Sign In With Google
							</button>
						</div>
						<div className="form-control">
							<button className="btn btn-outline btn-ghost">
								{' '}
								<FaGithub className="mr-3 text-2xl"></FaGithub>{' '}
								Sign In With Github
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Login;
