import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Checkbox, CheckboxGroup, Skeleton, cn, Accordion, AccordionItem } from "@heroui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faInstagram, faWhatsapp, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Product_Detail_v2 = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = useState(true);
    const [product_item, setproduct_item] = useState(1);


    const CustomColorbox = (props) => {
        const { children, ...otherProps } = props;

        return (
            <Checkbox
                {...otherProps}
                classNames={{
                    base: cn(
                        "inline-flex m-0 items-center q_radio break-words  !w-auto !p-0",
                        "w-full max-w-full cursor-pointer rounded-none ",
                        " data-[selected=true]:outline-violet-900  data-[selected=true]:outline-2 outline outline-1 outline-gray-900 outline-offset-2 rounded-full  "
                    ),
                    label: "group-data-[selected=true]:text-white group-data-[hover=true]:text-white text-gray-900 2xl:text-[16px] 2xl:group-[.small]:text-[15px] group-[.small]:text-[13px] sm:text-[15px]  !transition-none text-sm w-full flex items-center",
                    wrapper: "hidden"
                }}>
                {children}
            </Checkbox>
        );
    }

    const itemClasses = {
        base: "!p-0 w-full !rounded-none !shadow-none  border-b border-violet-900/20",
        title: "font-normal font-[Almarai] lg:text-lg text-md text-gray-900",
        trigger: "h-auto flex items-center",
        indicator: "text-black  data-[open=true]:rotate-90 rtl:data-[open=true]:rotate-90 rtl:-rotate-90 -rotate-90",
        content: "mb-3 text-gray-800",
        titleWrapper: "ltr:text-left rtl:text-right"
    };
    const handleIncrement = () => {
        setproduct_item(product_item + 1);
    };
    const handleDecrement = () => {
        if (product_item > 1) {
            setproduct_item(product_item - 1);
        }
    };
    const [Catfiltershow, setCatfiltershow] = React.useState(false);
    function toggle() {
        setCatfiltershow(!Catfiltershow);
    }
    const CustomCheckbox = (props) => {
        const { children, ...otherProps } = props;

        return (
            <Checkbox
                {...otherProps}
                classNames={{
                    base: cn(
                        "inline-flex m-0 items-center q_radio break-words lg:h-11 h-9",
                        "w-full max-w-full cursor-pointer rounded-none px-1.5 py-1 lg:py-1.5 bg-transparent border border-gray-100/20 hover:border-violet-900 hover:text-violet-900 text-md text-gray-900 cursor-pointer",
                        "data-[selected=true]:border-violet-900 data-[selected=true]:text-violet-900 "
                    ),
                    label: "group-data-[selected=true]:text-violet-900 group-data-[hover=true]:text-violet-900 w-full flex items-center text-gray-900",
                    wrapper: "hidden"
                }}>
                {children}
            </Checkbox>
        );
    }
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (
        <>
            {isLoading ? (
                <div className="relative lg:pl-8">
                    <Skeleton className='w-full lg:h-16 h-12 rounded' />
                    <Skeleton className='w-28 h-6 md:my-4 my-2 rounded' />
                    <Skeleton className='w-full h-20 my-4 rounded' />
                    <Skeleton className='w-full h-16 my-4 rounded' />
                    <Skeleton className='w-36 h-8 rounded' />
                    <div className='flex items-stretch gap-3 sm:flex-nowrap flex-wrap md:my-6 my-2'>
                        <Skeleton className='lg:w-48 sm:w-32 w-full lg:h-14 h-12 rounded' />
                        <Skeleton className='lg:w-48 sm:w-32 w-full lg:h-14 h-12 rounded' />
                    </div>

                    <div className='mt-8'>
                        <Skeleton className='mb-4 w-36 h-12 my-4 rounded' />
                        <Skeleton className='w-2/3 h-10 my-4 rounded' />
                        <Skeleton className='mb-3 w-full h-20 rounded' />
                        <Skeleton className='mb-3 w-full h-20 rounded' />
                    </div>
                </div >
            ) : (
                <>
                    {initialValues && initialValues.map((data, index) => {
                        return (
                            <div className="relative lg:pl-8" key={index}>
                                <h1 className='text-gray-800 lg:text-1xl sm:text-xl text-[25px] leading-tight'>{data.name}</h1>
                                <div className="flex item-center  md:my-4 my-2 ">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path></svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M11.5634 16.636L15.5612 19.0539C16.2933 19.497 17.1892 18.842 16.9965 18.0135L15.9369 13.4667L19.4722 10.4033C20.1177 9.84458 19.7709 8.78493 18.9232 8.7175L14.2703 8.32254L12.4496 4.02613C12.1221 3.24585 11.0047 3.24585 10.6771 4.02613L8.85647 8.3129L4.20364 8.70787C3.35591 8.7753 3.00912 9.83495 3.65454 10.3937L7.18992 13.457L6.13027 18.0039C5.93761 18.8323 6.8335 19.4874 7.56562 19.0443L11.5634 16.636Z" fill="#F9B856"></path>
                                    </svg>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.0327 16.052L12.2909 16.2081L16.2887 18.6261L16.2888 18.6262C16.6406 18.8391 17.0712 18.5265 16.9783 18.1268L15.9187 13.5801L15.8502 13.2863L16.0782 13.0888L19.6136 10.0254L19.6137 10.0253C19.9259 9.75505 19.7549 9.24795 19.3523 9.21592L19.3496 9.21571L19.3496 9.21571L14.6968 8.82075L14.3963 8.79524L14.2787 8.51763L12.458 4.22122L12.4574 4.21965C12.3014 3.84801 11.7629 3.84801 11.6069 4.21965L11.6061 4.2216L11.6061 4.2216L9.78543 8.50837L9.66767 8.78563L9.36751 8.81111L4.71468 9.20607L4.71203 9.2063L4.71203 9.20629C4.3094 9.23832 4.13839 9.74542 4.45054 10.0156L4.45072 10.0158L7.9861 13.0792L8.2141 13.2767L8.14563 13.5705L7.08603 18.1172L12.0327 16.052ZM12.0327 16.052L11.7741 16.2077M12.0327 16.052L11.7741 16.2077M11.7741 16.2077L7.77636 18.616L7.77547 18.6165M11.7741 16.2077L7.77547 18.6165M7.77547 18.6165C7.42379 18.8294 6.99324 18.517 7.08597 18.1174L7.77547 18.6165Z" stroke="#F9B856"> </path>
                                    </svg>
                                </div>
                                <div className='xl:mb-5 mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7'>{data.short_des_2}
                                    <div className='hidden' style={{ display: Catfiltershow ? "block" : "none" }}>
                                        <p className='xl:my-3 my-2 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7'>{data.short_des}</p>
                                    </div>
                                    <button className={Catfiltershow ? "hover:text-gray-900 text-violet-900 underline text-[0px] after:content-['Read_Less'] after:underline after:2xl:text-lg after:lg:text-[17px] after:text-md" : "hover:text-gray-900 text-violet-900 underline"} onClick={toggle}>Read More</button></div>

                                <div className='xl:mb-5 mb-4'>
                                    <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7'><b className='font-semibold'>Diamond Shape:</b> Round</p>
                                    <div className='grow-1 max-w-full md:w-4/5 relative'>
                                        <div className="flex md:block gap-3 justify-end w-full relative">
                                            <div className="arrow-right overflow-hidden swiper-button-prev group sm:!h-[14px] !h-[12px] !z-2 !mt-0 after:!hidden !text-black !text-md rounded-full  flex items-center justify-center !w-auto xl:!top-3 sm:!top-6 !top-[4vw] !-left-2 rotate-180 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='!w-4 -rotate-90'>
                                                    <path d="M1 1L6.2929 6.68541C6.6834 7.10487 7.3166 7.10487 7.7071 6.68541L13 1" stroke="#000" strokeWidth="1.4" />
                                                </svg>
                                            </div>
                                            <div className="arrow-left overflow-hidden md:!absolute swiper-button-next sm:!h-[14px] !h-[12px]  group !z-2 !mt-0 after:!hidden !text-black !text-md !border-0 rounded-full  flex items-center justify-center !w-auto xl:!top-3 sm:!top-6 !top-[4vw] !-right-2 ">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='!w-4 -rotate-90'>
                                                    <path d="M1 1L6.2929 6.68541C6.6834 7.10487 7.3166 7.10487 7.7071 6.68541L13 1" stroke="#000" strokeWidth="1.4" />
                                                </svg>
                                            </div>
                                        </div>
                                       
                                        <Swiper spaceBetween={20}
                                            navigation={{ nextEl: ".arrow-left", prevEl: ".arrow-right", disabledClass: '!hidden' }}
                                            breakpoints={{
                                                0: {
                                                    slidesPerView: 5,
                                                },
                                                420: {
                                                    slidesPerView: 7,
                                                },
                                                991: {
                                                    slidesPerView: 8,
                                                },
                                                1640: {
                                                    slidesPerView: 10,
                                                },
                                            }}
                                            modules={[Navigation]} className="category_slider !m-0  !p-0" dir='ltr'>
                                            {data.diamond_shape && data.diamond_shape.map((shape, index) => {
                                                return (
                                                    <SwiperSlide key={index}>
                                                        <Checkbox classNames={{
                                                            base: cn(
                                                                "inline-flex w-full max-w-md bg-content1 p-0 m-0 ",
                                                            ),
                                                            wrapper:"hidden",
                                                            label: "w-full group-data-[selected=true]:bg-violet-400 rounded-md border border-transparent group-data-[selected=true]:border-violet-900",
                                                            icon:"hidden "
                                                        }}>
                                                            <div className='cursor-pointer group group-data-[selected=true]:scale-85'>
                                                                <img src={shape.img} alt={shape.item} title={shape.item} width={60} height={60} className='group-hover:scale-105' />
                                                            </div>
                                                        </Checkbox>

                                                    </SwiperSlide>
                                                )
                                            })}
                                        </Swiper>
                                    </div>

                                </div>

                                <div className='xl:mb-6 mb-4'>
                                    <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7'><b className='font-semibold'>Metal:</b> Yellow Gold</p>
                                    <ul className='flex items-center flex-wrap gap-2'>

                                        <CheckboxGroup
                                            defaultValue={["Round"]}
                                            classNames={{
                                                base: "w-full shape-filter",
                                                wrapper: "flex flex-row gap-4 items-start content-start	"
                                            }} >
                                            {data.ring_metal && data.ring_metal.map((items, index) => {
                                                return (
                                                    <CustomColorbox value={items.title} key={index}>
                                                        <span className="flex">
                                                            <img src={items.icon} width={20} height={20} alt={items.alt} title={items.title} className="m-auto w-5 h-5 inline-block rounded-full " /></span>
                                                    </CustomColorbox>
                                                )
                                            })}
                                        </CheckboxGroup>

                                    </ul>
                                </div>

                                <div className='xl:mb-5 mb-4'>
                                    <p className='mb-4 2xl:text-lg lg:text-[17px] text-md text-gray-800 leading-7'><b className='font-semibold'>Diamond Origin:</b> Natural</p>

                                    <CheckboxGroup
                                        defaultValue={["Natural"]}
                                        classNames={{
                                            base: "w-full lg:flex-row ",
                                            wrapper: "grid 1xl:grid-cols-[auto,auto,auto,auto,auto,auto] lg:grid-cols-5 md:grid-cols-4  grid-cols-3 gap-2 grow group small",
                                            label: "2xl:min-w-[140px] lg:min-w-[120px] min-w-[100px] 2xl:text-[17px] lg:text-[15px] text-sm uppercase text-gray-800 font-[600] lg:mt-2.5"
                                        }} >
                                        <CustomCheckbox value='Natural' >
                                            <span className='w-full text-center block'>Natural</span>
                                        </CustomCheckbox>
                                        <CustomCheckbox value='Lab Grown' >
                                            <span className='w-full text-center block'>Lab Grown</span>
                                        </CustomCheckbox>
                                    </CheckboxGroup>
                                </div>

                                <h3 className='lg:text-3xl sm:text-1xl text-xl uppercase text-gray-800 leading-tight'>${data.regular_price}</h3>
                                <div className='flex items-stretch gap-3 sm:flex-nowrap flex-wrap md:my-6 my-2'>
                                    <div className="flex items-center border border-violet-900 sm:grow-0 grow justify-between">
                                        <button onClick={handleDecrement} className="quantity-button minus w-12 text-center text-gray-800 text-[22px] font-semibold lg:p-2.5 p-1.5 cursor-pointer">-</button>
                                        <input type="text" className="input-text bg-white input-qty text w-20 text-center text-gray-800 lg:text-[20px] text-lg font-semibold lg:p-2.5 p-1.5 focus:outline-none" name="cart" value={product_item} onChange={(e) => setproduct_item(parseInt(e.target.value) || 0)} title="Qty" size="4" placeholder="" autoComplete="off" />
                                        <button onClick={handleIncrement} className="quantity-button plus w-12 text-center text-gray-800 text-[22px] font-semibold lg:p-2.5 p-1.5  cursor-pointer">+</button>
                                    </div>

                                    <Link className='all-btn px-12 py-3 flex items-center  sm:grow-0 grow justify-center leading-tight lg:text-lg text-md capitalize min-w-[40%]' to='/cart'>Add to cart</Link>
                                </div>
                                <Link className='text-md text-gray-900 underline hover:text-violet-900' href='/contact-us'> Enquire About This Product </Link>

                                <div className='xl:my-5 my-4'>
                                    <ul>
                                        <li className='flex items-center sm:gap-4 gap-3 text-gray-900 md:text-md text-[15px] lg:px-6 px-3 lg:py-4 py-3 bg-violet-400 border-b border-violet-900/10'>
                                            <img src='https://webby-production.s3.amazonaws.com/Starry-Heavens/other/carbon_delivery.svg' alt='Shipping' title='Shipping' width={24} height={24} className='sm:w-6 w-5' />Free Shipping, Free 30 Day Returns</li>
                                        <li className='flex items-center sm:gap-4 gap-3 text-gray-900 md:text-md text-[15px] lg:px-6 px-3 lg:py-4 py-3 bg-violet-400'>
                                            <img src='https://webby-production.s3.amazonaws.com/Starry-Heavens/other/uiw_date.svg' alt='Order Now' title='Order Now' width={24} height={24} className='sm:w-6 w-5' />Order now and your order ships by thursday, december 21</li>
                                    </ul>
                                </div>

                                <div className='xl:my-5 my-4 -mx-2'>
                                    <Accordion itemClasses={itemClasses} showDivider={false}>
                                        <AccordionItem key="1" aria-label="Additional information" title="Additional information">
                                            <div>
                                                <ul>
                                                    <li>Eu turpis egestas pretium aenean pharetra magna ac. </li>
                                                    <li>Nam at lectus urna duis convallis. </li>
                                                    <li>Nibh ipsum consequat nisl vel pretium lectus. </li>
                                                    <li>Neque convallis a cras semper auctor. </li>
                                                    <li>Diam maecenas ultricies mi eget mauris pharetra et ultrices. </li>
                                                </ul>
                                            </div>
                                        </AccordionItem>
                                        <AccordionItem key="2" aria-label="Reviews" title="Reviews">
                                            Sit amet dictum sit amet justo donec enim. Purus ut faucibus pulvinar elementum integer enim. Malesuada fames ac turpis egestas sed. Potenti nullam ac tortor vitae purus faucibus. Lorem ipsum dolor sit amet consectetur adipiscing elit.
                                        </AccordionItem>
                                    </Accordion>
                                </div>

                                <div className='flex gap-4 items-center'>
                                    <p className='text-md lg:text-lg text-gray-900'>Contact:</p>
                                    <div className='flex gap-3 items-center'>
                                        <Link href='mailto:info@starryheavens.com' className='lg:w-11 lg:h-11 w-10 h-10 flex items-center justify-center border border-violet-900/20 hover:bg-violet-400'><img src='https://webby-production.s3.amazonaws.com/Starry-Heavens/other/shop-contact-1.svg' alt='Mail' title='Mail' width={20} height={20} /></Link>
                                        <Link href='mailto:info@starryheavens.com' className='lg:w-11 lg:h-11 w-10 h-10 flex items-center justify-center border border-violet-900/20 hover:bg-violet-400'><img src='https://webby-production.s3.amazonaws.com/Starry-Heavens/other/shop-contact-2.svg' alt='Mail' title='Mail' width={20} height={20} /></Link>
                                        <Link href='tel:+19925078740' className='lg:w-11 lg:h-11 w-10 h-10 flex items-center justify-center border border-violet-900/20 hover:bg-violet-400'><img src='https://webby-production.s3.amazonaws.com/Starry-Heavens/other/shop-contact-3.svg' alt='Mail' title='Mail' width={20} height={20} /></Link>
                                    </div>
                                </div>
                            </div >
                        )
                    })}
                </>
            )}


        </>

    )
}

export default Product_Detail_v2;