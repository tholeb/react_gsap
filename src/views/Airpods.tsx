import React from 'react';
import useTitle from '../components/hooks/useTitle';

// Components
import Airpods from '../components/Airpods';

const Index = () => {
	useTitle('Home');
	return (
		<>
			<Airpods />
			<h1 className='font-bold text-red-500'>Home oui</h1>
			<div style={{ height: '100vh' }}></div>
		</>
	);
};

export default Index;
