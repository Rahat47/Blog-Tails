import { Disclosure } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';
import { navbarData } from '../../assets/data/nav';
import Link from 'next/link';
import Image from 'next/image';
import { useLogout } from '../../hooks/useLogout';

const MobileNav = () => {
    const logout = useLogout();

    return (
        <Disclosure.Panel className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 flex flex-col items-center'>
                {navbarData.map(item => (
                    <Disclosure.Button key={item.key}>
                        <Link href={item.href}>
                            <a className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                {item.title}
                            </a>
                        </Link>
                    </Disclosure.Button>
                ))}
            </div>
            <div className='pt-4 pb-3 border-t border-gray-700'>
                <div className='flex items-center justify-center px-5'>
                    <div className='flex-shrink-0'>
                        <Image
                            height={40}
                            width={40}
                            className='rounded-full'
                            src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                            alt='user profile'
                        />
                    </div>
                    <div className='ml-3'>
                        <h4 className='text-base font-medium text-white'>
                            John Doe
                        </h4>
                        <span className='text-sm font-medium text-gray-400'>
                            john@example.com
                        </span>
                    </div>
                    <button
                        type='button'
                        className=' ml-5 flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                    >
                        <span className='sr-only'>View notifications</span>
                        <BellIcon className='h-6 w-6' aria-hidden='true' />
                    </button>
                </div>
                <div className='mt-3 px-2 space-y-1 flex flex-col items-center'>
                    <Disclosure.Button>
                        <Link href='/profile'>
                            <a className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                Your Profile
                            </a>
                        </Link>
                    </Disclosure.Button>
                    <Disclosure.Button>
                        <Link href='/profile/settings'>
                            <a className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'>
                                Settings
                            </a>
                        </Link>
                    </Disclosure.Button>
                    <Disclosure.Button
                        as='div'
                        className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700 cursor-pointer'
                        onClick={logout}
                    >
                        Sign out
                    </Disclosure.Button>
                </div>
            </div>
        </Disclosure.Panel>
    );
};

export default MobileNav;
