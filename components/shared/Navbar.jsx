import { Disclosure } from '@headlessui/react';
import { SearchIcon } from '@heroicons/react/solid';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { navbarData } from '../../assets/data/nav';
import { MobileNav, ProfileDropdown } from '..';

export const NavLink = ({ href, title }) => (
    <Link href={href}>
        <a className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'>
            {title}
        </a>
    </Link>
);

const Navbar = () => {
    return (
        <Disclosure as='nav' className='bg-gray-800 font-roboto'>
            {({ open }) => (
                <>
                    <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
                        <div className='relative flex items-center justify-between h-16'>
                            <div className='flex items-center px-2 lg:px-0'>
                                <div className='flex-shrink-0'>
                                    {/* <img
                                        className='block lg:hidden h-8 w-auto'
                                        src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                                        alt='Workflow'
                                    />
                                    <img
                                        className='hidden lg:block h-8 w-auto'
                                        src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                                        alt='Workflow'
                                    /> */}
                                    <h1 className='text-white text-3xl font-semibold leading-tight'>
                                        Logo
                                    </h1>
                                </div>
                                <div className='hidden lg:block lg:ml-6'>
                                    <div className='flex space-x-4'>
                                        {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
                                        {navbarData.map(item => (
                                            <NavLink
                                                key={item.key}
                                                href={item.href}
                                                title={item.title}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className='flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end'>
                                <div className='max-w-lg w-full lg:max-w-xs'>
                                    <label htmlFor='search' className='sr-only'>
                                        Search
                                    </label>
                                    <div className='relative'>
                                        <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                                            <SearchIcon
                                                className='h-5 w-5 text-gray-400'
                                                aria-hidden='true'
                                            />
                                        </div>
                                        <input
                                            id='search'
                                            name='search'
                                            className='block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm caret-blue-700'
                                            placeholder='Search'
                                            type='search'
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className='flex lg:hidden'>
                                {/* Mobile menu button */}
                                <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                                    <span className='sr-only'>
                                        Open main menu
                                    </span>
                                    {open ? (
                                        <XIcon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    ) : (
                                        <MenuIcon
                                            className='block h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className='hidden lg:block lg:ml-4'>
                                <div className='flex items-center'>
                                    <button
                                        type='button'
                                        className='flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                                    >
                                        <span className='sr-only'>
                                            View notifications
                                        </span>
                                        <BellIcon
                                            className='h-6 w-6'
                                            aria-hidden='true'
                                        />
                                    </button>

                                    <ProfileDropdown />
                                </div>
                            </div>
                        </div>
                    </div>

                    <MobileNav />
                </>
            )}
        </Disclosure>
    );
};

export default Navbar;
