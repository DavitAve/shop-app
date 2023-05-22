import { FunctionComponent } from "react";
import { IProduct } from "../../interfaces/product";
import { Link } from "react-router-dom";
import { urlFor } from "../../../lib/client";

const SimilaryProd: FunctionComponent<{ product: IProduct }> = ({
  product,
}) => {
  return (
    <div className="w-[240px] bg-[#eee]">
      <Link to={"/products/" + product._id} className="w-full similar-item">
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
  );
};

export default SimilaryProd;
