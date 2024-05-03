import React from "react";
import FrontendLayout from "components/Layout/Frontend/FrontendLayout";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Filters from "components/Products/Filters";
import product from "db/product";
import Quantity from "components/Products/Quantity";
import "react-lazy-load-image-component/src/effects/blur.css";

const Product = () => {
    return (
        <FrontendLayout page="products">
            <div className="w-full py-20 px-5">
                <div className="w-[1440px] max-w-full mx-auto">
                    <div className="text-darkBlue text-2xl font-semibold text-center mb-10">All Products</div>
                    <Filters/>
                    <div className="flex flex-wrap gap-10">
                        {product && product.length > 0 && product.map((product) => (
                            <div key={product.id} className="group/card w-[calc(25%-30px)]">
                                <div className="relative overflow-hidden">
                                    <img className="flex w-full group/image group-hover/card:scale-110 transition duration-[.2s] cursor-pointer select-none" src={product.images[0].picture} alt={product.name}/>
                                    {product.images && product.images.length > 0 && (
                                        <div className="group/variant invisible group-hover/card:visible flex flex-wrap gap-1 justify-center absolute bottom-3 left-0 right-0 transition duration-[.9s]">
                                            {product.images.map((image,index) => (
                                                <button key={index} className="flex cursor-pointer rounded-md overflow-hidden border border-border hover:border-blue">
                                                    <LazyLoadImage className="flex w-10 h-10 object-cover" src={image.picture} alt={product.name} effect="blur"/>
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                    <button className="absolute top-5 right-5 cursor-pointer">
                                        <svg viewBox="0 0 24 24" width="24" height="24" className="fill-darkBlue"><g><path d="M17.5.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 7.967c0 6.775 10.956 14.6 11.422 14.932l.578.409.578-.409C13.044 22.569 24 14.742 24 7.967a6.8 6.8 0 0 0-6.5-7.05ZM12 20.846c-3.253-2.43-10-8.4-10-12.879a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05h2a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05c0 4.481-6.747 10.449-10 12.879Z"></path></g></svg>
                                    </button>
                                </div>
                                <div className="p-5 border-x border-b border-borderLight">
                                    <div>
                                        <div className="text-base text-nowrap text-ellipsis overflow-hidden cursor-pointer">{product.name}</div>
                                        <div>₹{product.price}</div>
                                        <div className="flex items-center justify-center gap-x-2 mt-4">
                                            <Quantity product={product}/>
                                            <button className="text-base font-medium bg-darkBlue hover:bg-blue text-white h-10 px-4 rounded-md flex items-center justify-center w-max cursor-pointer transition duration-[.2s] select-none">Add to Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
export default Product;