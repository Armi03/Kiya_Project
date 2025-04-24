import React, { useEffect, useState } from 'react';
import {Image, Link} from 'react'

import { SwiperSlide } from 'swiper/react'
import { useCart } from 'react-use-cart';

const Trending_Jewellery_Today = ({ _initialValues }) => {

    const { addItem, items } = useCart();

    const productInCart = items.some((item) => item.id === _initialValues.id);

    /*  ============= Skeletone_loader ============   */
    const [is_Wishlist, setisWishlist] = useState(true);

    const AddToCart = () => {
        addItem(_initialValues);
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
            const isWishlist = product_data.some((item) => item.id === _initialValues.id);
            setisWishlist(isWishlist)
        }
    }

    useEffect(() => {
        wish_list_set();
    }, []);

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
        <div className="bg-white border h-full border-gray-400/20 p-4 group">
            <div className="flex items-center justify-between mb-3">
                <span className='bg-violet-900 px-4 py-0.5 text-sm text-white font-montserrat font-[500]'>{_initialValues.sale_badge}</span>
                <button onClick={() => wishlist_fun(_initialValues)} className=" group/wishlist wishlist-pro rounded-full z-10 flex items-center justify-center">
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
            <Link href={_initialValues.pro_link}>
                <Image src={_initialValues.img} alt={_initialValues.alt} title={_initialValues.alt} width={300} height={300} className='w-full group-hover:scale-110 transition-all mx-auto object-contain min-h-auto h-40 my-6' />
            </Link>
            {get_badge(_initialValues.stock_badge)}
            <Link href={_initialValues.pro_link} className='sm:text-[17px] text-sm text-black group-hover:text-violet-900 font-[600] text-center  font-montserrat capitalize sm:mb-3 mb-2 block '>{_initialValues.title}</Link>
            <div className='relative overflow-hidden'>
                <p className="sm:text-lg text-md text-black uppercase font-montserrat font-[500] text-center group-hover:opacity-0">${_initialValues.price}</p>
                {
                    productInCart ?
                        <span onClick={() => AddToCart()} className="cursor-pointer text-sm text-violet-900 uppercase font-montserrat font-[600] inline-flex mx-auto rounded items-center group gap-2 px-6 absolute group-hover:bottom-0 -bottom-full transition-all left-1/2 -translate-x-2/4 min-w-max">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="md:w-[22px] w-[18px] stroke-[1.5] stroke-gray-800 stroke-violet-900 fill-violet-900 " xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0273 5.49757C9.02734 5.49752 5.52734 4.99755 4.52922 7.49756C3.59119 9.84705 3.19588 14.1642 3.02922 15.9975C2.86255 17.3309 3.32922 19.9975 6.52922 19.9975H11.0273M11 5.49757C13 5.49752 16.5 4.99755 17.4981 7.49756C18.4362 9.84705 18.8315 14.1642 18.9981 15.9975C19.1648 17.3309 18.6981 19.9975 15.4981 19.9975H11" />
                                <path d="M11 1.79999C11.8477 1.79999 14 1.79999 14 5.29999" />
                                <path d="M11 1.79999C10.1523 1.79999 8 1.79999 8 5.29999" />
                            </svg>
                            Add to cart
                        </span>
                        :
                        <span onClick={() => AddToCart()} className="cursor-pointer text-sm text-black hover:text-violet-900 uppercase font-montserrat font-[600] inline-flex mx-auto rounded items-center group gap-2 px-6 absolute group-hover:bottom-0 -bottom-full transition-all left-1/2 -translate-x-2/4 min-w-max">
                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="md:w-[22px] w-[18px] stroke-[1.5] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:fill-violet-900 " xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.0273 5.49757C9.02734 5.49752 5.52734 4.99755 4.52922 7.49756C3.59119 9.84705 3.19588 14.1642 3.02922 15.9975C2.86255 17.3309 3.32922 19.9975 6.52922 19.9975H11.0273M11 5.49757C13 5.49752 16.5 4.99755 17.4981 7.49756C18.4362 9.84705 18.8315 14.1642 18.9981 15.9975C19.1648 17.3309 18.6981 19.9975 15.4981 19.9975H11" />
                                <path d="M11 1.79999C11.8477 1.79999 14 1.79999 14 5.29999" />
                                <path d="M11 1.79999C10.1523 1.79999 8 1.79999 8 5.29999" />
                            </svg>
                            Add to cart
                        </span>
                }
            </div>
        </div>
    )
}

export default Trending_Jewellery_Today;
