import React from "react";
import {Link} from "react-router-dom";

const Header = ({page}) => {
    console.log(page);
    return (
        <div className={`w-full py-6 px-5 ${page === `home` ? `absolute` : `relative bg-gradient-to-r to-darkBlue from-blue`}`}>
            <div className="w-[1440px] max-w-full mx-auto flex justify-between items-center gap-x-3">
                <div className="w-40">
                    <Link to={"/"} className="text-3xl font-semibold text-white hover:text-darkBlue transition duration-[.2s]">shoe.mate</Link>
                </div>
                <div className="flex items-center gap-x-8">
                    <Link to={"/"} className="text-base font-medium text-white transition duration-[.2s]">Home</Link>
                    <Link to={"/about-us"} className="text-base font-medium text-white transition duration-[.2s]">About</Link>
                    <Link to={"/products"} className="text-base font-medium text-white transition duration-[.2s]">Products</Link>
                    <Link to={"/contact-us"} className="text-base font-medium text-white transition duration-[.2s]">Contact</Link>
                    <Link to={"/login"} className="text-base font-medium text-white transition duration-[.2s]">Login</Link>
                </div>
                <div className="flex items-center gap-x-4 w-40 justify-end">
                    <button className="relative" type="button">
                        <svg viewBox="0 0 24 24" width="30" height="30" className="fill-white"><path d="M22.713,4.077A2.993,2.993,0,0,0,20.41,3H4.242L4.2,2.649A3,3,0,0,0,1.222,0H1A1,1,0,0,0,1,2h.222a1,1,0,0,1,.993.883l1.376,11.7A5,5,0,0,0,8.557,19H19a1,1,0,0,0,0-2H8.557a3,3,0,0,1-2.82-2h11.92a5,5,0,0,0,4.921-4.113l.785-4.354A2.994,2.994,0,0,0,22.713,4.077ZM21.4,6.178l-.786,4.354A3,3,0,0,1,17.657,13H5.419L4.478,5H20.41A1,1,0,0,1,21.4,6.178Z"/><circle cx="7" cy="22" r="2"/><circle cx="17" cy="22" r="2"/></svg>
                        <div className="bg-red text-white text-[10px] w-[20px] h-[20px] overflow-hidden rounded-full flex items-center justify-center absolute -top-2 -right-2">0</div>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Header;