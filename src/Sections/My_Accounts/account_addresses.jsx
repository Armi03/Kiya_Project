import React, { useEffect, useState } from 'react'
import { Checkbox, CheckboxGroup, Link, Select, SelectItem, Skeleton, cn } from '@heroui/react'

const Account_address = ({ initialValues }) => {

  const [openGridList, setOpenGridList] = React.useState();


  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (
    <>
    <div className={openGridList ? "hidden" : "block"}>
      {isLoading ? (
        <div className=' '>
          <p className='md:text-lg text-md font-semibold text-gray-900 my-3'>The Following addresses will be used in checkout page by default</p>
          <div className='lg:my-9 my-4 1xl:w-1/2 xl:w-2/3 flex sm:flex-row flex-col gap-6 '>
            <div className='bg-violet-400 2xl:p-8 p-4 sm:w-1/2 relative'>
              <Skeleton className='w-1/3 h-12 rounded mb-3' />
              <Skeleton className='w-full h-32 rounded ' />
              <Skeleton className='w-7 h-7 rounded-full absolute top-6 right-6 ' />
            </div>
            <div className='bg-violet-400 2xl:p-8 p-4 sm:w-1/2 relative'>
              <Skeleton className='w-1/3 h-12 rounded mb-3' />
              <Skeleton className='w-full h-32 rounded ' />
              <Skeleton className='w-7 h-7 rounded-full absolute top-6 right-6 ' />
            </div>
          </div>
        </div>
      ) : (
        <div >
          <p className='md:text-lg text-md font-semibold text-gray-900 my-3'>The Following addresses will be used in checkout page by default</p>
          <div className='lg:my-9 my-4 1xl:w-1/2 xl:w-2/3 flex sm:flex-row flex-col gap-6 '>
            <div className='bg-violet-400 2xl:p-8 p-4 sm:w-1/2 relative'>
              <h2 className='2xl:text-[26px] lg:text-[22px] text-[20px] text-gray-900 mb-3'>Shipping address</h2>
              <p className='2xl:text-lg text-md text-gray-900 2xl:leading-9 leading-7'>Cherry Blossom<br />
                9057 Vermont Road Cockeysville<br /> Fuquay MD 21030,<br />
                Australia</p>
              <button className='absolute top-6 right-6 group' onClick={e => { e.preventDefault(); setOpenGridList(1); }}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:stroke-violet-900 stroke-gray-900'>
                  <path d="M7 7.15527H6C5.46957 7.15527 4.96086 7.36599 4.58579 7.74106C4.21071 8.11613 4 8.62484 4 9.15527V18.1553C4 18.6857 4.21071 19.1944 4.58579 19.5695C4.96086 19.9446 5.46957 20.1553 6 20.1553H15C15.5304 20.1553 16.0391 19.9446 16.4142 19.5695C16.7893 19.1944 17 18.6857 17 18.1553V17.1553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 5.15538L19 8.15538M20.385 6.74038C20.7788 6.34653 21.0001 5.81236 21.0001 5.25538C21.0001 4.6984 20.7788 4.16423 20.385 3.77038C19.9912 3.37653 19.457 3.15527 18.9 3.15527C18.343 3.15527 17.8088 3.37653 17.415 3.77038L9 12.1554V15.1554H12L20.385 6.74038Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
            <div className='bg-violet-400 2xl:p-8 p-4 sm:w-1/2 relative'>
              <h2 className='2xl:text-[26px] lg:text-[22px] text-[20px] text-gray-900 mb-3'>Billing address</h2>
              <p className='2xl:text-lg text-md text-gray-900 2xl:leading-9 leading-7'>Cherry Blossom<br />
                9057 Vermont Road Cockeysville<br /> Fuquay MD 21030,<br />
                Australia</p>
              <button className='absolute top-6 right-6 group' onClick={e => { e.preventDefault(); setOpenGridList(2); }}>
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:stroke-violet-900 stroke-gray-900'>
                  <path d="M7 7.15527H6C5.46957 7.15527 4.96086 7.36599 4.58579 7.74106C4.21071 8.11613 4 8.62484 4 9.15527V18.1553C4 18.6857 4.21071 19.1944 4.58579 19.5695C4.96086 19.9446 5.46957 20.1553 6 20.1553H15C15.5304 20.1553 16.0391 19.9446 16.4142 19.5695C16.7893 19.1944 17 18.6857 17 18.1553V17.1553" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M16 5.15538L19 8.15538M20.385 6.74038C20.7788 6.34653 21.0001 5.81236 21.0001 5.25538C21.0001 4.6984 20.7788 4.16423 20.385 3.77038C19.9912 3.37653 19.457 3.15527 18.9 3.15527C18.343 3.15527 17.8088 3.37653 17.415 3.77038L9 12.1554V15.1554H12L20.385 6.74038Z" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
</div>
      <div className={openGridList === (1) ? "block bg-violet-400 xl:p-8 p-4" : "hidden"}>
        {isLoading ? (
          <form className='xl:w-[70%]'>
            <h3 className=' 2xl:text-[26px] lg:text-[24px] text-lg text-gray-900  pb-4 1xl:mb-8 mb-5 border-b border-gray-100/20'>Shipping Details</h3>
            <div className='billing-form'>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
               <Skeleton className='w-full h-14' />
               <Skeleton className='w-full h-14' />
              </div>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
              <Skeleton className='w-full h-14' />
               <Skeleton className='w-full h-14' />
              </div>
              <div className='mb-4'>
              <Skeleton className='w-full h-14' />
              </div>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
              <Skeleton className='w-full h-14' />
              <Skeleton className='w-full h-14' />
              </div>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
              <Skeleton className='w-full h-14' />
              <Skeleton className='w-full h-14' />
              </div>
            </div>

            <div className='mb-4'>
            <Skeleton className='w-full h-28' />
            </div>
            <button className='all-btn mt-2'>Save Change</button>
          </form>
        ) : (
          <form className='xl:w-[70%]'>
            <h3 className=' 2xl:text-[26px] lg:text-[24px] text-lg text-gray-900  pb-4 1xl:mb-8 mb-5 border-b border-gray-100/20'>Shipping Details</h3>
            <div className='billing-form'>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                <input type='text' placeholder='First name' className='block grow w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                <input type='text' placeholder='Last Name' className='block grow w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
              </div>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                <input type='text' placeholder='Company (optional)' className='block  grow w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                <Select radius='none'
                  placeholder="Country"
                  classNames={{
                    trigger: " text-lg h-auto px-4 2xl:py-3.5 py-3  text-gray-800 border border-gray-100/20 rounded-none shadow-none bg-white data-[hover=true]:bg-white",
                    listbox: " !w-full",
                    value: " text-md !text-gray-800 opacity-100  text-left" ,
                    base: "grow min-w-[49%]",
                    selectorIcon: "right-3 "
                  }}
                  popoverProps={{
                    classNames: {
                      base: " !w-full rounded-none bg-white",
                      content: "p-0 border-small border-divider rounded-none ",
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
                <input type='text' placeholder='Street address' className='block w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800  focus-visible:outline-none focus-visible:border-gray-100/40' required />
              </div>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                <input type='text' placeholder='Town / city' className='block grow w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                <Select radius='none'
                  placeholder="State"
                  classNames={{
                    trigger: " text-lg h-auto px-4 2xl:py-3.5 py-3  text-gray-800 border border-gray-100/20 rounded-none shadow-none bg-white data-[hover=true]:bg-white",
                    listbox: " !w-full",
                    value: " text-md !text-gray-800 opacity-100  text-left" ,
                    base: "grow min-w-[49%]",
                    selectorIcon: "right-3 "
                  }}
                  popoverProps={{
                    classNames: {
                      base: " !w-full rounded-none bg-white",
                      content: "p-0 border-small border-divider rounded-none ",
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
                <input type='text' placeholder='PIN Code' className='block grow w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                <input type='text' placeholder='Phone Number' className='block grow w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
              </div>
            </div>

            <div className='mb-4'>
              <textarea placeholder='Order notes... (optional)' className='bg-white block w-full border border-gray-100/20 rounded-none h-32 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800  focus-visible:outline-none focus-visible:border-gray-100/40' required />
            </div>
            <button className='all-btn mt-2' >Save Change</button>
          </form>
        )}

      </div>

      <div className={openGridList === (2) ? "block bg-violet-400 xl:p-8 p-4" : "hidden"}>
        {isLoading ? (
          <form className='xl:w-[70%]'>
            <h3 className=' 2xl:text-[26px] lg:text-[24px] text-lg text-gray-900  pb-4 1xl:mb-8 mb-5 border-b border-gray-100/20'>Billing Details</h3>
            <div className='billing-form'>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
               <Skeleton className='w-full h-14' />
               <Skeleton className='w-full h-14' />
              </div>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
              <Skeleton className='w-full h-14' />
               <Skeleton className='w-full h-14' />
              </div>
              <div className='mb-4'>
              <Skeleton className='w-full h-14' />
              </div>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
              <Skeleton className='w-full h-14' />
              <Skeleton className='w-full h-14' />
              </div>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
              <Skeleton className='w-full h-14' />
              <Skeleton className='w-full h-14' />
              </div>
            </div>

            <div className='mb-4'>
            <Skeleton className='w-full h-28' />
            </div>
            <button className='all-btn mt-2'>Save Change</button>
          </form>
        ) : (
          <form className='xl:w-[70%]'>
            <h3 className=' 2xl:text-[26px] lg:text-[24px] text-lg text-gray-900  pb-4 1xl:mb-8 mb-5 border-b border-gray-100/20'>Billing Details</h3>
            <div className='billing-form'>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                <input type='text' placeholder='First name' className='block grow w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                <input type='text' placeholder='Last Name' className='block grow w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
              </div>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                <input type='text' placeholder='Company (optional)' className='block  grow w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                <Select radius='none'
                  placeholder="Country"
                  classNames={{
                    trigger: " text-lg h-auto px-4 2xl:py-3.5 py-3  text-gray-800 border border-gray-100/20 rounded-none shadow-none bg-white data-[hover=true]:bg-white",
                      listbox: " !w-full",
                      value: " text-md !text-gray-800 opacity-100  text-left" ,
                      base: "grow min-w-[49%]",
                      selectorIcon: "right-3 "
                  }}
                  popoverProps={{
                    classNames: {
                      base: " !w-full rounded-none bg-white",
                      content: "p-0 border-small border-divider rounded-none ",
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
                <input type='text' placeholder='Street address' className='block w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800  focus-visible:outline-none focus-visible:border-gray-100/40' required />
              </div>
              <div className='mb-4 flex gap-4 items-stretch sm:flex-nowrap flex-wrap'>
                <input type='text' placeholder='Town / city' className='block grow w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                <Select radius='none'
                  placeholder="State"
                  classNames={{
                    trigger: " text-lg h-auto px-4 2xl:py-3.5 py-3  text-gray-800 border border-gray-100/20 rounded-none shadow-none bg-white data-[hover=true]:bg-white",
                    listbox: " !w-full",
                    value: " text-md !text-gray-800 opacity-100 text-left " ,
                    base: "grow min-w-[49%]",
                    selectorIcon: "right-3 "
                  }}
                  popoverProps={{
                    classNames: {
                      base: " !w-full rounded-none bg-white",
                      content: "p-0 border-small border-divider rounded-none ",
                    },
                  }}
                  listboxProps={{
                    itemClasses: {
                      title: [
                        "text-[16px] py-1",
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
                <input type='text' placeholder='PIN Code' className='block grow w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
                <input type='text' placeholder='Phone Number' className='block grow w-full border border-gray-100/20 rounded-none px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
              </div>
            </div>

            <div className='mb-4'>
              <textarea placeholder='Order notes... (optional)' className='bg-white block w-full border border-gray-100/20 rounded-none h-32 px-5 py-3 text-md text-gray-900 placeholder:text-gray-800  focus-visible:outline-none focus-visible:border-gray-100/40' required />
            </div>
            <button className='all-btn mt-2'>Save Change</button>
          </form>
        )}

      </div>
    </>

  )
}

export default Account_address
