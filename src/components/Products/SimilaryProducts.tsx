import { FunctionComponent } from "react";
import { IProduct } from "../../interfaces/product";
import useAppQuery from "../../hooks/useAppQuery";
import Loading from "../UI/Loading";
import SimilaryProd from "./SimilaryProd";

const SimilaryProducts: FunctionComponent<{
  product: IProduct | undefined;
}> = ({ product }) => {
  const { data, isLoading } = useAppQuery<IProduct[]>(
    `*[_type == "product" && _id != "${product?._id}" && model == "${
      product?.model || "shirt"
    }" && gender == "${product?.gender}"]`
  );

  return (
    <>
      <h3 className="text-3xl pt-10">Similary Products</h3>
      {isLoading ? (
        <Loading />
      ) : (
        <div
          className={`flex gap-5 items-center py-9 pb-6 ${
            data && data?.length > 1 ? "justify-center" : "justify-start"
          }`}
        >
          {data?.map((product: IProduct, index: number) => (
            <SimilaryProd key={index} product={product} />
          ))}
        </div>
      )}
    </>
  );
};

export default SimilaryProducts;
