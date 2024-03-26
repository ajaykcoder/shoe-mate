import React from "react";
import FrontendLayout from "components/Layout/Frontend/FrontendLayout";
import Banner from "components/Home/Banner";
import Products from "components/Home/Products";

const Home = () => {
    return (
        <FrontendLayout>
            <Banner/>
            <Products/>
        </FrontendLayout>
    );
}
export default Home;