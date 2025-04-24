import { Link } from "react-router-dom";
import { Button, Select, SelectItem, Avatar, Skeleton } from "@heroui/react";
import React, { useRef, useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import { useFetchData } from '../comman';

function Header() {
  const { data } = useFetchData("json/data/Header.json");



  //Toggle Searchbar:
  const toggleCss = () => {
    const toggle_class = document.getElementById('toggleSearch').className;
    const add_class = toggle_class === 'ml-auto xl:p-2 p-0 group xl:w-10 flex items-center justify-center group active' ? 'ml-auto xl:p-2 p-0 group xl:w-10 flex items-center justify-center group' : 'ml-auto xl:p-2 p-0 group xl:w-10 flex items-center justify-center group active'
    document.getElementById('toggleSearch').className = add_class
    const old_class = document.getElementById('searchCategory').className;
    const new_class = old_class === 'w-full h-full flex items-center justify-center flex-col p-4 bg-black/70 z-[99] fixed left-0 top-0 visible opacity-100 transition-all scale-1 origin-center' ? ' w-full h-full flex items-center justify-center flex-col p-4 bg-black/70 z-[99] fixed left-0 -top-full invisible opacity-0 transition-all scale-0 origin-center' : 'w-full h-full flex items-center justify-center flex-col p-4 bg-black/70 z-[99] fixed left-0 top-0 visible opacity-100 transition-all scale-1 origin-center'
    document.getElementById('searchCategory').className = new_class
  }

  
  //Toggle Main Menu:
  const toggleClass = () => {
    const old_class = document.getElementById('mainmenu').className;
    const new_class = old_class === 'main-menu xl:static fixed w-full h-full xl:max-h-auto max-h-[100vh] overflow-auto xl:overflow-visible  xl:left-auto left-0 top-0 bg-white z-10 transition-all ' ? 'main-menu xl:static fixed w-full h-full xl:max-h-auto max-h-[100vh] overflow-auto xl:overflow-visible  xl:left-auto -left-full top-0 z-10 transition-all bg-white' : 'main-menu xl:static fixed w-full h-full xl:max-h-auto max-h-[100vh] overflow-auto xl:overflow-visible  xl:left-auto left-0 top-0 bg-white z-10 transition-all '
    document.getElementById('mainmenu').className = new_class
  }
  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);


  /* ================ Loop Functions end ==================*/

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);



  return (
    <div className='transition-all border-b border-white/10   w-full h-auto  z-30 header2' id="header">
      {data && data.map((Data, index) => {
        return (
          <React.Fragment key={index}>
              {Data.top_bar && Data.top_bar.map((lang_country, index) => {
              return (
                <div className="top-bar bg-violet-900 " key={index}>
                  <div className="flex justify-between items-center container px-0 lg:px-3.5 py-0.5">
                    <ul className="flex items-center ml-2">
                      <li className="mr-3 lg:inline-block hidden"><Link href="#" className="text-white pink:text-gray-800  text-[13px] font-light uppercase hover:opacity-80 transition-all leading-tight">Order Tracking</Link>
                      </li>
                      <li className="flex">
                        <Select
                          items={lang_country.Lang}
                          placeholder="Select a language"
                          defaultSelectedKeys={['English']}
                          classNames={{
                            base: " !bg-transparent text-white wp-country text-[13px] font-[300] w-full focus:outline-none font-light uppercase max-w-xs",
                            trigger: "!bg-transparent text-white uppercase text-[13px] font-[300] p-1 !h-auto !min-h-full",
                            selectorIcon:"!relative"
                          }}
                          popoverProps={{
                            classNames: {
                                base: "!w-auto min-w-max rounded-2xl bg-white",
                                content: "p-0 border-small border-divider bg-background text-lg",
                            },
                        }}
                          renderValue={(items) => {
                            return items.map((item, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <Avatar
                                  alt={item.data.label}
                                  className="flex-shrink-0 w-[20px]  h-[12px] rounded-none text-white"
                                  size="sm"
                                  src={item.data.avatar}
                                />
                                <div className="flex flex-col text-white  text-[13px]">
                                  <span>{item.data.label}</span>
                                </div>
                              </div>
                            ));
                          }}
                        >
                          {(lang) => (
                            <SelectItem key={lang.value} textValue={lang.label}>
                              <div className="flex gap-2 items-center">
                                <Avatar alt={lang.label} className="flex-shrink-0 w-[22px]  h-[15px] rounded-none" size="sm" src={lang.avatar} />
                                <div className="flex flex-col ">
                                  <span className="text-small">{lang.label}</span>
                                </div>
                              </div>
                            </SelectItem>
                          )}
                        </Select>
                      </li>
                      <li className="flex mr-3 ">
                        <Select
                          items={lang_country.Country}
                          placeholder="Select a Currency"
                          defaultSelectedKeys={['USD']}
                          classNames={{
                            base: "dark bg-transparent text-white wp-country text-[13px] w-full focus:outline-none font-light uppercase",
                            trigger: "!bg-transparent text-[13px]  p-1 !h-auto !min-h-full",
                            selectorIcon:"!relative"
                          }}
                          popoverProps={{
                            classNames: {
                                base: "!w-auto min-w-max rounded-2xl bg-white",
                                content: "p-0 border-small border-divider bg-background text-lg",
                            },
                          }}
                          renderValue={(items) => {
                            return items.map((item, index) => (
                              <div key={index} className="flex items-center gap-2">
                                <div className="flex flex-col text-white  text-[13px]">
                                  <span>{item.data.label}</span>
                                </div>
                              </div>
                            ));
                          }}
                        >
                          {(lang) => (
                            <SelectItem key={lang.value} textValue={lang.label}>
                              <div className="flex gap-2 items-center">
                                <div className="flex flex-col">
                                  <span className="text-small">{lang.label}</span>
                                </div>
                              </div>
                            </SelectItem>
                          )}
                        </Select>
                      </li>
                    </ul>
                    <ul className="flex items-center ">
                      <li className="mr-3 lg:mr-5"><Link href={lang_country.call_slug} className="text-white text-[0] hover:opacity-80 transition-all  lg:text-[13px] font-light uppercase flex items-end leading-tight"> <img src={lang_country.call_img} width={19} height={19} alt={lang_country.call_alt} title="call" className="mr-1" />{lang_country.call_label}</Link></li>
                      <li ><Link href={lang_country.mail_slug} className="text-white text-[0] lg:text-[13px] hover:opacity-80 transition-all font-light uppercase flex items-end leading-tight"> <img src={lang_country.mail_img} width={20} height={20} alt={lang_country.mail_alt} title="mail" className="mr-1.5" />{lang_country.mail_label}</Link></li>
                    </ul>
                  </div>
                </div>
              )
            })}

            <div className="flex items-center justify-between container  transition-all relative xl:p-0 p-2.5">
              {Data.mid_bar && Data.mid_bar.map((mid_bar_item, index) => {
                return (
                  <React.Fragment key={index}>
                    <div className="xl:hidden block w-1/4">
                      <div className="flex items-center justify-start">
                        <button name="mobile-menu-view" onClick={() => toggleClass()} className="sm:w-[38px] w-[26px] block sm:p-2 p-1" aria-label="Close">
                          <span className="w-full bg-gray-800 h-[1px] mb-[6px] block"></span>
                          <span className="w-full bg-gray-800 h-[1px] mb-[6px] block"></span>
                          <span className="w-full bg-gray-800 h-[1px] mb-0 block"></span>
                        </button>
                      </div>
                    </div>
                    <div className="site-logo 2xl:px-6 xl:px-3 xl:w-auto w-2/4">
                      {mid_bar_item.logo && mid_bar_item.logo.map((item, index) => {
                        return (
                          <Link key={index} to={item.slug}><img src={item.img} width={260} height={30} alt={item.alt} title="main-logo" className="white-img brightness-[0] m-auto 2xl:w-[260px] 1xl:w-[210px] w-[190px]" /></Link>
                        )
                      })}
                    </div>
                    <div className="grow nav-div z-10 2xl:pr-4 pr-2 xl:py-0  xl:border-l xl:border-r border-violet-400 ">

                      <nav id="mainmenu" className="main-menu xl:static fixed w-full h-full xl:max-h-auto max-h-[100vh] pt-px overflow-auto xl:overflow-visible  xl:left-auto -left-full top-0 z-20 transition-all ">
                        <div className=" flex justify-between items-center xl:hidden px-6 bg-violet-900 ">
                          {Data.mid_bar && Data.mid_bar.map((mid_bar_item, index) => {
                            return (
                              <React.Fragment key={index}>
                                <div className="logo py-2 self-center ">
                                  {mid_bar_item.logo && mid_bar_item.logo.map((item, index) => {
                                    return (
                                      <Link key={index} href={item.slug}><img src={item.img} width={290} height={30} alt={item.alt} title="main-logo" className="white-img m-auto w-[190px] xl:w-[210px]  w-[180px]" /></Link>
                                    )
                                  })}
                                </div>
                              </React.Fragment>
                            )
                          })}
                          <button name="close" onClick={() => toggleClass()} className="text-green-900 text-[22px] py-3" aria-label="Close">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className='fill-none stroke stroke-[1.5px] stroke-white'> <path d="M18 6L6 18" /><path d="M6 6L18 18" /></svg>
                          </button>
                        </div>
                 
                        <ul className="main-nav group white large-screen  w-full xl:flex items-center justify-end">
                          {Data.mega_menu.main_nav && Data.mega_menu.main_nav.map((sub_menu_column, index) => {
                            let class_name = 'md:py-10 py-6 mega-menu  xl:shadow-xl bg-blue-800 hidden xl:group-hover/item:block xl:absolute w-full left-0 z-10 bg-violet-400 top-full '
                            if (sub_menu_column.class) {
                              class_name = sub_menu_column.class
                            }
                            let li_class = ' group/item flex xl:flex-nowrap flex-wrap items-center xl:border-b-2 border-transparent xl:border-t-0 border-t border-t-gray-900/10  xl:hover:border-black transition-all'
                            if (sub_menu_column.li_class) {
                              li_class = sub_menu_column.li_class
                            }
                            return (
                              
                              <React.Fragment key={index}>
                                <li className={li_class}>
                                  <Link to={sub_menu_column.slug} className="xl:text-gray-800 text-gray-800 xl:inline-block w-auto grow flex justify-between items-center text-md 1xl:text-[14px] xl:text-[13px] 2xl:text-[15px] uppercase px-6 py-4 xl:py-8">
                                    {sub_menu_column.title}
                                  </Link>

                                </li>
                              </React.Fragment>
                            )
                          })}
                        </ul>
                      </nav>
                    </div>
                    <div className="right-content 2xl:px-6 1xl:px-[1%] px-1  xl:w-auto w-1/4">
               
                      <ul className="flex items-center justify-end lg:mr-0 lg:ml-0 mr-1.5 md:-mr-1.5 lg:pl-3">
                          {mid_bar_item.mid_bar_right && mid_bar_item.mid_bar_right.map((right_item, index) => {
                           
                                return (
                                  <li key={index} className="mr-1 last:mr-0 sm:mr-3 lg:mr-6 cart-items"><Link to={right_item.slug} className={right_item.class2}> <img src={right_item.img} width={22} height={22} alt={right_item.alt} title={right_item.title} className=" sm:mr-1.5 sm:w-[22px] w-[18px] header-icons" />{right_item.label}</Link></li>
                                )
                              
                          })}
                        </ul>

                    </div>
                  </React.Fragment>
                )
              })}
            </div>
          </React.Fragment>
        )
      })}
    </div>
  )
}

export default Header