import { FaFacebook, FaInstagram, FaTwitch, FaYoutube, FaTwitter } from 'react-icons/fa';

export const navbarData = [
    {
        key: 'home',
        title: 'Home',
        href: '/'
    },
    {
        key: 'about',
        title: 'About',
        href: '/about'
    },
    {
        key: 'search',
        title: 'Search',
        href: '/search'
    },
    {
        key: 'contact',
        title: 'Contact',
        href: '/contact'
    }
]


export const socialData = [
    {
        key: 'facebook',
        title: 'Facebook',
        href: 'https://www.facebook.com/',
        icon: <FaFacebook />,
        color: '#1877F2'
    },
    {
        key: 'twitter',
        title: 'Twitter',
        href: 'https://www.twitter.com/',
        icon: <FaTwitter />,
        color: '#1DA1F2'
    },
    {
        key: 'instagram',
        title: 'Instagram',
        href: 'https://www.instagram.com/',
        icon: <FaInstagram />,
        color: '#E4405F'
    },
    {
        key: 'youtube',
        title: 'Youtube',
        href: 'https://www.youtube.com/',
        icon: <FaYoutube />,
        color: '#FF0000'
    },
    {
        key: 'twitch',
        title: 'Twitch',
        href: 'https://www.twitch.tv/',
        icon: <FaTwitch />,
        color: '#9146FF'
    }
]