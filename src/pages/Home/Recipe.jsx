import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Recipe = () => {
	const { id } = useParams();
	const recipes = useLoaderData();
	console.log(recipes, id);

	return <div></div>;
};

export default Recipe;
