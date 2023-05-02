import React, { useEffect, useState } from 'react';

const ChefsData = () => {
	const [chefs, setChefs] = useState([]);

	useEffect(() => {
		fetch('http://localhost:5000/chefs')
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);
	return <div></div>;
};

export default ChefsData;
