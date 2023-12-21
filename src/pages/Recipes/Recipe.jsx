import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipe from './SingleRecipe';

const Recipe = () => {
	// const { id } = useParams();
	const recipes = useLoaderData();
	const {
		chefName,
		description,
		chefPicture,
		likes,
		numberOfRecipes,
		yearsOfExperience,
	} = recipes;

	return (
		<div className="py-14 bg-[#151920]">
			<div className="card lg:card-side bg-base-100 mx-3 shadow-xl">
				<figure className="md:w-[50%] lg:w-[50%]">
					<img src={chefPicture} alt="Album" />
				</figure>
				<div className="m-5 md:m-0 md:mt-[88px] md:ml-10">
					<h2 className="text-2xl font-bold">{chefName}</h2>
					<h4 className="text-1xl text-gray-400 font-semibold">
						<span className="text-black font-bold">
							Description:{' '}
						</span>
						{description}
					</h4>
					<h4 className="text-1xl text-gray-400 font-semibold">
						<span className="text-black font-bold">Likes:</span>{' '}
						{likes}
					</h4>
					<h4 className="text-1xl text-gray-400 font-semibold">
						<span className="text-black font-bold">
							Number of Recipes:
						</span>{' '}
						{numberOfRecipes}
					</h4>
					<h4 className="text-1xl text-gray-400 font-semibold">
						<span className="text-black font-bold">
							Years of Experience:
						</span>{' '}
						{yearsOfExperience}
					</h4>
				</div>
			</div>
			<div>
				<h1 className="text-4xl md:text-5xl text-center text-white font-bold mt-10">
					Famous Recipes of {chefName}
				</h1>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mx-3 md:mx-10 py-10">
				{recipes.recipes.map((recipe) => (
					<SingleRecipe
						key={recipe.id}
						recipe={recipe}
					></SingleRecipe>
				))}
			</div>
		</div>
	);
};

export default Recipe;
