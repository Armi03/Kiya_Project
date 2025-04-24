import React, { useEffect, useState } from 'react'
import {  Skeleton } from '@heroui/react'
import { Link } from 'react-router-dom'

const Account_Profile = ({ initialValues }) => {

  const [image, setImage] = useState('https://webby-production.s3.amazonaws.com/Starry-Heavens/other/img-upload.png')

  const onImageChange = (event) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]));
    }
  }

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (
    <>
      {isLoading ? (
        <div className='bg-violet-400 xl:p-8 p-4 '>
          <div className='flex items-center xl:gap-7 gap-4 min-[400px]:flex-nowrap flex-wrap'>
            <Skeleton className='lg:w-24 lg:h-24 w-20 h-20 rounded-full' />
            <div>
              <Skeleton className='lg:w-[200px] w-[150px] h-10 ' />
              <Skeleton className='w-full h-5 lg:mt-4 mt-2 ' />
            </div>
          </div>
          <form className='sm:mt-8 mt-4 xl:w-[70%]'>
            <div className='my-4 flex items-center md:flex-row flex-col gap-4'>
              <Skeleton className='w-full h-12' />
              <Skeleton className='w-full h-12' />
            </div>
            <div className='my-4'>
              <Skeleton className='w-full h-12' />
            </div>
            <div className='my-4'>
              <Skeleton className='w-full h-12' />
            </div>
            <div className='my-4'>
              <h2 className='1xl:text-[24px] lg:text-[20px] text-lg text-gray-900 mb-4'>New Password</h2>
              <Skeleton className='w-full h-12' />
            </div>
            <div className='my-4'>
              <Skeleton className='w-full h-12' />
            </div>
            <div className='my-4'>
              <Skeleton className='w-full h-12' />
            </div>
            <Skeleton className='w-48 h-14 sm:mt-4 mt-2' />
          </form>
        </div>
      ) : (
        <div className='bg-violet-400 xl:p-8 p-4 '>
          <div className='flex items-center xl:gap-7 gap-4 min-[400px]:flex-nowrap flex-wrap'>
            <img alt="preview image" src={image} className='lg:w-24 lg:h-24 w-20 h-20 object-cover rounded-full' width={100} height={100} />
            <div>
              <input type="file" onChange={onImageChange} className="before:content-['Upload_Profile_Picture'] before:block lg:before:text-md before:text-sm text-[0] file:p-0 file:border-0 lg:py-2.5 py-2 lg:px-4 px-2.5 
               bg-violet-900 text-white hover:bg-gray-900 cursor-pointer lg:w-[200px] w-[160px] before:text-center rounded-none min-w-max" />
              <p className='lg:text-[15px] text-sm text-gray-900 lg:mt-4 mt-2'>But I must explain to you how all this mistaken idea of denouncing pleasure.</p>
            </div>
          </div>
          <form className='sm:mt-8 mt-4 xl:w-[70%]'>
            <div className='my-4 flex items-center md:flex-row flex-col gap-4'>
              <input type='text' placeholder='First name' className='block w-full border border-gray-100/20 px-5 py-3 rounded-none bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
              <input type='text' placeholder='Last name' className='block w-full border border-gray-100/20 px-5 py-3 rounded-none bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
            </div>
            <div className='my-4'>
              <input type='text' placeholder='Display name ' className='block w-full border border-gray-100/20 px-5 py-3 rounded-none bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
            </div>
            <div className='my-4'>
              <input type='email' placeholder='Email address * ' className='block w-full border border-gray-100/20 px-5 py-3 rounded-none bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
            </div>
            <div className='my-4'>
              <h2 className='1xl:text-[24px] lg:text-[20px] text-lg text-gray-900 mb-4'>New Password</h2>
              <input type='password' placeholder='Current Password ' className='block w-full border border-gray-100/20 px-5 py-3 rounded-none bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
            </div>
            <div className='my-4'>
              <input type='password' placeholder='New Password ' className='block w-full border border-gray-100/20 px-5 py-3 rounded-none bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
            </div>
            <div className='my-4'>
              <input type='password' placeholder='Confirm Password ' className='block w-full border border-gray-100/20 px-5 py-3 rounded-none bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' required />
            </div>
            <button className='all-btn sm:mt-4 mt-2'>Save Change</button>
          </form>
        </div>
      )}
    </>

  )
}

export default Account_Profile
