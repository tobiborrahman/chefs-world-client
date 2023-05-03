import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';

const SingleChef = ({ chef }) => {
	const {
		id,
		chefPicture,
		chefName,
		yearsOfExperience,
		numberOfRecipes,
		likes,
	} = chef;
	return (
		<div className="card card-compact w-96 bg-[#151920] overflow-hidden shadow-xl">
			<figure className="hover:scale-110 duration-500">
				<LazyLoad height={250} offset={300}>
					<img src={chefPicture} />
				</LazyLoad>
			</figure>
			<div className="card-body text-white mt-5">
				<h2 className="card-title">{chefName}</h2>
				<p>Years Of Experience: {yearsOfExperience}</p>
				<p>Number of Recipes: {numberOfRecipes}</p>
				<p> Likes {likes}</p>
				{/* <Recipe recipes={recipes}></Recipe> */}
				<div className="card-actions justify-center">
					<button className="btn btn-primary">
						<Link to={`/recipe/${id}`}>View Recipes</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default SingleChef;
