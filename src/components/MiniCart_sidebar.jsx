import { Link } from 'react-router-dom';
import { Skeleton } from "@heroui/react";
import { useFetchData } from '../comman';
import React, { useEffect, useState } from 'react';
import { useCart } from 'react-use-cart';


function MiniCart() {
    const { items, removeItem } = useCart();

    const totalPrice = items.reduce((sum, product) => parseInt(sum) + parseInt(product.price), 0);
    // const { data } = useFetchData("json/data/minicart_data.json");

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);
    const HideCart = () => {
        const old_class = document.getElementById('mini-cart').className; 
        const new_class = old_class === 'color_switch fixed top-0 z-50 transition-all w-full -right-full   h-full' ? 'color_switch fixed top-0 z-50 transition-all w-full right-0   h-full' : 'color_switch fixed top-0 z-50 transition-all w-full -right-full   h-full'
        document.getElementById('mini-cart').className = new_class
    };


    return (

        <>
            {isLoading ? (
                <div className='h-full' >
                    <div className='flex items-center justify-between p-4 border-b border-gray-100/20'>
                        <p className='uppercase font-montserrat text-md font-bold text-black'>Cart</p>
                        <span className='font-md text-black font-montserrat flex items-center gap-1.5 font-[500]'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" className='bg-[#008000] w-3.5 h-3.5 rounded-full p-[2px]'>
                                <g clipPath="url(#clip0_3382_1981)">
                                    <path fillRule='evenodd' clipRule='evenodd' d="M8.97784 2.12961C9.09501 2.24682 9.16083 2.40576 9.16083 2.57149C9.16083 2.73721 9.09501 2.89616 8.97784 3.01336L4.29325 7.69795C4.23135 7.75987 4.15785 7.80899 4.07695 7.8425C3.99606 7.87601 3.90936 7.89326 3.82179 7.89326C3.73423 7.89326 3.64753 7.87601 3.56664 7.8425C3.48574 7.80899 3.41224 7.75987 3.35034 7.69795L1.02284 5.37086C0.963143 5.31321 0.915529 5.24424 0.882773 5.16799C0.850017 5.09174 0.832776 5.00972 0.832055 4.92674C0.831334 4.84375 0.847147 4.76145 0.878573 4.68464C0.909998 4.60783 0.956407 4.53805 1.01509 4.47936C1.07377 4.42068 1.14355 4.37427 1.22037 4.34285C1.29718 4.31142 1.37948 4.29561 1.46246 4.29633C1.54545 4.29705 1.62746 4.31429 1.70371 4.34705C1.77997 4.3798 1.84893 4.42742 1.90659 4.48711L3.82159 6.40211L8.09367 2.12961C8.15171 2.07153 8.22063 2.02546 8.29648 1.99402C8.37234 1.96259 8.45364 1.94641 8.53575 1.94641C8.61786 1.94641 8.69917 1.96259 8.77502 1.99402C8.85088 2.02546 8.9198 2.07153 8.97784 2.12961Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_3382_1981">
                                        <rect width="10" height="10" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg> Added To ring
                        </span>
                    </div>
                    <div className='p-4'>
                        <div>
                            <div className='flex items-center gap-2 border-b border-gray-100/20 mb-4 pb-4 last:border-b-0 last:pb-0 relative'>
                                <div className='w-[28%]'>
                                    <Skeleton className='w-full h-20 object-cover rounded' />
                                </div>
                                <div className='w-[65%]'>
                                    <Skeleton className='w-full h-7 object-cover rounded  mb-1.5' />
                                    <Skeleton className='w-12 h-6 object-cover rounded ' />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 border-b border-gray-100/20 mb-4 pb-4 last:border-b-0 last:pb-0 relative'>
                                <div className='w-[28%]'>
                                    <Skeleton className='w-full h-20 object-cover rounded' />
                                </div>
                                <div className='w-[65%]'>
                                    <Skeleton className='w-full h-7 object-cover rounded  mb-1.5' />
                                    <Skeleton className='w-12 h-6 object-cover rounded ' />
                                </div>
                            </div>
                            <div className='flex items-center gap-2 border-b border-gray-100/20 mb-4 pb-4 last:border-b-0 last:pb-0 relative'>
                                <div className='w-[28%]'>
                                    <Skeleton className='w-full h-20 object-cover rounded' />
                                </div>
                                <div className='w-[65%]'>
                                    <Skeleton className='w-full h-7 object-cover rounded  mb-1.5' />
                                    <Skeleton className='w-12 h-6 object-cover rounded ' />
                                </div>
                            </div>
                        </div>
                        <div className='lg:my-6 my-3'>
                            <div className='md:text-lg text-md text-black font-montserrat font-[500]'>Total : <Skeleton className='w-20 h-5 object-cover rounded inline-block' /> </div>
                        </div>
                        <div className='flex items-center gap-2.5'>
                            <Skeleton className='w-full h-10 grow rounded ' />
                            <Skeleton className='w-full h-10 grow rounded ' />
                        </div>
                    </div>
                </div>
            ) : (
                <>
                        <div className='  flex flex-col h-full z-20 relative bg-white sm:w-[350px] w-[300px] ml-auto' >
                            <div className='flex items-center justify-between p-4 border-b border-gray-100/20'>
                                <p className='uppercase font-montserrat text-md font-bold text-black'>Cart</p>
                                <button onClick={() => HideCart()} className='group'>
                                    <svg width="20" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-black group-hover:stroke-violet-900'>
                                        <path d="M11.25 3.75L3.75 11.25" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M3.75 3.75L11.25 11.25" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                            <div className='p-4 flex justify-between flex-col h-full grow max-h-[calc(100%-57px)]'>
                               
                                <div className='lg:max-h-[calc(100%-120px)] max-h-[calc(100%-85px)] overflow-auto scrollStyle'>
                                    {items && items.map((Data, index) => {
                                        return (
                                            <div className='flex items-center gap-2 border-b border-gray-100/20 mb-4 pb-4 last:border-b-0 last:pb-0 relative' key={index}>
                                                <div className='w-[28%]'>
                                                    <Link href='/'>
                                                        <img src={Data.img} alt={Data.alt} title={Data.alt} width={80} height={80} className='w-20 h-20 object-cover' />
                                                    </Link>
                                                </div>
                                                <div className='w-[65%]'>
                                                    <Link className='text-sm font-[600] font-montserrat text-black hover:text-violet-900 mb-1.5 block capitalize' href='/'>{Data.title}</Link>
                                                    <p className='text-sm font-[500] font-montserrat text-black'>${Data.price}</p>
                                                    <button onClick={() => removeItem(Data.id)} className='absolute top-0 ltr:right-0 rtl:left-0 group'>
                                                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className='stroke-black group-hover:stroke-violet-900'>
                                                            <path d="M11.25 3.75L3.75 11.25" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M3.75 3.75L11.25 11.25" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </button>
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                                <div>
                                <div className='lg:my-6 my-3'>
                                    <p className='md:text-lg text-md text-black font-montserrat font-[500]'>Total : $<span>{totalPrice}</span> </p>
                                </div>
                                

                                <div className='flex items-center gap-2.5'>
                                    <Link className='all-btn rounded-[3px] uppercase font-medium tracking-wider text-[13px] font-montserrat grow px-2 text-center border border-violet-900 hover:border-gray-800' href="/cart">View cart</Link>
                                    <Link className='all-btn rounded-[3px] uppercase font-[600] tracking-wider text-[13px] font-montserrat grow px-2 text-center bg-transparent border border-black text-black hover:text-white' href="/checkout">Checkout</Link>
                                </div>
                                </div>
                            </div>
                          
                        </div>
                    </>
                    )
}

                </>
            )
            }

            export default MiniCart;