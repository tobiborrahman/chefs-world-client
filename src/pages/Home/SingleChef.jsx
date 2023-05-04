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
		<>
			<div className="card card-compact md:w-96 bg-[#151920] shadow-xl">
				<figure className="overflow-hidden">
					<div className="hover:scale-125 duration-1000">
						<LazyLoad height={250}>
							<img src={chefPicture} />
						</LazyLoad>
					</div>
				</figure>
				<div className="card-body text-white md:mt-5">
					<h2 className="card-title">{chefName}</h2>
					<p>Years Of Experience: {yearsOfExperience}</p>
					<p>Number of Recipes: {numberOfRecipes}</p>
					<p> Likes {likes}</p>
					<div className="card-actions justify-center">
						<button className="py-3 md:mt-3 px-7 text-1xl text-white font-bold bg-orange-600 hover:bg-orange-700 duration-300">
							<Link to={`/recipe/${id}`}>View Recipes</Link>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleChef;
