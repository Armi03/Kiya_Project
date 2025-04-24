import React, { useEffect, useState } from 'react';
import { FeaturedBox, Store_slider, Hero_Slider, TrendProduct_Slide, InstaFeed } from '../src/Sections/index.jsx'
import { useFetchData } from '../src/comman/index.jsx';
import Header from '../src/components/Header.jsx';
import Footer from '../src/components/Footer.jsx';
import Gallery from '../src/Sections/Product_filter/filter_data.jsx';

export default function Home() {
  const { data: hero_data } = useFetchData("json/data/Hero_Home.json");
  const { data: trending_products } = useFetchData("json/data/Trending_product_data.json");
  const { data: featured_data } = useFetchData("json/data/Featured_box_h.json");
  const { data: product_tabs } = useFetchData("json/data/FilterTabs_products.json");
  const { data: store_slider } = useFetchData("json/data/Store_slider.json");
  const { data: instafeeds } = useFetchData("json/data/InstaFeed.json");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <>
      <Header />
      <Hero_Slider initialValues={hero_data} isLoading={isLoading} />
      <TrendProduct_Slide initialValues={trending_products} isLoading={isLoading} />
      <FeaturedBox initialValues={featured_data} isLoading={isLoading} />
      <Gallery initialValues={product_tabs} />
      <Store_slider initialValues={store_slider} isLoading={isLoading} />
      <InstaFeed initialValues={instafeeds} isLoading={isLoading} />
      <Footer />
    </>
  );
}
