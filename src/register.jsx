import React, { useEffect, useState } from 'react';
import { Checkbox, CheckboxGroup, Skeleton, cn } from '@heroui/react'
import { Breadcrumb_pages, useFetchData } from './comman';
import Header from './components/Header'; 
import { Link } from 'react-router-dom';
import Footer from './components/Footer';


const Register = ({ initialValues }) => {

  const breadcrumbItems = [
    { title: 'Register', url: ``, type: false },
  ];

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)
  const [register_error, setregister_error] = useState({});

  const register_save = (event) => {
    event.preventDefault()

    const formElement = document.querySelector('#register');
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);

    let error = {}

    if (!formDataJSON.name) {
      error.name = 'Name is require'
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formDataJSON.email_address || formDataJSON.email_address.trim() === '') {
      error.email_address = 'Email Address is required';
    } else if (!emailRegex.test(formDataJSON.email_address)) {
      error.email_address = 'Invalid email address';
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!formDataJSON.password || formDataJSON.password.trim() === '') {
      error.password = 'Password is required';
    } else {
      if (!passwordRegex.test(formDataJSON.password)) {
        error.password = 'Invalid password';
      }
    }


    if (Object.keys(error).length > 0) {
      setregister_error(error);
    } else {
      console.log(formDataJSON)
    }
  }

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (
    <>
      <Header />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
      <>
        {isLoading ? (
          <div className='relative container 2xl:py-24 lg:py-16 py-12 max-w-[550px]'>
            <h1 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>register</h1>
            <form>
              <div className='mb-4'>
                <Skeleton className='w-full h-12' />
              </div>
              <div className='mb-4'>
                <Skeleton className='w-full h-12' />
              </div>
              <div className='my-6 flex items-center justify-between gap-2'>
                <Skeleton className='w-32 h-8' />
                <Skeleton className='w-32 h-8' />
              </div>

              <Skeleton className='w-full h-12' />
            </form>
          </div>
        ) : (
          <>
            <div className='relative container 2xl:py-24 lg:py-16 py-12 max-w-[550px]'>
              <h1 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>register</h1>
              <form id='register' onSubmit={register_save}>
                <div className='mb-4'>
                  <input type='text' name='name' placeholder='Your Name' className='block w-full rounded-none border border-gray-100/20 px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' />
                  {register_error.name && <span className="text-red-500 text-sm">{register_error.name}</span>}
                </div>
                <div className='mb-4'>
                  <input type='email' name='email_address' placeholder='Email' className='block w-full rounded-none border border-gray-100/20 px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' />
                  {register_error.email_address && <span className="text-red-500 text-sm">{register_error.email_address}</span>}
                </div>
                <div className='mb-4'>
                  <input type='password' name='password' placeholder='Password' className='block w-full rounded-none border border-gray-100/20 px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' />
                  {register_error.password && <span className="text-red-500 text-sm">{register_error.password}</span>}
                </div>
                <div className='my-6 flex items-center justify-between gap-2'>
                  <Link className='text-gray-800  md:text-md text-[15px] capitalize underline hover:text-violet-900 hover:opacity-100' to='/login'>Back to Login?</Link>
                  <Link className='text-gray-800  md:text-md text-[15px] capitalize underline hover:text-violet-900 hover:opacity-100' to='/forgot-password'>forgot password?</Link>
                </div>

                <button type='submit' className='w-full all-btn'>Register</button>
              </form>
            </div>
          </>
        )}
      </>

      <Footer />
    </>
  )
}

export default Register
