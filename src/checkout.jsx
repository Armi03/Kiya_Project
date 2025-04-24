import Header from './components/Header'; 
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';
import { Breadcrumb_pages, useFetchData } from './comman';
import { useRoutes } from 'react-router-dom';
import { CheckboxGroup, Checkbox, cn, RadioGroup, Select, SelectItem, Skeleton, Radio } from '@heroui/react';

export const CustomCheckbox = (props) => {
  const { children, ...otherProps } = props;
  return (
    <Checkbox
      {...otherProps}
      classNames={{
        base: cn(
          "mx-0 my-0.5 p-0 text-gray-900 text-lg gap-3 justify-between max-w-none "
        ),
        wrapper: cn(
          "group-data-[selected=true]:!bg-violet-900 focus:outline-0 m-0 border-[1.5px] border-black rounded md:w-[18px] md:h-[18px] w-[16px] h-[16px] group-data-[selected=true]:border-violet-900  group-data-[selected=true]:before:bg-violet-900 z-1 after:bg-violet-900 before:!border-0 after:!border-0 before:!rounded after:!rounded outline-0"
        ),
        label: cn(
          "text-lg grow flex justify-between before:hidden"
        )
      }}
    >
      {children}
    </Checkbox>
  );
};

export const CustomRadio  = (props) => {
  const { children, ...otherProps } = props;
  return (
    <Radio
      {...otherProps}
      classNames={{
        base: cn(
          "mx-0 my-0.5 p-0 text-gray-900 text-lg gap-3  max-w-none "
        ),
        wrapper: cn(
          "group-data-[selected=true]:!bg-violet-900 focus:outline-0 m-0 border-[1.5px] border-black rounded md:w-[18px] md:h-[18px] w-[16px] h-[16px] group-data-[selected=true]:border-violet-900  group-data-[selected=true]:before:bg-violet-900 z-1 after:bg-violet-900 before:!border-0 after:!border-0 before:!rounded after:!rounded outline-0"
        ),
        label: cn(
          "md:text-lg text-md grow flex justify-between sm:flex-nowrap flex-wrap before:hidden text-gray-900"
        ),
        labelWrapper: cn(
          "w-full"
        ),
        control: cn(
          "bg-[url('https://webby-production.s3.amazonaws.com/Starry-Heavens/other/check-icon.svg')] bg-contain bg-center w-3 h-3 bg-violet-900 rounded-none bg-no-repeat"
        )
      }}
    >
      {children}
    </Radio>
  );
};
export default function Checkout() {
  const breadcrumbItems = [
    { title: 'Checkout', url: ``, type: false },
  ];
  // const router = useRoutes()
  const [product_item, setproduct_item] = useState(1);
  const [ShippingForm, setShippingForm] = React.useState(false);
  const [openFormList, setOpenFormList] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(true);

  const handleIncrement = () => {
    setproduct_item(product_item + 1);
  };
  const handleDecrement = () => {
    if (product_item > 1) {
      setproduct_item(product_item - 1);
    }
  };

  function toggle() {
    setShippingForm(!ShippingForm);
  }

  /*  ============= Skeletone_loader ============   */
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
    <>
      <Header />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
      <div className='2xl:py-10 py-8 container'>
        <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] uppercase ltr:lg:text-left rtl:lg:text-right text-center  md:my-4 my-2 leading-tight text-gray-800">Checkout</h1>
      </div>

      <div className='container 2xl:pb-24 lg:pb-16 pb-10'>
        <div className='flex items-start gap-8 lg:flex-nowrap flex-wrap'>
          <div className='lg:w-2/3 w-full'>

            {isLoading ? (
              <form>
                <h3 className=' 2xl:text-[26px] lg:text-[24px] text-[22px] text-gray-900  pb-4 1xl:mb-8 mb-5 border-b border-gray-100/20'>Billing Details</h3>
                <div className='billing-form'>
                  <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                    <Skeleton className='w-full h-12' />
                    <Skeleton className='w-full h-12' />
                  </div>
                  <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                    <Skeleton className='w-full h-12' />
                    <Skeleton className='w-full h-12' />
                  </div>
                  <div className='mb-4'>
                    <Skeleton className='w-full h-12' />
                  </div>
                  <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                    <Skeleton className='w-full h-12' />
                    <Skeleton className='w-full h-12' />
                  </div>
                  <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                    <Skeleton className='w-full h-12' />
                    <Skeleton className='w-full h-12' />
                  </div>
                  <div className='mb-4'>
                    <Skeleton className='w-full h-12' />
                  </div>
                </div>
                <div className='mb-4'>
                  <Skeleton className='w-1/2 h-6' />
                </div>

                <div className='mb-4'>
                  <Skeleton className='w-full h-24' />
                </div>

              </form>
            )
              :
              (
                <form>
                  <h3 className=' 2xl:text-[26px] lg:text-[24px] text-[22px] text-gray-900  pb-4 1xl:mb-8 mb-5 border-b border-gray-100/20'>Billing Details</h3>
                  <div className='billing-form'>
                    <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                      <input type='text' placeholder='First name' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                      <input type='text' placeholder='Last Name' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                    </div>
                    <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                      <input type='text' placeholder='Company (optional)' className='block bg-white grow w-full rounded-none border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                      <Select radius='none'
                        placeholder="Country"
                        classNames={{
                          trigger: " text-lg h-auto px-4 2xl:py-3.5 py-3  text-gray-800 rounded-none border border-gray-100/20 shadow-none bg-white data-[hover=true]:bg-white",
                          listbox: " !w-full",
                          value: " text-md !text-gray-800 opacity-100  ltr:text-left rtl:text-right",
                          base: "grow min-w-[49%]",
                          selectorIcon: "ltr:right-3 rtl:left-3 rtl:right-auto"
                        }}
                        popoverProps={{
                          classNames: {
                            base: " !w-full rounded-none bg-white",
                            content: "p-0 border-small border-divider rounded-none"
                          },
                        }}
                        listboxProps={{
                          itemClasses: {
                            title: [
                              "text-[16px] py-1 ",
                            ],
                          },
                        }}
                      >
                        <SelectItem key='Afghanistan' value='Afghanistan'>Afghanistan</SelectItem>
                        <SelectItem key='USA' value='USA'>USA</SelectItem>
                        <SelectItem key='India' value='India'>India</SelectItem>
                        <SelectItem key='America' value='America'>America</SelectItem>
                        <SelectItem key='Australia' value='Australia'>Australia</SelectItem>
                        <SelectItem key='Newzealand' value='Newzealand'>Newzealand</SelectItem>
                      </Select>

                    </div>
                    <div className='mb-4'>
                      <input type='text' placeholder='Town / city' className='block w-full rounded-none border border-gray-100/20 px-5 py-3 text-md bg-white text-gray-900 placeholder:text-gray-800  focus-visible:outline-none focus-visible:border-gray-100/40' required />
                    </div>
                    <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                      <input type='text' placeholder='Company (optional)' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                      <Select radius='none'
                        placeholder="State"
                        classNames={{
                          trigger: " text-lg h-auto px-4 2xl:py-3.5 py-3  text-gray-800 rounded-none border border-gray-100/20 shadow-none bg-white data-[hover=true]:bg-white",
                          listbox: " !w-full",
                          value: " text-md !text-gray-800 opacity-100  ltr:text-left rtl:text-right",
                          base: "grow min-w-[49%]",
                          selectorIcon: "ltr:right-3 rtl:left-3 rtl:right-auto"
                        }}
                        popoverProps={{
                          classNames: {
                            base: " !w-full rounded-none bg-white",
                            content: "p-0 border-small border-divider rounded-none"
                          },
                        }}
                        listboxProps={{
                          itemClasses: {
                            title: [
                              "text-[16px] py-1 ",
                            ],
                          },
                        }}
                      >
                        <SelectItem key='California' value='California'>California</SelectItem>
                        <SelectItem key='Texas' value='Texas'>Texas</SelectItem>
                        <SelectItem key='Florida' value='Florida'>Florida</SelectItem>
                        <SelectItem key='Alaska' value='Alaska'>Alaska</SelectItem>
                        <SelectItem key='Hawaii' value='Hawaii'>Hawaii</SelectItem>
                        <SelectItem key='Virginia' value='Virginia'>Virginia</SelectItem>
                      </Select>
                    </div>
                    <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                      <input type='text' placeholder='PIN Code' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                      <input type='text' placeholder='Phone Number' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                    </div>
                    <div className='mb-4'>
                      <input type='email' placeholder='Email address' className='block w-full rounded-none border border-gray-100/20 px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800  focus-visible:outline-none focus-visible:border-gray-100/40' required />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <CheckboxGroup defaultValue={["standard-shipping"]}>
                      <Checkbox value="shipping" onClick={toggle}
                        classNames={{
                          base: cn(
                            "mx-0 my-0.5 p-0 text-gray-900 text-lg gap-3 "
                          ),
                          wrapper: cn(
                            "group-data-[selected=true]:!bg-violet-900 focus:outline-0 m-0 border-[1.5px] border-black rounded md:w-[18px] md:h-[18px] w-[16px] h-[16px] group-data-[selected=true]:border-violet-900  group-data-[selected=true]:before:!bg-violet-900 after:!bg-violet-900 before:!border-0 after:!border-0 before:!rounded after:!rounded outline-0"
                          ),
                          label: cn(
                            "text-md text-gray-900"
                          )
                        }} > Ship to a different address? </Checkbox>
                    </CheckboxGroup>
                  </div>

                  <div className='shipping-form hidden' style={{ display: ShippingForm ? "block" : "none" }}>
                    <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                      <input type='text' placeholder='First name' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                      <input type='text' placeholder='Last Name' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                    </div>
                    <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                      <input type='text' placeholder='Company (optional)' className='block bg-white grow w-full rounded-none border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                      <Select radius='none'
                        placeholder="Country"
                        classNames={{
                          trigger: " text-lg h-auto px-4 2xl:py-3.5 py-3  text-gray-800 rounded-none border border-gray-100/20 shadow-none bg-white data-[hover=true]:bg-white",
                          listbox: " !w-full",
                          value: " text-md !text-gray-800 opacity-100  ltr:text-left rtl:text-right",
                          base: "grow min-w-[49%]",
                          selectorIcon: "ltr:right-3 rtl:left-3 rtl:right-auto"
                        }}
                        popoverProps={{
                          classNames: {
                            base: " !w-full rounded-none bg-white",
                            content: "p-0 border-small border-divider rounded-none"
                          },
                        }}
                        listboxProps={{
                          itemClasses: {
                            title: [
                              "text-[16px] py-1 ",
                            ],
                          },
                        }}
                      >
                        <SelectItem key='Afghanistan' value='Afghanistan'>Afghanistan</SelectItem>
                        <SelectItem key='USA' value='USA'>USA</SelectItem>
                        <SelectItem key='India' value='India'>India</SelectItem>
                        <SelectItem key='America' value='America'>America</SelectItem>
                        <SelectItem key='Australia' value='Australia'>Australia</SelectItem>
                        <SelectItem key='Newzealand' value='Newzealand'>Newzealand</SelectItem>
                      </Select>

                    </div>
                    <div className='mb-4'>
                      <input type='text' placeholder='Town / city' className='block bg-white w-full rounded-none border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800  focus-visible:outline-none focus-visible:border-gray-100/40' required />
                    </div>
                    <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                      <input type='text' placeholder='Company (optional)' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                      <Select radius='none'
                        placeholder="State"
                        classNames={{
                          trigger: " text-lg h-auto px-4 2xl:py-3.5 py-3  text-gray-800 rounded-none border border-gray-100/20 shadow-none bg-white data-[hover=true]:bg-white",
                          listbox: " !w-full",
                          value: " text-md !text-gray-800 opacity-100  ltr:text-left rtl:text-right",
                          base: "grow min-w-[49%]",
                          selectorIcon: "ltr:right-3 rtl:left-3 rtl:right-auto"
                        }}
                        popoverProps={{
                          classNames: {
                            base: " !w-full rounded-none bg-white",
                            content: "p-0 border-small border-divider rounded-none"
                          },
                        }}
                        listboxProps={{
                          itemClasses: {
                            title: [
                              "text-[16px] py-1 ",
                            ],
                          },
                        }}
                      >
                        <SelectItem key='California' value='California'>California</SelectItem>
                        <SelectItem key='Texas' value='Texas'>Texas</SelectItem>
                        <SelectItem key='Florida' value='Florida'>Florida</SelectItem>
                        <SelectItem key='Alaska' value='Alaska'>Alaska</SelectItem>
                        <SelectItem key='Hawaii' value='Hawaii'>Hawaii</SelectItem>
                        <SelectItem key='Virginia' value='Virginia'>Virginia</SelectItem>
                      </Select>
                    </div>
                    <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                      <input type='text' placeholder='PIN Code' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                      <input type='text' placeholder='Phone Number' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                    </div>
                    <div className='mb-4'>
                      <input type='email' placeholder='Email address' className='block bg-white w-full rounded-none border border-gray-100/20 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800  focus-visible:outline-none focus-visible:border-gray-100/40' required />
                    </div>
                  </div>
                  <div className='mb-4'>
                    <textarea placeholder='Order notes... (optional)' className='block bg-white w-full rounded-none border border-gray-100/20 h-32 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800  focus-visible:outline-none focus-visible:border-gray-100/40' required />
                  </div>

                </form>
              )}

            <div className='flex items-center  mt-8 sm:flex-nowrap flex-wrap gap-4'>
              <Link href='/cart' className='all-btn'>Back To Cart</Link>
              <button className='all-btn '>Save Change</button>
            </div>
          </div>

          <div className='lg:w-1/3 w-full'>

            {isLoading ? (
              <div className='bg-violet-400 sm:p-5 p-3  lg:-mt-5'>
                <h3 className='font-nabi 2xl:text-[26px] lg:text-[24px] text-[22px] text-gray-900 font-normal pb-4 1xl:mb-8 mb-5 border-b border-gray-100/20 capitalize'>order summary</h3>
                <div className=''>
                  <div className='my-3 flex md:gap-4 gap-2 items-center group'>
                    <div className=''>
                      <Skeleton className='1xl:w-[100px] w-[80px] h-[80px] 1xl:h-[100px]  rounded' />
                    </div>
                    <div className='grow'>
                      <Skeleton className='w-1/2 h-12 rounded sm:mb-2 mb-1  ' />
                      <div className='flex items-center justify-between'>
                        <Skeleton className='w-20 h-6 rounded  ' />
                        <Skeleton className='w-20 h-6 rounded  ' />
                      </div>
                    </div>
                  </div>
                  <div className='my-3 flex md:gap-4 gap-2 items-center group'>
                    <div className=''>
                      <Skeleton className='1xl:w-[100px] w-[80px] h-[80px] 1xl:h-[100px]  rounded' />
                    </div>
                    <div className='grow'>
                      <Skeleton className='w-1/2 h-12 rounded sm:mb-2 mb-1  ' />
                      <div className='flex items-center justify-between'>
                        <Skeleton className='w-20 h-6 rounded  ' />
                        <Skeleton className='w-20 h-6 rounded  ' />
                      </div>
                    </div>
                  </div>
                  <div className='my-3 flex md:gap-4 gap-2 items-center group'>
                    <div className=''>
                      <Skeleton className='1xl:w-[100px] w-[80px] h-[80px] 1xl:h-[100px]  rounded' />
                    </div>
                    <div className='grow'>
                      <Skeleton className='w-1/2 h-12 rounded sm:mb-2 mb-1  ' />
                      <div className='flex items-center justify-between'>
                        <Skeleton className='w-20 h-6 rounded  ' />
                        <Skeleton className='w-20 h-6 rounded  ' />
                      </div>
                    </div>
                  </div>
                </div>
                <div className='flex items-center justify-between my-5'>
                  <Skeleton className='w-20 h-6 rounded  ' />
                  <Skeleton className='w-20 h-6 rounded  ' />
                </div>
                <div className='flex items-center justify-between  my-5'>
                  <Skeleton className='w-20 h-6 rounded  ' />
                  <Skeleton className='w-20 h-6 rounded  ' />
                </div>
                <div className='flex items-center justify-between py-5 border-t border-gray-100/20'>
                  <Skeleton className='w-20 h-6 rounded  ' />
                  <Skeleton className='w-20 h-6 rounded  ' />
                </div>
                <div className='flex items-center gap-3 justify-stretch '>
                  <Skeleton className='w-1/2 h-12 rounded  ' />
                  <Skeleton className='w-1/2 h-12 rounded  ' />
                </div>
              </div>
            ) :
              (
                <div className='bg-violet-400 sm:p-5 p-3  lg:-mt-5'>
                  <h3 className='font-nabi 2xl:text-[26px] lg:text-[24px] text-[22px] text-gray-900 font-normal pb-4 1xl:mb-8 mb-5 border-b border-gray-100/20 capitalize'>order summary</h3>
                  <div className=''>
                    <div className='my-3 flex md:gap-4 gap-2 items-center group'>
                      <div className=''>
                        <img src='https://webby-production.s3.amazonaws.com/Starry-Heavens/shopg/shop-pro-1.png' alt='diamond earing' title='diamond earing' className='group-hover:bg-violet-900/5 bg-white 1xl:w-[100px] min-w-[70px] w-[80px] h-[80px] 1xl:h-[100px]  object-contain sm:p-3 p-2' width={120} height={120} />
                      </div>
                      <div className='grow'>
                        <Link href='/single-shop' className='2xl:text-lg sm:text-md text-[15px] text-gray-900 1xl:w-2/3 sm:mb-2 mb-1 block hover:text-violet-900 '>Stylist Diamonds Earring With Women</Link>
                        <div className='flex items-center justify-between'>
                          <p className='sm:text-md text-[15px] text-gray-900'>Quantity : 1</p>
                          <p className='sm:text-md text-[15px] text-gray-900'>$589.00</p>
                        </div>
                      </div>
                    </div>
                    <div className='my-3 flex md:gap-4 gap-2 items-center  group'>
                      <div className=''>
                        <img src='https://webby-production.s3.amazonaws.com/Starry-Heavens/shop/shop-pro-2.png' alt='diamond earing' title='diamond earing' className='group-hover:bg-violet-900/5 bg-white 1xl:w-[100px] min-w-[70px] w-[80px] h-[80px] 1xl:h-[100px]  object-contain sm:p-3 p-2' width={120} height={120} />
                      </div>
                      <div className='grow'>
                        <Link href='/single-shop' className='2xl:text-lg sm:text-md text-[15px] text-gray-900 1xl:w-2/3 sm:mb-2 mb-1 block hover:text-violet-900 '>Purple Gemstone Hot Wedding Ringn</Link>
                        <div className='flex items-center justify-between'>
                          <p className='sm:text-md text-[15px] text-gray-900'>Quantity : 2</p>
                          <p className='sm:text-md text-[15px] text-gray-900'>$536.00</p>
                        </div>
                      </div>
                    </div>
                    <div className='my-3 flex md:gap-4 gap-2 items-center  group'>
                      <div className=''>
                        <img src='https://webby-production.s3.amazonaws.com/Starry-Heavens/shop/shop-pro-3.png' alt='diamond earing' title='diamond earing' className='group-hover:bg-violet-900/5 bg-white 1xl:w-[100px] min-w-[70px] w-[80px] h-[80px] 1xl:h-[100px]  object-contain sm:p-3 p-2' width={120} height={120} />
                      </div>
                      <div className='grow'>
                        <Link href='/single-shop' className='2xl:text-lg sm:text-md text-[15px] text-gray-900 1xl:w-2/3 sm:mb-2 mb-1 block hover:text-violet-900 '>Hottest Gold bracelet For Women</Link>
                        <div className='flex items-center justify-between'>
                          <p className='sm:text-md text-[15px] text-gray-900'>Quantity : 1</p>
                          <p className='sm:text-md text-[15px] text-gray-900'>$889.00</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between my-5'>
                    <p className='uppercase 1xl:text-lg text-md text-gray-800 font-[600]'>Sub Total</p>
                    <p className='uppercase 1xl:text-lg text-md text-gray-800 font-[600]'>$2014.00</p>
                  </div>
                  <div className='flex items-center justify-between  my-5'>
                    <p className='uppercase 1xl:text-lg text-md text-gray-800 font-[600]'>shipping</p>
                    <p className='uppercase 1xl:text-lg text-md text-gray-800 font-[600]'>$22.00</p>
                  </div>
                  <div className='flex items-center justify-between py-5 border-t border-gray-100/20'>
                    <p className='uppercase 1xl:text-lg text-md text-gray-800 font-[600]'>Total</p>
                    <p className='uppercase 1xl:text-lg text-md text-gray-800 font-[600]'>$2036.00</p>
                  </div>
                  <div className='flex items-center gap-3 justify-stretch '>
                    <Link href='/shop' className='all-btn text-center px-2 bg-white border border-violet-900 text-violet-900 hover:bg-violet-900 hover:text-white font-medium grow'>Continue Shop</Link>
                    <Link href='/checkout' className='all-btn text-center px-2 grow font-medium'>Checkout Now</Link>
                  </div>
                </div>
              )}

            {isLoading ? (
              <div className='bg-violet-400 p-5 mt-5'>
                <h3 className='font-nabi 2xl:text-[26px] lg:text-[24px] text-[22px] text-gray-900 font-normal pb-4 1xl:mb-8 mb-5 border-b border-gray-100/20 capitalize'>payment method</h3>
                <Skeleton className='w-full h-7 rounded my-2' />
                <Skeleton className='w-full h-7 rounded my-2'  />
                <form>
                  <div className='my-3'>
                    <Skeleton className='w-full h-14 rounded' />
                  </div>
                  <div className='my-3'>
                    <Skeleton className='w-full h-14 rounded' />
                  </div>
                  <div className='my-3 flex gap-3 sm:flex-nowrap flex-wrap'>
                    <Skeleton className='w-full h-14 rounded' />
                    <Skeleton className='w-full h-14 rounded' />
                  </div>
                  <div className='my-3'>
                    <Skeleton className='w-full h-14 rounded' />
                  </div>
                  <Skeleton className='w-full h-14 rounded' />
                </form>
                <div className='my-5'>
                <Skeleton className='w-full h-7 rounded' />
                </div>
                <div className='mt-5 pt-5 border-t border-gray-100/20'>
                  <Skeleton className='w-full h-14 rounded' />
                </div>

              </div>
            ) : (
              <div className='bg-violet-400 p-5 mt-5'>
                <h3 className='font-nabi 2xl:text-[26px] lg:text-[24px] text-[22px] text-gray-900 font-normal pb-4 1xl:mb-8 mb-5 border-b border-gray-100/20 capitalize'>payment method</h3>
                <RadioGroup defaultValue="Google"  >
                  <CustomRadio  value="Google" onChange={e => { e.preventDefault(); setOpenFormList(3); }}> Google Pay </CustomRadio >
                  <CustomRadio  value="credit"  onChange={e => { e.preventDefault(); setOpenFormList(1); }}> Credit Card / Debit Card <span><img src='https://webby-production.s3.amazonaws.com/Starry-Heavens/other/checkout-payment.png' width={130} height={30} title='checkout' alt='checkout' /></span> </CustomRadio >
                  <form className={openFormList === 1 ? "block mb-4" : "hidden"}>
                  <div className='my-3'>
                    <input type='text' placeholder='Card Type' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                  </div>
                  <div className='my-3'>
                    <input type='number' placeholder='Card Number' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                  </div>
                  <div className='my-3 flex gap-3 sm:flex-nowrap flex-wrap'>
                    <input type='text' placeholder='Expiry  MM/YY' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                    <input type='number' placeholder='CVV (3 Digits)' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                  </div>
                  <div className='my-3'>
                    <input type='text' placeholder='Card holder name' className='block grow w-full rounded-none border border-gray-100/20 px-5 bg-white py-3 text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                  </div>
                  <button className='all-btn w-full'>Save</button>
                </form>
                  <CustomRadio  value="cash on delivery"  onChange={e => { e.preventDefault(); setOpenFormList(2); }}>Cash on Delivery </CustomRadio >
                  <div className={openFormList === 2 ? "block" : "hidden"}>
                  <p className='md:text-lg text-md text-gray-900 mb-2'>Pay with cash upon delivery.</p>
                  <p className='text-md text-gray-900'>Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our <Link href='/privacy-policy' className='underline hover:text-violet-900'>Privacy Policy.</Link></p>

                  </div>
                </RadioGroup >
            
                <div className='mt-5 pt-5 border-t border-gray-100/20'>
                  <button className='all-btn w-full' >Order Now</button>
                </div>

              </div>
            )}

          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}



