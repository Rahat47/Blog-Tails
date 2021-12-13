import Head from 'next/head';
import { Footer, Navbar } from '..';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Blog Tails &mdash; Home</title>
                <meta
                    name='description'
                    content='Personal Blog Application With Tailwind CSS and Next.js'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <div className='max-w-screen-2xl mx-auto'>
                <header>
                    <Navbar />
                </header>

                <main>{children}</main>

                <footer>
                    <Footer />
                </footer>
            </div>
        </>
    );
};

export default Layout;
