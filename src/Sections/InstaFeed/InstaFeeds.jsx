import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Skeleton } from "@heroui/react";

const InstaFeed = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
        <>
            {isLoading ? (
                <div className="container lg:pb-20 pb-10">
                    <Skeleton className="flex w-full lg:w-96 h-[45px] 2xl:mb-10 md:mb-8 mb-4 px-4 mx-auto rounded" /> 
                    <div className="relative flex flex-wrap sm:gap-4 gap-2">
                        <div className="insta-post w-1/3 p-1 lg:w-1/6">
                            <Skeleton className="flex w-full h-48 lg:h-72" />
                        </div>
                        <div className="insta-post w-1/3 p-1 lg:w-1/6">
                            <Skeleton className="flex w-full h-48 lg:h-72" />
                        </div>
                        <div className="insta-post w-1/3 p-1 lg:w-1/6">
                            <Skeleton className="flex w-full h-48 lg:h-72" />
                        </div>
                        <div className="insta-post w-1/3 p-1 lg:w-1/6">
                            <Skeleton className="flex w-full h-48 lg:h-72" />
                        </div>
                        <div className="insta-post w-1/3 p-1 lg:w-1/6">
                            <Skeleton className="flex w-full h-48 lg:h-72" />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="lg:pb-20 pb-10">
                        {initialValues && initialValues.map((data, index) => {
                            return (
                                <div className="container" key={index}>
                                    <h2 className="2xl:text-4xl lg:text-3xl sm:text-1xl text-[25px] uppercase text-gray-800  2xl:mb-10 md:mb-8 mb-4 leading-tight text-center px-4">-- Follow <Link href={data.slug}  className=" hover:text-violet-900">{data.link_title}</Link>  -- </h2>
                                    <div className="relative flex flex-wrap">                         
                                        {data.items && data.items.map((item, index) => {
                                            return ( 
                                                <div className="insta-post w-1/3 lg:w-1/6 p-1 sm:p-2" key={index} >
                                                    <Link className="relative group/insta block" href={item.slug} >
                                                        <img src={item.img} width={384} height={286} alt={item.alt} title={item.alt} className="" />
                                                        <div className="hover-stake absolute w-full h-full flex items-center justify-center opacity-0 group-hover/insta:opacity-100 top-0 left-0 before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-violet-900 before:opacity-60 before:-z-0">
                                                            <img src={item.insta_icon} width={30} height={30} sizes="100vw" alt={item.alt} title={item.alt} className='relative z-1' />
                                                        </div>
                                                    </Link>
                                                </div>
                                            )
                                        })}

                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </>
            )}
        </>
    )
}

export default InstaFeed;