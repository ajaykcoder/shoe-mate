import React from "react";
import FrontendLayout from "components/Layout/Frontend/FrontendLayout";

const Login = () => {
    return (
        <FrontendLayout page="login">
            <div className="py-[250px]">
                <h1 className="text-darkBlue text-3xl font-semibold text-center">Login</h1>
            </div>
        </FrontendLayout>
    );
}
export default Login;