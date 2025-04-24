import Header from './components/Header'; 
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import React, { useEffect } from 'react';
import { Breadcrumb_pages, useFetchData } from './comman';
import { useRoutes } from 'react-router-dom';

export default function ThankYou() {
  const breadcrumbItems = [
    { title: 'Thank you', url: ``, type: false },
  ];
  // const router = useRoutes()
  const { data } = useFetchData("json/data/wishlist_data.json");

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      <Header />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
      <div className='2xl:py-24 lg:py-16 py-12 max-w-[900px] mx-auto px-3'>
        <img src='https://webby-production.s3.amazonaws.com/Starry-Heavens/other/thank-you-icon.svg' alt='thank you' title='thank you' width={140} height={140} className='mx-auto 1xl:w-36 lg:w-28 md:w-24 w-20' />
        <h1 className="2xl:text-7xl 1xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] capitalize text-center xl:my-8 md:my-6 my-4 leading-tight text-gray-800">Thank you for order</h1>
        <p className=' lg:text-lg text-md text-gray-800 text-center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna enim ad minim veniam, quis nostrud exercitation ullamco laboris ea commodo consequat.</p>
        <div className="md:mt-8 mt-4 flex items-center justify-center">
          <Link className="all-btn flex items-center gap-3" to='/'>
            <svg width="31" height="31" viewBox="0 0 31 31" xmlns="http://www.w3.org/2000/svg" className="rtl:rotate-0 rotate-180 lg:w-8 w-6">
              <path d="M20.6667 6.45837C20.6667 7.41679 21.6135 8.84796 22.5719 10.0492C23.8041 11.5992 25.2766 12.9516 26.9648 13.9836C28.2307 14.7573 29.7652 15.5 31 15.5M31 15.5C29.7652 15.5 28.2294 16.2427 26.9648 17.0165C25.2766 18.0498 23.8041 19.4022 22.5719 20.9496C21.6135 22.1521 20.6667 23.5859 20.6667 24.5417M31 15.5H0" className="stroke-1 stroke-white fill-none" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  )
}



