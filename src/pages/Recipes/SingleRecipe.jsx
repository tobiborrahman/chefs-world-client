import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleRecipe = ({ recipe }) => {
	const [disable, setDisable] = useState(false);
	const { name, description, likes, rating } = recipe;

	const notify = () => toast('Add to your favorite list!');

	const disableBtn = () => {
		notify();
		setDisable(true);
	};

	return (
		<div>
			<div className="card w-96 h-[300px] bg-base-100 shadow-xl">
				<div className="card-body">
					<h2 className="card-title">{name}</h2>
					<p>{description}</p>
					<p>{likes}</p>
					<p>{rating}</p>
					<div className="card-actions justify-end">
						<button
							onClick={disableBtn}
							disabled={disable}
							className="btn btn-primary"
						>
							Add to Favorite
						</button>
						<ToastContainer></ToastContainer>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SingleRecipe;
