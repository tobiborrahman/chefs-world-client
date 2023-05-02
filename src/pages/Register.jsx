import React from 'react';

const Register = () => {
	return (
		<div className="hero h-[700px] bg-base-200">
			<div className="hero-content flex-col w-full lg:flex-row-reverse">
				<div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
					<h1 className="text-black text-5xl text-center mt-5 font-semibold">
						Register Now!
					</h1>
					<div className="card-body">
						<div className="form-control">
							<label className="label">
								<span className="label-text">Name</span>
							</label>
							<input
								type="text"
								placeholder="name"
								className="input input-bordered"
							/>
						</div>
						<div className="form-control">
							<label className="label">
								<span className="label-text">Photo URL</span>
							</label>
							<input
								type="text"
								placeholder="photoUrl"
								className="input input-bordered"
							/>
						</div>
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
								<a
									href="#"
									className="label-text-alt link link-hover"
								>
									Forgot password?
								</a>
							</label>
						</div>
						<div className="form-control mt-6">
							<button className="btn btn-primary">
								Register
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
