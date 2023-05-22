import { FunctionComponent } from "react";
import { IProduct } from "../../interfaces/product";
import Loading from "../UI/Loading";
import TopProduct from "./TopProduct";
import useAppQuery from "../../hooks/useAppQuery";
import { useAppMutation } from "../../hooks/useAppMutation";

interface ICheckItem {
  _id: string;
  price: number;
}

const TopProducts: FunctionComponent = () => {
  const {} = useAppQuery('*[_type == "product"]{price,_id}', {
    onSuccess(data: ICheckItem[]) {
      const minEl1 = data.find(
        (item: ICheckItem) =>
          item.price === Math.min(...data.map((item: ICheckItem) => item.price))
      );
      const minEl2 = data.find(
        (item: ICheckItem) =>
          item.price ===
          Math.min(
            ...data
              .map((item: any) => item.price)
              .filter((price: number) => price !== minEl1?.price)
          )
      );
      const minEl3 = data.find(
        (item: ICheckItem) =>
          item.price ===
          Math.min(
            ...data
              .map((item: ICheckItem) => item.price)
              .filter(
                (price: number) =>
                  ![minEl1?.price, minEl2?.price].includes(price)
              )
          )
      );
      mutate({
        body: "",
        url: `*[_type == 'product' && _id == '${minEl1?._id}' || _id == '${minEl2?._id}' || _id == '${minEl3?._id}']`,
      });
    },
  });

  const {
    mutate,
    data = [],
    isLoading: loading,
  } = useAppMutation<IProduct[]>('*[_type == "product"]', "get");

  return (
    <>
      <div className="py-7">
        <h3 className="text-3xl font-medium">Top price</h3>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <div className="grid grid-cols-3 items-center gap-5 w-full">
          {data?.map((item: IProduct, index: number) => (
            <TopProduct item={item} key={index} />
          ))}
        </div>
      )}
    </>
  );
};

export default TopProducts;
