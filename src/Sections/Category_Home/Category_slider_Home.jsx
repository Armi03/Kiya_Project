import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // If you're using React Router
import { Skeleton } from '@heroui/react';  // Assuming correct import
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Category_Slider = ({ initialValues }) => {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div className="relative 2xl:py-24 lg:py-20 py-14">
          <div className="container">
            <div className="flex items-center justify-between mb-5 flex-wrap">
              <h2 className="text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center 2xl:mb-10 md:mb-8 mb-4">
                explore by category
              </h2>
            </div>
            <Swiper spaceBetween={10} navigation={true} breakpoints={{
              0: { slidesPerView: 2, spaceBetween: 20 },
              430: { slidesPerView: 3 },
              1170: { slidesPerView: 5 },
              1640: { slidesPerView: 7 },
            }} modules={[Navigation]} className="category_slider arrow-bottom">
              {/* Loading skeletons */}
              <SwiperSlide>
                <div className="relative block group">
                  <Skeleton className="sm:w-44 w-32 h-32 sm:h-44 rounded-full object-cover m-auto" />
                  <Skeleton className="mt-3 w-24 h-6 mx-auto rounded" />
                </div>
              </SwiperSlide>
              {/* Repeat as needed */}
            </Swiper>
          </div>
        </div>
      ) : (
        <div className="relative 2xl:py-24 lg:py-20 py-14">
          <div className="relative">
            <h2 className="text-gray-800 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center 2xl:mb-10 md:mb-8 mb-4">
              explore by category
            </h2>
            <div className="container">
              <Swiper spaceBetween={10} navigation={true} breakpoints={{
                0: { slidesPerView: 2, spaceBetween: 20 },
                430: { slidesPerView: 3 },
                1170: { slidesPerView: 5 },
                1640: { slidesPerView: 7 },
              }} modules={[Navigation]} className="category_slider arrow-bottom">
                {initialValues && initialValues.map((slidedata, index) => (
                  <SwiperSlide key={index}>
                    <Link to={slidedata.cat_link}>
                      <img src={slidedata.img} alt={slidedata.alt} width={200} height={200} className="sm:w-44 w-32 h-32 sm:h-44 rounded-full object-cover m-auto group-hover:rotate-12 transition-all" />
                      <h3 className="text-lg lg:text-[20px] 2xl:text-[22px] text-gray-800 group-hover:text-violet-900 text-center mt-3 font-[nabi] uppercase block">{slidedata.title}</h3>
                    </Link>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Category_Slider;
