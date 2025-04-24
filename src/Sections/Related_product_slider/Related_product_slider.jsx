import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Skeleton } from "@heroui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Card_Product } from '../../comman';

const Related_Product = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            {isLoading ? (
                <div className="relative 2xl:py-20 lg:py-16 py-14 wp-top-arrows">
                    <div className="container">
                        <h2 className="text-gray-800 2xl:mb-10 md:mb-8 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:text-left text-center">Related Products</h2>
                        <Swiper spaceBetween={20}
                            loop={true}
                            dir="ltr"
                            navigation={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                575: {
                                    slidesPerView: 2,
                                },
                                1170: {
                                    slidesPerView: 3,
                                },
                                1440: {
                                    slidesPerView: 4,
                                },
                            }}
                            modules={[Navigation]} className="category_slider !px-0 !mx-0">
                             <SwiperSlide className="w-full h-full relative " >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full lg:h-[300px] h-[220px] mx-auto rounded" />
                                        <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                                    </div>
                                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8  mb-4 mx-auto rounded" />
                                        <Skeleton className="w-32 h-8 rounded  mb-4" />
                                        <Skeleton className="w-12 h-8 rounded" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative " >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full lg:h-[300px] h-[220px] mx-auto rounded" />
                                        <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                                    </div>
                                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8  mb-4 mx-auto rounded" />
                                        <Skeleton className="w-32 h-8 rounded mx-auto  mb-4" />
                                        <Skeleton className="w-12 h-8 rounded mx-auto" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative " >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full lg:h-[300px] h-[220px] mx-auto rounded" />
                                        <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                                    </div>
                                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8  mb-4 mx-auto rounded" />
                                        <Skeleton className="w-32 h-8 rounded mx-auto  mb-4" />
                                        <Skeleton className="w-12 h-8 rounded mx-auto" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative " >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full lg:h-[300px] h-[220px] mx-auto rounded" />
                                        <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                                    </div>
                                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8  mb-4 mx-auto rounded" />
                                        <Skeleton className="w-32 h-8 rounded mx-auto  mb-4" />
                                        <Skeleton className="w-12 h-8 rounded mx-auto" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative " >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full lg:h-[300px] h-[220px] mx-auto rounded" />
                                        <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                                    </div>
                                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8  mb-4 mx-auto rounded" />
                                        <Skeleton className="w-32 h-8 rounded mx-auto  mb-4" />
                                        <Skeleton className="w-12 h-8 rounded mx-auto" />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative " >
                                <div className="relative product-box bg-white shadow-btn">
                                    <div className="image-wrap">
                                        <Skeleton className="w-full lg:h-[300px] h-[220px] mx-auto rounded" />
                                        <Skeleton className="w-10 h-10 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                                    </div>
                                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8  mb-4 mx-auto rounded" />
                                        <Skeleton className="w-32 h-8 rounded mx-auto  mb-4" />
                                        <Skeleton className="w-12 h-8 rounded mx-auto" />
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div >
            ) : (
                <>
                    <div className="relative 2xl:py-20 lg:py-16 py-14 wp-top-arrows">
                        <div className="relative container">
                            <h2 className="text-gray-800 2xl:mb-10 md:mb-8 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:text-left text-center">Related Products</h2>
                            <Swiper spaceBetween={20}
                                navigation={true}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    575: {
                                        slidesPerView: 2,
                                    },
                                    1170: {
                                        slidesPerView: 3,
                                    },
                                    1440: {
                                        slidesPerView: 5,
                                    },
                                }}
                                modules={[Navigation]} className="category_slider !px-0 !mx-0" dir='ltr' >
                                {initialValues && initialValues.map((data, index) => {
                                    return (
                                        <SwiperSlide className="" key={index}>
                                            <div className=" relative filter-item ">
                                                <div className="relative group cursor-pointer transition-all lg:pb-5">
                                                    <div className="relative product-box bg-white  group-hover:shadow-none ">
                                                        <div className="image-wrap overflow-hidden bg-violet-400">
                                                            <Link href={data.slug} > <img src={data.img} width={200} height={200} alt={data.alt} title={data.alt} className="w-full transition-all scale-110 group-hover:scale-100 max-w-[200px] mx-auto h-[300px] object-contain" /></Link >
                                                            <button className="md:w-10 md:h-10 w-8 h-8 bg-white group/wishlist wishlist-pro rounded-full outline z-10 outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" className="md:w-[22px] w-[18px] stroke-[1.5] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:fill-violet-900 group-[.active]/wishlist:fill-violet-900 fill-none group-[.active]/wishlist:stroke-violet-900">
                                                                    <path d="M10.4697 5.59405C10.6103 5.7347 10.8011 5.81372 11 5.81372C11.1989 5.81372 11.3897 5.7347 11.5303 5.59405L11.9085 5.21592C12.8465 4.2779 14.118 3.75122 15.4447 3.75122H15.5616C18.3236 3.75122 20.5625 5.99012 20.5625 8.75216C20.5625 10.1386 19.9874 11.4622 18.9741 12.4079L11 19.8503L3.02592 12.4079C2.01262 11.4622 1.4375 10.1386 1.4375 8.75216C1.4375 5.99012 3.6764 3.75122 6.43844 3.75122H6.55531C7.88197 3.75122 9.15352 4.2779 10.0915 5.21593L10.4697 5.59405Z"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div >
                                                        <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                                            <div className='flex gap-1.5 justify-center items-center mb-4 gap-3'>
                                                                <span className='w-[20px] h-[20px] rounded-full outline outline-1 outline-offset-2 outline-black bg-gradient-to-r from-[#EFA71B] via-[#F2F2F2] to-[#EFA71B] '></span>
                                                                <span className='w-[20px] h-[20px] rounded-full outline outline-1 outline-offset-2 outline-black bg-gradient-to-r from-[#727472] via-[#D6D6D6] to-[#727472] '></span>
                                                                <span className='w-[20px] h-[20px] rounded-full outline outline-1 outline-offset-2 outline-black bg-gradient-to-r from-[#E3C2C2] via-[#F2F2F2] to-[#E3C2C2] '></span>
                                                            </div>
                                                            <Link href={data.slug} className="text-lg capitalize lg:text-[22px] xl:text-[24px] text-gray-800 group-hover:text-violet-900 mb-2 2xl:mb-3 leading-tight font-[nabi] block text-center" >{data.title}</Link>


                                                            <p className="block 2xl:text-[20px] text-gray-200 lg:text-[17px] text-md text-center">$ {data.price}</p>
                                                        </div>
                                                    </div >
                                                </div >

                                            </div >
                                        </SwiperSlide>
                                    )
                                })}
                            </Swiper>

                        </div>
                    </div>
                </>
            )}
        </>

    )
}

export default Related_Product;