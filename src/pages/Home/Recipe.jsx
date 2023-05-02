import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipe = () => {
	const [recipe, setRecipe] = useState([]);
	// const { id } = useParams();
	// const recipes = useLoaderData();
	// console.log(recipes, id);

	// useEffect(() => {
	// 	fetch('http://localhost:5000/chefs')
	// 		.then((result = result.json()))
	// 		.then((data) => console.log(data));
	// }, []);

	return (
		<div className="h-[600px]">
			<h2>This is recipe</h2>
		</div>
	);
};

export default Recipe;
