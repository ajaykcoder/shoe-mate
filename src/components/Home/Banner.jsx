import React from "react";
import {LazyLoadImage} from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Banner = () => {
    return (
        <div className="w-full px-5 bg-gradient-to-r to-darkBlue from-blue h-lvh flex items-center">
            <div className="w-[1440px] max-w-full mx-auto flex items-center gap-x-6">
                <div className="flex-1 flex flex-col justify-center">
                    <h1 className="text-white">
                        <span className="text-3xl font-semibold text-white inline-block mb-2">Exclusive</span><br/>
                        <span className="text-6xl font-bold text-darkBlue inline-block">Footwear</span><br/>
                        <span className="text-3xl font-semibold text-white inline-block mt-2">Limited Edition</span>
                    </h1>
                    <div className="text-base text-black mt-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</div>
                    <a href="/" className="text-base font-medium bg-darkBlue text-white h-10 px-6 rounded-md flex items-center justify-center w-max cursor-pointer transition duration-[.2s] mt-4">Shop Now</a>
                </div>
                <div className="flex-1">
                    <LazyLoadImage className="flex" src="/assets/images/banner2.png" alt="Banner" effect="blur"/>
                </div>
            </div>
        </div>
    )
}
export default Banner;