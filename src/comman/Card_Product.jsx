import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Skeleton } from "@heroui/react";
import { toast } from 'react-toastify';


const Card_Product = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    const [is_Wishlist, setisWishlist] = useState(true);
    const [is_Comparelist, setisComparelist] = useState(true);

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

    let filter_name = ''
    if (initialValues.filter_name) {
        filter_name = initialValues.filter_name
    }
    let id = ''
    if (initialValues.id) {
        id = initialValues.id
    }
    let hover_badges = null;
    if (initialValues.icon_name) {
        hover_badges = (
            <div>
                <button className="md:w-10 md:h-10 w-8 h-8 bg-white group/wishlist text-[0] wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute transition-all group-hover:md:top-20 group-hover:top-16 opacity-0 group-hover:opacity-100 right-5 top-5 flex items-center justify-center">
                    <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="md:w-[22px] w-[18px] stroke-[1.5] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:fill-violet-900 " xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.0273 5.49757C9.02734 5.49752 5.52734 4.99755 4.52922 7.49756C3.59119 9.84705 3.19588 14.1642 3.02922 15.9975C2.86255 17.3309 3.32922 19.9975 6.52922 19.9975H11.0273M11 5.49757C13 5.49752 16.5 4.99755 17.4981 7.49756C18.4362 9.84705 18.8315 14.1642 18.9981 15.9975C19.1648 17.3309 18.6981 19.9975 15.4981 19.9975H11" />
                        <path d="M11 1.79999C11.8477 1.79999 14 1.79999 14 5.29999" />
                        <path d="M11 1.79999C10.1523 1.79999 8 1.79999 8 5.29999" />
                    </svg>

                    {initialValues.icon_name}
                </button>
                <button onClick={() => compare_product(initialValues)} className="md:w-10 md:h-10 w-8 h-8 bg-white group/wishlist  text-[0] wishlist-pro rounded-full outline outline-[4px] outline-white/40 outline-opacity-5 absolute delay-75 transition-all group-hover:md:top-36 group-hover:top-28 right-5 top-5  opacity-0 group-hover:opacity-100  flex items-center justify-center">
                    {
                        is_Comparelist ?
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 22 24" fill="none" className="md:w-[22px] w-[18px] stroke-[0.3] stroke-gray-800 stroke-violet-900 fill-violet-900 fill-gray-800">
                                <path d="M2.4375 12C2.43949 10.2601 3.13153 8.59209 4.3618 7.36181C5.59208 6.13153 7.26013 5.43949 9 5.43751H19.6416L18.3525 4.14751C18.2531 4.04088 18.199 3.89984 18.2016 3.75411C18.2042 3.60839 18.2632 3.46935 18.3663 3.36629C18.4693 3.26323 18.6084 3.2042 18.7541 3.20163C18.8998 3.19905 19.0409 3.25315 19.1475 3.35251L21.3975 5.60251C21.5028 5.70798 21.562 5.85094 21.562 6.00001C21.562 6.14907 21.5028 6.29204 21.3975 6.39751L19.1475 8.64751C19.0409 8.74687 18.8998 8.80096 18.7541 8.79839C18.6084 8.79582 18.4693 8.73678 18.3663 8.63372C18.2632 8.53066 18.2042 8.39162 18.2016 8.2459C18.199 8.10017 18.2531 7.95914 18.3525 7.85251L19.6416 6.56251H9C7.55842 6.56424 6.17638 7.13768 5.15702 8.15703C4.13767 9.17639 3.56424 10.5584 3.5625 12C3.5625 12.1492 3.50324 12.2923 3.39775 12.3978C3.29226 12.5032 3.14918 12.5625 3 12.5625C2.85082 12.5625 2.70774 12.5032 2.60225 12.3978C2.49676 12.2923 2.4375 12.1492 2.4375 12ZM21 11.4375C20.8508 11.4375 20.7077 11.4968 20.6023 11.6023C20.4968 11.7077 20.4375 11.8508 20.4375 12C20.4358 13.4416 19.8623 14.8236 18.843 15.843C17.8236 16.8623 16.4416 17.4358 15 17.4375H4.35844L5.6475 16.1475C5.74686 16.0409 5.80095 15.8998 5.79838 15.7541C5.79581 15.6084 5.73678 15.4694 5.63372 15.3663C5.53066 15.2632 5.39162 15.2042 5.24589 15.2016C5.10017 15.1991 4.95913 15.2531 4.8525 15.3525L2.6025 17.6025C2.49716 17.708 2.43799 17.8509 2.43799 18C2.43799 18.1491 2.49716 18.292 2.6025 18.3975L4.8525 20.6475C4.95913 20.7469 5.10017 20.801 5.24589 20.7984C5.39162 20.7958 5.53066 20.7368 5.63372 20.6337C5.73678 20.5307 5.79581 20.3916 5.79838 20.2459C5.80095 20.1002 5.74686 19.9591 5.6475 19.8525L4.35844 18.5625H15C16.7399 18.5605 18.4079 17.8685 19.6382 16.6382C20.8685 15.4079 21.5605 13.7399 21.5625 12C21.5625 11.8508 21.5032 11.7077 21.3977 11.6023C21.2923 11.4968 21.1492 11.4375 21 11.4375Z" />
                            </svg>
                            :
                            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 22 24" fill="none" className="md:w-[22px] w-[18px] stroke-[0.3] stroke-gray-800 group-hover/wishlist:stroke-violet-900 group-hover/wishlist:fill-violet-900 fill-gray-800">
                                <path d="M2.4375 12C2.43949 10.2601 3.13153 8.59209 4.3618 7.36181C5.59208 6.13153 7.26013 5.43949 9 5.43751H19.6416L18.3525 4.14751C18.2531 4.04088 18.199 3.89984 18.2016 3.75411C18.2042 3.60839 18.2632 3.46935 18.3663 3.36629C18.4693 3.26323 18.6084 3.2042 18.7541 3.20163C18.8998 3.19905 19.0409 3.25315 19.1475 3.35251L21.3975 5.60251C21.5028 5.70798 21.562 5.85094 21.562 6.00001C21.562 6.14907 21.5028 6.29204 21.3975 6.39751L19.1475 8.64751C19.0409 8.74687 18.8998 8.80096 18.7541 8.79839C18.6084 8.79582 18.4693 8.73678 18.3663 8.63372C18.2632 8.53066 18.2042 8.39162 18.2016 8.2459C18.199 8.10017 18.2531 7.95914 18.3525 7.85251L19.6416 6.56251H9C7.55842 6.56424 6.17638 7.13768 5.15702 8.15703C4.13767 9.17639 3.56424 10.5584 3.5625 12C3.5625 12.1492 3.50324 12.2923 3.39775 12.3978C3.29226 12.5032 3.14918 12.5625 3 12.5625C2.85082 12.5625 2.70774 12.5032 2.60225 12.3978C2.49676 12.2923 2.4375 12.1492 2.4375 12ZM21 11.4375C20.8508 11.4375 20.7077 11.4968 20.6023 11.6023C20.4968 11.7077 20.4375 11.8508 20.4375 12C20.4358 13.4416 19.8623 14.8236 18.843 15.843C17.8236 16.8623 16.4416 17.4358 15 17.4375H4.35844L5.6475 16.1475C5.74686 16.0409 5.80095 15.8998 5.79838 15.7541C5.79581 15.6084 5.73678 15.4694 5.63372 15.3663C5.53066 15.2632 5.39162 15.2042 5.24589 15.2016C5.10017 15.1991 4.95913 15.2531 4.8525 15.3525L2.6025 17.6025C2.49716 17.708 2.43799 17.8509 2.43799 18C2.43799 18.1491 2.49716 18.292 2.6025 18.3975L4.8525 20.6475C4.95913 20.7469 5.10017 20.801 5.24589 20.7984C5.39162 20.7958 5.53066 20.7368 5.63372 20.6337C5.73678 20.5307 5.79581 20.3916 5.79838 20.2459C5.80095 20.1002 5.74686 19.9591 5.6475 19.8525L4.35844 18.5625H15C16.7399 18.5605 18.4079 17.8685 19.6382 16.6382C20.8685 15.4079 21.5605 13.7399 21.5625 12C21.5625 11.8508 21.5032 11.7077 21.3977 11.6023C21.2923 11.4968 21.1492 11.4375 21 11.4375Z" />
                            </svg>
                    }
                    {initialValues.icon_name}
                </button>
            </div>
        )
    }

    const compare_product = (productData) => {
        const storedCompare = localStorage.getItem('Compare');
        const product_data = storedCompare ? JSON.parse(storedCompare) : [];
        const isComparelist = product_data.some((item) => item.id === productData.id);

        if (product_data.length >= 5 && !isComparelist) {
            // Alert the user if trying to add more than 5 products
            toast.warn("You can only compare up to 5 products.", {
                position: "top-right",
                autoClose: 10000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            return;
        }

        if (!isComparelist) {
            // Item not in the Compare, add it
            const updatedComparelist = [...product_data, productData];
            localStorage.setItem("Compare", JSON.stringify(updatedComparelist));
            setisComparelist(true);
        } else {
            // Item is already in the Compare, remove it
            const updatedComparelist = product_data.filter((item) => item.id !== productData.id);
            localStorage.setItem("Compare", JSON.stringify(updatedComparelist));
            setisComparelist(false);
        }
    }

    const compare_list_set = () => {
        const storedCompareList = localStorage.getItem('Compare');
        const product_data = JSON.parse(storedCompareList)
        if (product_data !== null) {
            const isComparelist = product_data.some((item) => item.id === initialValues.id);
            setisComparelist(isComparelist)
        }
    }

    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
        wish_list_set();
        compare_list_set();
    }, []);

    return (

        <>

            {isLoading ? (
                <div className="relative product-box bg-white shadow-btn" >
                    <div className="image-wrap">
                        <Skeleton className="w-full 2xl:max-h-[390px] 2xl:min-h-[390px] lg:max-h-[290px] lg:min-h-[290px] min-h-[210px] max-h-[230px] mx-auto rounded" />
                        <Skeleton className="md:w-10 md:h-10 w-8 h-8 bg-white rounded-full outline outline-[4px] outline-white/40 absolute right-5 top-5 flex items-center justify-center" />
                    </div>
                    <div className="product-detail p-2 md:p-6 bg-white  relative ">
                        <Skeleton className="w-full mb-2 2xl:mb-3 h-8 rounded" />
                        <div className="flex justify-between item-center rounded">
                            <div className="flex item-center ">
                                <Skeleton className="w-32 h-8 rounded" />
                            </div>
                            <Skeleton className="w-12 h-8 rounded" />
                        </div>
                    </div>
                </div >
            ) : (
                <>


                    <div className={" relative filter-item " + filter_name} id={id}>
                        <div className="relative group cursor-pointer transition-all pb-5">
                            <div className="relative product-box bg-white shadow-btn  group-hover:shadow-none group-hover:outline group-hover:outline-gray-300 ">
                                <div className="image-wrap overflow-hidden">
                                    <Link href={initialValues.slug} > <img src={initialValues.img} width={300} height={400} sizes="100vw" alt={initialValues.alt} title={initialValues.alt} className="w-full 2xl:max-h-[390px] 2xl:min-h-[390px] lg:max-h-[290px] lg:min-h-[290px] min-h-[210px] max-h-[230px] object-cover transition-all scale-110 group-hover:scale-100 " /></Link >
                                    <button onClick={() => wishlist_fun(initialValues)} className="md:w-10 md:h-10 w-8 h-8 bg-white group/wishlist wishlist-pro rounded-full outline z-10 outline-[4px] outline-white/40 outline-opacity-5 absolute right-5 top-5 flex items-center justify-center">
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
                                    {hover_badges}
                                </div >
                                <div className="product-detail p-2 md:p-6 bg-white  relative ">
                                    <Link href={initialValues.slug} className="text-[20px] capitalize lg:text-[22px] 2xl:text-[28px] text-gray-800 group-hover:text-violet-900 mb-2 2xl:mb-3 leading-tight font-[nabi] block" >{initialValues.title}</Link>

                                    <div className="flex justify-between item-center">
                                        <div className="flex item-center ">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856" />
                                            </svg>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                <path d="M12.0327 16.052L12.2909 16.2081L16.2887 18.6261L16.2888 18.6262C16.6406 18.8391 17.0712 18.5265 16.9783 18.1268L15.9187 13.5801L15.8502 13.2863L16.0782 13.0888L19.6136 10.0254L19.6137 10.0253C19.9259 9.75505 19.7549 9.24795 19.3523 9.21592L19.3496 9.21571L19.3496 9.21571L14.6968 8.82075L14.3963 8.79524L14.2787 8.51763L12.458 4.22122L12.4574 4.21965C12.3014 3.84801 11.7629 3.84801 11.6069 4.21965L11.6061 4.2216L11.6061 4.2216L9.78543 8.50837L9.66767 8.78563L9.36751 8.81111L4.71468 9.20607L4.71203 9.2063L4.71203 9.20629C4.3094 9.23832 4.13839 9.74542 4.45054 10.0156L4.45072 10.0158L7.9861 13.0792L8.2141 13.2767L8.14563 13.5705L7.08603 18.1172L12.0327 16.052ZM12.0327 16.052L11.7741 16.2077M12.0327 16.052L11.7741 16.2077M11.7741 16.2077L7.77636 18.616L7.77547 18.6165M11.7741 16.2077L7.77547 18.6165M7.77547 18.6165C7.42379 18.8294 6.99324 18.517 7.08597 18.1174L7.77547 18.6165Z" stroke="#F9B856" />
                                            </svg>
                                        </div>
                                        <p className="block 2xl:text-[20px] text-gray-200 lg:text-[17px] text-md text-center">$ {initialValues.price}</p>
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

export default Card_Product;