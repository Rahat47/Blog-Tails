import { navbarData, socialData } from '../../assets/data/nav';
import Link from 'next/link';

const Footer = () => {
    return (
        <div className=' mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8 bg-gray-800'>
            <nav
                className='-mx-5 -my-2 flex flex-wrap justify-center'
                aria-label='Footer'
            >
                {navbarData.map(item => (
                    <div key={item.title} className='px-5 py-2'>
                        <Link href={item.href}>
                            <a className='text-base text-white font-medium hover:text-gray-300 transition duration-150 ease-in-out'>
                                {item.title}
                            </a>
                        </Link>
                    </div>
                ))}
            </nav>
            <div className='mt-8 flex justify-center space-x-6'>
                {socialData.map(item => (
                    <a
                        key={item.key}
                        href={item.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        className={` transition duration-150 ease-in-out text-xl w-10 h-10 rounded-full flex items-center justify-center bg-zinc-200 text-black hover:bg-zinc-900 hover:text-white`}
                    >
                        <span className='sr-only'>{item.title}</span>
                        {item.icon}
                    </a>
                ))}
            </div>
            <p className='mt-8 text-center text-base text-gray-400'>
                &copy; {new Date().getFullYear()} Blog Tails, Inc. All rights
                reserved.
            </p>
        </div>
    );
};

export default Footer;
