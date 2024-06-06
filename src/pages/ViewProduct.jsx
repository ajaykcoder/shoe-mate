import React,{useState} from "react";
import FrontendLayout from "components/Layout/Frontend/FrontendLayout";
import {LazyLoadImage} from "react-lazy-load-image-component";
import StarRating from "components/Products/StarRating";
import Quantity from "components/Products/Quantity";
import "react-lazy-load-image-component/src/effects/blur.css";

const ViewProduct = () => {
    const product = {
        id: 1,
        name: "Samba OG Shoes",
        price: "10999",
        isFavorite: 0,
        rating: 1.6,
        slug: "PRO11020244237",
        picture: "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Samba_OG_Shoes_White_B75806_01_standard.jpg"
    };
    return (
        <FrontendLayout>
            <div className="w-full py-20 px-5">
                <div className="w-[1440px] max-w-full mx-auto flex gap-x-10">
                    <div className="w-1/2">
                        <LazyLoadImage className="flex" src={product.picture} alt="Samba OG Shoes" effect="blur"/>
                    </div>
                    <div className="w-1/2">
                        <div className="text-2xl font-semibold text-darkBlue mb-3">{product.name}</div>
                        <StarRating rating={product.rating}/>
                        <div className="mt-3 mb-3 text-sm text-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters</div>
                        <div className="flex gap-x-3">
                            <Quantity product={product}/>
                            <button className="text-base font-medium bg-darkBlue hover:bg-blue text-white h-10 px-4 rounded-md flex items-center justify-center w-max cursor-pointer transition duration-[.2s] select-none">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </FrontendLayout>
    );
}
export default ViewProduct;