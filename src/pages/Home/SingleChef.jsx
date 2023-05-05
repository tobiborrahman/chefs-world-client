import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';

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
			<div className="mb-5 md:mb-1 card card-compact md:w-96 bg-[#151920] shadow-xl">
				<figure className="overflow-hidden">
					<div className="hover:scale-125 duration-1000">
						<LazyLoadImage src={chefPicture}></LazyLoadImage>
					</div>
				</figure>
				<div className="card-body text-white md:mt-5">
					<h2 className="card-title">{chefName}</h2>
					<p>Years Of Experience: {yearsOfExperience}</p>
					<p>Number of Recipes: {numberOfRecipes}</p>
					<p> Likes {likes}</p>
					<div className="card-actions justify-center">
						<button className="py-3 md:mt-5 md:mb-2 px-7 text-1xl text-white font-bold bg-[#151920] drop-shadow-[0_.1px_2px_rgba(255,255,255,0.50)]   rounded-md  hover:bg-orange-600 duration-300">
							<Link to={`/recipe/${id}`}>View Recipes</Link>
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default SingleChef;
