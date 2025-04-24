import { Link } from "react-router-dom";
import { Skeleton } from "@heroui/react";
import React, { useEffect, useState } from 'react';



const Breadcrumb_pages = ({ breadcrumbItems }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            <div>
                {isLoading ? (
                    <div className='bg-violet-400 p-2'>

                        <ul className='flex items-center justify-center'>
                            <li><Skeleton className='md:w-5 w-3.5 md:h-5 h-3.5 rounded' />
                            </li>
                            <li className='mx-1.5 text-[20px] uppercase font-semibold text-gray-800'>/</li>
                            <Skeleton className='w-24 h-5 rounded' />
                            <li className='mx-1.5 text-[20px] uppercase font-semibold text-gray-800'>/</li>
                            <Skeleton className='w-24 h-5 rounded' />
                        </ul>
                    </div>
                ) : (
                    <>
                        <div className='bg-violet-400 p-2'>
                            <ul className='flex items-center justify-center'>
                                <>
                                    <li><Link to='/' className='group' ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="md:w-5 w-3.5 stroke-gray-900 group-hover:stroke-violet-900">
                                        <path d="M3.125 8.28125V17.5C3.125 17.6658 3.19085 17.8247 3.30806 17.9419C3.42527 18.0592 3.58424 18.125 3.75 18.125H7.5V12.8125C7.5 12.5639 7.59877 12.3254 7.77459 12.1496C7.9504 11.9738 8.18886 11.875 8.4375 11.875H11.5625C11.8111 11.875 12.0496 11.9738 12.2254 12.1496C12.4012 12.3254 12.5 12.5639 12.5 12.8125V18.125H16.25C16.4158 18.125 16.5747 18.0592 16.6919 17.9419C16.8092 17.8247 16.875 17.6658 16.875 17.5V8.28125" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                                        <path d="M18.75 10.0001L10.4254 2.0313C10.2301 1.82505 9.77344 1.82271 9.57461 2.0313L1.25 10.0001M15.625 6.99224V2.50005H13.75V5.19536" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        </path>
                                    </svg>
                                    </Link>
                                    </li>
                                    {
                                        breadcrumbItems.map((breadcrumb, index) => {
                                            return (
                                                <li key={index} className='md:text-[15px] text-[13px] uppercase font-semibold text-gray-800'>
                                                    <span className='mx-1.5 text-[20px] uppercase font-semibold text-gray-800'>/</span>
                                                    {
                                                        breadcrumb.type === false ? (
                                                            <span>{breadcrumb.title}</span>
                                                        ) : (
                                                            <Link to={breadcrumb.url} className='hover:text-violet-900'>
                                                                {breadcrumb.title}
                                                            </Link>
                                                        )
                                                    }
                                                </li>)
                                        })
                                    }
                                </>
                            </ul>
                        </div>
                    </>
                )}
            </div>
        </>

    )
}

export default Breadcrumb_pages;

