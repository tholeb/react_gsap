import React, { Fragment } from 'react';

import { Disclosure } from '@headlessui/react';

const navigation = [
	{ name: 'Acknowledgements', href: '#', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const AppFooter = () => {
	return (
		<Disclosure as="nav" className="bg-black">
			{({ open }) => (
				<>
					<div className="px-2 sm:px-6 lg:px-8 mx-auto max-w-7xl">
						<div className="flex relative justify-between items-center h-16">
							<div className="flex flex-1 justify-center sm:justify-start items-center sm:items-stretch">
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										<span className='font-medium text-zinc-400'>Copyright WILDGANG</span>
									</div>
								</div>
							</div>
							<div className="flex absolute sm:static sm:inset-auto inset-y-0 right-0 items-center pr-2 sm:pr-0 sm:ml-6">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className={classNames(
											item.current ? 'text-white' : 'text-gray-300 hover:text-white',
											'px-3 py-2 text-sm ',
										)}
										aria-current={item.current ? 'page' : undefined}
									>
										{item.name}
									</a>
								))}
							</div>
						</div>
					</div>
				</>
			)}
		</Disclosure>
	);
};

export default React.memo(AppFooter);
