import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const FrontendLayout = (props) => {
    return (
        <div>
            <Header/>
                {/* {props.children}
            <Footer/> */}
        </div>
    )
}
export default FrontendLayout;