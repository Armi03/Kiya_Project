import React, { useEffect, useState } from 'react'
import {  Skeleton } from '@heroui/react'

const Account_Orders = ({ initialValues }) => {
  /*  ============= Skeletone_loader ============   */
  const [openGridList, setOpenGridList] = React.useState();
  const [isLoading, setIsLoading] = React.useState(true)
  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, [])
  return (
    <>
      <div className={openGridList ? "hidden" : "block"}>
        {isLoading ? (
          <table className='w-full border  border-violet-400 2xl:table-fixed'>
          <tbody className=''>
            <tr>
              <th className='p-3 bg-violet-400 text-center sm:table-cell hidden '><Skeleton className='w-14 h-6 rounded' /></th>
              <th className='p-3 bg-violet-400 text-center sm:table-cell hidden'><Skeleton className='w-14 h-6 rounded' /></th>
              <th className='p-3 bg-violet-400 text-center sm:table-cell hidden'><Skeleton className='w-14 h-6 rounded' /></th>
              <th className='p-3 bg-violet-400 text-center sm:table-cell hidden'><Skeleton className='w-14 h-6 rounded' /></th>
              <th className='p-3 bg-violet-400 text-left sm:table-cell hidden 2xl:w-auto 1xl:w-[25%] lg:w-[30%]'><Skeleton className='w-14 h-6 rounded' /></th>
            </tr>
            <tr className='sm:table-row block '>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Order"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-14 h-6 rounded' />
              </td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Date"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-32 h-6 rounded' />
              </td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Status"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <Skeleton className='w-16 h-6 rounded' /></td>
              <td className='p-3 text-center  sm:table-cell flex gap-3 items-center justify-between before:content-["Total"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-32 h-6 rounded' />
              </td>
              <td className='p-3 sm:table-cell flex gap-3 items-center justify-between before:content-["Action"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-16 h-6 rounded' />
              </td>
            </tr>
            <tr className='sm:table-row block '>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Order"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-14 h-6 rounded' />
              </td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Date"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-32 h-6 rounded' />
              </td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Status"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <Skeleton className='w-16 h-6 rounded' /></td>
              <td className='p-3 text-center  sm:table-cell flex gap-3 items-center justify-between before:content-["Total"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-32 h-6 rounded' />
              </td>
              <td className='p-3 sm:table-cell flex gap-3 items-center justify-between before:content-["Action"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-16 h-6 rounded' />
              </td>
            </tr>
            <tr className='sm:table-row block '>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Order"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-14 h-6 rounded' />
              </td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Date"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-32 h-6 rounded' />
              </td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Status"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <Skeleton className='w-16 h-6 rounded' /></td>
              <td className='p-3 text-center  sm:table-cell flex gap-3 items-center justify-between before:content-["Total"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-32 h-6 rounded' />
              </td>
              <td className='p-3 sm:table-cell flex gap-3 items-center justify-between before:content-["Action"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-16 h-6 rounded' />
              </td>
            </tr>
            <tr className='sm:table-row block '>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Order"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-14 h-6 rounded' />
              </td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Date"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-32 h-6 rounded' />
              </td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Status"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <Skeleton className='w-16 h-6 rounded' /></td>
              <td className='p-3 text-center  sm:table-cell flex gap-3 items-center justify-between before:content-["Total"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-32 h-6 rounded' />
              </td>
              <td className='p-3 sm:table-cell flex gap-3 items-center justify-between before:content-["Action"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
              <Skeleton className='w-16 h-6 rounded' />
              </td>
            </tr>
    
          </tbody>
        </table>
        ) : (
          <table className='w-full border  border-violet-400 2xl:table-fixed'>
          <tbody className=''>
            <tr>
              <th className='lg:text-lg text-md text-gray-900 font-semibold p-3 bg-violet-400 text-center sm:table-cell hidden'>Order</th>
              <th className='lg:text-lg text-md text-gray-900 font-semibold p-3 bg-violet-400 text-center sm:table-cell hidden'>Date</th>
              <th className='lg:text-lg text-md text-gray-900 font-semibold p-3 bg-violet-400 text-center sm:table-cell hidden'>Status</th>
              <th className='lg:text-lg text-md text-gray-900 font-semibold p-3 bg-violet-400 text-center sm:table-cell hidden'>Total</th>
              <th className='lg:text-lg text-md text-gray-900 font-semibold p-3 bg-violet-400 text-left sm:table-cell hidden 2xl:w-auto 1xl:w-[25%] lg:w-[30%]'>Action</th>
            </tr>
            <tr className='sm:table-row block '>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Order"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>#507</td>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Date"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>20 oct, 2023</td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Status"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <span className='text-[#4CC39A] bg-[#E9F8F4] border border-[#4CC39A] px-3 py-1 rounded text-sm inline-block'>Complated</span></td>
              <td className='p-3 text-center text-md text-gray-800  sm:table-cell flex gap-3 items-center justify-between before:content-["Total"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>$100.00 for 1 items</td>
              <td className='p-3 sm:table-cell flex gap-3 items-center justify-between before:content-["Action"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <div className='flex items-center gap-2'>
                  <button  onClick={e => { e.preventDefault(); setOpenGridList(1); }} className='py-1 md:px-4 px-2.5 md:text-[15px] text-sm bg-violet-900 text-white hover:bg-gray-900 hover:opacity-100 font-normal'>View</button>
                </div>
              </td>
            </tr>
            <tr className='sm:table-row block '>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Order"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>#449</td>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Date"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>09 Sep, 2023</td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Status"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <span className='text-[#E9533C] bg-[#FCEDEB] border border-[#E9533C] px-3 py-1 rounded text-sm inline-block'>Canceled</span></td>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Total"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>$280.00 for 1 items</td>
              <td className='p-3 sm:table-cell flex gap-3 items-center justify-between before:content-["Action"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <div className='flex items-center gap-2'>
                  <button className='py-1 md:px-4 px-2.5 md:text-[15px] text-sm bg-violet-900 text-white hover:bg-gray-900 hover:opacity-100 font-normal' >Pay</button>
                  <button onClick={e => { e.preventDefault(); setOpenGridList(1); }} className='py-1 md:px-4 px-2.5 md:text-[15px] text-sm bg-violet-900 text-white hover:bg-gray-900 hover:opacity-100 font-normal' >View</button>
                  <button className='py-1 md:px-4 px-2.5 md:text-[15px] text-sm bg-violet-900 text-white hover:bg-gray-900 hover:opacity-100 font-normal' >Cancel</button>
                </div>
              </td>
            </tr>
            <tr className='sm:table-row block '>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Order"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>#622</td>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Date"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>16 Jan, 2023</td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Status"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <span className='text-[#53BDF6] bg-[#ECF8FC] border border-[#53BDF6] px-3 py-1 rounded text-sm inline-block'>On Hold</span></td>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Total"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>$598.00 for 2 items</td>
              <td className='p-3 sm:table-cell flex gap-3 items-center justify-between before:content-["Action"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <div className='flex items-center gap-2'>
                  <button onClick={e => { e.preventDefault(); setOpenGridList(1); }} className='py-1 md:px-4 px-2.5 md:text-[15px] text-sm bg-violet-900 text-white hover:bg-gray-900 hover:opacity-100 font-normal'>View</button>
                </div>
              </td>
            </tr>
            <tr className='sm:table-row block '>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Order"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>#500</td>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Date"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>07 Mar, 2023</td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Status"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <span className='text-[#FACB6A] bg-[#FEF8CE] border border-[#FACB6A] px-3 py-1 rounded text-sm inline-block'>Processing</span></td>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Total"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>$820.00 for 3 items</td>
              <td className='p-3 sm:table-cell flex gap-3 items-center justify-between before:content-["Action"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <div className='flex items-center gap-2'>
                  <button className='py-1 md:px-4 px-2.5 md:text-[15px] text-sm bg-violet-900 text-white hover:bg-gray-900 hover:opacity-100 font-normal'>Pay</button>
                  <button onClick={e => { e.preventDefault(); setOpenGridList(1); }} className='py-1 md:px-4 px-2.5 md:text-[15px] text-sm bg-violet-900 text-white hover:bg-gray-900 hover:opacity-100 font-normal'>View</button>
                </div>
              </td>
            </tr>
            <tr className='sm:table-row block '>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Order"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>#789</td>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Date"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>29 APR, 2023</td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Status"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <span className='text-[#845EE4] bg-[#F2EEFC] border border-[#845EE4] px-3 py-1 rounded text-sm inline-block'>Failed</span></td>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Total"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>$150.00 for 1 items</td>
              <td className='p-3 sm:table-cell flex gap-3 items-center justify-between before:content-["Action"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <div className='flex items-center gap-2'>
                  <button onClick={e => { e.preventDefault(); setOpenGridList(1); }} className='py-1 md:px-4 px-2.5 md:text-[15px] text-sm bg-violet-900 text-white hover:bg-gray-900 hover:opacity-100 font-normal'>View</button>
                </div>
              </td>
            </tr>
            <tr className='sm:table-row block '>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Order"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>#540</td>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Date"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>21 oct, 2023</td>
              <td className='p-3 text-center sm:table-cell flex gap-3 items-center justify-between before:content-["Status"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <span className='text-[#4CC39A] bg-[#E9F8F4] border border-[#4CC39A] px-3 py-1 rounded text-sm inline-block'>Complated</span></td>
              <td className='p-3 text-center text-md text-gray-800 sm:table-cell flex gap-3 items-center justify-between before:content-["Total"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>$90.00 for 1 items</td>
              <td className='p-3 sm:table-cell flex gap-3 items-center justify-between before:content-["Action"] sm:before:hidden before:text-sm before:block before:uppercase before:font-semibold border-b md:border-b-0 border-gray-100/10'>
                <div className='flex items-center gap-2'>
                  <button onClick={e => { e.preventDefault(); setOpenGridList(1); }} className='py-1 md:px-4 px-2.5 md:text-[15px] text-sm bg-violet-900 text-white hover:bg-gray-900 hover:opacity-100 font-normal' >View</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        )}
        
        </div>


        <div  className={openGridList ? "block" : "hidden"}>
          {isLoading ? (
            <div className='w-full'>
              <Skeleton className='w-32 h-7 mb-4 rounded' />
              <Skeleton className='w-full h-7 mb-4 rounded' />
              <Skeleton className='w-full h-7 mb-4 rounded' />
              <Skeleton className='w-full h-7 mb-4 rounded' />
              <Skeleton className='w-full h-7 mb-4 rounded' />
              <table className='border border-gray-100/20 lg:my-9 my-4 w-full'>
                <tbody>
                  <tr>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-b border-gray-100/20'> <Skeleton className='w-32 h-7 mb-4 rounded' /> </td>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-b border-gray-100/20 border-l'> <Skeleton className='w-32 h-7 mb-4 rounded' /></td>
                  </tr>
                  <tr>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900'> <Skeleton className='w-32 h-7 mb-4 rounded' /></td>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-gray-100/20 border-l'><Skeleton className='w-32 h-7 mb-4 rounded' /></td>
                  </tr>
                  <tr>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900'><Skeleton className='w-32 h-7 mb-4 rounded' /></td>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-gray-100/20 border-l'><Skeleton className='w-32 h-7 mb-4 rounded' /></td>
                  </tr>
                  <tr>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-b border-gray-100/20'><Skeleton className='w-32 h-7 mb-4 rounded' /></td>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-b border-gray-100/20 border-l'><Skeleton className='w-32 h-7 mb-4 rounded' /> </td>
                  </tr>
                  <tr>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900'><Skeleton className='w-32 h-7 mb-4 rounded' /></td>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-gray-100/20 border-l'><Skeleton className='w-32 h-7 mb-4 rounded' /></td>
                  </tr>
                  <tr>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900'><Skeleton className='w-32 h-7 mb-4 rounded' /></td>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-gray-100/20 border-l'>  <Skeleton className='w-32 h-7 mb-4 rounded' /></td>
                  </tr>
                </tbody>
              </table>
              <div className='lg:my-9 my-4 xl:w-1/2 flex sm:flex-row flex-col gap-6 '>
                <div className='bg-violet-400 lg:p-8 p-4 sm:w-1/2'>
                  <Skeleton className='w-full h-9 mb-3 rounded' />
                  <Skeleton className='w-full h-36 rounded' />
                </div>
                <div className='bg-violet-400 lg:p-8 p-4 sm:w-1/2'>
                  <Skeleton className='w-full h-9 mb-3 rounded' />
                  <Skeleton className='w-full h-36 rounded' />
                </div>
              </div>
              <Skeleton className='w-44 h-16 ' />
            </div>
          ) : (
            <div className='w-full'>
              <p className='xl:text-[20px] text-lg text-gray-900 sm:mb-4 mb-3'>Order #507</p>
              <p className='md:text-lg text-md text-gray-900 sm:mb-4 mb-3 font-semibold'>Order #507 was placed on 20 oct, 2023 and is currently completed.</p>
              <p className='md:text-lg text-md text-gray-900 sm:mb-4 mb-3 mt-6 '>Order Details</p>
              <p className='md:text-lg text-md text-gray-900 sm:mb-4 mb-3 '>Your Order has been Picked up by Europe Carrier on 20 oct, 2023. your track code is 99045523</p>
              <table className='border border-gray-100/20 lg:my-9 my-4 w-full'>
                <tbody>
                  <tr>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-b border-gray-100/20'>Product</td>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-b border-gray-100/20 border-l'>Price</td>
                  </tr>
                  <tr>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900'>Diamonds Earring</td>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-gray-100/20 border-l'>$589.00</td>
                  </tr>
                  <tr>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900'>Wedding Ring</td>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-gray-100/20 border-l'>$536.00</td>
                  </tr>
                  <tr>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-b border-gray-100/20'>Subtotal</td>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-b border-gray-100/20 border-l'>$1125.00</td>
                  </tr>
                  <tr>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900'>Payment Method</td>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-gray-100/20 border-l'>Credit / Debit card</td>
                  </tr>
                  <tr>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900'>Total</td>
                    <td className='lg:py-4 py-2.5 lg:px-9 px-2.5 md:text-lg text-md text-gray-900 border-gray-100/20 border-l'>$1125.00</td>
                  </tr>
                </tbody>
              </table>
              <div className='lg:my-9 my-4 xl:w-1/2 flex sm:flex-row flex-col gap-6 '>
                <div className='bg-violet-400 lg:p-8 p-4 sm:w-1/2'>
                  <h2 className='xl:text-[26px] lg:text-[22px] text-[20px] text-gray-900 mb-3'>Shipping address</h2>
                  <p className='md:text-lg text-md text-gray-900 md:leading-9 leading-7'>Cherry Blossom<br />
                    9057 Vermont Road Cockeysville<br /> Fuquay MD 21030,<br />
                    Australia</p>
                </div>
                <div className='bg-violet-400 lg:p-8 p-4 sm:w-1/2'>
                  <h2 className='xl:text-[26px] lg:text-[22px] text-[20px] text-gray-900 mb-3'>Billing address</h2>
                  <p className='md:text-lg text-md text-gray-900 md:leading-9 leading-7'>Cherry Blossom<br />
                    9057 Vermont Road Cockeysville<br /> Fuquay MD 21030,<br />
                    Australia</p>
                </div>
              </div>
              <button className='all-btn'> Order Again</button>
            </div>)}
        </div>
     
    </>

  )
}

export default Account_Orders
