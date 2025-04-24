import React, { useEffect, useState } from 'react';
import { Skeleton } from "@heroui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade, Thumbs } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';


const Hero_Slider = ({ initialValues }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="hero-sec">
                    <div className="relative w-full h-full overflow-hidden">
                        <div className="flex flex-wrap hero-sec items-end h-full min-h-[100vh] justify-end">
                            <Skeleton className="w-full h-screen" />
                            <div className="thumb_slide_wrap md:block hidden">
                                <Swiper
                                    slidesPerView={1}
                                    loop={true}
                                    spaceBetween={30}
                                    watchSlidesProgress={true}
                                    modules={[Pagination, Navigation, Thumbs]}
                                    className="mySwiper animated_thumb_slider" dir="ltr">
                                    <SwiperSlide>
                                        <Skeleton className="lg:min-h-[220px] object-cover border border-3 border-white/20 rounded-lg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Skeleton className="lg:min-h-[220px] object-cover border border-3 border-white/20 rounded-lg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Skeleton className="lg:min-h-[220px] object-cover border border-3 border-white/20 rounded-lg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Skeleton className="lg:min-h-[220px] object-cover border border-3 border-white/20 rounded-lg" />
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <Skeleton className="lg:min-h-[220px] object-cover border border-3 border-white/20 rounded-lg" />
                                    </SwiperSlide>
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <>
                    <div className="hero-sec" dir='ltr'>
                        <div className="relative w-full h-full overflow-hidden">
                            <div className="flex flex-wrap hero-sec sm:items-end h-full lg:min-h-[100vh] justify-end">
                                <div className="flex sm:gap-3 gap-2 justify-end absolute sm:!bottom-16 md:!left-1/2 !left-auto xl:!bottom-16 md:!bottom-5 !bottom-16 md:!right-auto sm:!right-12 !right-4 !top-auto">
                                    <div className="arrow-right swiper-button-prev group hover:bg-white border-[1.6px] !relative !left-0 !top-0 border-white !mt-0 after:!hidden !text-black !text-md rounded-full 2xl:!w-[75px] 2xl:!h-[75px] xl:!w-[65px] xl:!h-[65px] lg:!w-14 lg:!h-14 md:!w-12 md:!h-12 !w-10 !h-10 flex items-center justify-center">
                                        <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className='xl:!w-5 lg:!w-4 !w-3 -ml-1' xmlns="http://www.w3.org/2000/svg">
                                            <path d="M18.4982 28.508L1.60088 15.0001L18.4982 1.4922L18.4982 28.508Z" stroke="white" strokeWidth="1.5" className='group-hover:stroke-violet-900' />
                                        </svg>
                                    </div>
                                    <div className="arrow-left !relative !left-0 !top-0 swiper-button-next group hover:bg-white border-[1.6px] border-white !mt-0 after:!hidden !text-black !text-md rounded-full 2xl:!w-[75px] 2xl:!h-[75px] xl:!w-[65px] xl:!h-[65px] lg:!w-14 lg:!h-14 md:!w-12 md:!h-12 !w-10 !h-10 flex items-center justify-center">
                                        <svg width="20" height="30" viewBox="0 0 20 30" fill="none" className='xl:!w-5 lg:!w-4 !w-3 -mr-1' xmlns="http://www.w3.org/2000/svg">
                                            <path d="M1.50176 1.49215L18.3991 15L1.50176 28.5079L1.50176 1.49215Z" stroke="white" strokeWidth='1.5' className='group-hover:stroke-violet-900' />
                                        </svg>
                                    </div>
                                </div>
                                <Swiper
                                    thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                                    spaceBetween={10}
                                    slidesPerView={1}
                                    loop={true}
                                    navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right" }}
                                    effect={'fade'}
                                    modules={[Pagination, Navigation, EffectFade, Thumbs]}
                                    pagination={{
                                        type: 'progressbar',
                                    }}
                                    className="mySwiper2 animated_bg_slider" dir="ltr">
                                    {initialValues && initialValues.map((slidedata, index) => {
                                        return (
                                            <SwiperSlide className="w-full h-full relative sm:bg-black" key={index}>
                                                <div className="md:min-h-screen flex items-center before:content-[''] before:block before:w-[100%] before:h-full before:bg-[#00000020] before:absolute before:left-0 before:top-0 before:z-1">
                                                    <img src={slidedata.img} width={1920} height={900} className="absolute top-0 left-0 transform w-full h-full object-cover" alt={slidedata.alt} title={slidedata.alt} />
                                                    <div className="slide-content z-30 flex items-center 1xl:pt-40 pt-36 pb-16 min-h-[50vh] w-full h-full">
                                                        <div className="md:container md:px-6 px-4 z-10">
                                                            <div className="xl:w-1/3 md:w-2/5 w-full slide_content">
                                                                <hr className="w-12 h-1 bg-white border-0" />
                                                                <p className="block text-white sm:text-md text-sm leading-7 uppercase 2xl:text-lg my-4">{slidedata.sub_heading}</p>
                                                                <h1 className="text-white mb-4 2xl:text-8xl lg:text-3xl sm:text-1xl text-xl uppercase leading-none">{slidedata.title}</h1>
                                                                <p className="block text-white text-md font-light leading-7 2xl:text-lg my-4">{slidedata.description}</p>
                                                                <div className="flex items-center mt-8">
                                                                    <Link className="btn-outline md:w-14 md:h-14 sm:w-12 sm:h-12 w-10 h-10 flex items-center justify-center sm:px-3.5 px-3 sm:mr-4 mr-2.5 group" href="#scroll-down">
                                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" className="fill-white group-hover:fill-black">
                                                                            <g>
                                                                                <path d="M9.89844 17.7358C9.89844 18.0712 9.80361 18.3928 9.63483 18.6299C9.46605 18.867 9.23713 19.0002 8.99844 19.0002C8.75974 19.0002 8.53083 18.867 8.36204 18.6299C8.19326 18.3928 8.09844 18.0712 8.09844 17.7358L8.09844 1.26468C8.09844 0.929331 8.19326 0.607718 8.36204 0.370591C8.53083 0.133464 8.75974 0.00024647 8.99844 0.000244141C9.23713 0.00024639 9.46605 0.133464 9.63483 0.370591C9.80361 0.607718 9.89844 0.929331 9.89844 1.26468L9.89844 17.7358Z" />
                                                                                <path d="M9.84437 18.4305C9.69016 18.5849 9.48223 18.666 9.26632 18.6561C9.05042 18.6463 8.84422 18.5462 8.69308 18.3779C8.54195 18.2096 8.45827 17.987 8.46044 17.7588C8.46262 17.5307 8.55048 17.3159 8.70468 17.1616L16.2789 9.58217C16.4331 9.42786 16.641 9.34671 16.8569 9.35658C17.0728 9.36645 17.279 9.46653 17.4302 9.63481C17.5813 9.80308 17.665 10.0258 17.6628 10.2539C17.6606 10.482 17.5728 10.6968 17.4186 10.8511L9.84437 18.4305Z" />
                                                                                <path d="M8.22203 18.4987C8.37624 18.653 8.58417 18.7341 8.80008 18.7243C9.01599 18.7144 9.22219 18.6143 9.37332 18.446C9.52445 18.2777 9.60814 18.0551 9.60596 17.827C9.60379 17.5989 9.51593 17.384 9.36172 17.2297L1.78754 9.65029C1.63333 9.49597 1.4254 9.41482 1.20949 9.4247C0.993585 9.43457 0.787384 9.53465 0.636251 9.70292C0.48512 9.8712 0.401438 10.0939 0.403613 10.322C0.405789 10.5501 0.493644 10.7649 0.647851 10.9192L8.22203 18.4987Z" />
                                                                            </g>
                                                                            <defs>
                                                                                <clipPath id="clip0_2221_290">
                                                                                    <rect width="19" height="18" fill="white" transform="matrix(0 1 -1 0 18 0.000244141)" />
                                                                                </clipPath>
                                                                            </defs>
                                                                        </svg>
                                                                    </Link>
                                                                    <Link className="btn-outline md:py-3.5 sm:py-2.5 py-[7px]" href={slidedata.btn_slug}>{slidedata.btn_label}</Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </SwiperSlide>
                                        )
                                    })}
                                </Swiper>
                                <div className="thumb_slide_wrap md:block hidden">
                                    <Swiper
                                        onSwiper={setThumbsSwiper}
                                        slidesPerView={1}
                                        loop={true}
                                        spaceBetween={30}
                                        watchSlidesProgress={true}
                                        modules={[Pagination, Navigation, Thumbs]}
                                        className="mySwiper animated_thumb_slider" dir="ltr">
                                        {initialValues && initialValues.map((slidedata, index) => {
                                            return (
                                                <SwiperSlide key={index} className='cursor-pointer'>
                                                    <img src={slidedata.img} width={250} height={220} alt={slidedata.alt} title={slidedata.alt} className="lg:min-h-[220px] min-h-[170px] object-cover border border-3 border-white/20 rounded-lg" />
                                                </SwiperSlide>
                                            )
                                        })}
                                    </Swiper>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
}

export default Hero_Slider;
