import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Skeleton } from "@heroui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const Store_slider = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            {isLoading ? (
                <div className="relative 2xl:py-24 lg:py-20 py-14 overflow-hidden">
                        <Swiper spaceBetween={0}
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
                                <div className="relative w-full h-full">
                                    <Skeleton className="w-full 2xl:h-[860px] lg:h-[750px] h-[400px] mx-auto rounded" />
                                    <Skeleton className="w-44 h-12 mb-10 mx-auto rounded absolute bottom-0 z-10 left-16 border border-white/40" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative " >
                                <div className="relative w-full h-full">
                                    <Skeleton className="w-full 2xl:h-[860px] lg:h-[750px] h-[400px] mx-auto rounded" />
                                    <Skeleton className="w-44 h-12 mb-10 mx-auto rounded absolute bottom-0 z-10 left-16 border border-white/40" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative " >
                                <div className="relative w-full h-full">
                                    <Skeleton className="w-full 2xl:h-[860px] lg:h-[750px] h-[400px] mx-auto rounded" />
                                    <Skeleton className="w-44 h-12 mb-10 mx-auto rounded absolute bottom-0 z-10 left-16 border border-white/40" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full relative " >
                                <div className="relative w-full h-full">
                                    <Skeleton className="w-full 2xl:h-[860px] lg:h-[750px] h-[400px] mx-auto rounded" />
                                    <Skeleton className="w-44 h-12 mb-10 mx-auto rounded absolute bottom-0 z-10 left-16 border border-white/40" />
                                </div>
                            </SwiperSlide>

                        </Swiper>

                    </div>
            ) : (
                <>
                    <div className="relative 2xl:py-24 lg:py-20 py-14 overflow-hidden">
                        <Swiper spaceBetween={0}
                            loop={true}
                            breakpoints={{
                                0: {
                                    slidesPerView: 1,
                                },
                                575: {
                                    slidesPerView: 2,
                                },
                            }}  className="cursor-[url(https://webby-production.s3.amazonaws.com/Starry-Heavens/Home_2/drag_cursor.svg),_pointer]" dir='ltr'>
                            {initialValues && initialValues.map((data, index) => {
                                return (
                                    <SwiperSlide className="" key={index}>
                                        <div className="relative w-full h-full">
                                            <Link href={data.slug} className="cursor-[url(https://webby-production.s3.amazonaws.com/Starry-Heavens/Home_2/drag_cursor.svg),_pointer]">
                                                <img src={data.img} alt={data.alt} title={data.alt} width={960} height={860} className=" 2xl:h-[860px] lg:h-[750px] h-[400px] object-cover" />
                                                <h3 className="text-violet-900 mb-6 lg:mb-10 lg:text-[34px] xl:text-1xl md:text-xl text-[22px] uppercase leading-tight absolute bottom-0 z-10 lg:left-16 left-8">{data.title}</h3>
                                            </Link>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </>
            )}
        </>

    )
}

export default Store_slider;