import React, { useEffect, useState } from 'react';
import SingleChef from './SingleChef';

const ChefsData = () => {
	const [chefs, setChefs] = useState([]);

	useEffect(() => {
		fetch('https://chef-recipe-hunter-server-tobibur2021.vercel.app/chefs')
			.then((response) => response.json())
			.then((data) => setChefs(data));
	}, []);
	return (
		<div>
			<h1 className="bg-[#0E1317] text-center pt-14 md:pt-20 text-4xl md:text-7xl text-white font-bold">
				The Best Chefs of US
			</h1>
			<div className=" md:grid grid-cols-3 px-3 md:px-10 py-14 md:py-24 bg-[#0E1317] gap-3">
				{chefs.map((chef) => (
					<SingleChef key={chef.id} chef={chef}></SingleChef>
				))}
			</div>
		</div>
	);
};

export default ChefsData;
