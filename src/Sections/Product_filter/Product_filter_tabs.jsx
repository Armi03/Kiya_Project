import React, { useEffect, useState, useRef } from 'react';
import { Skeleton } from "@heroui/react";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Card_Product } from '../../comman';
// const loadIsotope = () => require('isotope-layout');
// const Isotope = typeof window !== 'undefined' ? loadIsotope() : null;

const FilterTabs_Products = ({ initialValues }) => {

    // Ref of isotope container
    // const containerRef = useRef();

    // // Ref to store the isotope object
    // const isotopeRef = useRef(null);

    // const [filterKey, setFilterKey] = React.useState('*')

    /*  ============= Skeletone_loader ============   */

    // useEffect(() => {
    //     setTimeout(() => {
    //         // Check if Isotope is available and the containerRef exists
    //         if (Isotope && containerRef.current) {

    //             isotopeRef.current = new Isotope(containerRef.current, {
    //                 itemSelector: '.filter-item',
    //                 layoutMode: 'fitRows',
    //                 columnWidth: '.grid-sizer',
    //                 gutter: '.gutter-sizer'
    //             });
    //         }
    //     }, 2000);
    // }, []);

    // const handleFilterKeyChange = (key) => {
    //     setFilterKey(key);

    // };

    // useEffect(() => {
    //     if (typeof window !== 'undefined' && isotopeRef.current) {
    //         console.log('Filtering by:', filterKey);
    //         if (filterKey === '*') {
    //             isotopeRef.current.arrange({ filter: '*' });
    //         } else {
    //             isotopeRef.current.arrange({ filter: `.${filterKey}` });
    //         }
    //     }
    // }, [filterKey]);

    return (

        <>
            {/* <div className="relative lg:py-24 py-14 overflow-hidden">
                <div className="relative container">
                    <h2 className="text-gray-800 mb-10 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight  text-center">Featured Products</h2>
                    {initialValues && initialValues.map((data, index) => {
                        return (
                            <React.Fragment key={index}>
                                <ul className="my-6 text-center">
                                    {data.filter_tabs && data.filter_tabs.map((tab_item, index) => {
                                        return (
                                            <li key={index} className="uppercase leading-tight inline-block align-middle  after:content-['|'] after:lg:mx-8 after:mx-4 after:inline-block after:align-middle last:after:hidden 2xl:text-lg cursor-pointer text-md text-center text-gray-800"
                                                onClick={() => handleFilterKeyChange(tab_item.click_name)}>{tab_item.label}</li>
                                        )
                                    })}
                                </ul>
                                <div ref={containerRef} className="filter-container grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 sm:-mr-4">
                                    {data.items && data.items.map((item, index) => {
                                        return (
                                            <Card_Product initialValues={item} key={index} />
                                        )
                                    })}
                                </div>
                            </React.Fragment>
                        )
                    })}
                    <div className="text-center">
                        <Link href="/" className="mt-8 all-btn text-sm hover:opacity-100 text-white uppercase tracking-[2px] px-6 inline-flex">all product <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                            <path d="M8 5L13 10L8 15" className="stroke stroke-1.5 stroke-white" />
                        </svg></Link>
                    </div>

                </div>
            </div> */}

        </>


    )
}

export default FilterTabs_Products;