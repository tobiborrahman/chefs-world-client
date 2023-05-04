import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from '../Main/Main';
import ErrorPage from '../ErrorPage/ErrorPage';
import Banner from '../pages/Home/Banner';
import Home from '../pages/Home/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Recipe from '../pages/Recipes/Recipe';
import Blog from '../pages/Blog/Blog';
import PrivateRoute from '../AuthProvider/PrivateRoute';

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
				path: '/recipe/:id',
				element: (
					<PrivateRoute>
						<Recipe></Recipe>
					</PrivateRoute>
				),
				loader: ({ params }) =>
					fetch(
						`https://chef-recipe-hunter-server-tobibur2021.vercel.app/chefs/${params.id}`
					),
			},
			{
				path: '/blog',
				element: <Blog></Blog>,
			},
		],
	},
]);

export default router;
