import {Image, Link} from 'react'

import { Checkbox, Skeleton, cn } from "@heroui/react";

import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';


const Diamond_Grid_Product = ({ data }) => {

    const { addItem, items } = useCart();

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    const [is_Wishlist, setisWishlist] = useState(true);

    const productInCart = items.some((item) => item.id === data.id);

    const AddToCart = () => {
        addItem(data)
        const old_class = document.getElementById('mini-cart').className;
        const new_class = old_class === 'color_switch fixed top-0 z-50 transition-all w-full -right-0 h-full' ? 'color_switch fixed top-0 z-50 transition-all w-full -right-full h-full' : 'color_switch fixed top-0 z-50 transition-all w-full -right-0 h-full'
        document.getElementById('mini-cart').className = new_class
    };

    const wishlist_fun = (wishlist_data) => {
        const storedWishList = localStorage.getItem('wishList');
        const product_data = storedWishList ? JSON.parse(storedWishList) : [];
        const isWishlist = product_data.some((item) => item.id === wishlist_data.id);

        if (!isWishlist) {
            // Item not in the wishlist, add it
            const updatedWishList = [...product_data, wishlist_data];
            localStorage.setItem("wishList", JSON.stringify(updatedWishList));
            setisWishlist(true);
        } else {
            // Item is already in the wishlist, remove it
            const updatedWishList = product_data.filter((item) => item.id !== wishlist_data.id);
            localStorage.setItem("wishList", JSON.stringify(updatedWishList));
            setisWishlist(false);
        }
    };

    const wish_list_set = () => {
        const storedWishList = localStorage.getItem('wishList');
        const product_data = JSON.parse(storedWishList)
        if (product_data !== null) {
            const isWishlist = product_data.some((item) => item.id === data.id);
            setisWishlist(isWishlist)
        }
    }

    useEffect(() => {
        wish_list_set();
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    return (

        <>

            {isLoading ? (
                <div className=" relative filter-item ">
                    <div className="relative group transition-all pb-5">
                        <div className="relative product-box bg-white shadow-btn border border-gray-200/10  ">
                            <div className="image-wrap overflow-hidden">
                                <Skeleton className='w-full 2xl:h-[340px] lg:h-[290px] h-[210px] ' />
                                <button className="md:w-10 md:h-10 w-8 h-8 bg-white group/btn rounded-full outline z-10 outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center">
                                    <Skeleton className='rounded-full w-6 h-6 ' />
                                </button>

                            </div >
                            <div className="product-detail bg-white  relative ">
                                <div className='flex justify-between items-center px-4 py-3 border-b border-gray-200/10'>
                                    <Skeleton className='rounded w-2/3 h-5 ' />
                                    <Skeleton className='rounded w-2/3 h-5 ' />
                                </div>
                                <div className='flex justify-between items-center px-4 py-3 lg:py-6'>
                                    <Skeleton className='rounded w-full h-6 ' />
                                </div>
                                <div className='grid grid-cols-[auto,auto,auto] sm:gap-2 gap-1 px-4 sm:py-4 py-3 bg-violet-400 bg-opacity-50'>
                                    <Skeleton className='rounded w-2/3 h-5 ' />
                                    <Skeleton className='rounded w-2/3 h-5 ' />
                                    <Skeleton className='rounded w-2/3 h-5 ' />
                                    <Skeleton className='rounded w-2/3 h-5 ' />
                                    <Skeleton className='rounded w-2/3 h-5 ' />
                                </div>
                                <div className='flex justify-between items-center px-4 py-3 lg:py-5 border-b border-gray-200/10'>
                                    <Skeleton className='rounded w-14 h-11 ' />
                                    <Skeleton className='rounded w-14 h-11 ' />
                                    <Skeleton className='rounded w-14 h-11 ' />
                                </div>
                                <div className='flex justify-between items-center  bg-violet-400 bg-opacity-50'>
                                    <Skeleton className='rounded w-8 h-8 lg:my-4 sm:my-3 my-2 mx-auto ' />
                                    <Skeleton className='rounded w-8 h-8 lg:my-4 sm:my-3 my-2 mx-auto ' />
                                    <Skeleton className='rounded w-8 h-8 lg:my-4 sm:my-3 my-2 mx-auto ' />
                                </div>

                            </div>
                        </div >
                    </div >

                </div >
            ) : (
                <>

                    <div className=" relative filter-item ">
                        <div className="relative group transition-all pb-5">
                            <div className="relative product-box bg-white shadow-btn border border-gray-200/10  ">
                                <div className="image-wrap overflow-hidden">
                                    <Link href={data.link} > <Image src={data.img} width={300} height={400} sizes="100vw" alt={data.alt} title={data.alt} className="w-full 2xl:max-h-[340px] 2xl:min-h-[340px] lg:max-h-[270px] lg:min-h-[240px] min-h-[210px] max-h-[230px] object-cover transition-all scale-100 group-hover:scale-110 " /></Link >
                                    <button className="md:w-10 md:h-10 w-8 h-8 bg-white group/btn rounded-full outline z-10 outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center">
                                        <svg width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-900 group-hover/btn:fill-violet-900 -mt-[2px]'>
                                            <path d="M20.6102 8.76357L12.2768 0.430231C12.1311 0.284596 11.9456 0.185422 11.7435 0.145248C11.5415 0.105073 11.3321 0.125701 11.1418 0.204524C10.9515 0.283347 10.7888 0.416826 10.6743 0.588086C10.5599 0.759347 10.4987 0.960699 10.4987 1.16669V4.8594C7.65317 5.12272 5.00831 6.43842 3.08171 8.54901C1.15511 10.6596 0.0854393 13.4132 0.0820312 16.2709V17.8334C0.0821957 18.0496 0.149646 18.2604 0.275025 18.4366C0.400405 18.6127 0.577499 18.7455 0.781745 18.8165C0.985991 18.8875 1.20726 18.8932 1.41487 18.8327C1.62248 18.7723 1.80614 18.6487 1.94036 18.4792C2.96088 17.2656 4.21303 16.2676 5.62364 15.5434C7.03425 14.8192 8.57504 14.3834 10.156 14.2615C10.2081 14.2552 10.3383 14.2448 10.4987 14.2344V17.8334C10.4987 18.0393 10.5599 18.2407 10.6743 18.412C10.7888 18.5832 10.9515 18.7167 11.1418 18.7955C11.3321 18.8743 11.5415 18.895 11.7435 18.8548C11.9456 18.8146 12.1311 18.7155 12.2768 18.5698L20.6102 10.2365C20.8054 10.0411 20.9151 9.77624 20.9151 9.50002C20.9151 9.22381 20.8054 8.95891 20.6102 8.76357ZM12.582 15.3188V13.1459C12.582 12.8696 12.4723 12.6046 12.2769 12.4093C12.0816 12.2139 11.8166 12.1042 11.5404 12.1042C11.2747 12.1042 10.1904 12.1563 9.91328 12.1927C7.10585 12.4514 4.43351 13.518 2.21953 15.2636C2.47083 12.9661 3.56072 10.842 5.28053 9.29811C7.00033 7.75416 9.2292 6.89882 11.5404 6.89586C11.8166 6.89586 12.0816 6.78611 12.2769 6.59076C12.4723 6.39541 12.582 6.13046 12.582 5.85419V3.68127L18.4008 9.50002L12.582 15.3188Z" />
                                        </svg>
                                    </button>
                                    <div>
                                        <button className="w-10 h-10 bg-white group/btn text-[0] rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute transition-all group-hover:top-[4.8rem] opacity-0 group-hover:opacity-100 right-5 top-5 flex items-center justify-center">
                                            <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-900 group-hover/btn:fill-violet-900'>
                                                <path d="M19.6875 10.5C19.6875 15.3438 16.1328 19.3672 11.4844 20.0703V13.3125H13.75L14.1797 10.5H11.4844V8.70312C11.4844 7.92188 11.875 7.17969 13.0859 7.17969H14.2969V4.79688C14.2969 4.79688 13.2031 4.60156 12.1094 4.60156C9.92188 4.60156 8.47656 5.96875 8.47656 8.39062V10.5H6.01562V13.3125H8.47656V20.0703C3.82812 19.3672 0.3125 15.3438 0.3125 10.5C0.3125 5.14844 4.64844 0.8125 10 0.8125C15.3516 0.8125 19.6875 5.14844 19.6875 10.5Z" />
                                            </svg>
                                        </button>
                                        <button className="w-10 h-10 bg-white group/btn  text-[0] rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute delay-75 transition-all group-hover:top-[8.4rem] right-5 top-5  opacity-0 group-hover:opacity-100  flex items-center justify-center">
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-900 group-hover/btn:fill-violet-900'>
                                                <path d="M9 5.00781C11.4609 5.00781 13.4922 7.03906 13.4922 9.5C13.4922 12 11.4609 13.9922 9 13.9922C6.5 13.9922 4.50781 12 4.50781 9.5C4.50781 7.03906 6.5 5.00781 9 5.00781ZM9 12.4297C10.6016 12.4297 11.8906 11.1406 11.8906 9.5C11.8906 7.89844 10.6016 6.60938 9 6.60938C7.35938 6.60938 6.07031 7.89844 6.07031 9.5C6.07031 11.1406 7.39844 12.4297 9 12.4297ZM14.7031 4.85156C14.7031 5.4375 14.2344 5.90625 13.6484 5.90625C13.0625 5.90625 12.5938 5.4375 12.5938 4.85156C12.5938 4.26562 13.0625 3.79688 13.6484 3.79688C14.2344 3.79688 14.7031 4.26562 14.7031 4.85156ZM17.6719 5.90625C17.75 7.35156 17.75 11.6875 17.6719 13.1328C17.5938 14.5391 17.2812 15.75 16.2656 16.8047C15.25 17.8203 14 18.1328 12.5938 18.2109C11.1484 18.2891 6.8125 18.2891 5.36719 18.2109C3.96094 18.1328 2.75 17.8203 1.69531 16.8047C0.679688 15.75 0.367188 14.5391 0.289062 13.1328C0.210938 11.6875 0.210938 7.35156 0.289062 5.90625C0.367188 4.5 0.679688 3.25 1.69531 2.23438C2.75 1.21875 3.96094 0.90625 5.36719 0.828125C6.8125 0.75 11.1484 0.75 12.5938 0.828125C14 0.90625 15.25 1.21875 16.2656 2.23438C17.2812 3.25 17.5938 4.5 17.6719 5.90625ZM15.7969 14.6562C16.2656 13.5234 16.1484 10.7891 16.1484 9.5C16.1484 8.25 16.2656 5.51562 15.7969 4.34375C15.4844 3.60156 14.8984 2.97656 14.1562 2.70312C12.9844 2.23438 10.25 2.35156 9 2.35156C7.71094 2.35156 4.97656 2.23438 3.84375 2.70312C3.0625 3.01562 2.47656 3.60156 2.16406 4.34375C1.69531 5.51562 1.8125 8.25 1.8125 9.5C1.8125 10.7891 1.69531 13.5234 2.16406 14.6562C2.47656 15.4375 3.0625 16.0234 3.84375 16.3359C4.97656 16.8047 7.71094 16.6875 9 16.6875C10.25 16.6875 12.9844 16.8047 14.1562 16.3359C14.8984 16.0234 15.5234 15.4375 15.7969 14.6562Z" />
                                            </svg>
                                        </button>
                                        <button className="w-10 h-10 bg-white group/btn  text-[0] rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute delay-75 transition-all group-hover:top-48 right-5 top-5  opacity-0 group-hover:opacity-100  flex items-center justify-center">
                                            <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-gray-900 group-hover/btn:fill-violet-900'>
                                                <path d="M15.0938 3.32812C16.7344 4.96875 17.75 7.11719 17.75 9.46094C17.75 14.2266 13.7656 18.1328 8.96094 18.1328C7.51562 18.1328 6.10938 17.7422 4.82031 17.0781L0.25 18.25L1.46094 13.7578C0.71875 12.4688 0.289062 10.9844 0.289062 9.42188C0.289062 4.65625 4.19531 0.75 8.96094 0.75C11.3047 0.75 13.4922 1.6875 15.0938 3.32812ZM8.96094 16.6484C12.9453 16.6484 16.2656 13.4062 16.2656 9.46094C16.2656 7.50781 15.4453 5.71094 14.0781 4.34375C12.7109 2.97656 10.9141 2.23438 9 2.23438C5.01562 2.23438 1.77344 5.47656 1.77344 9.42188C1.77344 10.7891 2.16406 12.1172 2.86719 13.2891L3.0625 13.5625L2.32031 16.2188L5.05469 15.4766L5.28906 15.6328C6.42188 16.2969 7.67188 16.6484 8.96094 16.6484ZM12.9453 11.2578C13.1406 11.375 13.2969 11.4141 13.3359 11.5312C13.4141 11.6094 13.4141 12.0391 13.2188 12.5469C13.0234 13.0547 12.1641 13.5234 11.7734 13.5625C11.0703 13.6797 10.5234 13.6406 9.15625 13.0156C6.96875 12.0781 5.5625 9.89062 5.44531 9.77344C5.32812 9.61719 4.58594 8.60156 4.58594 7.50781C4.58594 6.45312 5.13281 5.94531 5.32812 5.71094C5.52344 5.47656 5.75781 5.4375 5.91406 5.4375C6.03125 5.4375 6.1875 5.4375 6.30469 5.4375C6.46094 5.4375 6.61719 5.39844 6.8125 5.82812C6.96875 6.25781 7.4375 7.3125 7.47656 7.42969C7.51562 7.54688 7.55469 7.66406 7.47656 7.82031C7.08594 8.64062 6.61719 8.60156 6.85156 8.99219C7.71094 10.4375 8.53125 10.9453 9.82031 11.5703C10.0156 11.6875 10.1328 11.6484 10.2891 11.5312C10.4062 11.375 10.8359 10.8672 10.9531 10.6719C11.1094 10.4375 11.2656 10.4766 11.4609 10.5547C11.6562 10.6328 12.7109 11.1406 12.9453 11.2578Z" />
                                            </svg>

                                        </button>
                                    </div>
                                </div >
                                <div className="product-detail bg-white  relative ">
                                    <div className='flex justify-between items-center px-4 py-3 border-b border-gray-200/10'>
                                        <div className='2xl:text-sm text-[13px] text-gray-900 uppercase '>
                                            <span className='text-violet-900 font-semibold'>Gia - </span>
                                            <span>{data.gia_number}</span>
                                        </div>
                                        <div className='2xl:text-sm text-[13px] text-gray-900 uppercase '>
                                            <span className='text-violet-900 font-semibold'>Stock ID - </span>
                                            <span>{data.stock_id}</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center px-4 py-4 2xl:py-6'>
                                        <Link href={data.link} className="text-[17px] lg:text-lg 2xl:text-[20px] text-gray-800 group-hover:text-violet-900 leading-tight font-[nabi] block uppercase" >{data.title}</Link>
                                    </div>
                                    <div className='grid grid-cols-[auto,auto,auto] sm:gap-2 gap-1 px-4 2xl:py-4 py-3 bg-violet-400 bg-opacity-50'>
                                        <div className='2xl:text-sm text-[13px] text-gray-900 uppercase '>
                                            <span className='text-violet-900 font-semibold min-[420px]:inline-block block'>D - </span>
                                            <span>{data.d_number}</span>
                                        </div>
                                        <div className='2xl:text-sm text-[13px] text-gray-900 uppercase '>
                                            <span className='text-violet-900 font-semibold  min-[420px]:inline-block block'>M - </span>
                                            <span>{data.m_number}</span>
                                        </div>
                                        <div className='2xl:text-sm text-[13px] text-gray-900 uppercase '>
                                            <span className='text-violet-900 font-semibold  min-[420px]:inline-block block' >Eyeclean - </span>
                                            <span>{data.eyeclean}</span>
                                        </div>
                                        <div className='2xl:text-sm text-[13px] text-gray-900 uppercase '>
                                            <span className='text-violet-900 font-semibold  min-[420px]:inline-block block'>T - </span>
                                            <span>{data.t_number}</span>
                                        </div>
                                        <div className='2xl:text-sm text-[13px] text-gray-900 uppercase '>
                                            <span className='text-violet-900 font-semibold  min-[420px]:inline-block block'>Ratio - </span>
                                            <span>{data.ratio}</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center px-4 py-3 2xl:py-5 border-b border-gray-200/10'>
                                        <div className='md:text-sm text-[13px] text-gray-900 uppercase '>
                                            <span className='md:mb-1.5 mb-0.5 font-semibold block'>Total</span>
                                            <span className='text-violet-900 xl:text-[20px] md:text-lg text-md font-semibold'>{data.total}</span>
                                        </div>
                                        <div className='md:text-sm text-[13px] text-gray-900 uppercase '>
                                            <span className='font-semibold block'>DIS</span>
                                        </div>
                                        <div className='md:text-sm text-[13px] text-gray-900 uppercase text-right'>
                                            <span className='md:mb-1.5 mb-0.5 font-semibold block'>price/cT</span>
                                            <span className='text-violet-900 xl:text-[20px] md:text-lg text-md font-semibold'>{data.price_ct}</span>
                                        </div>
                                    </div>
                                    <div className='flex justify-between items-center  bg-violet-400 bg-opacity-50'>
                                        <div className='lg:py-4 sm:py-3 py-2 w-1/3 text-center border-r border-gray-200/10'>
                                            <Checkbox classNames={{
                                                base: cn(
                                                    "m-0 p-0"
                                                ),
                                                wrapper: cn(
                                                    "group-data-[selected=true]:!bg-violet-900 focus:outline-0 m-0 border-[1.5px] border-black rounded md:w-[18px] md:h-[18px] w-[16px] h-[16px] group-data-[selected=true]:border-violet-900  group-data-[selected=true]:before:!bg-violet-900 after:!bg-violet-900 before:!border-0 after:!border-0 before:!rounded after:!rounded outline-0"
                                                ),

                                            }}></Checkbox>
                                        </div>
                                        <div onClick={() => wishlist_fun(data)} className='lg:py-4 sm:py-3 py-2 w-1/3 text-center'>
                                            <button className="group/wishlist text-0 block mx-auto">
                                                {
                                                    is_Wishlist ?
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 23" fill="none" className="md:w-[24px] w-[21px]  stroke-[1.5] stroke-gray-800 stroke-violet-900 fill-violet-900 group-[.active]/wishlist:fill-violet-900 fill-none group-[.active]/wishlist:stroke-violet-900">
                                                            <path d="M10.4697 5.59405C10.6103 5.7347 10.8011 5.81372 11 5.81372C11.1989 5.81372 11.3897 5.7347 11.5303 5.59405L11.9085 5.21592C12.8465 4.2779 14.118 3.75122 15.4447 3.75122H15.5616C18.3236 3.75122 20.5625 5.99012 20.5625 8.75216C20.5625 10.1386 19.9874 11.4622 18.9741 12.4079L11 19.8503L3.02592 12.4079C2.01262 11.4622 1.4375 10.1386 1.4375 8.75216C1.4375 5.99012 3.6764 3.75122 6.43844 3.75122H6.55531C7.88197 3.75122 9.15352 4.2779 10.0915 5.21593L10.4697 5.59405Z"
                                                            />
                                                        </svg>
                                                        :
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="24" viewBox="0 0 22 23" fill="none" className="md:w-[24px] w-[21px]  stroke-[1.5] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:fill-violet-900 group-[.active]/wishlist:fill-violet-900 fill-none group-[.active]/wishlist:stroke-violet-900">
                                                            <path d="M10.4697 5.59405C10.6103 5.7347 10.8011 5.81372 11 5.81372C11.1989 5.81372 11.3897 5.7347 11.5303 5.59405L11.9085 5.21592C12.8465 4.2779 14.118 3.75122 15.4447 3.75122H15.5616C18.3236 3.75122 20.5625 5.99012 20.5625 8.75216C20.5625 10.1386 19.9874 11.4622 18.9741 12.4079L11 19.8503L3.02592 12.4079C2.01262 11.4622 1.4375 10.1386 1.4375 8.75216C1.4375 5.99012 3.6764 3.75122 6.43844 3.75122H6.55531C7.88197 3.75122 9.15352 4.2779 10.0915 5.21593L10.4697 5.59405Z"
                                                            />
                                                        </svg>
                                                }
                                            </button>
                                        </div>
                                        <div className='lg:py-4 sm:py-3 py-2 w-1/3 text-center  border-l border-gray-200/10'>
                                            <button onClick={() => AddToCart()} className="group/wishlist text-0 block mx-auto">
                                                {
                                                    productInCart ?
                                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="md:w-[22px] w-[18px] stroke-[1.5] stroke-gray-800 stroke-violet-900 fill-violet-900 " xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.0273 5.49757C9.02734 5.49752 5.52734 4.99755 4.52922 7.49756C3.59119 9.84705 3.19588 14.1642 3.02922 15.9975C2.86255 17.3309 3.32922 19.9975 6.52922 19.9975H11.0273M11 5.49757C13 5.49752 16.5 4.99755 17.4981 7.49756C18.4362 9.84705 18.8315 14.1642 18.9981 15.9975C19.1648 17.3309 18.6981 19.9975 15.4981 19.9975H11" />
                                                            <path d="M11 1.79999C11.8477 1.79999 14 1.79999 14 5.29999" />
                                                            <path d="M11 1.79999C10.1523 1.79999 8 1.79999 8 5.29999" />
                                                        </svg>
                                                        :
                                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="md:w-[22px] w-[18px] stroke-[1.5] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:fill-violet-900 " xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.0273 5.49757C9.02734 5.49752 5.52734 4.99755 4.52922 7.49756C3.59119 9.84705 3.19588 14.1642 3.02922 15.9975C2.86255 17.3309 3.32922 19.9975 6.52922 19.9975H11.0273M11 5.49757C13 5.49752 16.5 4.99755 17.4981 7.49756C18.4362 9.84705 18.8315 14.1642 18.9981 15.9975C19.1648 17.3309 18.6981 19.9975 15.4981 19.9975H11" />
                                                            <path d="M11 1.79999C11.8477 1.79999 14 1.79999 14 5.29999" />
                                                            <path d="M11 1.79999C10.1523 1.79999 8 1.79999 8 5.29999" />
                                                        </svg>
                                                }
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div >
                        </div >

                    </div >

                </>
            )}

        </>
    )
}

export default Diamond_Grid_Product;