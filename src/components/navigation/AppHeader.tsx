import React, { Fragment } from 'react';

import { Disclosure } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

import logofull from '../../assets/img/WILD.png';
import logohalf from '../../assets/img/Logo.svg';

const navigation = [
	{ name: 'Home', href: '/', current: true },
	{ name: 'Collection', href: '#', current: false },
	{ name: 'Team', href: '#', current: false },
	{ name: 'FAQ', href: '#', current: false },
	{ name: 'Contact Us', href: '#', current: false },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(' ');
}

const AppHeader = () => {

	return (
		<Disclosure as="nav" className="bg-black">
			{({ open }) => (
				<>
					<div className="px-2 sm:px-6 lg:px-8 mx-auto max-w-7xl">
						<div className="flex relative justify-between items-center h-16">
							<div className="flex sm:hidden absolute inset-y-0 left-0 items-center">
								{/* Mobile menu button*/}
								<Disclosure.Button className="inline-flex justify-center items-center p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-md focus:ring-2 focus:ring-inset focus:ring-white focus:outline-none">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block w-6 h-6" aria-hidden="true" />
									) : (
										<MenuIcon className="block w-6 h-6" aria-hidden="true" />
									)}
								</Disclosure.Button>
							</div>
							<div className="flex flex-1 justify-center sm:justify-start items-center sm:items-stretch">
								<div className="flex flex-shrink-0 items-center">
									<img
										className="block lg:hidden w-auto h-8"
										src={logohalf}
										alt="Workflow"
									/>
									<img
										className="hidden lg:block w-auto h-8"
										src={logofull}
										alt="Workflow"
									/>
								</div>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{navigation.map((item) => (
											<a
												key={item.name}
												href={item.href}
												className={classNames(
													item.current ? 'text-white bg-zinc-900 border border-zinc-800' : 'text-zinc-300 hover:bg-zinc-900 hover:text-white border border-black hover:border-zinc-800',
													'px-3 py-2 rounded-md text-sm font-medium',
												)}
												aria-current={item.current ? 'page' : undefined}
											>
												{item.name}
											</a>
										))}
									</div>
								</div>
							</div>
							<div className="flex absolute sm:static sm:inset-auto inset-y-0 right-0 items-center pr-2 sm:pr-0 sm:ml-6">
								<a
									href="#!"
									className="py-2 px-3 text-sm font-medium hover:text-white rounded-md border border-black text-zinc-300 hover:bg-zinc-900 hover:border-zinc-800"
								>
                                    Discord
								</a>
							</div>
						</div>
					</div>

					<Disclosure.Panel className="sm:hidden">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
										'block px-3 py-2 rounded-md text-base font-medium',
									)}
									aria-current={item.current ? 'page' : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default AppHeader;
