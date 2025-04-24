import React, { useEffect, useState } from 'react';
import {Image, Link} from 'react'

import { Skeleton } from "@heroui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/navigation';

const Testimonial_slide_h2 = ({ initialValues }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);


    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (
        <>
            {isLoading ? (
                <>
                <div className="relative 2xl:pb-20 pb-10 w-2/3 mx-auto overflow-hidden">
                    <div className="container">
                        <h2 className="text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center">What client Are Saying</h2>
                        <div className="2xl:px-8 m-auto py-4 md:py-8 mx-1 relative wp-testimonial">
                            <div className="max-w-[600px] overflow-hidden mx-auto">
                                <Swiper  onSwiper={setThumbsSwiper}
                                        loop={true}
                                        spaceBetween={0}
                                        modules={[ Thumbs]}
                                        className="testimonial_thumbs" dir='ltr'>
                                    <SwiperSlide>
                                        <Skeleton className="rounded-full w-24 h-24" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Skeleton className="rounded-full w-24 h-24" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Skeleton className="rounded-full w-24 h-24" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Skeleton className="rounded-full w-24 h-24" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Skeleton className="rounded-full w-24 h-24" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Skeleton className="rounded-full w-24 h-24" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Skeleton className="rounded-full w-24 h-24" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                            <Swiper thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                spaceBetween={30}
                                loop={true}
                                modules={[ Navigation, Thumbs]} navigation={true} className="" dir='ltr'>
                                <SwiperSlide  >
                                    <div className="relative group cursor-pointer transition-all m-auto">
                                        <div className="relative mt-5">
                                            <Skeleton className=" rounded w-full h-28" />
                                            <div className="flex items-center mt-6 justify-center">
                                                <div className="ml-3">
                                                    <Skeleton className="rounded w-28 h-8 2xl:mb-1 mx-auto" />
                                                    <Skeleton className="rounded w-20 h-8 mx-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide  >
                                    <div className="relative group cursor-pointer transition-all m-auto">
                                        <div className="relative mt-5">
                                            <Skeleton className=" rounded w-full h-28" />
                                            <div className="flex items-center mt-6 justify-center">
                                                <div className="ml-3">
                                                    <Skeleton className="rounded w-28 h-8 2xl:mb-1 mx-auto" />
                                                    <Skeleton className="rounded w-20 h-8 mx-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide  >
                                    <div className="relative group cursor-pointer transition-all m-auto">
                                        <div className="relative mt-5">
                                            <Skeleton className=" rounded w-full h-28" />
                                            <div className="flex items-center mt-6 justify-center">
                                                <div className="ml-3">
                                                    <Skeleton className="rounded w-28 h-8 2xl:mb-1 mx-auto" />
                                                    <Skeleton className="rounded w-20 h-8 mx-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide  >
                                    <div className="relative group cursor-pointer transition-all m-auto">
                                        <div className="relative mt-5">
                                            <Skeleton className=" rounded w-full h-28" />
                                            <div className="flex items-center mt-6 justify-center">
                                                <div className="ml-3">
                                                    <Skeleton className="rounded w-28 h-8 2xl:mb-1 mx-auto" />
                                                    <Skeleton className="rounded w-20 h-8 mx-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide  >
                                    <div className="relative group cursor-pointer transition-all m-auto">
                                        <div className="relative mt-5">
                                            <Skeleton className=" rounded w-full h-28" />
                                            <div className="flex items-center mt-6 justify-center">
                                                <div className="ml-3">
                                                    <Skeleton className="rounded w-28 h-8 2xl:mb-1 mx-auto" />
                                                    <Skeleton className="rounded w-20 h-8 mx-auto" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>

                        </div>
                    </div>
                </div>
                </>
            ) : (
                <>
                    <div className="relative 2xl:pb-20 pb-10 sm:w-2/3 mx-auto overflow-hidden">
                        <div className="container">
                            <h2 className="text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center">What client Are Saying</h2>
                            <div className="2xl:px-8 m-auto py-4 md:py-8 mx-1 relative wp-testimonial">
                                <div className="max-w-[600px] overflow-hidden mx-auto">
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        slidesPerView={'auto'}
                                        loop={true}
                                        modules={[Thumbs]}
                                        className="testimonial_thumbs"dir='ltr'>
                                        {initialValues && initialValues.map((slidedata, index) => {
                                            return (
                                                <SwiperSlide key={index}>
                                                    <Image src={slidedata.avatar} width={60} height={60} alt={slidedata.alt} title={slidedata.alt} className="object-cover rounded-full w-[60px] h-[60px] mx-auto" />
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                                <Swiper thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    spaceBetween={30}
                                    slidesPerView={'auto'}
                                    loop={true} 
                                    modules={[Navigation, Thumbs]} navigation={true} className="p-0" dir='ltr'>

                                    {initialValues && initialValues.map((slidedata, index) => {
                                        return (
                                            <SwiperSlide key={index} >
                                                <div className="relative group cursor-pointer transition-all m-auto">
                                                    <div className="relative mt-5">
                                                        <p className="text-center block text-gray-200 text-md leading-7 2xl:text-lg ">{slidedata.des}</p>
                                                        <div className="flex items-center mt-6 justify-center">
                                                            <div className="ml-3">
                                                                <p className="font-[nabi] text-[20px] xl:text-[24px] text-violet-900 2xl:mb-1">- {slidedata.user_name}</p>
                                                                <p className=" text-sm text-gray-800 text-center">{slidedata.user_position}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}

                                </Swiper>

                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Testimonial_slide_h2;