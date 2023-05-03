import React from 'react';
import { Link } from 'react-router-dom';
import Recipe from './Recipe';

const SingleChef = ({ chef }) => {
	const {
		chefPicture,
		chefName,
		yearsOfExperience,
		numberOfRecipes,
		likes,
		recipes,
	} = chef;
	return (
		<div className="card card-compact w-96 bg-base-100 shadow-xl">
			<figure>
				<img src={chefPicture} alt="Shoes" />
			</figure>
			<div className="card-body">
				<h2 className="card-title">{chefName}</h2>
				<p>Years Of Experience: {yearsOfExperience}</p>
				<p>Number of Recipes: {numberOfRecipes}</p>
				<p>Likes: {likes}</p>
				{/* <Recipe recipes={recipes}></Recipe> */}
				<div className="card-actions justify-center">
					<button className="btn btn-primary">
						<Link to="/recipe">View Recipes</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleChef;
