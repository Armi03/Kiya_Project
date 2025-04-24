import React, { useEffect, useState } from 'react';
import { Skeleton } from '@heroui/react';
import Shop_List_Product from '../../comman/Shop_List_Product'

const List_Product = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <>
                    <div className="relative group cursor-pointer transition-all sm:mb-8 mb-4 ">
                        <div className="relative product-box bg-white flex items-center sm:gap-6 gap-4 2xl:gap-10">
                            <div className="image-wrap relative">
                                <Skeleton className="w-full  2xl:h-80 lg:h-60 h-52  mx-auto rounded  xl:min-w-[300px] sm:min-w-[220px] min-w-[50%]" />
                                <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                            </div>
                            <div className="product-detail relative w-full">
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded " />
                                <div className="flex  gap-3 my-3.5 2xl:my-6 ">
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                </div>
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-20 rounded " />
                                <Skeleton className="w-20  h-8 rounded " />
                            </div>
                        </div >
                    </div>
                    <div className="relative group cursor-pointer transition-all sm:mb-8 mb-4 ">
                        <div className="relative product-box bg-white flex items-center sm:gap-6 gap-4 2xl:gap-10">
                            <div className="image-wrap relative">
                                <Skeleton className="w-full  2xl:h-80 lg:h-60 h-52  mx-auto rounded  xl:min-w-[300px] sm:min-w-[220px] min-w-[50%]" />
                                <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                            </div>
                            <div className="product-detail relative w-full">
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded " />
                                <div className="flex  gap-3 my-3.5 2xl:my-6 ">
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                </div>
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-20 rounded " />
                                <Skeleton className="w-20  h-8 rounded " />
                            </div>
                        </div >
                    </div >
                    <div className="relative group cursor-pointer transition-all sm:mb-8 mb-4 ">
                        <div className="relative product-box bg-white flex items-center sm:gap-6 gap-4 2xl:gap-10">
                            <div className="image-wrap relative">
                                <Skeleton className="w-full  2xl:h-80 lg:h-60 h-52  mx-auto rounded  xl:min-w-[300px] sm:min-w-[220px] min-w-[50%]" />
                                <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                            </div>
                            <div className="product-detail relative w-full">
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded " />
                                <div className="flex  gap-3 my-3.5 2xl:my-6 ">
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                </div>
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-20 rounded " />
                                <Skeleton className="w-20  h-8 rounded " />
                            </div>
                        </div >
                    </div >
                    <div className="relative group cursor-pointer transition-all sm:mb-8 mb-4 ">
                        <div className="relative product-box bg-white flex items-center sm:gap-6 gap-4 2xl:gap-10">
                            <div className="image-wrap relative">
                                <Skeleton className="w-full  2xl:h-80 lg:h-60 h-52  mx-auto rounded  xl:min-w-[300px] sm:min-w-[220px] min-w-[50%]" />
                                <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                            </div>
                            <div className="product-detail relative w-full">
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded " />
                                <div className="flex  gap-3 my-3.5 2xl:my-6 ">
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                </div>
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-20 rounded " />
                                <Skeleton className="w-20  h-8 rounded " />
                            </div>
                        </div >
                    </div >
                    <div className="relative group cursor-pointer transition-all sm:mb-8 mb-4 ">
                        <div className="relative product-box bg-white flex items-center sm:gap-6 gap-4 2xl:gap-10">
                            <div className="image-wrap relative">
                                <Skeleton className="w-full  2xl:h-80 lg:h-60 h-52  mx-auto rounded  xl:min-w-[300px] sm:min-w-[220px] min-w-[50%]" />
                                <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                            </div>
                            <div className="product-detail relative w-full">
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded " />
                                <div className="flex  gap-3 my-3.5 2xl:my-6 ">
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                </div>
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-20 rounded " />
                                <Skeleton className="w-20  h-8 rounded " />
                            </div>
                        </div >
                    </div >
                    <div className="relative group cursor-pointer transition-all sm:mb-8 mb-4 ">
                        <div className="relative product-box bg-white flex items-center sm:gap-6 gap-4 2xl:gap-10">
                            <div className="image-wrap relative">
                                <Skeleton className="w-full  2xl:h-80 lg:h-60 h-52  mx-auto rounded  xl:min-w-[300px] sm:min-w-[220px] min-w-[50%]" />
                                <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                            </div>
                            <div className="product-detail relative w-full">
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded " />
                                <div className="flex  gap-3 my-3.5 2xl:my-6 ">
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                </div>
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-20 rounded " />
                                <Skeleton className="w-20  h-8 rounded " />
                            </div>
                        </div >
                    </div >
                    <div className="relative group cursor-pointer transition-all sm:mb-8 mb-4 ">
                        <div className="relative product-box bg-white flex items-center sm:gap-6 gap-4 2xl:gap-10">
                            <div className="image-wrap relative">
                                <Skeleton className="w-full  2xl:h-80 lg:h-60 h-52  mx-auto rounded  xl:min-w-[300px] sm:min-w-[220px] min-w-[50%]" />
                                <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                            </div>
                            <div className="product-detail relative w-full">
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded " />
                                <div className="flex  gap-3 my-3.5 2xl:my-6 ">
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                </div>
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-20 rounded " />
                                <Skeleton className="w-20  h-8 rounded " />
                            </div>
                        </div >
                    </div >
                    <div className="relative group cursor-pointer transition-all sm:mb-8 mb-4 ">
                        <div className="relative product-box bg-white flex items-center sm:gap-6 gap-4 2xl:gap-10">
                            <div className="image-wrap relative">
                                <Skeleton className="w-full  2xl:h-80 lg:h-60 h-52  mx-auto rounded  xl:min-w-[300px] sm:min-w-[220px] min-w-[50%]" />
                                <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                            </div>
                            <div className="product-detail relative w-full">
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded " />
                                <div className="flex  gap-3 my-3.5 2xl:my-6 ">
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                </div>
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-20 rounded " />
                                <Skeleton className="w-20  h-8 rounded " />
                            </div>
                        </div >
                    </div >
                    <div className="relative group cursor-pointer transition-all sm:mb-8 mb-4 ">
                        <div className="relative product-box bg-white flex items-center sm:gap-6 gap-4 2xl:gap-10">
                            <div className="image-wrap relative">
                                <Skeleton className="w-full  2xl:h-80 lg:h-60 h-52  mx-auto rounded  xl:min-w-[300px] sm:min-w-[220px] min-w-[50%]" />
                                <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                            </div>
                            <div className="product-detail relative w-full">
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded " />
                                <div className="flex  gap-3 my-3.5 2xl:my-6 ">
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                    <Skeleton className="w-8 h-8 rounded-full" />
                                </div>
                                <Skeleton className="w-full mb-2 2xl:mb-3 h-20 rounded " />
                                <Skeleton className="w-20  h-8 rounded " />
                            </div>
                        </div >
                    </div >
                </>
            ) : (
                <>
                    {initialValues.length > 0 && initialValues[0].products.slice(0, 6).map((product, index) => {
                        return (
                            <Shop_List_Product initialValues={product} key={index} />
                        )
                    })}
                </>
            )}
        </>

    )
}

export default List_Product;