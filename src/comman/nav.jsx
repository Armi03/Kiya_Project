import React from 'react';
import {Image, Link} from 'react'

import {Skeleton } from "@heroui/react";

const Nav = ({ initialValues }) => {

    if (!initialValues) {
        return (
            <Skeleton className="flex rounded-md mb-2 w-24 h-6" />
        )
    }
    const view_all_items = ( submenu ) => {
        if (submenu.btn_title) {
            return (
                <li className="mx-1 sm:mx-3 mt-5">
                    <Link className="text-gray-800 text-[14px] uppercase font-semibold my-3 flex items-center gap-0 hover:gap-3 transition-all hover:text-violet-900" href={submenu.btn_link}>
                        {submenu.btn_title}
                        <Image src={submenu.btn_icon_img} width={14} height={14} alt={submenu.btn_icon_label} title="shape" className="white-img ml-1 rtl:mr-1 rtl:rotate-180 inline-block relative" />
                    </Link>
                </li>
            );
        }
    };
    const menu_icon_style = ( item, style ) => {
        if(item.icon){
            if ( style == 'circle') {
                return (
                    <span className="w-8 inline-block text-center  ltr:mr-2 rtl:ml-2 outCircle"><Image src={item.icon} width={18} height={18} alt={item.alt} title={item.title} className="m-auto inline-block rounded-full outline outline-offset-[1.5px] outline-1 outline-gray-800 hover:outline-violet-900" /></span>
                );
            }else{
                return (
                     <span className="w-8 inline-block text-center  ltr:mr-2 rtl:ml-2"><Image src={item.icon} width={18} height={24} alt={item.alt} title={item.title} className="m-auto inline-block" /></span>
                );
            }
        }
    };
    const collection_image = (icon_img, label) => {
        if (icon_img) {
            return (
                <Image src={icon_img} width={180} height={115} alt={label} title={label} className="w-[60%] h-auto sm:mx-3 mx-1 mb-5" />
            );
        }
    };

    return (

        <ul className="nav">
            <p className="text-[15px] 2xl:text-md font-semibold mx-1 sm:mx-3 mb-5 text-gray-800 uppercase">{initialValues.label}</p>
            {collection_image(initialValues.img, initialValues.label)}
            {initialValues.item && initialValues.item.map((item, subIndex) => {
                return (
                    <li key={subIndex} className="mx-1 sm:mx-3">
                        <Link className="text-gray-800 hover:text-violet-900 text-[15px] 2xl:text-md my-3 block" href={item.slug}>
                        {menu_icon_style( item, initialValues.style )}{item.title}
                        </Link>
                    </li> 
                )
            })}
            {view_all_items(initialValues)}
        </ul>

    );
}

export default Nav;