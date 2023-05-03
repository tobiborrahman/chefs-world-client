import React, { useEffect, useState } from 'react';
import SingleChef from './SingleChef';

const ChefsData = () => {
	const [chefs, setChefs] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/chefs')
			.then((response) => response.json())
			.then((data) => setChefs(data));
	}, []);
	return (
		<div className="grid grid-cols-3 px-10 py-32 bg-[#0E1317] gap-3">
			{chefs.map((chef) => (
				<SingleChef key={chef.id} chef={chef}></SingleChef>
			))}
		</div>
	);
};

export default ChefsData;
