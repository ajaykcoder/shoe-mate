import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-darkBlue pt-20 px-5 box-border">
        <div className="w-[1440px] max-w-full mx-auto box-border">
            <div className="flex gap-x-3">
                <div className="w-[400px]">
                    <a href="/" className="text-2xl mb-2 flex text-blue">shoe.mate</a>
                    <div className="text-white text-sm leading-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</div>
                </div>
                <div className="flex flex-wrap flex-1 justify-between gap-14">
                    <div className="">
                        <div className="text-white text-xl mb-3">Links</div>
                        <ul className="flex flex-col gap-y-2">
                            <li><a href="/" className="text-sm text-white hover:text-blue">Link 1</a></li>
                            <li><a href="/" className="text-sm text-white hover:text-blue">Link 2</a></li>
                            <li><a href="/" className="text-sm text-white hover:text-blue">Link 3</a></li>
                            <li><a href="/" className="text-sm text-white hover:text-blue">Link 4</a></li>
                            <li><a href="/" className="text-sm text-white hover:text-blue">Link 5</a></li>
                        </ul>
                    </div>
                    <div className="">
                        <div className="text-white text-xl mb-3">Category</div>
                        <ul className="flex flex-col gap-y-2">
                            <li><a href="/" className="text-sm text-white hover:text-blue">Category 1</a></li>
                            <li><a href="/" className="text-sm text-white hover:text-blue">Category 2</a></li>
                            <li><a href="/" className="text-sm text-white hover:text-blue">Category 3</a></li>
                            <li><a href="/" className="text-sm text-white hover:text-blue">Category 4</a></li>
                        </ul>
                    </div>
                    <div className="w-[380px]">
                        <div className="text-white text-xl mb-3">Newsletter</div>
                        <div className="relative">
                            <input type="text" className="border border-blue bg-transparent h-14 w-full focus:outline-none outline-green pl-4 pr-[134px] text-text"/>
                            <button className="text-base h-10 text-white bg-darkBlue hover:bg-blue px-6 absolute right-2 top-2">Subscribe</button>
                        </div>
                        <div className="flex gap-x-2 mt-4">
                            <a href="/" className="h-10 w-10 bg-blue flex items-center justify-center rounded-full hover:bg-blue" target="_blank"><svg className="fill-white" viewBox="0 0 9.047 16.801" width="18" height="18"><path d="M2.547,9.592H1.409c-.312,0-.63.005-.942,0-.328-.005-.438-.1-.438-.432-.005-.854-.005-1.714,0-2.568.005-.323.12-.427.443-.427.608-.005,1.215,0,1.823,0h.252V5.913c.016-.777-.016-1.56.049-2.338A3.691,3.691,0,0,1,6.248.127C7.053.1,7.858.116,8.668.116c.285,0,.4.115.4.4.005.8.005,1.6,0,2.4,0,.307-.109.416-.422.427-.553.011-1.106.011-1.659.022-.619.011-.881.252-.892.865s-.005,1.243-.005,1.889H8.444c.443,0,.547.1.547.542V9.1c0,.367-.1.46-.465.465-.8.005-1.6,0-2.436,0v6.69c0,.591-.06.651-.662.651H3.073c-.422,0-.52-.1-.52-.52V9.86C2.547,9.778,2.547,9.7,2.547,9.592Z" transform="translate(-0.025 -0.111)"></path></svg></a>
                            <a href="/" className="h-10 w-10 bg-blue flex items-center justify-center rounded-full hover:bg-blue" target="_blank"><svg className="fill-white" viewBox="0 0 24 24" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg></a>
                            <a href="/" className="h-10 w-10 bg-blue flex items-center justify-center rounded-full hover:bg-blue" target="_blank"><svg className="fill-white" viewBox="0 0 16 15.972" width="18" height="18"><g><path id="Path_63" data-name="Path 63" d="M12.343,15.947H3.657c-.042-.008-.079-.021-.121-.029A3.865,3.865,0,0,1,.212,13.236,7.836,7.836,0,0,1,0,12.3V3.629c.008-.046.025-.087.029-.133A3.935,3.935,0,0,1,3.907-.016q4.1-.019,8.2,0A3.91,3.91,0,0,1,15.78,2.663,9.544,9.544,0,0,1,16,3.629V12.3c-.008.046-.025.087-.029.133a3.925,3.925,0,0,1-2.833,3.353C12.876,15.86,12.605,15.893,12.343,15.947ZM14.4,7.958c0-1.325,0-2.649,0-3.974a2.342,2.342,0,0,0-2.354-2.4Q8,1.561,3.957,1.58A2.334,2.334,0,0,0,1.6,3.933q-.019,4.03,0,8.061a2.324,2.324,0,0,0,2.349,2.354q4.043.019,8.09,0a2.3,2.3,0,0,0,1.425-.479,2.337,2.337,0,0,0,.933-1.937C14.405,10.607,14.4,9.282,14.4,7.958Z" transform="translate(0 0)"></path><path d="M104,99.895a4,4,0,1,1-3.991-3.995A3.958,3.958,0,0,1,104,99.895Zm-1.6,0a2.4,2.4,0,1,0-2.408,2.4A2.364,2.364,0,0,0,102.4,99.891Z" transform="translate(-92.001 -91.929)"></path><path d="M269.692,76.787a.8.8,0,1,1-.821.766A.8.8,0,0,1,269.692,76.787Z" transform="translate(-257.67 -73.611)"></path></g></svg></a>
                            <a href="/" className="h-10 w-10 bg-blue flex items-center justify-center rounded-full hover:bg-blue" target="_blank"><svg className="fill-white" viewBox="0 0 24 24" width="20" height="20"><path d="M6.94048 4.99993C6.94011 5.81424 6.44608 6.54702 5.69134 6.85273C4.9366 7.15845 4.07187 6.97605 3.5049 6.39155C2.93793 5.80704 2.78195 4.93715 3.1105 4.19207C3.43906 3.44699 4.18654 2.9755 5.00048 2.99993C6.08155 3.03238 6.94097 3.91837 6.94048 4.99993ZM7.00048 8.47993H3.00048V20.9999H7.00048V8.47993ZM13.3205 8.47993H9.34048V20.9999H13.2805V14.4299C13.2805 10.7699 18.0505 10.4299 18.0505 14.4299V20.9999H22.0005V13.0699C22.0005 6.89993 14.9405 7.12993 13.2805 10.1599L13.3205 8.47993Z"></path></svg></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center pt-10 pb-12 text-white">Copyright &copy; {new Date().getFullYear()} <a href="/"><span className="text-blue">Shoe Mate</span></a> | All rights Reserved.</div>
        </div>
    </div>
    )
}
export default Footer;