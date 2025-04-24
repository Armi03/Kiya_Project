import React from 'react';
import {Image, Link} from 'react'


const Diamond_Clarity = ({ initialValues }) => {
    return (
        initialValues && initialValues.map((child_item, index) => {
            let width = ''
            if(child_item.column){
               width = child_item.column
            }
            return (
                <div className={width + " lg:mb-0 mb-3 lg:pr-4"} key={index}>
                    <ul className="nav wp-clarity-box">
                        <p className="2xl:text-md text-[15px] font-semibold  mb-5 text-gray-800 uppercase">{child_item.label}</p>
                        {child_item.item && child_item.item.map((items, innerIndex) => {
                            if (innerIndex < 11) {
                                return (
                                    <li className=" ltr:mr-2 rtl:ml-2 mb-2 inline-block" key={innerIndex}>
                                        <Link className="text-gray-800 hover:text-violet-900 text-sm md:2xl:text-md text-[15px] py-1 md:py-1.5 px-3 md:px-5 border border-violet-900 bg-transparent hover:bg-violet-900 hover:text-white block" href={items.slug}>{items.title}</Link>
                                    </li>
                                )
                            } else if (innerIndex === 11) {
                                return (
                                    <li className="ltr:mr-4 rtl:ml-4 mt-3 mb-5 h-[1px] bg-violet-900 block" key={innerIndex}></li>
                                )
                            } else {
                                return (
                                    <li className=" ltr:mr-2 rtl:ml-2 mb-2 inline-block" key={innerIndex}>
                                        <Link className="text-gray-800 hover:text-violet-900 text-sm md:2xl:text-md text-[15px] py-1 md:py-1.5 px-3 md:px-5 border border-violet-900 bg-transparent hover:bg-violet-900 hover:text-white block" href={items.slug}>{items.title}</Link>
                                    </li>
                                )
                            }
                        })}
                    </ul>
                    <Link className="text-gray-800 hover:text-violet-900 text-[15px] uppercase font-semibold mb-3 mt-5 flex items-center transition-all hover:text-violet-900" href={child_item.btn_slug}>
                        {child_item.btn_alt}<Image src="https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/arrow-right.svg" width={14} height={14} alt={child_item.btn_slug} title={child_item.btn_slug} className="ml-1 inline-block relative white-img rtl:mr-1 rtl:rotate-180" />
                    </Link>
                </div>
            )
        })
    );
}

export default Diamond_Clarity;
