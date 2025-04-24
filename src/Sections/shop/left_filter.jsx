import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
          <div className='mb-6 xl:mb-8 2xl:mb-12'>
            <h2 className=' mb-3 2xl:mb-4 block 2xl:text-xl lg:text-[20px] xl:text-[22px] text-[18px] font-nabi leading-tight text-gray-800'>Search</h2>
            <Skeleton className='w-full h-14 rounded' />
          </div>

          <div className='mb-6 xl:mb-8 2xl:mb-12'>
            <h2 className=' mb-3 2xl:mb-4 block 2xl:text-xl lg:text-[20px] xl:text-[22px] text-[18px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Categories</h2>
            <ul className='xl:px-6 px-4 xl:py-2 py-1 border border-gray-100/20 mt-7'>
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

          <div className='mb-6 xl:mb-8 2xl:mb-12'>
            <h2 className=' mb-3 2xl:mb-4 block 2xl:text-xl lg:text-[20px] xl:text-[22px] text-[18px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Filter By Price</h2>
            <div className='flex gap-3 items-center justify-start w-full mt-6'>
              <Skeleton className='w-1/2 h-12 rounded' />
              <Skeleton className='w-1/2 h-12 rounded' />
            </div>
            <div className='mt-3'>
              <Skeleton className='w-full h-4 rounded' />
              <div className="text-gray-900 font-medium text-md flex items-center justify-between mt-2">
                <Skeleton className='w-16 h-6 rounded' />
                <Skeleton className='w-16 h-6 rounded' />
              </div>
            </div>
          </div>

          <div className='mb-6 xl:mb-8 2xl:mb-12'>
            <h2 className=' mb-3 2xl:mb-4 block 2xl:text-xl lg:text-[20px] xl:text-[22px] text-[18px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Filter By Carat</h2>
            <div className='flex gap-3 items-center justify-start w-full mt-6'>
              <Skeleton className='w-1/2 h-12 rounded' />
              <Skeleton className='w-1/2 h-12 rounded' />
            </div>
            <div className='mt-3'>
              <Skeleton className='w-full h-4 rounded' />
              <div className="text-gray-900 font-medium text-md flex items-center justify-between mt-2">
                <Skeleton className='w-16 h-6 rounded' />
                <Skeleton className='w-16 h-6 rounded' />
              </div>
            </div>
          </div>

          <div className='mb-6 xl:mb-8 2xl:mb-12'>
            <h2 className=' mb-3 2xl:mb-4 block 2xl:text-xl lg:text-[20px] xl:text-[22px] text-[18px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Colors</h2>
            <ul className='mt-7 flex items-center flex-wrap gap-4'>
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

          <div className='mb-6 xl:mb-8 2xl:mb-12'>
            <h2 className=' mb-3 2xl:mb-4 block 2xl:text-xl lg:text-[20px] xl:text-[22px] text-[18px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Tags</h2>
            <ul className='mt-7 flex items-center flex-wrap gap-2'>
              <li className='' > <Skeleton className='w-24 h-11 rounded' /></li>
              <li className='' > <Skeleton className='w-24 h-11 rounded' /></li>
              <li className='' > <Skeleton className='w-24 h-11 rounded' /></li>
              <li className='' > <Skeleton className='w-24 h-11 rounded' /></li>
              <li className='' > <Skeleton className='w-24 h-11 rounded' /></li>
              <li className='' > <Skeleton className='w-24 h-11 rounded' /></li>
              <li className='' > <Skeleton className='w-24 h-11 rounded' /></li>
            </ul>
          </div>
        </div>
      ) : (
        <>
          {initialValues.length > 0 && initialValues[0].filter.map((child_items, index) => {
            return (
              <React.Fragment key={index}>
                <div className='mb-6 xl:mb-8 2xl:mb-12'>
                  <h2 className=' mb-3 2xl:mb-4 block 2xl:text-xl lg:text-[20px] xl:text-[22px] text-[18px] font-nabi leading-tight text-gray-800'>Search</h2>
                  <form id="searchCategory" className="flex items-center justify-between 2xl:p-4 py-3 px-4 border border-gray-400/20  bg-white transition-all ">
                    <div className="searchbar flex items-center grow">
                      <input type="text" placeholder='Search here...' className="focus:outline-none text-md 2xl:text-lg  placeholder:text-[#2F2F2F] grow text-gray-800 font-[500] w-full bg-transparent border-none rounded-none" />
                      <button type='submit'><img src='https://webby-production.s3.amazonaws.com/Starry-Heavens/Header/search.svg' width={26} height={26} alt='search' title="search" className="2xl:w-6 w-5 lg:mr-0 ltr:mr-2 rtl:ml-2" /></button>
                    </div>
                  </form>
                </div>

                <div className='mb-6 xl:mb-8 2xl:mb-12'>
                  <h2 className=' mb-3 2xl:mb-4 block 2xl:text-xl lg:text-[20px] xl:text-[22px] text-[18px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Categories</h2>
                  <ul className='2xl:px-6 px-4 2xl:py-2 py-1 border border-gray-100/20 2xl:mt-7 mt-4'>
                    {child_items.categories && child_items.categories.map((items, index) => {
                      return (
                        <li className='flex items-center justify-between gap-2 my-4' key={index}>
                          <Link href={items.link} className='capitalize text-md 2xl:text-lg text-gray-900 hover:text-violet-900'>{items.title}</Link>
                          <span className='capitalize text-md 2xl:text-lg text-gray-500'>({items.count})</span>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className='mb-6 xl:mb-8 2xl:mb-12'>
                  <h2 className=' mb-3 2xl:mb-4 block 2xl:text-xl lg:text-[20px] xl:text-[22px] text-[18px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Filter By Price</h2>
                  <div className='flex gap-3 items-center justify-start w-full mt-6'>
                    <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-0 rtl:pr-0 ltr:pr-1.5 rtl:pl-1.5 ltr:mr-1 rtl:ml-1 ltr:border-r rtl:border-l border-gray-100/20 lg:text-md text-sm text-gray-900'>From</span>}
                      classNames={{
                        input: ["bg-transparent !text-gray-900",],
                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10 group-data-[focus=true]:bg-white  group-data-[hover=true]:bg-white max-w-[180px] lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                        base: ["w-auto"]
                      }}
                    />
                    <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-0 rtl:pr-0 ltr:pr-1.5 rtl:pl-1.5 ltr:mr-1 rtl:ml-1 ltr:border-r rtl:border-l border-gray-100/20 lg:text-md text-sm text-gray-900'>To</span>}
                      classNames={{
                        input: ["bg-transparent !text-gray-900",],
                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10 group-data-[focus=true]:bg-white  group-data-[hover=true]:bg-white max-w-[180px] lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                        base: ["w-auto"]
                      }}
                    />
                  </div>
                  <div className='mt-3'>
                    <Slider
                      step={50}
                      minValue={99}
                      maxValue={8000}
                      value={value}
                      onChange={setValue}
                      defaultValue={[99, 2000]}
                      formatOptions={{ style: "currency", currency: "USD" }}
                      classNames={{
                        base: "w-full",
                        filler: "bg-gradient-to-r from-violet-900 to-violet-900",
                        labelWrapper: "mb-2",
                        label: "font-medium text-default-700 text-medium",
                        value: "font-medium text-default-500 text-small",
                        track: "bg-violet-400 h-1.5 !border-0 mx-1.5",
                        thumb: [
                          "transition-size",
                          "bg-white after:bg-violet-900 after:border-violet-400",
                          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                          "data-[dragging=true]:w-3.5 data-[dragging=true]:h-3.5 data-[dragging=true]:after:h-3.5 data-[dragging=true]:after:w-3.5 before:w-3.5 before:h-3.5 after:w-3.5 after:h-3.5 w-3.5 h-3.5"
                        ],
                        step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
                      }}
                    />
                    <p className="text-gray-900 font-medium text-md flex items-center justify-between mt-2">
                      <span>{Array.isArray(value) && `$${value[0]}.00`}</span>
                      <span>{Array.isArray(value) && `$${value[1]}.00`}</span>
                    </p>
                  </div>
                </div>

                <div className='mb-6 xl:mb-8 2xl:mb-12'>
                  <h2 className=' mb-3 2xl:mb-4 block 2xl:text-xl lg:text-[20px] xl:text-[22px] text-[18px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Filter By Carat</h2>
                  <div className='flex gap-3 items-center justify-start w-full mt-6'>
                    <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-0 rtl:pr-0 ltr:pr-1.5 rtl:pl-1.5 ltr:mr-1 rtl:ml-1 ltr:border-r rtl:border-l border-gray-100/20 lg:text-md text-sm text-gray-900'>From</span>}
                      classNames={{
                        input: ["bg-transparent !text-gray-900",],
                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10 group-data-[focus=true]:bg-white  group-data-[hover=true]:bg-white max-w-[180px] lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                        base: ["w-auto"]
                      }}
                    />
                    <Input size='lg' type="text" startContent={<span className='lg:px-2 ltr:pl-0 rtl:pr-0 ltr:pr-1.5 rtl:pl-1.5 ltr:mr-1 rtl:ml-1 ltr:border-r rtl:border-l border-gray-100/20 lg:text-md text-sm text-gray-900'>To</span>}
                      classNames={{
                        input: ["bg-transparent !text-gray-900",],
                        inputWrapper: "bg-white rounded-none shadow-none border border-gray-200/10 group-data-[focus=true]:bg-white  group-data-[hover=true]:bg-white max-w-[180px] lg:!h-unit-12 lg:!min-h-unit-12 !h-unit-10 !min-h-unit-10",
                        base: ["w-auto"]
                      }}
                    />
                  </div>
                  <div className='mt-3'>
                    <Slider
                      step={0.10}
                      minValue={0.30}
                      maxValue={8}
                      value={valueCarat}
                      onChange={setValueCarat}
                      defaultValue={[0.30, 1.50]}
                      formatOptions={{ style: "currency", currency: "USD" }}
                      classNames={{
                        base: "w-full",
                        filler: "bg-gradient-to-r from-violet-900 to-violet-900",
                        labelWrapper: "mb-2",
                        label: "font-medium text-default-700 text-medium",
                        value: "font-medium text-default-500 text-small",
                        track: "bg-violet-400 h-1.5 !border-0 mx-1.5",
                        thumb: [
                          "transition-size",
                          "bg-violet-400 after:bg-violet-900 after:border-violet-400",
                          "data-[dragging=true]:shadow-lg data-[dragging=true]:shadow-black/20",
                          "data-[dragging=true]:w-3.5 data-[dragging=true]:h-3.5 data-[dragging=true]:after:h-3.5 data-[dragging=true]:after:w-3.5 before:w-3.5 before:h-3.5 after:w-3.5 after:h-3.5 w-3.5 h-3.5"
                        ],
                        step: "data-[in-range=true]:bg-black/30 dark:data-[in-range=true]:bg-white/50"
                      }}
                    />
                    <p className="text-gray-900 font-medium text-md flex items-center justify-between mt-2">
                      <span>{Array.isArray(value) && `${valueCarat[0]} Down`}</span>
                      <span>{Array.isArray(value) && `${valueCarat[1]}`}</span>
                    </p>
                  </div>
                </div>

                <div className='mb-6 xl:mb-8 2xl:mb-12'>
                  <h2 className=' mb-3 2xl:mb-4 block 2xl:text-xl lg:text-[20px] xl:text-[22px] text-[18px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Colors</h2>
                  <ul className='mt-7 flex items-center flex-wrap gap-4'>
                    {child_items.colors && child_items.colors.map((items, index) => {
                      return (
                        <li className='' key={index}>
                          <Link href={items.slug}><span className="2xl:w-8 w-7 inline-block text-center outCircle"><img src={items.icon} width={24} height={24} alt={items.alt} title={items.title} className="m-auto inline-block rounded-full outline outline-offset-[2px] outline-1 outline-gray-800 hover:outline-violet-900" /></span></Link>
                        </li>
                      )
                    })}
                  </ul>
                </div>

                <div className='mb-6 xl:mb-8 2xl:mb-12'>
                  <h2 className=' mb-3 2xl:mb-4 block 2xl:text-xl lg:text-[20px] xl:text-[22px] text-[18px] font-nabi leading-tight text-gray-800 lg:pb-4 pb-3 border-b border-gray-100/20'>Tags</h2>
                  <ul className='mt-7 flex items-center flex-wrap gap-2'>
                    {child_items.tags && child_items.tags.map((items, index) => {
                      return (
                        <li className='' key={index}>
                          <Link href={items.link} className='text-md text-gray-900 hover:text-white capitalize 2xl:px-6 px-4 2xl:py-2.5 py-2 bg-white hover:bg-violet-900 border border-gray-400/20 block'>{items.title}</Link>
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
