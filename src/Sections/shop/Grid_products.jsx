import React, { useEffect, useState } from 'react';
import ProductsWithColors from '../../comman/ProductWithColors';


const Grid_Product = ({ initialValues }) => {

    /*  ============= Skeletone_loader ============   */
    const [isLoading, setIsLoading] = React.useState(true);
    useEffect(() => {
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return (

        <>
            {initialValues && initialValues.map((data, index) => {
                return (
                    <div className="grid 1xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6" key={index}>
                        {data.products && data.products.map((product, index) => {
                            return (
                                <ProductsWithColors initialValues={product} key={index} />
                            )
                        })}
                    </div>
                )
            })}

        </>

    )
}

export default Grid_Product;