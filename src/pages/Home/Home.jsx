import React from 'react';
import Notifications from './Notifications';
import PopularCategories from './PopularCategories';
import Banner from './Banner';
import ChefsData from './ChefsData';

const Home = () => {
	return (
		<div>
			<Banner></Banner>
			<ChefsData></ChefsData>
			<Notifications></Notifications>
			<PopularCategories></PopularCategories>
		</div>
	);
};

export default Home;
