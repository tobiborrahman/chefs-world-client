import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Main/Main';
import ErrorPage from '../ErrorPage/ErrorPage';
import Banner from '../pages/Home/Banner';
import Home from '../pages/Home/Home';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Main></Main>,
		errorElement: <ErrorPage></ErrorPage>,
		children: [
			{
				path: '/',
				element: <Home></Home>,
			},
		],
	},
]);

export default router;
