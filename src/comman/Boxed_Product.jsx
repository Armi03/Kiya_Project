import {Image, Link} from 'react'
import { Skeleton } from "@heroui/react";

import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';



const BoxedProduct = ({ initialValues }) => {

    const { addItem, items } = useCart();

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    const [is_Wishlist, setisWishlist] = useState(true);

    const productInCart = items.some((item) => item.id === initialValues.id);

    const AddToCart = () => {
        addItem(initialValues);
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
            const isWishlist = product_data.some((item) => item.id === initialValues.id);
            setisWishlist(isWishlist)
        }
    }

    useEffect(() => {
        wish_list_set();
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    let badge = null;
    if (initialValues.sale_badge) {
        badge = (
            <span className='bg-white sm:px-3 px-2 sm:py-1 py-0.5 sm:text-sm text-[12px] text-violet-900 font-montserrat font-[600] absolute top-3 left-3'>{initialValues.sale_badge}</span>
        )
    }

    let box_class = null;
    if (initialValues.box_class) {
        box_class = initialValues.box_class
    }

    const get_badge = (badge_type = '') => {
        if (badge_type) {
            if (badge_type === 'In available') {
                return (
                    <p className="sm:text-[13px] text-[12px] text-[#136400] uppercase text-center mb-2 font-montserrat font-[600]">{badge_type}</p>
                )
            } else if (badge_type === 'Sold Out') {
                return (
                    <p className="sm:text-[13px] text-[12px] text-[#a50000] uppercase text-center mb-2 font-montserrat font-[600]">{badge_type}</p>
                )
            } else if (badge_type === 'In Stock') {
                return (
                    <p className="sm:text-[13px] text-[12px] text-[#a5009e] uppercase text-center mb-2 font-montserrat font-[600]">{badge_type}</p>
                )
            } else if (badge_type === 'New Arrivals') {
                return (
                    <p className="sm:text-[13px] text-[12px] text-[#cb7200] uppercase text-center mb-2 font-montserrat font-[600]">{badge_type}</p>
                )
            } else if (badge_type === 'Best Seller') {
                return (
                    <p className="sm:text-[13px] text-[12px] text-[#002eb7] uppercase text-center mb-2 font-montserrat font-[600]">{badge_type}</p>
                )
            } else {
                return (
                    <p className="sm:text-[13px] text-[12px] text-gray-600 uppercase text-center mb-2 font-montserrat font-[600]">{badge_type}</p>
                )
            }
        }
    }
    return (
        <>
            <div>
                {isLoading ? (
                    <div className="bg-gray-300 p-4">
                        <div className="flex items-center justify-between mb-2">
                            <Skeleton className="w-24 h-8 rounded" />
                            <Skeleton className="w-6 h-6 rounded-full" />
                        </div>
                        <Skeleton className="w-full h-12 mb-2 rounded" />
                        <div className='relative'>
                            <Skeleton className="w-full h-52  rounded" />
                            <Skeleton className="w-14 h-6 rounded absolute top-3 left-3" />
                        </div>
                        <div className="flex items-center justify-between mt-2">
                            <Skeleton className="w-16 h-12 rounded" />
                            <Skeleton className="w-16 h-12 rounded" />
                        </div>
                    </div>
                ) : (
                    <>
                        <div className={box_class} >
                            <div className="flex items-center justify-between sm:mb-2 mb-1.5">
                                {get_badge(initialValues.stock_badge)}
                                <button onClick={() => wishlist_fun(initialValues)} className=" group/wishlist wishlist-pro rounded-full z-10 flex items-center justify-center">
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
                            <Link href={initialValues.pro_link} className='sm:text-[17px] text-sm text-black group-hover:text-violet-900 font-[600] font-montserrat capitalize mb-2 block sm:min-h-[50px]'>{initialValues.title}</Link>
                            <div className='relative overflow-hidden'>
                                <Link href={initialValues.pro_link}>
                                    <Image src={initialValues.img} alt={initialValues.alt} title={initialValues.alt} width={240} height={240} className='w-full group-hover:scale-105 transition-all' />
                                </Link>
                                {badge}
                                {
                                    productInCart ?
                                        <span onClick={() => AddToCart()} className='flex all-btn bg-gray-900 text-white hover:opacity-100 transition-all absolute -bottom-full group-hover:bottom-0 left-1/2 -translate-x-2/4 min-w-max rounded-t sm:py-2.5 py-2 md:px-7 px-3 uppercase font-[500] sm:text-sm text-[12px]' >
                                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1.5 md:w-5 w-3'>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.00008 1.60006C6.57204 1.60006 6.16152 1.77688 5.85885 2.09164C5.55618 2.40639 5.38614 2.83329 5.38614 3.27842V3.47237C5.78568 3.46491 6.22395 3.46491 6.70598 3.46491H7.29489C7.77549 3.46491 8.21448 3.46491 8.61474 3.47237V3.27842C8.61474 3.05795 8.57297 2.83965 8.49182 2.63597C8.41066 2.43229 8.29172 2.24724 8.14177 2.09138C7.99183 1.93552 7.81383 1.8119 7.61793 1.7276C7.42203 1.6433 7.21209 1.59996 7.00008 1.60006ZM9.68998 3.52309V3.27842C9.68998 2.53654 9.40658 1.82504 8.90213 1.30045C8.39767 0.77586 7.71349 0.481148 7.00008 0.481148C6.28667 0.481148 5.60249 0.77586 5.09803 1.30045C4.59358 1.82504 4.31018 2.53654 4.31018 3.27842V3.52309C4.2076 3.53204 4.10933 3.54248 4.01321 3.55517C3.28873 3.64841 2.69193 3.84384 2.18407 4.28171C1.67694 4.71958 1.38212 5.29395 1.16048 6.01751C0.945284 6.7187 0.783173 7.61905 0.579457 8.75213L0.564394 8.83418C0.276036 10.4327 0.0493669 11.6926 0.00704571 12.6855C-0.0359928 13.7037 0.110338 14.5466 0.662665 15.2381C1.21499 15.9303 1.98466 16.2347 2.95446 16.3786C3.90131 16.5189 5.13293 16.5189 6.69738 16.5189H7.3035C8.86723 16.5189 10.0996 16.5189 11.0457 16.3786C12.0155 16.2347 12.7859 15.9303 13.3382 15.2381C13.8905 14.5466 14.0354 13.7037 13.9931 12.6855C13.9515 11.6926 13.7241 10.4327 13.4358 8.83418L13.4214 8.75213C13.217 7.61905 13.0542 6.71795 12.8404 6.01751C12.618 5.29395 12.3239 4.71958 11.8161 4.28171C11.3089 3.84384 10.7114 3.64766 9.98695 3.55517C9.88816 3.54257 9.78916 3.53187 9.68998 3.52309ZM4.1452 4.66587C3.5319 4.74419 3.16105 4.89264 2.87126 5.14327C2.58218 5.39242 2.37344 5.74375 2.18551 6.35692C1.99399 6.98351 1.84264 7.81747 1.63031 8.99531C1.33191 10.6491 1.12031 11.8299 1.08229 12.7347C1.04499 13.6224 1.18271 14.1371 1.49044 14.5242C1.79888 14.9099 2.26011 15.1448 3.10653 15.2702C3.9673 15.3985 5.1236 15.3999 6.74113 15.3999H7.25903C8.87656 15.3999 10.0321 15.3985 10.8936 15.2709C11.7401 15.1448 12.2013 14.9099 12.5097 14.5242C12.8182 14.1378 12.9552 13.6231 12.9186 12.734C12.8799 11.8306 12.6682 10.6491 12.3698 8.99531C12.1575 7.81672 12.0069 6.98425 11.8147 6.35692C11.6267 5.74375 11.4187 5.39242 11.1289 5.14253C10.8391 4.89264 10.469 4.74419 9.85497 4.66512C9.2266 4.58456 8.41102 4.58382 7.25831 4.58382H6.74185C5.58914 4.58382 4.77356 4.58456 4.1452 4.66587Z" fill="white" />
                                            </svg>
                                            Add to cart
                                        </span>
                                        :
                                        <span onClick={() => AddToCart()} className='flex all-btn text-white hover:opacity-100 transition-all absolute -bottom-full group-hover:bottom-0 left-1/2 -translate-x-2/4 min-w-max rounded-t sm:py-2.5 py-2 md:px-7 px-3 uppercase font-[500] sm:text-sm text-[12px]' >
                                            <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg" className='mr-1.5 md:w-5 w-3'>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.00008 1.60006C6.57204 1.60006 6.16152 1.77688 5.85885 2.09164C5.55618 2.40639 5.38614 2.83329 5.38614 3.27842V3.47237C5.78568 3.46491 6.22395 3.46491 6.70598 3.46491H7.29489C7.77549 3.46491 8.21448 3.46491 8.61474 3.47237V3.27842C8.61474 3.05795 8.57297 2.83965 8.49182 2.63597C8.41066 2.43229 8.29172 2.24724 8.14177 2.09138C7.99183 1.93552 7.81383 1.8119 7.61793 1.7276C7.42203 1.6433 7.21209 1.59996 7.00008 1.60006ZM9.68998 3.52309V3.27842C9.68998 2.53654 9.40658 1.82504 8.90213 1.30045C8.39767 0.77586 7.71349 0.481148 7.00008 0.481148C6.28667 0.481148 5.60249 0.77586 5.09803 1.30045C4.59358 1.82504 4.31018 2.53654 4.31018 3.27842V3.52309C4.2076 3.53204 4.10933 3.54248 4.01321 3.55517C3.28873 3.64841 2.69193 3.84384 2.18407 4.28171C1.67694 4.71958 1.38212 5.29395 1.16048 6.01751C0.945284 6.7187 0.783173 7.61905 0.579457 8.75213L0.564394 8.83418C0.276036 10.4327 0.0493669 11.6926 0.00704571 12.6855C-0.0359928 13.7037 0.110338 14.5466 0.662665 15.2381C1.21499 15.9303 1.98466 16.2347 2.95446 16.3786C3.90131 16.5189 5.13293 16.5189 6.69738 16.5189H7.3035C8.86723 16.5189 10.0996 16.5189 11.0457 16.3786C12.0155 16.2347 12.7859 15.9303 13.3382 15.2381C13.8905 14.5466 14.0354 13.7037 13.9931 12.6855C13.9515 11.6926 13.7241 10.4327 13.4358 8.83418L13.4214 8.75213C13.217 7.61905 13.0542 6.71795 12.8404 6.01751C12.618 5.29395 12.3239 4.71958 11.8161 4.28171C11.3089 3.84384 10.7114 3.64766 9.98695 3.55517C9.88816 3.54257 9.78916 3.53187 9.68998 3.52309ZM4.1452 4.66587C3.5319 4.74419 3.16105 4.89264 2.87126 5.14327C2.58218 5.39242 2.37344 5.74375 2.18551 6.35692C1.99399 6.98351 1.84264 7.81747 1.63031 8.99531C1.33191 10.6491 1.12031 11.8299 1.08229 12.7347C1.04499 13.6224 1.18271 14.1371 1.49044 14.5242C1.79888 14.9099 2.26011 15.1448 3.10653 15.2702C3.9673 15.3985 5.1236 15.3999 6.74113 15.3999H7.25903C8.87656 15.3999 10.0321 15.3985 10.8936 15.2709C11.7401 15.1448 12.2013 14.9099 12.5097 14.5242C12.8182 14.1378 12.9552 13.6231 12.9186 12.734C12.8799 11.8306 12.6682 10.6491 12.3698 8.99531C12.1575 7.81672 12.0069 6.98425 11.8147 6.35692C11.6267 5.74375 11.4187 5.39242 11.1289 5.14253C10.8391 4.89264 10.469 4.74419 9.85497 4.66512C9.2266 4.58456 8.41102 4.58382 7.25831 4.58382H6.74185C5.58914 4.58382 4.77356 4.58456 4.1452 4.66587Z" fill="white" />
                                            </svg>
                                            Add to cart
                                        </span>
                                }
                            </div>
                            <div className="flex items-center justify-between mt-3">
                                <p className="sm:text-lg text-md text-black uppercase font-montserrat font-[500]">${initialValues.price}</p>
                                <Link href={initialValues.pro_link} className="text-sm text-black font-montserrat font-semibold underline underline-offset-[3px] flex items-center group gap-1">{initialValues.btn_label}
                                    <svg width="19" height="19" viewBox="0 0 19 19" xmlns="http://www.w3.org/2000/svg" className='fill-black ltr:group-hover:translate-x-2 rtl:group-hover:-translate-x-2 transition-all w-4 h-4  rtl:rotate-180'>
                                        <path d="M11.4997 3.16675L10.3834 4.283L14.8009 8.70842H1V10.2917H14.8009L10.3834 14.7172L11.4997 15.8334L17.833 9.50008L11.4997 3.16675Z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>

    )
}

export default BoxedProduct;