import React, { useEffect, useState } from 'react'
import {Image, Link} from 'react'

import { Input, Skeleton, Slider } from '@heroui/react'

const Left_Filter = ({ initialValues }) => {
    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true)
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000)
    }, [])

    const [value, setValue] = React.useState([99, 2000]);
    const [valueCarat, setValueCarat] = React.useState([0.30, 1.50]);


    return (
        <>
            {isLoading ? (
                <div className='relative'>
                    <div className='mb-4 sm:mb-6 xl:mb-8 2xl:mb-12'>
                        <h2 className='mb-2 md:mb-3 lg:mb-4 block 2xl:text-xl lg:text-[24px] xl:text-[26px] text-[20px] font-nabi leading-tight text-gray-800'>Search</h2>
                        <Skeleton className='w-full h-14 rounded' />
                    </div>

                    <div className='mb-4 sm:mb-6 xl:mb-8 2xl:mb-12'>
                        <h2 className='mb-2 md:mb-3 lg:mb-4 block 2xl:text-xl lg:text-[24px] xl:text-[26px] text-[20px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Categories</h2>
                        <ul className='xl:px-6 md:px-4 px-3 xl:py-2 sm:py-1 border border-gray-100/20 md:mt-7 mt-4'>
                            <li className='my-4' > <Skeleton className='w-full h-7 rounded' /></li>
                            <li className='my-4' > <Skeleton className='w-full h-7 rounded' /></li>
                            <li className='my-4' > <Skeleton className='w-full h-7 rounded' /></li>
                            <li className='my-4' > <Skeleton className='w-full h-7 rounded' /></li>
                            <li className='my-4' > <Skeleton className='w-full h-7 rounded' /></li>
                            <li className='my-4' > <Skeleton className='w-full h-7 rounded' /></li>
                            <li className='my-4' > <Skeleton className='w-full h-7 rounded' /></li>
                            <li className='my-4' > <Skeleton className='w-full h-7 rounded' /></li>
                            <li className='my-4' > <Skeleton className='w-full h-7 rounded' /></li>
                            <li className='my-4' > <Skeleton className='w-full h-7 rounded' /></li>
                        </ul>
                    </div>

                    <div className='mb-4 sm:mb-6 xl:mb-8 2xl:mb-12'>
                        <h2 className='mb-2 md:mb-3 lg:mb-4 block 2xl:text-xl lg:text-[24px] xl:text-[26px] text-[20px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Recent Posts</h2>
                        <div className='my-6 flex items-center gap-5'>
                            <Skeleton className='w-[100px] h-[100px]' />
                            <div className=''>
                                <Skeleton className='w-full h-14 my-2' />
                                <Skeleton className='w-24 h-6 my-2' />
                            </div>
                        </div>
                        <div className='my-6 flex items-center gap-5'>
                            <Skeleton className='w-[100px] h-[100px]' />
                            <div className=''>
                                <Skeleton className='w-full h-14 my-2' />
                                <Skeleton className='w-24 h-6 my-2' />
                            </div>
                        </div>
                        <div className='my-6 flex items-center gap-5'>
                            <Skeleton className='w-[100px] h-[100px]' />
                            <div className=''>
                                <Skeleton className='w-full h-14 my-2' />
                                <Skeleton className='w-24 h-6 my-2' />
                            </div>
                        </div>
                    </div>

                    <div className='mb-4 sm:mb-6 xl:mb-8 2xl:mb-12'>
                        <h2 className='mb-2 md:mb-3 lg:mb-4 block 2xl:text-xl lg:text-[24px] xl:text-[26px] text-[20px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Colors</h2>
                        <ul className='md:mt-7 mt-4 flex items-center flex-wrap gap-4'>
                            <li className=''><Skeleton className='w-8 h-8 rounded-full' /></li>
                            <li className=''><Skeleton className='w-8 h-8 rounded-full' /></li>
                            <li className=''><Skeleton className='w-8 h-8 rounded-full' /></li>
                            <li className=''><Skeleton className='w-8 h-8 rounded-full' /></li>
                            <li className=''><Skeleton className='w-8 h-8 rounded-full' /></li>
                            <li className=''><Skeleton className='w-8 h-8 rounded-full' /></li>
                            <li className=''><Skeleton className='w-8 h-8 rounded-full' /></li>
                            <li className=''><Skeleton className='w-8 h-8 rounded-full' /></li>
                            <li className=''><Skeleton className='w-8 h-8 rounded-full' /></li>
                            <li className=''><Skeleton className='w-8 h-8 rounded-full' /></li>
                            <li className=''><Skeleton className='w-8 h-8 rounded-full' /></li>
                            <li className=''><Skeleton className='w-8 h-8 rounded-full' /></li>
                        </ul>
                    </div>

                    <div className='mb-4 sm:mb-6 xl:mb-8 2xl:mb-12'>
                        <h2 className='mb-2 md:mb-3 lg:mb-4 block 2xl:text-xl lg:text-[24px] xl:text-[26px] text-[20px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Instagram</h2>
                        <ul className='md:mt-7 mt-4 grid xl:grid-cols-4 grid-cols-3 gap-2'>
                            <li className=''> <Skeleton className='w-32 h-32' /> </li>
                            <li className=''> <Skeleton className='w-32 h-32' /> </li>
                            <li className=''> <Skeleton className='w-32 h-32' /> </li>
                            <li className=''> <Skeleton className='w-32 h-32' /> </li>
                            <li className=''> <Skeleton className='w-32 h-32' /> </li>
                            <li className=''> <Skeleton className='w-32 h-32' /> </li>
                            <li className=''> <Skeleton className='w-32 h-32' /> </li>
                            <li className=''> <Skeleton className='w-32 h-32' /> </li>
                        </ul>
                    </div>
                </div>
            ) : (
                <>
                    {initialValues.length > 0 && initialValues[0].filter.map((child_items, index) => {
                        return (
                            <React.Fragment key={index}>
                                <div className='mb-4 sm:mb-6 xl:mb-8 2xl:mb-12'>
                                    <h2 className='mb-2 md:mb-3 lg:mb-4 block 2xl:text-xl lg:text-[24px] xl:text-[26px] text-[20px] font-nabi leading-tight text-gray-800'>Search</h2>
                                    <form id="searchCategory" className="flex items-center justify-between xl:py-4 xl:px-6 md:py-3 py-2.5 md:px-4 px-3 border border-gray-400/20  bg-white transition-all ">
                                        <div className="searchbar flex items-center grow">
                                            <input type="text" placeholder='Search here...' className="focus:outline-none text-md xl:text-lg  placeholder:text-[#2F2F2F] grow text-gray-800 font-[500] w-full bg-transparent border-none rounded-none" />
                                            <button type='submit'><Image src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/search.svg' width={26} height={26} alt='search' title="search" className="xl:w-6 w-5 lg:mr-0 ltr:mr-2 rtl:ml-2" /></button>
                                        </div>
                                    </form>
                                </div>

                                <div className='mb-4 sm:mb-6 xl:mb-8 2xl:mb-12'>
                                    <h2 className='mb-2 md:mb-3 lg:mb-4 block 2xl:text-xl lg:text-[24px] xl:text-[26px] text-[20px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Categories</h2>
                                    <ul className='xl:px-6 md:px-4 px-3 xl:py-2 sm:py-1 border border-gray-100/20 md:mt-7 mt-4'>
                                        {child_items.categories && child_items.categories.map((items, index) => {
                                            return (
                                                <li className='flex items-center justify-between gap-2 sm:my-4 my-2' key={index}>
                                                    <Link href={items.link} className='capitalize text-md xl:text-lg text-gray-900 hover:text-violet-900'>{items.title}</Link>
                                                    <span className='capitalize text-md xl:text-lg text-gray-500'>({items.count})</span>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className='mb-4 sm:mb-6 xl:mb-8 2xl:mb-12'>
                                    <h2 className='mb-2 md:mb-3 lg:mb-4 block 2xl:text-xl lg:text-[24px] xl:text-[26px] text-[20px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Recent Posts</h2>
                                    {child_items.recent_posts && child_items.recent_posts.map((items, index) => {
                                        return (
                                            <div className='md:my-6 my-4 flex items-center sm:gap-5 gap-3' key={index}>
                                                <Link href={items.blog_link} ><Image src={items.img} alt={items.title} title={items.title} width={200} height={200} className='min-w-[100px] min-h-[100px] w-[100px] h-[100px] object-cover' /></Link>
                                                <div className=''>
                                                    <p className='sm:text-md text-sm xl:text-lg text-gray-900 sm:my-2'>{items.des}</p>
                                                    <span className='sm:text-[15px] text-[13px] text-black font-semibold uppercase'>{items.date}</span>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>

                                <div className='mb-4 sm:mb-6 xl:mb-8 2xl:mb-12'>
                                    <h2 className='mb-2 md:mb-3 lg:mb-4 block 2xl:text-xl lg:text-[24px] xl:text-[26px] text-[20px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Tags</h2>
                                    <ul className='md:mt-7 mt-4 flex items-center flex-wrap gap-2'>
                                        {child_items.tags && child_items.tags.map((items, index) => {
                                            return (
                                                <li className='' key={index}>
                                                    <Link href={items.link} className='md:text-md text-sm text-gray-900 hover:text-white capitalize md:px-6 px-4 md:py-2.5 py-1.5 bg-white hover:bg-violet-900 border border-gray-400/20 block'>{items.title}</Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>

                                <div className='mb-4 sm:mb-6 xl:mb-8 2xl:mb-12'>
                                    <h2 className='mb-2 md:mb-3 lg:mb-4 block 2xl:text-xl lg:text-[24px] xl:text-[26px] text-[20px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Instagram</h2>
                                    <ul className='md:mt-7 mt-4 grid 1xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-6 grid-cols-3 gap-2'>
                                        {child_items.instagram && child_items.instagram.map((items, index) => {
                                            return (
                                                <li className='' key={index}>
                                                    <Link className="relative group/insta block text-gray-800" href={items.box_link} target='_blank'>
                                                        <Image src={items.img} width={0} height={0} sizes="100vw" alt={items.img_alt} title={items.img_alt} className="w-full sm:h-32 h-24 object-cover" />
                                                        <div className="hover-stake absolute w-full h-full flex itemss-center justify-center opacity-0 group-hover/insta:opacity-100 top-0 left-0 before:content-[''] before:w-full before:h-full before:absolute before:top-0 before:left-0 before:bg-violet-900 before:opacity-60 before:-z-0">
                                                            <Image src={items.insta_icon_img} width={30} height={30} sizes="100vw" alt={items.img_alt} title={items.img_alt} className='relative z-1' />
                                                        </div>
                                                    </Link>
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </React.Fragment>
                        )
                    })}
                </>
            )}
        </>
    )
}

export default Left_Filter
