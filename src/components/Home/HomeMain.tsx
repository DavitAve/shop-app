import React from "react";
import useAppQuery from "../../hooks/useAppQuery";
import { useAppMutation } from "../../hooks/useAppMutation";

const HomeMain: React.FunctionComponent = () => {
  const {} = useAppQuery('*[_type == "product"]{price,_id}', {
    onSuccess(data: any) {
      const minEl1 = data.find(
        (item: any) =>
          item.price === Math.min(...data.map((item: any) => item.price))
      );
      const minEl2 = data.find(
        (item: any) =>
          item.price ===
          Math.min(
            ...data
              .map((item: any) => item.price)
              .filter((price: number) => price !== minEl1.price)
          )
      );
      const minEl3 = data.find(
        (item: any) =>
          item.price ===
          Math.min(
            ...data
              .map((item: any) => item.price)
              .filter(
                (price: number) => ![minEl1.price, minEl2.price].includes(price)
              )
          )
      );
      mutate({
        body: "",
        url: `*[_type == 'product' && _id == '${minEl1._id}' || _id == '${minEl2._id}' || _id == '${minEl3._id}']`,
      });
    },
  });
  const { mutate } = useAppMutation('*[_type == "product"]', "get", {
    onSuccess: (data: any) => {},
  });

  return <div>Home page</div>;
};

export default HomeMain;
