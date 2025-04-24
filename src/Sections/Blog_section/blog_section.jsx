import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Skeleton } from "@heroui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


const BlogSlider_h2 = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            {isLoading ? (
                <div className="relative 2xl:pb-24 lg:pb-20 pb-14 overflow-hidden">
                    <div className="container">
                        <div className="flex flex-wrap justify-between items-center 2xl:mb-10 md:mb-8 mb-6 gap-2">
                            <h2 className="text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center " >Latest Blog & Articles</h2>
                            <Link href="#" className="all-btn text-sm hover:opacity-100 text-white uppercase tracking-[2px] px-6 flex">View all blog <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                <path d="M8 5L13 10L8 15" className="stroke stroke-1.5 stroke-white" />
                            </svg></Link>
                        </div>
                        <Swiper spaceBetween={30}
                            navigation={true} modules={[Navigation]}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                575: {
                                    slidesPerView: 2,
                                },
                            }}  >
                            <SwiperSlide className="w-full h-full relative " >
                                <div className="relative flex flex-wrap items-center w-full h-full bg-violet-400">
                                    <div className="lg:w-1/2 w-full xl:p-12 md:p-8 p-6 lg:order-1 order-2">
                                        <Skeleton className="w-full h-12 mb-3 xl:mb-4 rounded" />
                                        <Skeleton className="w-full h-44 mb-3 xl:mb-4 rounded" />
                                        <Skeleton className="w-24 h-8 rounded" />
                                    </div>
                                    <div className="lg:w-1/2 w-full lg:order-2 order-1">
                                        <Skeleton className="w-full lg:h-[450px] sm:h-[320px] h-[260px] " />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative " >
                                <div className="relative flex flex-wrap items-center w-full h-full bg-violet-400">
                                    <div className="lg:w-1/2 w-full xl:p-12 md:p-8 p-6 lg:order-1 order-2">
                                        <Skeleton className="w-full h-12 mb-3 xl:mb-4 rounded" />
                                        <Skeleton className="w-full h-44 mb-3 xl:mb-4 rounded" />
                                        <Skeleton className="w-24 h-8 rounded" />
                                    </div>
                                    <div className="lg:w-1/2 w-full lg:order-2 order-1">
                                        <Skeleton className="w-full lg:h-[450px] sm:h-[320px] h-[260px] " />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative " >
                                <div className="relative flex flex-wrap items-center w-full h-full bg-violet-400">
                                    <div className="lg:w-1/2 w-full xl:p-12 md:p-8 p-6 lg:order-1 order-2">
                                        <Skeleton className="w-full h-12 mb-3 xl:mb-4 rounded" />
                                        <Skeleton className="w-full h-44 mb-3 xl:mb-4 rounded" />
                                        <Skeleton className="w-24 h-8 rounded" />
                                    </div>
                                    <div className="lg:w-1/2 w-full lg:order-2 order-1">
                                        <Skeleton className="w-full lg:h-[450px] sm:h-[320px] h-[260px] " />
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative " >
                                <div className="relative flex flex-wrap items-center w-full h-full bg-violet-400">
                                    <div className="lg:w-1/2 w-full xl:p-12 md:p-8 p-6 lg:order-1 order-2">
                                        <Skeleton className="w-full h-12 mb-3 xl:mb-4 rounded" />
                                        <Skeleton className="w-full h-44 mb-3 xl:mb-4 rounded" />
                                        <Skeleton className="w-24 h-8 rounded" />
                                    </div>
                                    <div className="lg:w-1/2 w-full lg:order-2 order-1">
                                        <Skeleton className="w-full lg:h-[450px] sm:h-[320px] h-[260px] " />
                                    </div>
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
                </div>
            ) : (
                <>
                    <div className="relative 2xl:pb-24 lg:pb-20 pb-14 overflow-hidden">
                        <div className="container">
                            <div className="flex md:flex-nowrap flex-wrap md:justify-between justify-center items-center 2xl:mb-10 md:mb-8 mb-6 gap-2">
                                <h2 className="text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center md:w-auto w-full" >Latest Blog & Articles</h2>
                                <Link href="/blog" className="all-btn text-sm hover:opacity-100 text-white uppercase tracking-[2px] px-6 flex">View all blog <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M8 5L13 10L8 15" className="stroke stroke-1.5 stroke-white" />
                                </svg></Link>
                            </div>
                            <Swiper spaceBetween={30}
                                navigation={true} modules={[Navigation]}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 1,
                                    },
                                    575: {
                                        slidesPerView: 2,
                                    },
                                }}  dir='ltr' className="mobile-arrows-bottom">
                                {initialValues && initialValues.map((data, index) => {
                                    return (
                                        <SwiperSlide className="" key={index} >
                                            <div className="relative group flex flex-wrap items-center w-full h-full bg-violet-400 text-left">
                                                <div className="lg:w-1/2 w-full xl:p-12 md:p-8 p-6 lg:order-1 order-2" >
                                                    <Link href={data.slug}><h3 className="text-gray-800 2xl:text-3xl  md:text-xl text-[24px] uppercase leading-tight mb-3 xl:mb-4">{data.title}</h3></Link>
                                                    <p className="mb-5 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7 ">{data.short_des}</p>
                                                    <Link className="text-gray-800 text-lg uppercase inline-flex items-center gap-0 hover:gap-3 transition-all font-[nabi]" href={data.slug}>{data.btn_label} <img src={data.btn_icon_img} width={14} height={14} alt={data.btn_img_alt} title={data.btn_img_alt} className="ml-1 inline-block relative white-img rtl:mr-1 rtl:rotate-180" /></Link>
                                                </div>
                                                <div className="lg:w-1/2 w-full lg:order-2 order-1">
                                                    <Link href={data.slug}>
                                                        <img src={data.blog_img} alt={data.blog_alt} title={data.blog_alt} width={500} height={450} className="lg:h-[450px] sm:h-[320px] h-[260px] object-cover w-full group-hover:grayscale transition-all" />
                                                    </Link>
                                                </div>
                                            </div>
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

export default BlogSlider_h2;