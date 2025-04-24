import React, { useEffect } from 'react';
import Header from './components/Header'; 
import { Link } from 'react-router-dom';
import Footer from './components/Footer';
import { Breadcrumb_pages, useFetchData } from './comman';
import { Related_Product, Product_Detail_v2 } from './Sections';
import { Skeleton } from '@heroui/react';

export default function Single_shop() {

  /*  ============= Skeletone_loader ============   */

  const [isLoading, setIsLoading] = React.useState(true);
  const { data: product_data } = useFetchData("json/data/ProductData.json");
  const { data } = useFetchData("json/data/ProductData.json");
  const { data: related_products } = useFetchData("json/data/Related_products.json");

  const breadcrumbItems = [
    { title: 'Shop', url: `/shop`, type: true },
    { title: 'single-shop', url: `/`, type: false },
  ];

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);


  return (
    <>
      <Header />
      <Breadcrumb_pages breadcrumbItems={breadcrumbItems} />

      {/*  ===== product gallery and details ===== */}
      <div className='flex items-stretch 2xl:gap-12 gap-6 container 2xl:pt-24 xl:pt-16 pt-12 xl:flex-nowrap flex-wrap'>
        <div className='xl:w-1/2 w-full'>
          {isLoading ? (
            <div className='grid grid-cols-2 lg:gap-4 gap-2 h-full'>
              <Skeleton className='2xl:h-[450px] lg:h-[400px] sm:h-[300px] h-[200px]' />
              <Skeleton className='2xl:h-[450px] lg:h-[400px] sm:h-[300px] h-[200px]' />
              <Skeleton className='2xl:h-[450px] lg:h-[400px] sm:h-[300px] h-[200px]' />
              <Skeleton className='2xl:h-[450px] lg:h-[400px] sm:h-[300px] h-[200px]' />
          </div>
          ) : (
            <div className='grid grid-cols-2 lg:gap-4 gap-2 h-full'>
              {data.length > 0 && data[0].gallery_imgs.map((item, index) => {
                return (
                  <div key={index} className='bg-violet-400 flex items-center justify-center sm:min-h-[300px] min-h-[200px]'>
                    <img src={item.img} width="500" height="200" alt={item.alt} className='lg:max-w-[80%] sm:max-w-[60%] max-w-[80%] mx-auto' />
                  </div>
                )
              })}
            </div>
          )}
        </div>
        <div className='xl:w-1/2 w-full'>
          <Product_Detail_v2 initialValues={product_data} />
        </div>
      </div>
      <Related_Product initialValues={related_products} />
      <Footer />
    </>
  )
}



