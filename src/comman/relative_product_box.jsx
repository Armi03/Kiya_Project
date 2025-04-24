import React from 'react';
import {Image, Link} from 'react'


const Relative_Product_Box = ({ initialValues }) => {

    return (
        initialValues && initialValues.map((child_item, index) => {
            return (
                <React.Fragment key={index}>
                    <div className="relative product-box grow w-1/2">
                        <div className="image-wrap">
                            <Image src={child_item.img} width={0} height={0} sizes="100vw" alt={child_item.alt} title={child_item.alt} className="w-full" />
                            <button className="w-7 h-7 bg-white    group/wishlist wishlist-pro rounded-full outline outline-[3px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center" onClick={(e) => handleClick(e.target)} >
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 23 24" fill="none" className="stroke-[1.5] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:stroke-violet-800 group-hover/wishlist:fill-violet-900 group-[.active]/wishlist:fill-violet-900 fill-none group-[.active]/wishlist:stroke-violet-900 fill-none ">
                                    <path d="M10.4697 5.59405C10.6103 5.7347 10.8011 5.81372 11 5.81372C11.1989 5.81372 11.3897 5.7347 11.5303 5.59405L11.9085 5.21592C12.8465 4.2779 14.118 3.75122 15.4447 3.75122H15.5616C18.3236 3.75122 20.5625 5.99012 20.5625 8.75216C20.5625 10.1386 19.9874 11.4622 18.9741 12.4079L11 19.8503L3.02592 12.4079C2.01262 11.4622 1.4375 10.1386 1.4375 8.75216C1.4375 5.99012 3.6764 3.75122 6.43844 3.75122H6.55531C7.88197 3.75122 9.15352 4.2779 10.0915 5.21593L10.4697 5.59405Z"
                                    />
                                </svg>
                            </button>
                        </div>
                        <div className="product-detail p-3 bg-white max-w-[85%] mx-auto -mt-4 relative z-10">
                            <Link className="text-center block mb-1 font-[nabi] text-lg text-gray-800 hover:text-violet-900 leading-tight" href={child_item.slug}>{child_item.label}</Link>
                            <p className=" text-center block text-gray-800 text-sm">${child_item.price}</p>
                        </div>
                    </div>
                </React.Fragment>
            )
        })
    );
}

export default Relative_Product_Box;