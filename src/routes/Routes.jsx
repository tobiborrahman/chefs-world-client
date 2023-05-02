import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Main/Main';
import ErrorPage from '../ErrorPage/ErrorPage';
import Banner from '../pages/Home/Banner';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Recipe from '../pages/Home/Recipe';

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
			{
				path: '/login',
				element: <Login></Login>,
			},
			{
				path: '/register',
				element: <Register></Register>,
			},
			{
				path: '/recipe',
				element: <Recipe></Recipe>,
				// loader: ({ params }) =>
				// 	fetch(`http://localhost:5000/chefs/${params.id}`),
			},
		],
	},
]);

export default router;
