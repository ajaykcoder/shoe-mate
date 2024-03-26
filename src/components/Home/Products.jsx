import React from "react";
import product from "db/product";

const Products = () => {
    console.log(product);
    return (
        <div className="w-full py-20 px-5">
            <div className="w-[1440px] max-w-full mx-auto">
                <div className="text-primary text-2xl font-semibold text-center mb-10">Products</div>
                <div className="flex flex-wrap gap-10">
                    {product && product.length > 0 && product.map((product) => (
                        <div className="w-[calc(25%-30px)]">
                            <div className="relative">
                                <img className="flex w-full" src={product.images[0].picture} alt={product.name}/>
                                {product.images && product.images.length > 0 && (
                                    <div className="flex flex-wrap gap-1 justify-center absolute bottom-3 left-0 right-0">
                                        {product.images.map((image,index) => (
                                            <button key={index} className="cursor-pointer rounded-md overflow-hidden border border-border">
                                                <img className="flex w-10 h-10 object-cover" src={image.picture} alt={product.name}/>
                                            </button>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className=" p-5">
                                <div>
                                    <div className="text-base text-nowrap text-ellipsis overflow-hidden">{product.name}</div>
                                    <div>₹{product.price}</div>
                                    <div className="flex items-center justify-between gap-x-2">
                                        <button className="text-base font-medium bg-primary hover:bg-secondary text-white h-10 px-4 rounded-md flex items-center justify-center w-max cursor-pointer transition duration-[.2s] mt-3">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
export default Products;




{/* <div>
    <button>
        <svg viewBox="0 0 24 24" width="24" height="24"><g><path d="M23.271 9.419C21.72 6.893 18.192 2.655 12 2.655S2.28 6.893.729 9.419a4.908 4.908 0 0 0 0 5.162C2.28 17.107 5.808 21.345 12 21.345s9.72-4.238 11.271-6.764a4.908 4.908 0 0 0 0-5.162Zm-1.705 4.115C20.234 15.7 17.219 19.345 12 19.345S3.766 15.7 2.434 13.534a2.918 2.918 0 0 1 0-3.068C3.766 8.3 6.781 4.655 12 4.655s8.234 3.641 9.566 5.811a2.918 2.918 0 0 1 0 3.068Z" fill="#000000" opacity="1" data-original="#000000" class=""></path><path d="M12 7a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5Zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z"></path></g></svg>
    </button>
    <button>
        <svg viewBox="0 0 24 24" width="24" height="24"><g><path d="M17.5.917a6.4 6.4 0 0 0-5.5 3.3 6.4 6.4 0 0 0-5.5-3.3A6.8 6.8 0 0 0 0 7.967c0 6.775 10.956 14.6 11.422 14.932l.578.409.578-.409C13.044 22.569 24 14.742 24 7.967a6.8 6.8 0 0 0-6.5-7.05ZM12 20.846c-3.253-2.43-10-8.4-10-12.879a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05h2a4.8 4.8 0 0 1 4.5-5.05 4.8 4.8 0 0 1 4.5 5.05c0 4.481-6.747 10.449-10 12.879Z"></path></g></svg>
    </button>
</div> */}