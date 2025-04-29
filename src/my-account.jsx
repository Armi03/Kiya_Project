import React, { useEffect, useState } from 'react';
import {  Tab, Tabs, cn } from '@heroui/react'
import { Breadcrumb_pages, useFetchData } from './comman';
import Header from './components/Header'; 
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import { Account_Orders, Account_Profile, Account_address } from './Sections';

const MyAccount = ({ initialValues }) => {

  const breadcrumbItems = [
    { title: 'My Account', url: ``, type: false },
  ];

  return (
    <>
      <Header />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
      <div className='relative container 2xl:py-24 lg:py-16 py-12 '>
        <h1 className='text-gray-800 lg:mb-8 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight lg:ltr:text-left lg:rtl:text-right text-center'>My Account</h1>
        <Tabs
          aria-label="Options" radius='none'
          classNames={{
            base: "bg-violet-400 w-full p-2.5",
            tabList: "lg:gap-4 gap-2 w-full relative rounded-none p-0 bg-transparent flex-wrap",
            cursor: "w-full bg-violet-900 !rounded-none shadow-none",
            tab: "max-w-fit lg:px-10 sm:px-5 px-3 font-nabi !rounded-none 2xl:text-[24px] xl:text-[20px] lg:text-lg text-md lg:py-2.5 h-auto py-2 text-gray-900  data-[hover-unselected=true]:bg-violet-900 data-[hover-unselected=true]:opacity-100",
            tabContent: "group-data-[selected=true]:text-white group-data-[hover=true]:text-white text-gray-900 sm:w-auto  w-full",
            panel: "p-4 xl:p-6 shadow-none border border-violet-400"
          }}
        >
          <Tab key="Profile" title="Profile" className=''>
            <Account_Profile />
          </Tab>
          <Tab key="Orders" title="Orders">
            <Account_Orders />
          </Tab>
          <Tab key="Addresses" title="Addresses">
            <Account_address />
          </Tab>
          <Tab className='ml-auto !p-0 data-[hover-unselected=true]:opacity-100 data-[hover-unselected=true]:bg-transparent sm:w-auto w-full max-w-none'>
            <Link className='flex items-center gap-1 ml-auto all-btn text-white font-nabi  2xl:text-[24px] xl:text-[20px] lg:text-lg text-md  lg:py-2.5 h-auto py-2 hover:opacity-100  sm:w-auto w-full text-center justify-center ' href='#'> 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='ltr:mr-2 rtl:ml-2'>
              <path d="M9.99667 2.5H2.5V17.5H10M13.75 13.75L17.5 10L13.75 6.25M6.66667 9.99667H17.5" stroke="#F8F8F8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
              Logout</Link>
          </Tab>
        </Tabs>

      </div>

      <Footer />
    </>
  )
}

export default MyAccount
