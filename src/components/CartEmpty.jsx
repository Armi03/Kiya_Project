import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function EmptyCart() {

    return (

        <>
            <section className="cart-page section-two 2xl:py-24 lg:py-16 py-12 flex items-center justify-center min-h-[70vh]">
                <div className="container">
                    <div className="row">
                        <div className='d-flex flex-column justify-content-center align-items-center sm:w-[500px] mx-auto p-6 lg:py-10 lg:px-8 bg-white border-8 border-violet-400'>
                            {/* <img src="images/Frame.svg" alt="cart-cart.svg" className="mb-3 object-fit-contain" style={{ maxWidth: '140px' }} /> */}
                            <h3 className="mb-3 1xl:text-2xl lg:text-1xl text-xl text-center text-gray-900 leading-tight">Your shopping cart is empty</h3>
                            <p className="lg:mb-8 mb-5 text-center 2xl:text-lg text-md text-gray-800">Looks like you have not added anything to your cart. Go ahead & explore top categories.</p>
                            <div className="flex items-center justify-center cart-now-btn">
                                <Link to='/shop' className='all-btn text-center font-medium grow'>Continue Shop</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </>
    )
}

export default EmptyCart;