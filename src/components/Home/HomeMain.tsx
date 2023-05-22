import React from "react";
import TopProducts from "./TopProducts";
import AllProducts from "../Products/AllProducts";

const HomeMain: React.FunctionComponent = () => {
  return (
    <>
      <div className="def-container">
        <div>
          <h2>Home page</h2>
        </div>
        <TopProducts />
        <AllProducts />
      </div>
    </>
  );
};

export default HomeMain;
