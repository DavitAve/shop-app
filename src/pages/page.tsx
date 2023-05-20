import { useEffect } from "react";
import { client } from "../../lib/client";
const HomePage = () => {
  const getData = async () => {
    const data = await client.fetch("*[_type == 'product'] ");
    console.log({ data });
  };

  useEffect(() => {
    getData();
  }, []);
  return <div>Home page</div>;
};

export default HomePage;
