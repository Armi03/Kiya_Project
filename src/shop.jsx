import Header from '../src/components/Header'; 
import { Link } from 'react-router-dom';
import Footer from '../src/components/Footer';
import React, { useEffect } from 'react';
import { Breadcrumb_pages, useFetchData } from '../src/comman';
import { Grid_Product, Left_Filter, List_Product } from '../src/Sections';
import { Button, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Pagination } from '@heroui/react';
import MiniCart from '../src/components/MiniCart';
import MiniCart_sidebar from '../src/components/MiniCart_sidebar';

const Shop = () => {
  const breadcrumbItems = [
    { title: 'Shop', url: ``, type: false },
  ];

  const { data: shop_data } = useFetchData("json/data/shop_data.json");
  const [selectedKeys, setSelectedKeys] = React.useState(new Set(["best seller"]));
  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys]
  );
  const [openGridList, setOpenGridList] = React.useState(1);


  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);

  const HideCart = () => {
    const old_class = document.getElementById('mini-cart').className;
    const new_class = old_class === 'color_switch fixed top-0 z-50 transition-all w-full -right-full  h-full' ? 'color_switch fixed top-0 z-50 transition-all w-full right-0  h-full' : 'color_switch fixed top-0 z-50 transition-all w-full -right-full  h-full'
    document.getElementById('mini-cart').className = new_class
  };

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
    <>
      <Header />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />

      <div id='mini-cart' className='color_switch fixed top-0 z-50 transition-all w-full -right-full h-full'>
        <MiniCart_sidebar />
        <div className='absolute w-full h-full bg-gray-900 opacity-50 -z-1 top-0 right-0' onClick={() => HideCart()}></div>
      </div>

      <div className='2xl:py-10 py-8 container'>
        <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] uppercase  text-center  md:my-4 my-2 leading-tight text-gray-800">Shop</h1>
        <p className='2xl:text-lg lg:text-[17px] text-md my-2 md:leading-7 lg:my-4 text-gray-800 text-center md:max-w-[600px] mx-auto' >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

      <div className='container 2xl:pb-24 lg:pb-16 pb-10'>
        <div className='flex items-start lg:flex-nowrap flex-wrap'>
          <div className='lg:w-1/4 w-full md:pr-8'>
            <Left_Filter initialValues={shop_data} />
          </div>
          <div className='lg:w-3/4 w-full'>
            <div className='md:px-4 px-2.5 md:py-3 py-2 bg-violet-400 flex items-center justify-between gap-2'>
              <div className='flex items-center'>
                <div className='flex items-center md:gap-3 sm:gap-2 gap-1 md:mr-5 md:pr-5 mr-3 pr-3 border-r border-gray-100/50'>
                  <Button className={'min-w-0 flex items-center justify-center bg-transparent group md:p-1 p-0.5 h-auto rounded-none ' + (openGridList === 1 ? " active" : "")} onClick={e => { e.preventDefault(); setOpenGridList(1); }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='md:w-6 w-5 stroke-2 stroke-gray-900 group-hover:stroke-violet-900 group-[.active]:stroke-violet-900'>
                      <path d="M10.3594 2.4375H3.45312C2.89221 2.4375 2.4375 2.89221 2.4375 3.45312V10.3594C2.4375 10.9203 2.89221 11.375 3.45312 11.375H10.3594C10.9203 11.375 11.375 10.9203 11.375 10.3594V3.45312C11.375 2.89221 10.9203 2.4375 10.3594 2.4375Z" />
                      <path d="M22.5469 2.4375H15.6406C15.0797 2.4375 14.625 2.89221 14.625 3.45312V10.3594C14.625 10.9203 15.0797 11.375 15.6406 11.375H22.5469C23.1078 11.375 23.5625 10.9203 23.5625 10.3594V3.45312C23.5625 2.89221 23.1078 2.4375 22.5469 2.4375Z" />
                      <path d="M10.3594 14.625H3.45312C2.89221 14.625 2.4375 15.0797 2.4375 15.6406V22.5469C2.4375 23.1078 2.89221 23.5625 3.45312 23.5625H10.3594C10.9203 23.5625 11.375 23.1078 11.375 22.5469V15.6406C11.375 15.0797 10.9203 14.625 10.3594 14.625Z" />
                      <path d="M22.5469 14.625H15.6406C15.0797 14.625 14.625 15.0797 14.625 15.6406V22.5469C14.625 23.1078 15.0797 23.5625 15.6406 23.5625H22.5469C23.1078 23.5625 23.5625 23.1078 23.5625 22.5469V15.6406C23.5625 15.0797 23.1078 14.625 22.5469 14.625Z" />
                    </svg>
                  </Button>
                  <Button className={'min-w-0 flex items-center justify-center bg-transparent group md:p-1 p-0.5 h-auto rounded-none ' + (openGridList === 2 ? " active" : "")} onClick={e => { e.preventDefault(); setOpenGridList(2); }}>
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className='md:w-6 w-5  fill-gray-900   group-hover:fill-violet-900 group-[.active]:fill-violet-900'>
                      <path d="M3.25 4.875C3.25 3.97754 2.52246 3.25 1.625 3.25C0.727537 3.25 0 3.97754 0 4.875C0 5.77246 0.727537 6.5 1.625 6.5C2.52246 6.5 3.25 5.77246 3.25 4.875ZM26 4.875C26 3.97754 25.2725 3.25 24.375 3.25H8.125C7.22754 3.25 6.5 3.97754 6.5 4.875C6.5 5.77246 7.22754 6.5 8.125 6.5H24.375C25.2725 6.5 26 5.77246 26 4.875ZM0 13C0 12.1025 0.727537 11.375 1.625 11.375C2.52246 11.375 3.25 12.1025 3.25 13C3.25 13.8975 2.52246 14.625 1.625 14.625C0.727537 14.625 0 13.8975 0 13ZM26 13C26 12.1025 25.2725 11.375 24.375 11.375H8.125C7.22754 11.375 6.5 12.1025 6.5 13C6.5 13.8975 7.22754 14.625 8.125 14.625H24.375C25.2725 14.625 26 13.8975 26 13ZM0 21.125C0 20.2275 0.727537 19.5 1.625 19.5C2.52246 19.5 3.25 20.2275 3.25 21.125C3.25 22.0225 2.52246 22.75 1.625 22.75C0.727537 22.75 0 22.0225 0 21.125ZM26 21.125C26 20.2275 25.2725 19.5 24.375 19.5H8.125C7.22754 19.5 6.5 20.2275 6.5 21.125C6.5 22.0225 7.22754 22.75 8.125 22.75H24.375C25.2725 22.75 26 22.0225 26 21.125Z" />
                    </svg>
                  </Button>
                </div>
                <p className='text-md uppercase text-gray-900 md:block hidden'>Showing 1–16 of 32 results</p>
              </div>
              <Dropdown classNames={{
                content: "bg-white"
              }}>
                <DropdownTrigger disableAnimation >
                  <Button variant="bordered" className="z-1 uppercase text-gray-800 md:text-md sm:text-sm text-[13px] p-0 border-0 aria-expanded:scale-[1] aria-expanded:opacity-100 h-auto items-baseline -mb-px" >
                    <span className='font-semibold'>Sort By:</span> {selectedValue} <span className='bg-white md:w-7 md:h-7 sm:w-6 sm:h-6 w-5 h-5 rounded-full flex items-center justify-center group-aria-[expanded=true]:rotate-180'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='w-3'>
                        <path d="M1 1L6.2929 6.68541C6.6834 7.10487 7.3166 7.10487 7.7071 6.68541L13 1" stroke="#000" strokeWidth="1.4" />
                      </svg>
                    </span>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Single selection example"
                  variant="flat"
                  disallowEmptySelection
                  selectionMode="single"
                  selectedKeys={selectedKeys}
                  onSelectionChange={setSelectedKeys}

                >
                  <DropdownItem className="text-md uppercase text-gray-900" key="default sorting">Default Sorting</DropdownItem>
                  <DropdownItem className="text-md uppercase text-gray-900" key="best seller">Best Seller</DropdownItem>
                  <DropdownItem className="text-md uppercase text-gray-900" key="Top Rated">Top Rated</DropdownItem>
                  <DropdownItem className="text-md uppercase text-gray-900" key="Newest">Newest</DropdownItem>
                  <DropdownItem className="text-md uppercase text-gray-900" key="Price: Low to High">Price: Low to High</DropdownItem>
                  <DropdownItem className="text-md uppercase text-gray-900" key="Price: High to Low">Price: High to Low</DropdownItem>
                  <DropdownItem className="text-md uppercase text-gray-900" key="Name (A - Z)">Name (A - Z)</DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </div>
            <div id='mini-cart' className='hidden'>
              <MiniCart />
            </div>
            <div className={openGridList === 1 ? "block md:pt-8 pt-4" : "hidden"}>
              <Grid_Product initialValues={shop_data} />
            </div>
            <div className={openGridList === 2 ? "block md:pt-8 pt-4" : "hidden"}>
              <List_Product initialValues={shop_data} />
            </div>

            <Pagination isCompact showControls total={4} initialPage={1} dir='ltr'
              classNames={{
                base: "lg:mt-12 mt-6 z-10 relative",
                wrapper: "2xl:gap-2 md:gap-1 gap-0 overflow-visible h-8 rounded-full border-0 shadow-none mx-auto",
                item: "2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 md:text-lg text-md text-black font-[600] !rounded-full bg-transparent",
                cursor: "bg-violet-900 rounded-full 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 md:text-lg text-md  text-white font-[600]",
                prev: "bg-transparent text-lg text-gray-900 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 !rounded-full",
                next: "bg-transparent text-lg text-gray-900 2xl:w-12 2xl:h-12 w-10 h-10 [&[data-hover=true]:not([data-active=true])]:!bg-gray-400/20 !rounded-full"
              }} />
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
};



export default Shop;