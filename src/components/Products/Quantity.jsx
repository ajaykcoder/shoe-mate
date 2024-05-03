import React,{useState} from "react";

const Quantity = ({product}) => {
    const [quantities, setQuantities] = useState({});
    const handleQuantity = (productId, type) => {
        const currentQuantity = quantities[productId] || 0;
        let newQuantity;
        if(type === "increment"){
            newQuantity = currentQuantity < 99 ? currentQuantity + 1 : 99;
        }else{
            newQuantity = currentQuantity > 1 ? currentQuantity - 1 : 1;
        }
        setQuantities({...quantities, [productId]: newQuantity});
    };
    return (
        <div className="flex items-center gap-x-3 text-base font-mediu text-darkBlue border border-darkBlue h-10 px-4 rounded-md cursor-pointer">
            <button onClick={() => handleQuantity(product.id, "decrement")}><svg viewBox="0 0 512 512" className="fill-darkBlue w-3 h-3"><g><path d="M490.667 234.667H21.333C9.551 234.667 0 244.218 0 256c0 11.782 9.551 21.333 21.333 21.333h469.333c11.782 0 21.333-9.551 21.333-21.333.001-11.782-9.55-21.333-21.332-21.333z"></path></g></svg></button>
            <span className="select-none">{quantities[product.id] || 0}</span>
            <button onClick={() => handleQuantity(product.id, "increment")}><svg viewBox="0 0 24 24" className="fill-darkBlue w-3 h-3"><g><path d="M23 11H13V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v10H1a1 1 0 0 0-1 1 1 1 0 0 0 1 1h10v10a1 1 0 0 0 1 1 1 1 0 0 0 1-1V13h10a1 1 0 0 0 1-1 1 1 0 0 0-1-1Z"></path></g></svg></button>
        </div>
    );
}
export default Quantity;