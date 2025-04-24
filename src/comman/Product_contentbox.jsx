import React, { useEffect, useState } from 'react';
import {Image, Link} from 'react'


const Default_product = ({ initialValues }) => {

    const [is_Wishlist, setisWishlist] = useState(true);

    let sale_badge = null;
    if (initialValues.badge) {
        sale_badge = (
            <span className="text-[13px] h-12 w-12 uppercase flex items-center justify-center bg-violet-900 rounded-full text-white font-semibold absolute top-4 left-4">{initialValues.badge}</span>
        )
    }

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
    }, [])

    return (
        <div className="relative wp-top-arrows">
            <div className="container px-1">
                <div className="relative group cursor-pointer transition-all pb-5">
                    <div className="relative product-box ">
                        <div className="image-wrap overflow-hidden">
                            <div className='h-full overflow-hidden w-full before:block bg-violet-400 before:pt-[115%] relative transition-all group '>
                                <Image src={initialValues.img} alt={initialValues.alt} title={initialValues.alt} className="group-hover:scale-105 transition-all w-full md:h-auto object-cover" fill='true' />
                            </div>
                            {sale_badge}
                            <button onClick={() => wishlist_fun(initialValues)} className="md:w-10 md:h-10 w-8 h-8 bg-white group/wishlist wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute md:right-5 right-3 md:top-5 top-3 flex items-center justify-center">
                                {
                                    is_Wishlist ? <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" className="stroke-[1.5] md:w-6 w-5 stroke-gray-800 stroke-violet-900 fill-violet-900">
                                        <path d="M10.4697 5.59405C10.6103 5.7347 10.8011 5.81372 11 5.81372C11.1989 5.81372 11.3897 5.7347 11.5303 5.59405L11.9085 5.21592C12.8465 4.2779 14.118 3.75122 15.4447 3.75122H15.5616C18.3236 3.75122 20.5625 5.99012 20.5625 8.75216C20.5625 10.1386 19.9874 11.4622 18.9741 12.4079L11 19.8503L3.02592 12.4079C2.01262 11.4622 1.4375 10.1386 1.4375 8.75216C1.4375 5.99012 3.6764 3.75122 6.43844 3.75122H6.55531C7.88197 3.75122 9.15352 4.2779 10.0915 5.21593L10.4697 5.59405Z"
                                        />
                                    </svg> : <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none" className="stroke-[1.5] md:w-6 w-5 stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:stroke-violet-800 group-hover/wishlist:fill-violet-900 group-[.active]/wishlist:fill-violet-900 fill-none group-[.active]/wishlist:stroke-violet-900 fill-none ">
                                        <path d="M10.4697 5.59405C10.6103 5.7347 10.8011 5.81372 11 5.81372C11.1989 5.81372 11.3897 5.7347 11.5303 5.59405L11.9085 5.21592C12.8465 4.2779 14.118 3.75122 15.4447 3.75122H15.5616C18.3236 3.75122 20.5625 5.99012 20.5625 8.75216C20.5625 10.1386 19.9874 11.4622 18.9741 12.4079L11 19.8503L3.02592 12.4079C2.01262 11.4622 1.4375 10.1386 1.4375 8.75216C1.4375 5.99012 3.6764 3.75122 6.43844 3.75122H6.55531C7.88197 3.75122 9.15352 4.2779 10.0915 5.21593L10.4697 5.59405Z"
                                        />
                                    </svg>
                                }
                            </button>
                        </div>
                        <div className="product-detail px-2 py-4 xl:p-4 shadow-tabbox bg-white max-w-[88%] mx-auto lg:-mt-14 -mt-10 relative z-10 lg:group-hover:-mt-20 group-hover:-mt-16 transition-all group-hover:shadow-xl">
                            <Link className="text-[20px] capitalize xl:text-[22px] 2xl:text-[28px] text-gray-800 group-hover:text-violet-900 mb-2 2xl:mb-3 text-center leading-tight text-center font-[nabi] block" href={initialValues.slug}>{initialValues.title}</Link>
                            <p className="block 2xl:text-[20px] text-gray-200 lg:text-[17px] text-md text-center">$ {initialValues.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Default_product;