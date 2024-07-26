import React from "react";
import FrontendLayout from "components/Layout/Frontend/FrontendLayout";
import Banner from "components/Home/Banner";
import Category from "components/Home/Category";
import Products from "components/Home/Products";

const Home = () => {
    return (
        <FrontendLayout page="home">
            <Banner/>
            <Category/>
            <Products/>
        </FrontendLayout>
    );
}
export default Home;