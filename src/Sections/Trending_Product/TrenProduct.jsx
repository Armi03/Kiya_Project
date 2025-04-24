import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Card_Product } from '../../comman';  

const Related_products = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="relative 2xl:py-24 lg:py-20 py-14 wp-top-arrows">
                    {/* Skeleton Loader */}
                </div>
            ) : (
                <div className="relative 2xl:py-24 lg:py-20 py-14 wp-top-arrows">
                    <div className="relative container">
                        <h2 className="text-gray-800 2xl:mb-10 md:mb-8 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:text-left text-center">
                            Trending products
                        </h2>
                        <Swiper spaceBetween={20} dir="ltr" navigation={true} breakpoints={{
                            0: { slidesPerView: 1 },
                            575: { slidesPerView: 2 },
                            1170: { slidesPerView: 3 },
                            1440: { slidesPerView: 4 },
                        }} modules={[Navigation]} className="category_slider">
                            {initialValues && initialValues.map((pro, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <Card_Product initialValues={pro} />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            )}
        </>
    );
}

export default Related_products;
