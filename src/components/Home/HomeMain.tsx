import React from "react";
import TopProducts from "./TopProducts";

const HomeMain: React.FunctionComponent = () => {
  return (
    <>
      <div className="def-container">
        <div>
          <h2>Home page</h2>
        </div>
        <TopProducts />
      </div>
    </>
  );
};

export default HomeMain;
