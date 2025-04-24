import React, { useEffect, useState } from 'react';
import { Checkbox, CheckboxGroup, Skeleton, cn } from '@heroui/react'
import { Breadcrumb_pages, useFetchData } from './comman';
import Header from './components/Header'; 
import { Link } from 'react-router-dom';
import Footer from './components/Footer';

const Login = ({ initialValues }) => {

  const [login_error, setlogin_error] = useState({});

  const breadcrumbItems = [
    { title: 'Log In', url: ``, type: false },
  ];

  /*  ============= Skeletone_loader ============   */
  const [isLoading, setIsLoading] = React.useState(true)

  const login_save = (event) => {
    event.preventDefault()

    const formElement = document.querySelector('#login');
    const formData = new FormData(formElement);
    const formDataJSON = Object.fromEntries(formData);

    let error = {}

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
      setlogin_error(error);
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
            <h1 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>Log In</h1>
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
              <h1 className='text-gray-800 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center'>Log In</h1>
              <form id='login' onSubmit={login_save}>
                <div className='mb-4'>
                  <input type='email' name='email_address' placeholder='Email' className='block w-full rounded-none border border-gray-100/20 px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' />
                  {login_error.email_address && <span className="text-red-500 text-sm">{login_error.email_address}</span>}
                </div>
                <div className='mb-4'>
                  <input type='password' name='password' placeholder='Password' className='block w-full rounded-none border border-gray-100/20 px-5 py-3 bg-white text-md text-gray-900 placeholder:text-gray-800 focus-visible:outline-none focus-visible:border-gray-100/40' />
                  {login_error.password && <span className="text-red-500 text-sm">{login_error.password}</span>}
                </div>
                <div className='my-6 flex items-center justify-between gap-2'>
                  <CheckboxGroup defaultValue={["standard-shipping"]}>
                    <Checkbox value="shipping"
                      classNames={{
                        base: cn(
                          "mx-0 my-0.5 p-0 text-gray-900 text-lg md:gap-3 gap-2"
                        ),
                        wrapper: cn(
                          "group-data-[selected=true]:bg-violet-900 focus:outline-0 m-0 border-[1.5px] border-black rounded md:w-[18px] md:h-[18px] w-[16px] h-[16px] group-data-[selected=true]:border-violet-900  group-data-[selected=true]:before:bg-violet-900 after:bg-violet-900 before:!border-0 after:!border-0 before:!rounded after:!rounded outline-0"
                        ),
                        label: cn(
                          "md:text-md text-[15px] text-gray-900"
                        )
                      }} > Remember me ? </Checkbox>
                  </CheckboxGroup>

                  <Link className='text-gray-800  md:text-md text-[15px] capitalize underline hover:text-violet-900 hover:opacity-100' to='/forgot-password'>forgot password?</Link>
                </div>

                <button className='w-full all-btn'>Log in</button>
              </form>
            </div>
          </>
        )}
      </>

      <Footer />
    </>
  )
}

export default Login
