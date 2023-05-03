import { useLoaderData, useParams } from 'react-router-dom';
import SingleRecipe from './SingleRecipe';

const Recipe = () => {
	// const { id } = useParams();
	const recipes = useLoaderData();
	const { chefName, chefPicture, likes, numberOfRecipes, yearsOfExperience } =
		recipes;

	console.log(recipes);

	return (
		<div className="py-14 bg-orange-50">
			<div className="card lg:card-side bg-base-100 shadow-xl">
				<figure className="w-[650px]">
					<img src={chefPicture} alt="Album" />
				</figure>
				<div className="mt-32 mx-auto">
					<h2 className="text-2xl font-bold">{chefName}</h2>
					<h4 className="text-1xl text-gray-400 font-semibold">
						<span className="text-black font-bold">
							Description:{' '}
						</span>
						Lorem ipsum dolor sit, amet consectetur elit.
						Consectetur eaque <br />
						perspiciatis, dolorem beatae asperiores{' '}
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
			<div className="grid grid-cols-3 gap-3 mx-10 py-10">
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
