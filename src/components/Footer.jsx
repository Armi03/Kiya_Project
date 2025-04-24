import { Link } from "react-router-dom";
import { Skeleton } from "@heroui/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faPinterest, faLinkedin, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import React, { useEffect, useState } from 'react';
import { useFetchData } from '../comman';

function Footer() {

  const { data } = useFetchData("json/data/Footer.json");


  const Nav = ({ initialValues }) => {
    return (
      <React.Fragment >
        <ul className="nav">
          <p className="text-[15px] 2xl:text-md font-semibold mx-3 mb-5 text-gray-800 uppercase">{initialValues.label}</p>
          {initialValues.item && initialValues.item.map((item, subIndex) => {
            return (
              <li key={subIndex} className="mx-3">
                <Link className="text-gray-800 hover:text-violet-900 text-[15px] 2xl:text-md my-3 block" href={item.slug}>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      </React.Fragment>
    )
  }

  return (
    <div className="relative h-full footer-wrap bg-violet-400 md:pt-16 pt-10 lg:px-4">
      {data && data.map((Data, index) => {
        return (
          <React.Fragment key={index}>
            <div className="container">
              {Data.Nav_List && Data.Nav_List.map((nav_items, index) => {
                return (
                  <div className="flex lg:justify-between justify-start flex-wrap -mx-3" key={index}>
                    {nav_items.child_item && nav_items.child_item.map((items, subIndex) => {

                      let class_name = ''
                      if (items.class_name) {
                        class_name = items.class_name
                      }
                      return (
                        <React.Fragment key={subIndex}>
                          <div className={class_name + " xl:w-auto lg:w-1/4 w-1/2 mb-3"} > <Nav initialValues={items} /></div>
                        </React.Fragment>
                      )
                    })}

                    {(nav_items.logo_social) ?
                      <>
                        {nav_items.logo_social && nav_items.logo_social.map((img_item, index) => {

                          let class_name = ''
                          if (img_item.class_name) {
                            class_name = img_item.class_name
                          }
                          return (
                            <div className={class_name + " xl:w-auto mx-3 xl:mb-0 xl:mb-8 mb-10 xl:pb-0 pb-6 xl:border-b-0 border-b-1 border-gray-900 w-full self-center xl:block flex gap-3 flex-wrap md:justify-between justify-center items-center"} key={index}>
                              <div className="md:w-auto w-full">
                                <Link href={img_item.slug}><img src={img_item.logo_img} alt={img_item.alt} title={img_item.alt} width={250} height={50} className="md:mx-0 mx-auto xl:mx-auto" /></Link>
                                <p className="xl:mt-8 mt-6 mb-2 xl:mb-8 md:text-left text-center xl:text-center block text-gray-200 lg:text-md text-[15px] ">{img_item.copyright_txt} </p>
                              </div>
                              <ul className="flex items-center justify-center">
                                {img_item.social && img_item.social.map((social, subIndex) => {
                                  return (
                                    <React.Fragment key={subIndex}>
                                      <li className="mr-2 lg:mr-3.5"><Link className="text-gray-800 hover:bg-violet-900 hover:border-violet-900 hover:text-white lg:w-12 md:w-10 w-8 text-md lg:text-[22px] lg:h-12 md:h-10 h-8 rounded-full border border-gray-800 inline-flex items-center justify-center " href={social.facebook_slug}><FontAwesomeIcon icon={faFacebook} className="fa-brands fa-facebook-f " ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link className="text-gray-800 hover:bg-violet-900 hover:border-violet-900 hover:text-white lg:w-12 md:w-10 w-8 text-md lg:text-[22px] lg:h-12 md:h-10 h-8 rounded-full border border-gray-800 inline-flex items-center justify-center " href={social.instagram_slug}><FontAwesomeIcon icon={faInstagram} className="fa-brands fa-instagram " ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link className="text-gray-800 hover:bg-violet-900 hover:border-violet-900 hover:text-white lg:w-12 md:w-10 w-8 text-md lg:text-[22px] lg:h-12 md:h-10 h-8 rounded-full border border-gray-800 inline-flex items-center justify-center " href={social.youtube_slug}><FontAwesomeIcon icon={faYoutube} className="fa-brands fa-youtube " ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link className="text-gray-800 hover:bg-violet-900 hover:border-violet-900 hover:text-white lg:w-12 md:w-10 w-8 text-md lg:text-[22px] lg:h-12 md:h-10 h-8 rounded-full border border-gray-800 inline-flex items-center justify-center " href={social.whatsapp_slug}><FontAwesomeIcon icon={faWhatsapp} className="fa-brands fa-twitter " ></FontAwesomeIcon></Link></li>
                                      <li className="mr-2 lg:mr-3.5"><Link className="text-gray-800 hover:bg-violet-900 hover:border-violet-900 hover:text-white lg:w-12 md:w-10 w-8 text-md lg:text-[22px] lg:h-12 md:h-10 h-8 rounded-full border border-gray-800 inline-flex items-center justify-center " href={social.pinterest_slug}><FontAwesomeIcon icon={faPinterest} className="fa-brands fa-pinterest-p " ></FontAwesomeIcon></Link></li>
                                    </React.Fragment>
                                  )
                                })}
                              </ul>
                            </div>
                          )
                        })}
                      </>
                      : ''
                    }
                  </div>
                )
              })}

              <div className="flex items-center gap-2 flex-wrap sm:justify-between justify-center border-t border-gray-800 py-8 mt-4 md:mt-8">
                {Data.bottom_footer && Data.bottom_footer.map((child_item, index) => {
                  return (
                    <React.Fragment key={index}>
                      <form className="sm:w-[350px] w-full" >
                        {child_item.Email && child_item.Email.map((Email, subIndex) => {
                          return (
                            <React.Fragment key={subIndex}>
                              <b className="text-gray-800 block mb-2">{Email.label}</b>
                              <div className="flex items-center border-b border-gray-800">
                                <input type="email" placeholder={Email.placeholder} className="focus:outline-none text-md py-3 placeholder:text-[#2F2F2F] font-normal text-gray-800 w-full bg-transparent border-none rounded-none" />
                                <button type="submit" className="py-3" aria-label="Close"><img src={Email.submit_arrow} width={30} height={30} alt={Email.img_alt} title={Email.img_alt} className="white-img rtl:rotate-[270deg]" /></button>
                              </div>
                            </React.Fragment>
                          )
                        })}
                      </form>

                      {child_item.payment_methods && child_item.payment_methods.map((payments, index) => {
                        return (
                          <React.Fragment key={index}>
                            <Link href={payments.link} className="block sm:mt-0 mt-5"><img width={250} height={30} src={payments.img} alt={payments.img_alt} /></Link>
                          </React.Fragment>
                        )
                      })}
                    </React.Fragment>
                  )
                })}

              </div>

            </div>
          </React.Fragment>
        )
      })}

    </div>
  )
}

export default Footer