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
		<div className="bg-[#0E1317]">
			<div className="custom-container">
				<div>
					<h1 className=" text-center pt-14 md:pt-20 text-4xl md:text-7xl text-white font-bold">
						The Best Chefs of US
					</h1>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 py-14 md:py-24">
						{chefs.map((chef) => (
							<SingleChef key={chef.id} chef={chef}></SingleChef>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ChefsData;
