import React from 'react';

const SingleChef = ({ chef }) => {
	const { chefPicture, chefName, yearsOfExperience, numberOfRecipes, likes } =
		chef;
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
				<div className="card-actions justify-center">
					<button className="btn btn-primary">View Details</button>
				</div>
			</div>
		</div>
	);
};

export default SingleChef;
