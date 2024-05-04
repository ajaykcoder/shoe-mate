import React,{useState} from "react";
import productData from "db/product";
import {LazyLoadImage} from "react-lazy-load-image-component";
import Quantity from "components/Products/Quantity";
import FavoriteButton from "components/Products/FavoriteButton";
import StarRating from "components/Products/StarRating";
import "react-lazy-load-image-component/src/effects/blur.css";

const Products = () => {
    const [products, setProducts] = useState(productData);
    const toggleFavorite = (productId) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) => product.id === productId ? { ...product, isFavorite: !product.isFavorite } : product )
        );
    };
    return (
        <div className="w-full py-20 px-5">
            <div className="w-[1440px] max-w-full mx-auto">
                <div className="text-darkBlue text-2xl font-semibold text-center mb-10">Products</div>
                <div className="flex flex-wrap gap-10">
                    {products && products.length > 0 && products.map((product) => (
                        <div key={product.id} className="group/card w-[calc(25%-30px)]">
                            <div className="relative overflow-hidden">
                                <img className="flex w-full group/image group-hover/card:scale-110 transition duration-[.2s] cursor-pointer select-none" src={product.images[0].picture} alt={product.name}/>
                                {product.images && product.images.length > 0 && (
                                    <div className="group/variant invisible group-hover/card:visible flex flex-wrap gap-1 justify-center absolute bottom-3 left-0 right-0 transition duration-[.9s]">
                                        {product.images.map((image, index) => (
                                            <button key={index} className="flex cursor-pointer rounded-md overflow-hidden border border-border hover:border-blue">
                                                <LazyLoadImage className="flex w-10 h-10 object-cover" src={image.picture} alt={product.name}effect="blur"/>
                                            </button>
                                        ))}
                                    </div>
                                )}
                                <FavoriteButton product={product} toggleFavorite={() => toggleFavorite(product.id)}/>
                            </div>
                            <div className="p-5 border-x border-b border-borderLight">
                                <div>
                                    <div className="text-base text-nowrap text-ellipsis overflow-hidden cursor-pointer">{product.name}</div>
                                    <div className="flex gap-x-2 items-center justify-between mt-2">
                                        <div>₹{product.price}</div>
                                        <StarRating rating={product.rating}/>
                                    </div>
                                    <div className="flex items-center justify-center gap-x-2 mt-4">
                                        <Quantity product={product} />
                                        <button className="text-base font-medium bg-darkBlue hover:bg-blue text-white h-10 px-4 rounded-md flex items-center justify-center w-max cursor-pointer transition duration-[.2s] select-none">Add to Cart</button>
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