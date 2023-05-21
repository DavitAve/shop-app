import { FunctionComponent } from "react";
import { IProduct } from "../../interfaces/product";
import useAppQuery from "../../hooks/useAppQuery";
import Loading from "../UI/Loading";
import { Link } from "react-router-dom";
import { urlFor } from "../../../lib/client";

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
        <div className="flex gap-5 items-center justify-start py-6 px-10">
          {data?.map((product: IProduct, index: number) => (
            <div key={index} className="w-[240px] bg-[#eee]">
              <Link
                to={"/products/" + product._id}
                className="w-full similar-item"
              >
                <div className="h-[320px] relative similar-item-img">
                  <img
                    src={urlFor(product.image[0].asset._ref)}
                    className="ibg"
                    alt=""
                  />
                </div>
                <div className="flex items-center py-3 justify-between px-3">
                  <h2 className="font-semibold">{product.name}</h2>
                  <span>{product.price}$</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SimilaryProducts;
