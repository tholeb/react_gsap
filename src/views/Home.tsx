import React from 'react';
import useTitle from '../components/hooks/useTitle';

// Components
import ParallaxVideo from '../components/ParallaxVideo';

const Index = () => {
	useTitle('Home');
	return (
		<>
			<ParallaxVideo />
			<h1 className='font-bold text-red-500'>Home oui</h1>
			<div style={{ height: '100vh' }}></div>
		</>
	);
};

export default Index;
