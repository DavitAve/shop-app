import React from "react";
import { client } from "../../../lib/client";

const HomeMain: React.FunctionComponent = () => {
  const getData = async () => {
    const data = await client.fetch("*[_type == 'product'] ");
    console.log({ data });
  };
  return <div>Home page</div>;
};

export default HomeMain;
