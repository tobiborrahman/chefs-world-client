import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SingleRecipe = ({ recipe }) => {
	const [disable, setDisable] = useState(false);
	const { recipe_name, description, ingredients, cooking_method, rating } =
		recipe;

	const notify = () => toast('Add to your favorite list!');

	const disableBtn = () => {
		notify();
		setDisable(true);
	};

	return (
		<div>
			<div className="mt-5 md:mt-0 card md:w-96  bg-[#191d24] text-white shadow-xl">
				<div className="card-body md:h-[500px] text-justify">
					<h2 className="card-title text-2xl">{recipe_name}</h2>
					<p>
						<span className="text-orange-600 font-bold">
							Ingredients:
						</span>
						{ingredients.map((ingredient) => (
							<> {ingredient},</>
						))}
					</p>
					<p>
						<span className="text-orange-600 font-bold">
							Cooking Method:{' '}
						</span>{' '}
						{cooking_method}
					</p>
					<p>
						<span className="text-orange-600 font-bold">
							Rating:
						</span>{' '}
						{rating}
					</p>
					<div className="card-actions">
						<button
							onClick={disableBtn}
							disabled={disable}
							className="btn"
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
