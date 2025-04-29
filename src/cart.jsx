import Header from './components/Header'; 
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import React, { useEffect, useState } from 'react';
import { Breadcrumb_pages, useFetchData } from './comman';
import { CheckboxGroup, RadioGroup, Checkbox, cn, Radio } from '@heroui/react';
import { useCart } from 'react-use-cart';
import EmptyCart from './components/CartEmpty'
export const CustomRadio = (props) => {
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
export default function Cart() {

  const { items, removeItem, cartTotal, updateItemQuantity, isEmpty } = useCart();

  const [products, setproducts] = useState([]);
  const [sub_cart_total, setsub_cart_total] = useState(0);
  const [cart_total, setcart_total] = useState(0);
  const [selectedValue, setSelectedValue] = useState(22);

  const breadcrumbItems = [
    { title: 'Cart', url: ``, type: false },
  ];

  const handleRadioChange = (event) => {
    setSelectedValue(event.target.value);
    let sel_data = parseInt(event.target.value);
    setcart_total(cartTotal + sel_data);
  };

  // const router = useRouter()
  // const { data } = useFetchData("json/data/cart_data.json");

  useEffect(() => {
    setproducts(items);
    setsub_cart_total(cartTotal);
    setcart_total(cartTotal + selectedValue)
  }, [items]);

  if (isEmpty) {
    return (
      <>
        <Header />
        <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
        <EmptyCart />

      </>
    )
  };

  return (
    <>
      <Header />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />
      <div className='2xl:py-10 py-8 container'>
        <h1 className="2xl:text-4xl lg:text-3xl sm:text-2xl text-[28px] uppercase ltr:lg:text-left rtl:lg:text-right text-center  md:my-4 my-2 leading-tight text-gray-800">Cart</h1>
      </div>
      <div className='container 2xl:pb-24 lg:pb-16 pb-10'>
        <div className='flex items-start gap-8 lg:flex-nowrap flex-wrap'>
          <div className='lg:w-2/3 w-full'>
            <table className='w-full border sm:border-transparent border-gray-100/20'>
              <thead>
                <tr>
                  <th className='font-nabi 2xl:text-[26px] lg:text-[24px] text-[22px] text-gray-900 font-normal px-3 py-2 text-center border-b border-gray-100/20 w-[160px] sm:table-cell hidden'>Product</th>
                  <th className='font-nabi 2xl:text-[26px] lg:text-[24px] text-[22px] text-gray-900 font-normal px-3 py-2 text-center border-b border-gray-100/20 w-[30%] sm:table-cell hidden'></th>
                  <th className='font-nabi 2xl:text-[26px] lg:text-[24px] text-[22px] text-gray-900 font-normal px-3 py-2 text-center border-b border-gray-100/20 sm:table-cell hidden'>Price</th>
                  <th className='font-nabi 2xl:text-[26px] lg:text-[24px] text-[22px] text-gray-900 font-normal px-3 py-2 text-center border-b border-gray-100/20 sm:table-cell hidden'>Quantity</th>
                  <th className='font-nabi 2xl:text-[26px] lg:text-[24px] text-[22px] text-gray-900 font-normal px-3 py-2 text-center border-b border-gray-100/20 sm:table-cell hidden'>Total</th>
                  <th className='font-nabi 2xl:text-[26px] lg:text-[24px] text-[22px] text-gray-900 font-normal px-3 py-2 text-center border-b border-gray-100/20 w-12 sm:table-cell hidden'></th>
                </tr>
              </thead>
              <tbody className=' border-b border-gray-100/20'>
                {products && products.map((p_data, index) => {
                  return (
                    <tr key={index} className='sm:table-row block '>
                      <td className='sm:py-4 py-3 sm:table-cell hidden '>
                        <Image src={p_data.img} alt={p_data.title} title={p_data.title} className='bg-violet-400 1xl:w-[150px]  h-full 1xl:h-[150px]  object-contain p-3' width={120} height={120} />
                      </td>
                      <td className='px-3 sm:py-4 py-3 sm:table-cell flex gap-3 items-start justify-between border-b border-gray-100/20  before:content-["product"] sm:before:hidden before:text-gray-900 before:block before:uppercase before:font-semibold'>
                        <h2 className='2xl:text-[24px] 1xl:text-[22px] lg:text[20px] text-lg text-gray-900 sm:mt-2 sm:ltr:text-left ltr:text-right sm:rtl:text-right rtl:text-left'>{p_data.title}</h2>
                      </td>
                      <td className='px-3 sm:py-4 py-3 text-center sm:table-cell flex gap-3 items-center justify-between border-b border-gray-100/20  before:content-["price"] sm:before:hidden before:text-gray-900 before:block before:uppercase before:font-semibold'>
                        <h2 className='2xl:text-[24px] 1xl:text-[22px] lg:text[20px] text-lg text-gray-900'>${p_data.price}</h2>
                      </td>
                      <td className='px-3 sm:py-4 py-3 sm:table-cell flex gap-3 items-center justify-between border-b border-gray-100/20  before:content-["quantity"] sm:before:hidden before:text-gray-900 before:block before:uppercase before:font-semibold'>
                        <div className="flex items-center border border-violet-900 justify-between 1xl:w-[120px] w-[100px] sm:mx-auto">
                          <button onClick={() => updateItemQuantity(p_data.id, p_data.quantity - 1)} className="quantity-button minus w-8 text-center text-gray-800 sm:text-lg text-md font-semibold lg:p-2 p-1.5 cursor-pointer">-</button>
                          <input value={p_data.quantity} type="text" className="input-text input-qty bg-white text w-12 text-center text-gray-800  sm:text-lg text-md font-semibold lg:p-2 p-1.5 focus:outline-none" name="cart" title="Qty" size="4" placeholder="" autoComplete="off" />
                          <button onClick={() => updateItemQuantity(p_data.id, p_data.quantity + 1)} className="quantity-button plus w-8 text-center text-gray-800 sm:text-lg text-md font-semibold lg:p-2 p-1.5  cursor-pointer">+</button>
                        </div>
                      </td>
                      <td className='px-3 sm:py-4 py-3 text-center sm:table-cell flex gap-3 items-center justify-between border-b border-gray-100/20  before:content-["total"] sm:before:hidden before:text-gray-900 before:block before:uppercase before:font-semibold'>
                        <h2 className='2xl:text-[24px] 1xl:text-[22px] lg:text[20px] text-lg text-gray-900'>${(p_data.price * p_data.quantity).toFixed(2)}</h2>
                      </td>
                      <td className='px-3 sm:py-4 py-3 text-center sm:table-cell flex gap-3 items-center justify-center border-b border-gray-100/20 '>
                        <button onClick={() => removeItem(p_data.id)} className='w-8 h-8 rounded-full bg-violet-400 flex items-center justify-center hover:bg-violet-900 group'>
                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className='group-hover:stroke-white stroke-black'>
                            <path d="M15.0078 4.99902L5.00781 14.999" strokeWidth="1.27477" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5.00781 4.99902L15.0078 14.999" strokeWidth="1.27477" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </button>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
            <div className='flex items-center justify-between mt-8 sm:flex-nowrap flex-wrap gap-4'>
              <form className='sm:w-auto w-full'>
                <div className='flex items-stretch gap-3'>
                  <input className='border bg-white border-gray-100/20 px-5 lg:py-3 py-2 grow text-gray-900 text-md placeholder:text-gray-900 focus-visible:outline-none focus-visible:border-gray-100/40 sm:w-[300px] w-full ' type='text' placeholder='Enter coupon code...' />
                  <button className='all-btn'>Submit</button>
                </div>
              </form>
            </div>
          </div>
          <div className='lg:w-1/3 w-full'>
            <div className='bg-violet-400 sm:p-5 p-3 lg:-mt-5'>
              <h3 className='font-nabi 2xl:text-[26px] lg:text-[24px] text-lg text-gray-900 font-normal pb-4 1xl:mb-8 mb-5 border-b border-gray-100/20'>Cart Total</h3>
              <div className='flex items-center justify-between'>
                <p className='uppercase 1xl:text-lg text-md text-gray-800 font-[600]'>Sub Total</p>
                <p className='uppercase 1xl:text-lg text-md text-gray-800 font-[600]'>${sub_cart_total}</p>
              </div>
              <div className='1xl:my-5 my-3'>
                <p className='uppercase 1xl:text-lg text-md text-gray-800 font-[600] 1xl:mb-5 mb-3'>shipping</p>
                <RadioGroup defaultValue={selectedValue} onChange={() => handleRadioChange()} >
                  <CustomRadio value={0}> Free shipping <span>$0.00</span></CustomRadio >
                  <CustomRadio value={22} > Standard shipping <span>$22.00</span> </CustomRadio >
                  <CustomRadio value={28}>Express <span>$28.00</span> </CustomRadio >
                </RadioGroup>
              </div>
              <div className='flex items-center justify-between py-5 border-t border-gray-100/20'>
                <p className='uppercase 1xl:text-lg text-md text-gray-800 font-[600]'>Total</p>
                <p className='uppercase 1xl:text-lg text-md text-gray-800 font-[600]'>${cart_total}</p>
              </div>
              <div className='flex items-center gap-3 justify-stretch '>
                <Link href='/shop' className='all-btn text-center px-2 bg-white border border-violet-900 text-violet-900 hover:bg-violet-900 hover:text-white font-medium grow'>Continue Shop</Link>
                <Link href='/checkout' className='all-btn text-center px-2 grow font-medium '>Checkout Now</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}










