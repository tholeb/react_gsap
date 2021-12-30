import React from 'react';

import { Routes, Route } from 'react-router-dom';

import routes from './config/routes';

const App = () => {
	return (
		<Routes>
			{routes.map((route, i) => {
				if (route.children) {
					const children = route.children;
					return (
						<Route key={i} path={route.path} element={route.element}>
							{children.map((child, j) => (
								<Route key={j} path={child.path} element={child.element} />
							))}
						</Route>
					);
				}
				else {
					return <Route key={i} path={route.path} element={route.element} />;
				}
			})}
		</Routes>

	);
};

export default App;
