import {Image, Link} from 'react'

import { Skeleton } from "@heroui/react";

import React, { useEffect, useState } from 'react';


const Category_innerpages = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>

            {isLoading ? (
                <div className="relative group"  >
                 <Skeleton className='w-full md:h-[250px] sm:h-[210px] h-[200px]' />
                    <Skeleton className='sm:h-14 h-10 2xl:-mt-6 -mt-2 shadow-xl mx-auto p-1 bg-white w-3/4' />
                    </div >
            ) : (
                <>
                    <div className="relative group pb-3"  >
                        <div className="h-full overflow-hidden w-full before:block bg-violet-400 before:pt-[115%] relative transition-all">
                            <Link href={initialValues.cat_link}><Image src={initialValues.img} alt={initialValues.title} title={initialValues.title} className="absolute top-0 left-0 w-full h-full object-cover duration-500 group-hover:scale-105 transition-all" fill={true} /></Link>
                        </div>
                        <Link href={initialValues.cat_link} className='text-gray-800 2xl:text-[24px] lg:text-[20px] font-nabi block text-lg bg-violet-400 leading-tight 2xl:-mt-6 -mt-3 sm:mx-5 mx-3 sm:py-3 py-2 text-center z-1 relative'>{initialValues.title}</Link>
                    </div>
                </>
            )}

        </>
    )
}

export default Category_innerpages;