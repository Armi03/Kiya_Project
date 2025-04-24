import React, { useEffect, useState } from 'react';
import { Skeleton } from '@heroui/react';
import { Link } from 'react-router-dom';
const FeaturedBox = ({ initialValues }) => {
  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true);
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);
  return (
    <>
      {isLoading ? (
        <div className='relative 2xl:py-24 lg:py-18 py-14 bg-violet-400'>
          <div className='container xl:px-12 md:px-6 px-4 text-center'>
            <h2 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>
              Why choose us you.
            </h2>
            <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7 mx-auto lg:w-3/6 w-full text-center'>
              All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet uses
            </p>
            <div className='flex flex-wrap justify-center'>
              {[...Array(5)].map((_, index) => (
                <div className='md:p-8 sm:p-4 p-2.5 white-img xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2' key={index}>
                  <Skeleton className='flex mx-auto rounded-full sm:w-28 w-24 sm:h-28 h-24' />
                  <Skeleton className='flex w-42 h-12 mt-4 mx-auto rounded' />
                </div>
              ))}
            </div>
            <Link href='#' className='2xl:mt-8 mt-4 all-btn text-sm hover:opacity-100 text-white uppercase tracking-[2px] px-6'>
              Learn More
              <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>
                <path d='M8 5L13 10L8 15' className='stroke stroke-1.5 stroke-white' />
              </svg>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className='relative 2xl:py-24 lg:py-18 py-14 bg-violet-400'>
            <div className='container xl:px-12 md:px-6 px-4 text-center'>
              <h2 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>
                Why choose us you.
              </h2>
              <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7 mx-auto lg:w-3/6 w-full text-center'>
                All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet uses
              </p>
              <div className='flex flex-wrap justify-center'>
                {initialValues &&
                  initialValues.map((data, index) => {
                    return (
                      <div className='md:p-8 sm:p-4 p-2.5 white-img xl:w-1/5 lg:w-1/4 md:w-1/3 w-1/2' key={index}>
                        <div className='bg-white rounded-full sm:w-28 w-24 sm:h-28 h-24 flex item-center justify-center m-auto'>
                          <img src={data.img} width={60} height={60} alt={data.alt} title={data.alt} className='m-auto sm:w-14 w-12' />
                        </div>
                        <p className='2xl:text-[20px] text-md sm:text-lg mt-4 text-center text-gray-800 mx-auto 2xl:max-w-[70%]'>
                          {data.title}
                        </p>
                      </div>
                    );
                  })}
              </div>
              <Link href='#' className='2xl:mt-8 mt-4 all-btn text-sm hover:opacity-100 text-white uppercase tracking-[2px] px-6 inline-flex items-center'>
                Learn More
                <svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' viewBox='0 0 21 20' fill='none'>
                  <path d='M8 5L13 10L8 15' className='stroke stroke-1.5 stroke-white' />
                </svg>
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default FeaturedBox;
