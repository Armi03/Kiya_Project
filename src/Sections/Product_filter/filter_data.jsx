import React, { useState, useEffect } from "react";
import { Card_Product } from '../../comman';
import { Link } from "react-router-dom";

const Gallery = ({ initialValues }) => {
    let items_array = []
    let cat_tabs_array = []
    if(initialValues[0] != undefined){
        items_array = initialValues[0].items
        cat_tabs_array = initialValues[0].items
    }
    const [items, setItems] = useState(items_array);
    const [active, setActive] = useState("all");

    function filterItem(category) {
        setActive(category);
        if(category == 'all'){
            setItems(items_array)
            return;
          }
          const filteredData =  items_array.filter((value)=>{
            return value.category == category;
          })
          setItems(filteredData);
    }

    useEffect(() => {
        if (initialValues[0] !== undefined) {
          setItems(initialValues[0].items);
        }
      }, [initialValues]);

    return (
        <>
            <React.Fragment>
                <div className="container 2xl:pt-24 lg:pt-20 pt-14 overflow-hidden">
                    <h2 className="text-gray-800 2xl:mb-10 mb-4 2xl:text-4xl lg:text-3xl sm:text-1xl text-xl uppercase leading-tight text-center">
                        Featured Products
                    </h2>

                    <ul className="nav nav-pills md:mb-6 text-center">
                        {/* Filter Category Tabs */}
                        {['all', 'Rings', 'Earrings', 'Bracelets', 'Necklaces', 'Diamonds'].map((category, index) => (
                            <li className="nav-item uppercase leading-tight inline-block align-middle after:content-['|'] after:lg:mx-8 after:mx-4 after:inline-block after:align-middle last:after:hidden 2xl:text-lg cursor-pointer py-2 md:text-md text-[15px] text-center text-gray-800" key={index}>
                                <span
                                    className={active === category ? "nav-link font-[600]" : "nav-link active hover:text-violet-900"}
                                    onClick={() => filterItem(category)}
                                >
                                    {category}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="container mt-4">
                    <div className="row">
                        <div className="filter-container card mb-3 grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-x-6 md:gap-y-2 gap-x-4 sm:-mr-4">
                            {items.length > 0 && items.map((item, index) => (
                                <Card_Product initialValues={item} key={index} />
                            ))}
                        </div>
                        <div className="text-center">
                            <Link href="/shop" className="2xl:mt-8 md:mt-4 all-btn text-sm hover:opacity-100 text-white uppercase tracking-[2px] px-6 inline-flex">
                                all product
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                                    <path d="M8 5L13 10L8 15" className="stroke stroke-1.5 stroke-white" />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        </>
    );
};

export default Gallery;
