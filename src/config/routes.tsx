import React from 'react';

// Layouts
const BaseLayout = React.lazy(() => import('../views/layout/BasicLayout'));

// Pages
const Home = React.lazy(() => import('../views/Home'));
const Acknowledgements = React.lazy(() => import('../views/acknowledgements'));
const ErrorPage = React.lazy(() => import('../views/Error'));


const routes = [
	{
		path: '/',
		element: <BaseLayout />,
		name: 'Dashboard',
		children: [
			{ path: '', element: <Home />, name: 'Home' },
			{ path: '/acknowledgements', element: <Acknowledgements />, name: 'Thanks' },
		],
	},
	{ path: '*', element: <ErrorPage type={404} /> },
];

export default routes;
