import React from 'react';
import {
	AppContent,
	AppFooter,
	AppHeader,
} from '../../components/navigation/index';

const DefaultLayout = () => {
	return (
		<div>
			<AppHeader />
			<AppContent />
			<AppFooter />
		</div>
	);
};

export default DefaultLayout;
