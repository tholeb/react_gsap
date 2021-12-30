import React from 'react';

const Errors = (props : { type : number }) => {
	const { type } = props;
	const content = {
		404: {
			name: 'Error 404',
			Description: 'Oups, le contenu que vous recherché n\'existe pas',
		},
		500: {
			name: 'Error 500',
			Description: 'Oups, il y a un soucis :/',
		},
	};

	return (
		<div className="flex-row bg-light min-vh-100 d-flex align-items-center">
			<div className="clearfix">
				<h1 className="float-start display-3 me-4">
					{type && content[type].name}
				</h1>
				<h4 className="pt-3">Oops! You{'\''}re lost.</h4>
				<p className="text-medium-emphasis float-start">
					{type && content[type].Description}
					<br />
					<a href="/">Home page</a>.
				</p>
			</div>
		</div>
	);
};

export default Errors;
