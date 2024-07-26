import React, {useState, useEffect} from "react";
import axios from "axios";
import {CATEGORY} from "api/ApiConstant";
import "react-lazy-load-image-component/src/effects/blur.css";

const Category = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getCategories();
    }, []);

    const getCategories = async () => {
        try{
            setLoading(true);
            const {data} = await axios.get(`${CATEGORY}?populate=*`);
            if(data.data){
                setCategories(data.data);
            }
        }catch(e){
            console.error("Error Getting Categories :", e);
        }finally{
            setLoading(false);
        }
    };
    let category_id = 1;
    let name = "Sandals & Flip-Flops";
    let image = "http://localhost:1337/uploads/Sandals_and_Flip_Flops_f58c267fb9_2877cc9737.jpg";
    return (
        <div className="w-full py-20 px-5">
            <div className="w-[1440px] max-w-full mx-auto">
                <div className="text-darkBlue text-2xl font-semibold text-center mb-10">Categories</div>
                <div className="flex flex-wrap gap-10">
                    {/* {products && products.length > 0 && products.map((product) => ( */}
                        <div key={category_id} className="group/card w-[calc(25%-30px)] overflow-hidden ">
                            <img className="flex w-full h-[200px] object-cover rounded-[30px] overflow-hidden" src={image} alt={name} />
                            <div className="text-base text-darkBlue mt-2 text-center">{name}</div>
                        </div>
                    {/* ))} */}
                </div>
            </div>
        </div>
    );
};
export default Category;